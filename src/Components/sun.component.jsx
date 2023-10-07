import { useTexture } from "@react-three/drei";

function Sun() {
  const material = useTexture({
    map: "8k_sun.jpg",
    emissiveMap: "8k_sun.jpg"
  });
  return (
    <>
      <ambientLight intensity={1} color={"white"} />
      <mesh position={[20, 0, 20]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial emissive={"white"} emissiveIntensity={30} {...material} />
      </mesh>
    </>
  );
}

export default Sun;
