import { useControls } from "leva";
export default function Lights() {
  const directionalLightConfig = useControls("directLight", {
    intensity: {
      value: 1.0,
      min: 0,
      max: 2,
    },
    position: {
      value: [4, 4, 1],
      step: 1,
    },
  });
  return (
    <>
      {/* 灯光 */}
      {/* 平行光 */}
      <directionalLight
        castShadow
        position={directionalLightConfig.position}
        intensity={directionalLightConfig.intensity}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      {/* 环境光 */}
      <ambientLight intensity={0.5} />
    </>
  );
}
