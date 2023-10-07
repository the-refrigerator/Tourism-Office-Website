import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Lerp from "../utils/lerp.utils.js";
import * as THREE from "three";
import Planet from "./planet.component.jsx";

function Library({ state, setState }) {
  const [focus, setFocus] = useState(0);
  const [single, setSingle] = useState(-1);

  const zoom = useRef();

  const planets = [
    {
      id: 0,
      textures: {
        map: "earthmap_comp.jpeg",
        bumpMap: "earthbump_comp.jpeg",
        emissiveMap: "earthspec1k.jpg",
        overlayMap: "earthCloud_comp.png"
      },
      radius: 2
    },
    {
      id: 1,
      textures: {
        map: "earthmap_comp.jpeg",
        bumpMap: "earthbump_comp.jpeg",
        emissiveMap: "earthspec1k.jpg",
        overlayMap: "earthCloud_comp.png"
      },
      radius: 2
    },
    {
      id: 2,
      textures: {
        map: "earthmap_comp.jpeg",
        bumpMap: "earthbump_comp.jpeg",
        emissiveMap: "earthspec1k.jpg",
        overlayMap: "earthCloud_comp.png"
      },
      radius: 2
    }
  ];

  useEffect(() => {
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
    }

    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
    document.addEventListener("wheel", wheel);

    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("keyup", keyup);
      document.removeEventListener("wheel", wheel);
    };
  }, [focus]);

  const cameraPosition = new THREE.Vector3();
  useFrame((state) => {
    state.camera.position.lerp(cameraPosition.set(10 * focus, 0, 7), 0.1);
    state.camera.fov = Lerp(state.camera.fov, zoom.current + 100, 0.05);
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      {planets.map((planet, index) => {
        return (
          <>
            <Planet key={"Planet " + index} planet={planet} startPosition={[index * 10, 0, 0]} focus={focus == index} state={"library"} />
          </>
        );
      })}
    </>
  );
}

export default Library;
