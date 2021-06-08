import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"

import Lights from "./components/three/Lights"
import Chest from "./components/three/Chest"

export default function App() {
  return (
    <>
      <Canvas colorMangement shadowMap camera={{position: [-5, 4, 4], fov: 40}}>
        <Lights />
        <Suspense fallback={null}>
          <Chest />
        </Suspense>
      </Canvas>
    </>
  )
}