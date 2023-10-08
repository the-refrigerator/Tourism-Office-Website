import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Lerp from "../utils/lerp.utils.js";
import * as THREE from "three";
import Planet from "./planet.component.jsx";
import Background from "./background.component.jsx";
import { OrbitControls } from "@react-three/drei";

function Threed({ setHotspotPositions, canvasRef, hotspot, setHotspot, single, setSingle, focus, setFocus, planets, setPlanets }) {
  console.log("Updating threed");

  const zoom = useRef();
  const orbitControls = useRef();

  useEffect(() => {
    function goSingle() {
      if (single >= 0) {
        setSingle(-1);
        console.log("Leave Single: " + focus);
      } else {
        setSingle(focus);
        console.log("Go Single: " + focus);
      }
    }

    function goToLibrary() {
      setSingle(-1);
    }

    document.addEventListener("i-single", goSingle);
    document.addEventListener("i-go-to-library", goToLibrary);

    const p = [...planets];
    for (var i = 0; i < p.length; i++) {
      if (focus == i) {
        p[i].state = "-library-focus-";
      } else {
        p[i].state = "-library-";
      }

      if (single >= 0) {
        p[i].state = i == single ? "-single-" : "-off-";
        console.log("Setting planet off");
      }
    }

    setPlanets(p);

    if (single >= 0) return;
    zoom.current = 0;
    var clicked = false;

    function keydown(e) {
      if (e.key == "ArrowLeft" && !clicked && focus > 0) {
        setFocus(focus - 1);
        clicked = true;
      }
      if (e.key == "ArrowRight" && !clicked && focus < planets.length - 1) {
        setFocus(focus + 1);
        clicked = true;
      }
    }

    function keyup() {
      clicked = false;
    }

    function wheel(e) {
      const direction = e.deltaY > 0 ? 1 : -1;
      zoom.current += direction * 2;
      if (direction > 0) keydown({ key: "ArrowLeft" });
      else if (direction < 0) keydown({ key: "ArrowRight" });
    }

    function iscrollright() {
      keydown({ key: "ArrowRight" });
    }
    function iscrollleft() {
      keydown({ key: "ArrowLeft" });
    }

    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
    document.addEventListener("wheel", wheel);
    document.addEventListener("i-scroll-right", iscrollright);
    document.addEventListener("i-scroll-left", iscrollleft);

    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("keyup", keyup);
      document.removeEventListener("wheel", wheel);
      document.removeEventListener("i-single", goSingle);
      document.removeEventListener("i-scroll-right", iscrollright);
      document.removeEventListener("i-scroll-left", iscrollleft);
      document.removeEventListener("i-go-to-library", goToLibrary);
    };
  }, [focus, single]);

  const cameraPosition = new THREE.Vector3();
  useFrame((state, delta) => {
    if (single >= 0) return;
    state.camera.position.lerp(cameraPosition.set(10 * focus, 0, 7), delta * 5);
    state.camera.rotation.set(Lerp(state.camera.rotation.x, 0, 0.1), Lerp(state.camera.rotation.y, 0, 0.1), Lerp(state.camera.rotation.z, 0, delta * 5));
    state.camera.fov = 80;
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      {single >= 0 && <OrbitControls ref={orbitControls} enablePan={false} enableRotate={single >= 0} enableZoom={single >= 0} target={new THREE.Vector3(single * 10, 0, 3)} />}
      <Background />
      <ambientLight intensity={1} />
      {planets.map((planet, index) => {
        return <Planet setHotspotPositions={setHotspotPositions} canvasRef={canvasRef} focus={hotspot} setFocus={setHotspot} setSingle={setSingle} key={"Planet " + planet.id} orbitControls={orbitControls} planet={planet} startPosition={[index * 10, 0, 0]} state={planet.state} />;
      })}
    </>
  );
}

export default Threed;
