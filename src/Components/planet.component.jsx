import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import Lerp from "../utils/lerp.utils.js";
import { LERP_SPEED } from "../Constants.js";
import Threed from "./threed.component.jsx";
import { getHostpotIcon } from "../utils/getHotspotsArt.utils.js";

function Planet({ focus, setFocus, orbitControls, planet, startPosition, state, setSingle }) {
  const material = useTexture({
    map: planet.textures.map,
    bumpMap: planet.textures.bumpMap,
    displacementMap: planet.textures.bumpMap,
    emissiveMap: planet.textures.emissiveMap
  });

  const cloudMaterial = useTexture({
    map: planet.textures.overlayMap
  });

  const [ring] = useTexture([planet.textures.ringMap]); //planet.textures.ringMap
  ring.rotation = Math.PI / 2;

  const [show, setShow] = useState(true);
  //const [focus, setFocus] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [camera, setCamera] = useState(null);

  const cloudsRef = useRef();
  const ref = useRef();
  const lightRef = useRef();
  const hotspots = useRef([]);
  hotspots.current = [];

  const [targetZoom, setTargetZoom] = useState(50);
  const [initialPosition, setInitialPosition] = useState();
  const [targetRadius, setTargetRadius] = useState(planet.radius);
  const [radius, setRadius] = useState(planet.radius);

  const cameraTargetPosition = useRef(new THREE.Vector3(-199, 0, 0));

  useEffect(() => {
    if (focus >= 0 && hotspots.current[focus]) {
      const hotspotPosition = new THREE.Vector3(0, 0, 0);
      hotspotPosition.addVectors(hotspots.current[focus].position, ref.current.position);
      hotspots.current[focus].getWorldPosition(hotspotPosition);

      const direction = new THREE.Vector3(0, 0, 0);
      direction.subVectors(hotspotPosition, ref.current.position);
      direction.normalize();
      direction.multiplyScalar(radius + 2);

      const targetPosition = new THREE.Vector3(0, 0, 0);
      targetPosition.addVectors(direction, ref.current.position);

      cameraTargetPosition.current = targetPosition;
      setTargetZoom(80);
      setInitialPosition(camera.position);
    } else if (focus < 0 && targetZoom != 80) {
      setTargetZoom(80);
    }
  }, [focus, planet, camera, radius, targetZoom]);

  const planetPosition = new THREE.Vector3();
  useFrame((frame, delta) => {
    if (camera != frame.camera) {
      setCamera(frame.camera);
    }

    const difference = new THREE.Vector3();
    if (cameraTargetPosition.current.x != -199) {
      difference.subVectors(frame.camera.position, cameraTargetPosition.current);
    }

    if (cameraTargetPosition.current.x != -199 && !(Math.abs(difference.x) < 0.05 && Math.abs(difference.y) < 0.05 && Math.abs(difference.z) < 0.05)) {
      frame.camera.position.lerp(cameraTargetPosition.current, delta * 2);
      frame.camera.lookAt(ref.current.position);

      if (Math.abs(camera.fov - 80) < 10 && targetZoom == 80) {
        setTargetZoom(50);
      }

      if (Math.abs(camera.fov - targetZoom) > 1) {
        frame.camera.fov = Lerp(frame.camera.fov, targetZoom, delta * 4);
        frame.camera.updateProjectionMatrix();
      }
    } else {
      cameraTargetPosition.current.x = -199;
    }

    if (focus < 0) {
      if (Math.abs(camera.fov - targetZoom) > 1) {
        frame.camera.fov = Lerp(frame.camera.fov, targetZoom, delta * 4);
        frame.camera.updateProjectionMatrix();
      }
    }

    if (Math.abs(radius - targetRadius) > 0.01) {
      setRadius(Lerp(radius, targetRadius, delta * 10));
    }

    if (state.includes("-library-")) {
      setShow(true);
      ref.current.rotation.set(0, state.includes("-focus-") ? ref.current.rotation.y + 0.005 : 0, planet.name.toUpperCase() == "SATURN" ? Math.PI / 7 : 0);
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

  useEffect(() => {
    for (var i = 0; i < hotspots.current.length; i++) {
      const hotspotPosition = new THREE.Vector3();
      hotspots.current[i].getWorldPosition(hotspotPosition);

      const direction = new THREE.Vector3();
      direction.subVectors(hotspotPosition, ref.current.position);
      direction.normalize();

      const euler = new THREE.Euler();
      euler.setFromRotationMatrix(new THREE.Matrix4().lookAt(ref.current.position, hotspotPosition, new THREE.Vector3(0, 1, 0)));

      hotspots.current[i].rotation.copy(euler);
    }
  }, []);

  return (
    <mesh>
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
              <sphereGeometry args={[radius, 32, 32]} />
              <meshPhongMaterial bumpScale={1} displacementScale={0.1} roughness={0.5} {...material} />
            </mesh>
            <mesh ref={cloudsRef}>
              <sphereGeometry args={[1.01 * radius, 32, 32]} />
              <meshPhongMaterial {...cloudMaterial} transparent={true} />
            </mesh>
            <mesh rotation-x={Math.PI / 2}>
              <torusGeometry args={[3, 0.5, 2.5, 100]} />
              <meshPhongMaterial map={ring} transparent={true} />
            </mesh>
            {planet.hotspots.map((hotspot, index) => {
              return (
                <mesh
                  ref={addToRefs}
                  onPointerEnter={() => {
                    if (!state.includes("-library-")) {
                      document.body.style.cursor = "pointer";
                      setHover(index);
                    }
                  }}
                  onPointerLeave={() => {
                    if (!state.includes("-library-")) {
                      document.body.style.cursor = "move";
                      setHover(-1);
                    }
                  }}
                  onClick={() => {
                    if (state.includes("-single-")) {
                      setFocus(index);
                    }
                  }}
                  key={planet.id + " " + hotspot.longtitude + " " + hotspot.latitude}
                  position={[Math.sin(((hotspot.longtitude + 90) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * radius, Math.sin((hotspot.latitude * Math.PI) / 180) * radius, Math.cos(((hotspot.longtitude + 90) * Math.PI) / 180) * Math.cos((hotspot.latitude * Math.PI) / 180) * radius]}
                >
                  <mesh rotation={[0, 0, 0]}>
                    {/*<cylinderGeometry args={[0.1, 0.1, hover == index ? 0.2 : 0.1]} />*/}
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshLambertMaterial color={new THREE.Color("#202657")} />
                  </mesh>
                  <mesh position={[0, 0, hover == index ? -0.11 : -0.051]}>
                    <planeGeometry args={[0.2, 0.2]} />
                    <meshLambertMaterial transparent={true} side={THREE.DoubleSide} map={new THREE.TextureLoader().load(getHostpotIcon("storm"))} />
                  </mesh>
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
