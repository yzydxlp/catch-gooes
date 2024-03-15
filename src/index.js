import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import { Leva } from "leva";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Leva collapsed />
    <Canvas
      shadows={true}
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [6, 12, 6],
      }}
    >
      <SoftShadows size={5} samples={17} />
      <App />
    </Canvas>
  </>
);
