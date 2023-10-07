import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Threed from "./Components/threed.component.jsx";
import UI from "./Components/ui.component.jsx";

/*function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0], rotation: [-Math.PI / 2, 2, 0.2] }));

  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <>
      <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshLambertMaterial color="lightblue" />
      </mesh>
    </>
  );
}

function _Planet({ radius, position, emissive, onClickPlanet, focus }) {
  const material1 = useTexture({
    map: "earthmap1k.jpg",
    displacementMap: "earthbump1k.jpg",
    normalMap: "earthbump1k.jpg",
    emissiveMap: "earthspec1k.jpg"
  });

  const material2 = useTexture({
    map: "2k_earth_daymap.jpg"
  });

  const material3 = useTexture({
    map: "earthmap.jpeg",
    bumpMap: "earthbump.jpeg",
    emissiveMap: "earthspec1k.jpg"
  });

  const cloudMaterial = useTexture({
    map: "earthCloud.png"
  });

  var rot = 0;
  const ref = useRef();

  const planetPosition = new THREE.Vector3();

  useFrame(() => {
    rot += 0.001;
    ref.current.rotation.set(rot, rot + 5, rot + 25);
    ref.current.position.lerp(planetPosition.set(ref.current.position.x, ref.current.position.y, focus ? 3 : -3), 0.1);
  });

  return (
    <>
      <mesh position={position} ref={ref}>
        <mesh onClick={onClickPlanet}>
          <sphereGeometry args={[radius, 128, 128]} />
          <meshPhongMaterial emissive={"#4287f5"} emissiveIntensity={emissive ? 0.2 : 0} bumpScale={1} displacementScale={0.2} roughness={0.5} {...material3} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.005 * radius, 128, 128]} />
          <meshPhongMaterial {...cloudMaterial} transparent={true} />
        </mesh>
      </mesh>
    </>
  );
}

function ThreeD() {
  const [focus, setFocus] = useState(0);
  const [superFocus, setSuperFocus] = useState(false);

  useEffect(() => {
    var clicked = false;

    function keydown(e) {
      if (e.key == "ArrowLeft" && !clicked && focus > -1) {
        setFocus(focus - 1);
        clicked = true;
      }
      if (e.key == "ArrowRight" && !clicked && focus < 1) {
        setFocus(focus + 1);
        clicked = true;
      }
    }

    function keyup() {
      clicked = false;
    }

    document.addEventListener("keydown", keydown);

    document.addEventListener("keyup", keyup);

    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("keyup", keyup);
    };
  }, [focus]);
  const cameraPosition = new THREE.Vector3();

  useFrame((state) => {
    state.camera.position.lerp(cameraPosition.set(10 * focus, 0, superFocus ? 3 : 7), 0.1);
    state.camera.updateProjectionMatrix();
  });

  function handlePlanetClick(id) {
    if (focus == id) {
      setSuperFocus(true);
    } else {
      setFocus(id);
      setSuperFocus(false);
    }
  }

  return (
    <>
      <Stars />
      <ambientLight intensity={0.15} />
      <directionalLight angle={0.3} position={[500, 800, 500]} intensity={3} />
      <Planet
        radius={2}
        position={[-10, 0, 0]}
        onClickPlanet={() => {
          handlePlanetClick(-1);
        }}
        focus={focus == -1}
      />
      <Planet
        radius={2}
        position={[0, 0, 0]}
        onClickPlanet={() => {
          handlePlanetClick(0);
        }}
        focus={focus == 0}
      />
      <Planet
        radius={2}
        position={[10, 0, 0]}
        onClickPlanet={() => {
          handlePlanetClick(1);
        }}
        focus={focus == 1}
      />
    </>
  );
}

function SolarSystem() {
  return (
    <>
      <OrbitControls />
      <Stars />
      <EffectComposer>
        <Bloom luminanceThreshold={0} intensity={0.85} levels={9} mipmapBlur />
      </EffectComposer>
      <Sun />
      <Planet radius={2 / 4} position={[10, 0, 0]} emissive={true} />
    </>
  );
}*/

/*function SinglePlanet({ planet }) {
  const longtitude = 0 + 90;
  const latitude = 0;
  const radius = 2;

  return (
    <>
      <OrbitControls />
      <Background />
      <Planet state={"single"} planet={planet} startPosition={[0, 0, 0]} focus={true} isSingle={true} />
      <mesh position={[Math.sin((longtitude * Math.PI) / 180) * Math.cos((latitude * Math.PI) / 180) * radius, Math.sin((latitude * Math.PI) / 180) * radius, Math.cos((longtitude * Math.PI) / 180) * Math.cos((latitude * Math.PI) / 180) * radius]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshLambertMaterial color={"red"} />
      </mesh>

      <mesh position={[4, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshLambertMaterial color={"gray"} />
      </mesh>
      <pointLight intensity={60} position={[0, 0, 10]} color={"white"} />
      <ambientLight intensity={0.2} />
      <EffectComposer>
        <Bloom luminanceThreshold={0} intensity={0.85} levels={9} mipmapBlur />
      </EffectComposer>
      <Sun />
    </>
  );
}*/

function App() {
  const [planets, setPlanets] = useState([
    {
      id: 0,
      name: "Earth",
      textures: {
        map: "earthmap1k_new.jpg",
        bumpMap: "earthbump_new.jpg",
        emissiveMap: "specularmap_new.jpg",
        overlayMap: "earthCloud_new.png",
        ringMap: "1x1_transparent.png",
        ringTransparentMap: "1x1_transparent.gif"
      },
      radius: 2,
      state: "library",
      hotspots: [
        {
          longtitude: 35,
          latitude: 35
        },
        {
          longtitude: 25,
          latitude: 25
        },
        {
          longtitude: 0,
          latitude: 0
        },
        {
          longtitude: 0,
          latitude: 45
        },
        {
          longtitude: 0,
          latitude: -45
        },
        {
          longtitude: 0,
          latitude: 90
        }
      ]
    },
    {
      id: 1,
      name: "Mars",
      textures: {
        map: "2k_mars.jpg",
        bumpMap: "1x1_transparent.png",
        emissiveMap: "1x1_transparent.png",
        overlayMap: "1x1_transparent.png",
        ringMap: "1x1_transparent.png",
        ringTransparentMap: "1x1_transparent.gif"
      },
      radius: 2,
      state: "library",
      hotspots: [
        {
          longtitude: 35,
          latitude: 35
        },
        {
          longtitude: 25,
          latitude: 25
        }
      ]
    },
    {
      id: 2,
      name: "Earth",
      textures: {
        map: "earthmap1k_new.jpg",
        bumpMap: "earthbump_new.jpg",
        emissiveMap: "specularmap_new.jpg",
        overlayMap: "earthCloud_new.png",
        ringMap: "1x1_transparent.png",
        ringTransparentMap: "1x1_transparent.gif"
      },
      radius: 2,
      state: "library",
      hotspots: [
        {
          longtitude: 35,
          latitude: 35
        },
        {
          longtitude: 25,
          latitude: 25
        },
        {
          longtitude: 0,
          latitude: 0
        },
        {
          longtitude: 0,
          latitude: 45
        },
        {
          longtitude: 0,
          latitude: -45
        }
      ]
    },
    {
      id: 3,
      name: "Saturn",
      textures: {
        map: "saturnmapthumb.jpg",
        bumpMap: "1x1_transparent.png",
        emissiveMap: "1x1_transparent.png",
        overlayMap: "1x1_transparent.png",
        ringMap: "saturnring.png"
      },
      radius: 2,
      state: "library",
      hotspots: [
        {
          longtitude: 35,
          latitude: 35
        },
        {
          longtitude: 25,
          latitude: 25
        },
        {
          longtitude: 0,
          latitude: 0
        },
        {
          longtitude: 0,
          latitude: 45
        },
        {
          longtitude: 0,
          latitude: -45
        }
      ]
    },
    {
      id: 4,
      name: "Earth",
      textures: {
        map: "earthmap1k_new.jpg",
        bumpMap: "earthbump_new.jpg",
        emissiveMap: "specularmap_new.jpg",
        overlayMap: "earthCloud_new.png",
        ringMap: "1x1_transparent.png",
        ringTransparentMap: "1x1_transparent.gif"
      },
      radius: 2,
      state: "library",
      hotspots: [
        {
          longtitude: 35,
          latitude: 35
        },
        {
          longtitude: 25,
          latitude: 25
        },
        {
          longtitude: 0,
          latitude: 0
        },
        {
          longtitude: 0,
          latitude: 45
        },
        {
          longtitude: 0,
          latitude: -45
        }
      ]
    }
  ]);

  const [state, setState] = useState("-library-");
  const [focus, setFocus] = useState(0);
  const [single, setSingle] = useState(-1);

  useEffect(() => {
    if (single >= 0) setState("-single");
    else setState("-library-");
  }, [single]);

  return (
    <>
      <Suspense>
        <div className="mega-container">
          <div className={single >= 0 ? "canvas-container single" : "canvas-container"}>
            <Canvas resize={{ debounce: 0 }}>
              <Threed focus={focus} setFocus={setFocus} single={single} setSingle={setSingle} planets={planets} setPlanets={setPlanets} />
              {/*<SinglePlanet
            planet={{
              id: 0,
              textures: {
                map: "earthmap1k_new.jpg",
                bumpMap: "earthbump_new.jpg",
                emissiveMap: "specularmap_new.jpg",
                overlayMap: "earthCloud_new.png"
              },
              radius: 2,
              ref: useRef()
            }}
          />*/}

              {/*<EffectComposer multisampling={1} disableNormalPass>
            <AutoFocusDOF
              bokehScale={10} //blur scale
              resolution={50} //resolution (decrease for performance)
              mouseFocus={false} //if false, the center of the screen will be the focus
              focusSpeed={0.08} // milliseconds to focus a new detected mesh
              focalLength={0.01} //how far the focus should go
              rings={1}
            />
  </EffectComposer>*/}
            </Canvas>
          </div>
        </div>

        <UI focus={focus} single={single} planets={planets} state={state} />
      </Suspense>
    </>
  );
}

export default App;
