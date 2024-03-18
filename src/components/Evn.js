import { useMemo } from "react";
import * as THREE from "three";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

/**
 * 方体形状
 */
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
/**
 * 球形状
 */
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
/**
 * 圆柱形状
 */
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 32);

/**
 * 地板
 */
const floor1Material = new THREE.MeshStandardMaterial({
  color: "#ffbe91",
  metalness: 0,
  roughness: 0,
});

const obstacle1Material = new THREE.MeshStandardMaterial({
  color: "teal",
  metalness: 0,
  roughness: 1,
});
const obstacle2Material = new THREE.MeshStandardMaterial({
  color: "orange",
  metalness: 0,
  roughness: 1,
});
const obstacle3Material = new THREE.MeshStandardMaterial({
  color: "#222222",
  metalness: 0,
  roughness: 0,
});
/**墙壁 */
const wallMaterial = new THREE.MeshStandardMaterial({});

/**
 * 地板
 * @param {*} param0
 * @returns
 */
export function Foolr({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh
          geometry={boxGeometry}
          material={floor1Material}
          receiveShadow
          position={[0, -0.1, 0]}
          scale={[10, 0.2, 10]}
        />
      </RigidBody>
    </group>
  );
}

/**
 * 透明围墙
 * @param {*} param0
 * @returns
 */
export function Bounds() {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh
        castShadow
        position={[5.15, 2, 0]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 4, 10]}
      />
      <mesh
        position={[-5.15, 2, 0]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 4, 10]}
        receiveShadow
      />
      <mesh
        position={[0, 2, -5.15]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[10, 4, 0.3]}
        receiveShadow
      />
      <mesh
        position={[0, 2, 5.15]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[10, 4, 0.3]}
        receiveShadow
      />
    </RigidBody>
  );
}

export function TypeBox({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody restitution={0.2} friction={0.2}>
        <mesh
          geometry={boxGeometry}
          material={obstacle1Material}
          scale={[1, 1, 1]}
          castShadow
        />
      </RigidBody>
    </group>
  );
}
export function TypeSphere({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody restitution={0.2} friction={1} colliders="ball">
        <mesh
          geometry={sphereGeometry}
          material={obstacle2Material}
          scale={1}
          castShadow
        />
      </RigidBody>
    </group>
  );
}
export function TypeCylinder({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody restitution={0.2} friction={0.2} colliders="cuboid">
        <mesh
          geometry={cylinderGeometry}
          material={obstacle3Material}
          scale={1}
          castShadow
        />
      </RigidBody>
    </group>
  );
}
export default function Env({
  count = 20,
  types = [TypeBox, TypeSphere, TypeCylinder],
  seed = 0,
}) {
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }
    return blocks;
  }, [count, types, seed]);
  return (
    <>
      <Foolr position={[0, 0, 0]} />
      {blocks.map((Block, index) => (
        <Block
          key={index}
          position={[
            (Math.random() - 0.5) * 9,
            Math.random() + 2,
            (Math.random() - 0.5) * 9,
          ]}
        />
      ))}
      <Bounds />
    </>
  );
}
