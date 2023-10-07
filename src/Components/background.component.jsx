import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Background() {
  const material = useTexture({
    map: "galaxy.png"
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[500, 128, 128]} />
        <meshBasicMaterial
          {...material}
          side={THREE.DoubleSide} // Set to render both front and back sides
        />
      </mesh>
    </>
  );
}

export default Background;
