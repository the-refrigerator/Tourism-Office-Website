import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import Lerp from "../utils/lerp.utils.js";
import { LERP_SPEED } from "../Constants.js";
import Threed from "./threed.component.jsx";

function Planet({ orbitControls, planet, startPosition, state, setSingle }) {
  const material = useTexture({
    map: planet.textures.map,
    bumpMap: planet.textures.bumpMap,
    displacementMap: planet.textures.bumpMap,
    emissiveMap: planet.textures.emissiveMap
  });

  const cloudMaterial = useTexture({
    map: planet.textures.overlayMap
  });

  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(-1);
  const [camera, setCamera] = useState(null);

  const cloudsRef = useRef();
  const ref = useRef();
  const lightRef = useRef();
  const temp = useRef();
  const hotspots = useRef([]);
  hotspots.current = [];

  const [targetRadius, setTargetRadius] = useState(planet.radius);
  const [radius, setRadius] = useState(planet.radius);

  const cameraTargetPosition = useRef(new THREE.Vector3());

  useEffect(() => {
    if (focus >= 0) {
      /*const offset = 0;
      const hotspot = planet.hotspots[focus];
      const hotspotLocalPosition = new THREE.Vector3(Math.sin(((hotspot.longtitude + 90 + offset) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * planet.radius, Math.sin((hotspot.latitude * Math.PI) / 180) * planet.radius, Math.cos(((hotspot.longtitude + 90 + offset) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * planet.radius);
      const hotspotPosition = new THREE.Vector3();
      hotspotPosition.addVectors(hotspotLocalPosition, ref.current.position);

      hotspotLocalPosition.normalize();
      hotspotLocalPosition.multiplyScalar(planet.radius + 2);

      const targetPosition = new THREE.Vector3();
      targetPosition.addVectors(hotspotLocalPosition, ref.current.position);

      temp.current.position.set(hotspotPosition.x, hotspotPosition.y, hotspotPosition.z);

      cameraTargetPosition.current = targetPosition;*/

      var distance = 4; // Distance from the center of the sphere
      var latitude = planet.hotspots[focus].latitude;
      var longitude = planet.hotspots[focus].longtitude;

      // Calculate spherical coordinates
      var phi = Math.PI / 2 - latitude;
      var theta = longitude;

      // Convert spherical coordinates to Cartesian coordinates
      var x = distance * Math.sin(phi) * Math.cos(theta);
      var y = distance * Math.cos(phi);
      var z = distance * Math.sin(phi) * Math.sin(theta);

      cameraTargetPosition.current = new THREE.Vector3(x, y, z);
    }
  }, [focus, planet, camera]);

  const planetPosition = new THREE.Vector3();
  useFrame((frame, delta) => {
    if (camera != frame.camera) {
      setCamera(frame.camera);
    }
    if (focus >= 0) {
      frame.camera.position.lerp(cameraTargetPosition.current, delta * 5);
      frame.camera.lookAt(ref.current.position);

      const difference = new THREE.Vector3();
      difference.subVectors(frame.camera.position, cameraTargetPosition.current);
      if (Math.abs(difference.x) < 0.05 && Math.abs(difference.y) < 0.05 && Math.abs(difference.z) < 0.05) {
        setFocus(-1);
      }
    }

    setRadius(Lerp(radius, targetRadius, delta * 10));

    if (state.includes("-library-")) {
      setShow(true);
      ref.current.rotation.set(0, state.includes("-focus-") ? ref.current.rotation.y + 0.005 : 0, 0);
      ref.current.position.lerp(planetPosition.set(ref.current.position.x, 0, state.includes("-focus-") ? 2 : -1), LERP_SPEED);
      if (cloudsRef.current) cloudsRef.current.rotation.set(0, cloudsRef.current.rotation.y + 0.0005, 0);
      lightRef.current.intensity = Lerp(lightRef.current.intensity, state.includes("-focus-") ? 40 : 0, LERP_SPEED);
    } else if (state.includes("-single-")) {
      setShow(true);
      setTargetRadius(planet.radius);
      if (cloudsRef.current) cloudsRef.current.rotation.set(0, cloudsRef.current.rotation.y + 0.0005, 0);
      ref.current.position.lerp(planetPosition.set(ref.current.position.x, ref.current.position.y, 3), LERP_SPEED);
    } else if (state.includes("-off-") && show) {
      if (Math.abs(ref.current.position.y - 15) < 0.1) {
        setShow(false);
        lightRef.intensity = 0;
      } else {
        ref.current.position.lerp(planetPosition.set(ref.current.position.x, 15, ref.current.position.z), LERP_SPEED);
      }
    }
  });

  const addToRefs = (el) => {
    if (el && !hotspots.current.includes(el)) {
      hotspots.current.push(el);
    }
  };

  return (
    <mesh>
      <mesh ref={temp} position={[50, 50, 50]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshLambertMaterial color={"green"} />
      </mesh>
      <mesh
        position={startPosition}
        ref={ref}
        onPointerEnter={() => {
          if (state.includes("-library-") && state.includes("-focus-")) {
            setTargetRadius(planet.radius * 1.1);
            document.dispatchEvent(new Event("i-show-select"));
            document.body.style.cursor = "pointer";
          } else if (state.includes("-single-")) {
            document.body.style.cursor = "move";
          }
        }}
        onPointerLeave={() => {
          if (state.includes("-library-") && state.includes("-focus-")) {
            console.log("Pointer exit!");
            setTargetRadius(planet.radius);
            document.dispatchEvent(new Event("i-hide-select"));
            document.body.style.cursor = "default";
          } else if (state.includes("-single-")) {
            document.body.style.cursor = "default";
          }
        }}
        onClick={() => {
          if (state.includes("-library-") && state.includes("-focus-")) {
            setSingle(planet.id);
          }
        }}
      >
        {show && (
          <>
            <mesh>
              <sphereGeometry args={[radius, 64, 64]} />
              <meshPhongMaterial bumpScale={1} displacementScale={0.1} roughness={0.5} {...material} />
            </mesh>
            <mesh ref={cloudsRef}>
              <sphereGeometry args={[1.01 * radius, 64, 64]} />
              <meshPhongMaterial {...cloudMaterial} transparent={true} />
            </mesh>
            {planet.hotspots.map((hotspot, index) => {
              return (
                <mesh
                  ref={addToRefs}
                  onPointerEnter={() => {
                    if (!state.includes("-library-")) {
                      console.log("Pointer enter");
                    }
                  }}
                  onPointerExit={() => {
                    if (!state.includes("-library-")) {
                      console.log("Pointer exit");
                    }
                  }}
                  onClick={() => {
                    if (!state.includes("-library-")) {
                      setFocus(index);
                    }
                  }}
                  key={planet.id + " " + hotspot.longtitude + "-" + hotspot.latitude}
                  position={[Math.sin(((hotspot.longtitude + 90) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * radius, Math.sin((hotspot.latitude * Math.PI) / 180) * radius, Math.cos(((hotspot.longtitude + 90) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * radius]}
                >
                  <sphereGeometry args={[0.1, 32, 32]} />
                  <meshLambertMaterial color={"red"} />
                </mesh>
              );
            })}
          </>
        )}
      </mesh>
      <pointLight ref={lightRef} intensity={0} position={[startPosition[0], startPosition[1], 10]} color={"white"} />
    </mesh>
  );
}

export default Planet;
