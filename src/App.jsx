import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import createUrl from "./utils/createURL.utils.js";
import newRequest from "./utils/req.utils.js";

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

function Spinner() {
  return <img src="icons/loading.svg" />;
}

function App() {
  const p = [
    {
      id: 0,
      hotspots: [
        {
          longtitude: "86",
          latitude: "27",
          hotspot_type: "highest-peak",
          name: "Mount Everest",
          description: "Mount Everest, the world's highest peak, stands as an iconic symbol of adventure and achievement. Scaling its towering heights offers intrepid climbers an unparalleled opportunity to challenge their limits and witness breathtaking vistas from the 'roof of the world.",
          popularity: "3"
        },
        {
          longtitude: "31",
          latitude: "30",
          hotspot_type: "first-landing-spot",
          name: "Great Pyramids",
          description: "The Great Pyramids of Giza, one of the ancient wonders of the world, beckon travelers to explore the mysteries of Egypt's rich history. Standing as colossal monuments to human ingenuity, these architectural marvels invite visitors to step back in time and marvel at the engineering prowess of the ancient Egyptians.",
          popularity: "5"
        },
        {
          longtitude: "35.8623",
          latitude: "33.8547",
          hotspot_type: "attraction",
          name: "Lebanon",
          description: "Lebanon, a Mediterranean gem, boasts a rich tapestry of history, culture, and natural beauty. From its vibrant capital, Beirut, to the ancient ruins of Baalbek and the stunning landscapes of the Lebanese mountains, this country offers travelers an unforgettable blend of experiences, culinary delights, and warm hospitality.",
          popularity: "4.5"
        },
        {
          longtitude: "-36",
          latitude: "36",
          hotspot_type: "canyon",
          name: "Grand Canyon",
          description: "Explore the Grand Canyon, a natural wonder that has captivated travelers for generations. Stand at the edge of this vast and awe-inspiring chasm, carved by the mighty Colorado River, and witness the stunning geological beauty of one of Earth's most iconic destinations.",
          popularity: "3"
        }
      ],
      name: "Earth",
      planet_type: "Planet",
      size: "6,371 km",
      speed: "29.78 km/s",
      distance_to_closest_star: "149.49 million km",
      average_surface_temperature: "15℃",
      description: "Discover Earth, a breathtaking oasis in the cosmos, where nature's wonders, diverse cultures, and celestial phenomena converge. Explore lush forests, majestic mountains, and vibrant cultures. Witness the enchanting dance of the Northern and Southern Lights, a celestial spectacle. Embark on an extraordinary journey to explore the world's wonders and cherish our precious home.",
      color_map: "earth.jpg",
      overlay_map: "earthCloud_new.png",
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 1,
      hotspots: [
        {
          longtitude: "226.2",
          latitude: "18.65",
          hotspot_type: "volcano",
          name: "Olympus Mons volcano",
          description: "Olympus Mons, the largest volcano in the solar system, rises majestically on the surface of Mars. This colossal geological wonder invites scientists and space enthusiasts to explore its towering peaks, vast lava plains, and mysteries of Martian geology, making it a compelling destination for those seeking the secrets of the Red Planet.",
          popularity: "4"
        },
        {
          longtitude: "3",
          latitude: "80",
          hotspot_type: "canyon",
          name: "Valles Marineris",
          description: "Discover the allure of Valles Marineris, Mars' magnificent 'Grand Canyon.' We invite you to join us on a captivating journey to explore this vast Martian wonder. Stand on the precipice of adventure, witness the rugged Martian terrain, and unlock the secrets of another world. Let us be your guide to an unforgettable experience in the cosmos.",
          popularity: "4"
        },
        {
          longtitude: "-139",
          latitude: "6",
          hotspot_type: "attraction",
          name: "Medusae Fossae",
          description: "Medusae Fossae, a vast and enigmatic Martian geological formation, beckons explorers to unravel its mysteries. Journey to this otherworldly expanse and witness the intriguing Martian landscapes, where scientists and adventurers alike seek to decode the secrets of Mars' past.",
          popularity: "5"
        },
        {
          longtitude: "-139",
          latitude: "6",
          hotspot_type: "dune",
          name: "Ghost Dunes",
          description: "Ghost dunes, haunting remnants of ancient Martian landscapes, await your exploration. Travel to Mars and uncover the enigmatic beauty of these long-buried dunes, as they whisper tales of the Red Planet's dynamic geological history and the secrets they hold.",
          popularity: "3"
        }
      ],
      name: "Mars",
      planet_type: "Planet",
      size: "3,389.5 km",
      speed: "24.1 km/s",
      distance_to_closest_star: "238.83 million kms",
      average_surface_temperature: "-63 °C",
      description: "Explore Mars, a captivating celestial frontier with rust-colored landscapes, ancient riverbeds, and enigmatic moons. Experience its unique atmosphere on an interplanetary journey to uncover mysteries and potential for life.",
      color_map: "2k_mars.jpg",
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 2,
      hotspots: [
        {
          longtitude: "0",
          latitude: "78",
          hotspot_type: "storm",
          name: "Hexagonal Storm System",
          description: "Experience Saturn's unique charm beyond its rings and moons with a visit to its mesmerizing hexagonal storm system at the north pole. Witness this colossal meteorological wonder, a true celestial masterpiece that sets Saturn apart as a must-see destination for space enthusiasts.",
          popularity: "4"
        },
        {
          longtitude: "0",
          latitude: "78",
          hotspot_type: "attraction",
          name: "Great White Spot",
          description: " Discover Saturn's Great White Spot, a breathtaking meteorological phenomenon that dazzles the eyes of space enthusiasts. Join us on a cosmic journey to witness this colossal storm system, where you can behold the stunning spectacle of swirling clouds and atmospheric dynamics that make Saturn a captivating destination in our solar system.",
          popularity: "5"
        }
      ],
      name: "Saturn",
      planet_type: "Planet",
      size: "58,232 km",
      speed: "9.7 km/s",
      distance_to_closest_star: "1.42 billion km",
      average_surface_temperature: "-140 °C",
      description: "Saturn, the cosmic destination of unparalleled wonder, where you can explore its stunning rings, diverse moons, and the captivating beauty of the sixth planet from the Sun, embarking on an interstellar journey like no other as you discover the mysteries of the ringed giant.",
      color_map: "saturnmapthumb.jpg",
      bump_map: null,
      specular_map: null,
      ring_map: "saturnring.png",
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 3,
      name: "Jupiter",
      planet_type: "Planet",
      hotspots: [
        {
          longtitude: "20",
          latitude: "-22",
          hotspot_type: "storm",
          name: "The Great Red Storm",
          description: "Embark on an astronomical adventure to Jupiter's Great Red Storm, a celestial spectacle of epic proportions. Witness the enduring tempest that has raged for centuries, a captivating feature that sets Jupiter apart as a destination for those seeking the wondethe grrs of our solar system.",
          popularity: "5"
        }
      ],
      size: "69,911 km",
      speed: "13.07 km/s",
      distance_to_closest_star: "149.49 million km",
      average_surface_temperature: "-145℃",
      description: " Explore the grandeur of Jupiter, a premier celestial destination. Delight in its immense size, mesmerizing cloud bands, and the legendary Great Red Spot. Discover 79 captivating moons on this extraordinary cosmic journey, unveiling the majesty of our largest solar system planet.",
      color_map: "jupiter.jpg",
      overlay_map: null,
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 4,
      hotspots: [
        {
          longtitude: "189.8",
          latitude: "30.5",
          hotspot_type: "crater",
          name: "Caloris Planitia basin",
          description: "Welcome to Caloris Planitia, a colossal impact basin on Mercury, and a testament to the forces that shape our solar system. Step into history as you explore this vast basin, with its striking concentric rings and mesmerizing geological features, offering an opportunity to witness the dramatic aftermath of a cosmic collision on a planetary scale.",
          popularity: "3"
        },
        {
          longtitude: "160",
          latitude: "25",
          hotspot_type: "icy-region",
          name: "Ice filled Craters/Basins",
          description: " Mercury's hidden treasures in its ice-filled craters and basins. Venture into these frigid, enigmatic realms, where frozen water ice lies protected from the intense heat of the sun, creating a unique and captivating feature in the scorching depths of our solar system's innermost planet.",
          popularity: "4"
        },
        {
          longtitude: "-197",
          latitude: "30.5",
          hotspot_type: "attraction",
          name: "Apollodorus",
          description: " Apollodorus, a prominent and intriguing crater on Mercury, invites explorers to delve into its mysteries. This well-preserved impact site boasts a unique, double-ring structure, making it a captivating destination for those seeking to unlock the secrets of Mercury's geologic past.",
          popularity: "5"
        }
      ],
      name: "Mercury",
      planet_type: "Planet",
      size: "2,439.7 km",
      speed: "47 km/s",
      distance_to_closest_star: "57.9 million km",
      average_surface_temperature: "-167℃",
      description: "Visit Mercury, a scorching celestial wonder for the intrepid. Explore its extreme temperatures, rugged landscapes, and mysteries of its iron core on a cosmic journey to uncover the planet's dynamic and resilient nature.",
      color_map: "mercury.webp",
      overlay_map: null,
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    }
  ];

  const [planets, setPlanets] = useState(p);

  /*[
    {
      id: 0,
      hotspots: [
        {
          longtitude: "25.3",
          latitude: "122",
          hotspot_type: "storm",
          name: "Storm",
          description: "Hotspot is cool",
          popularity: "4"
        },
        {
          longtitude: "25.3",
          latitude: "-12",
          hotspot_type: "volcano",
          name: "Volcano",
          description: "Hotspot is cool",
          popularity: "4"
        },
        {
          longtitude: "-25.3",
          latitude: "-12",
          hotspot_type: "volcano",
          name: "Submarine",
          description: "Hotspot is cool",
          popularity: "4"
        }
      ],
      name: "Earth",
      planet_type: "Planet",
      size: "6,371 km",
      speed: "29.8 km/s",
      distance_to_closest_star: "150 million km",
      average_surface_temperature: "15",
      description: "earth desc",
      color_map: "earth.jpg",
      overlay_map: "earthCloud_new.png",
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 1,
      hotspots: [],
      name: "Mars",
      planet_type: "Planet",
      size: "3,389.5 km",
      speed: "24.1 km/s",
      distance_to_closest_star: "227.9 million kms",
      average_surface_temperature: "-63 °C",
      description: "",
      color_map: "2k_mars.jpg",
      bump_map: null,
      specular_map: null,
      ring_map: null,
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    },
    {
      id: 2,
      hotspots: [],
      name: "Saturn",
      planet_type: "Planet",
      size: "58,232 km",
      speed: "9.7 km/s",
      distance_to_closest_star: "1.42 billion km",
      average_surface_temperature: "-185 °C",
      description: ".",
      color_map: "saturnmapthumb.jpg",
      bump_map: null,
      specular_map: null,
      ring_map: "saturnring.png",
      radius: 2,
      systems: [
        {
          id: 1,
          title: "Solar System"
        }
      ]
    }
  ] */

  const [query, setQuery] = useState(new URLSearchParams(window.location.search));
  const [state, setState] = useState("-library-");
  const [focus, setFocus] = useState(0);
  const [single, setSingle] = useState(-1);
  const [hotspot, setHotspot] = useState(-1);
  const [hotspotPositions, setHotspotPositions] = useState([]);

  const canvasRef = useRef();

  /*const fetchPlanets = async () => {
    const res = (await newRequest.get("/planets")).data;
    console.log(res);
    setPlanets(res);
    queryInit();
    setFocus(0);
  };*/

  useEffect(() => {
    if (single >= 0) setState("-single");
    else setState("-library-");
  }, [single]);

  const queryInit = async () => {
    if (query.get("planet")) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFocus(parseInt(query.get("planet")));
      setSingle(parseInt(query.get("planet")));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (query.get("hotspot")) {
        setHotspot(parseInt(query.get("hotspot")));
      }
    }
  };

  useEffect(() => {
    queryInit();
  }, []);

  useEffect(() => {
    window.history.pushState(null, "Journey", createUrl(single, hotspot));
  }, [single, hotspot]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="mega-container">
          <div className={single >= 0 ? "canvas-container single" : "canvas-container"}>
            <Canvas ref={canvasRef} resize={{ debounce: 0 }}>
              <Threed setHotspotPositions={setHotspotPositions} canvasRef={canvasRef} hotspot={hotspot} setHotspot={setHotspot} focus={focus} setFocus={setFocus} single={single} setSingle={setSingle} planets={planets} setPlanets={setPlanets} />
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

        <UI setHotspot={setHotspot} hotspotPositions={hotspotPositions} selectedHotspot={hotspot} setSelectedHotspot={setHotspot} focus={focus} single={single} planets={planets} state={state} setFocus={setFocus} setSingle={setSingle} />
      </Suspense>
    </>
  );
}

export default App;
