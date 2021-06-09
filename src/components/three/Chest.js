import { useSpring, a } from "@react-spring/three"
import { useGLTF } from "@react-three/drei"
import React, { useRef } from "react"

import _chestCloseSound from "../../assets/sound/chestClose.mp3"
import _chestOpenSound from "../../assets/sound/chestOpen.mp3"

const chestCloseSound = new Audio(_chestCloseSound)
const chestOpenSound = new Audio(_chestOpenSound)
const modelPath = "../../../coffre/model.glb"

chestCloseSound.volume = 0.3
chestOpenSound.volume = 0.3

export default function Chest({ open, setOpen }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(modelPath)

  const handleOpen = () => {
    open ? chestCloseSound.play() : chestOpenSound.play()
    setOpen(!open)
  }

  const openAnimation = useSpring({
    rotation: open ? [0, 0, 0] : [1.61, 0, 0],
    position: open ? [0, -1.5, 0] : [0, 0, 0]
  })

  return (
    <group onClick={handleOpen} ref={group} dispose={null}>
      <a.group rotation={openAnimation.position} position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <a.primitive rotation={openAnimation.rotation} object={nodes.Bone001} />
        <skinnedMesh
          castShadow
          receiveShadow
          material={materials.Material}
          geometry={nodes.Cube.geometry}
          skeleton={nodes.Cube.skeleton}
        />
      </a.group>
    </group>
  )
}

useGLTF.preload(modelPath)