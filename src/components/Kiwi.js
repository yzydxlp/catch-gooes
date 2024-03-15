import { useGLTF } from "@react-three/drei";

const Kiwi = (props) => {
  const { nodes, materials } = useGLTF("/kiwi.glb");
  console.log(nodes, materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="food_kiwi_01"
        castShadow
        receiveShadow
        geometry={nodes.food_kiwi_01.geometry}
        material={materials.food_kiwi_01}
      />
    </group>
  );
};

export default Kiwi;

useGLTF.preload("/kiwi.glb");
