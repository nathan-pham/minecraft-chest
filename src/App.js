import React, { Suspense, useState } from "react"
import { softShadows } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Lights from "./components/three/Lights"
import Chest from "./components/three/Chest"
import Floor from "./components/three/Floor"

softShadows()

export default function App() {
  return (
    <>
      <Canvas colorManagement shadows camera={{ position: [-5, 4, 4], fov: 40 }}>
        <Lights />
        <Suspense fallback={null}>
          <Chest />
          <Floor />
        </Suspense>
      </Canvas>
    </>
  )
}