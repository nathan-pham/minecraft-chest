import { softShadows, Loader, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import React, { Suspense, useState } from "react"
import { useSpring } from "@react-spring/core"

import Lights from "./components/three/Lights"
import Chest from "./components/three/Chest"
import Floor from "./components/three/Floor"

softShadows()

const ZoomOrbital = () => {
  const {gl, camera} = useThree()

  useSpring({
    from: { z: 30 },
    x: -5,
    y: 4,
    z: 4,

    onFrame: ({x, y, z}) => {
      camera.position.set(x, y, z)
    }
  })

  return (
    <OrbitControls enableZoom={false} enablePan={false} target={[0, 0, 0]} args={[camera, gl.domElement]}/>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Canvas colorManagement shadows camera={{ position: [-5, 4, 4], fov: 40 }}>
        <Lights />
        <Suspense fallback={null}>
          <Chest open={open} setOpen={setOpen} />
          <Floor />
          <ZoomOrbital />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}