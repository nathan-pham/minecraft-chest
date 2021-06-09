import React, { Suspense, useState } from "react"
import { softShadows } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Lights from "./components/three/Lights"
import Chest from "./components/three/Chest"
import Floor from "./components/three/Floor"

softShadows()

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Canvas colorManagement shadows camera={{ position: [-5, 4, 4], fov: 40 }}>
        <Lights />
        <Suspense fallback={null}>
          <Chest open={open} setOpen={setOpen} />
          <Floor />
        </Suspense>
      </Canvas>
    </>
  )
}