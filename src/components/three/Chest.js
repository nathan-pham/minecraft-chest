import { useGLTF } from "@react-three/drei"
import React, { useRef } from "react"

const modelPath = "../../../coffre/model.glb"

export default function Chest(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(modelPath)

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone001} />
        <skinnedMesh
          castShadow
          receiveShadow
          material={materials.Material}
          geometry={nodes.Cube.geometry}
          skeleton={nodes.Cube.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(modelPath)