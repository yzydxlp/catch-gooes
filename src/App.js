import { Physics, Debug } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./components/Ligths";
import Env from "./components/Evn";

const App = () => {
  return (
    <>
      {/* 监控 */}
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color attach="background" args={["#c6e5db"]} />

      <Physics>
        <Debug />
        <Lights />
        <Env />
      </Physics>
    </>
  );
};

export default App;
