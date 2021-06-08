import { Canvas } from "react-three-fiber"
import React, { Suspense } from "react"

import Model from "./components/three/Chest"

const cameraSettings = { position: [-5, 4, 4], fov: 40 }

export default function App() {
  return (
    <>
      <Canvas colorMangement shadowMap camera={ cameraSettings }>
        <Suspense fallback={ null }>
          <Model />
        </Suspense>
      </Canvas>
    </>
  )
}