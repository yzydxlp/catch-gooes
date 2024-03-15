import { useGLTF } from "@react-three/drei";

const Apple = (props) => {
  const { nodes, materials } = useGLTF("/apple.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="food_apple_01"
        castShadow
        receiveShadow
        geometry={nodes.food_apple_01.geometry}
        material={materials.food_apple_01}
      />
    </group>
  );
};

export default Apple;

useGLTF.preload("/apple.glb");
