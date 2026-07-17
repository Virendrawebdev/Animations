import { Environment, Instance, Instances, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Expression = () => {
    const cubeRef= useRef(null)
    useFrame((state, delta)=>{
    cubeRef.current.rotation.y +=delta;
    cubeRef.current.rotation.x +=delta;
    })
    //  const cubesRef= useRef(null)
    // useFrame((state, delta)=>{
    // cubesRef.current.rotation.x +=delta;
    // })
   const drieTexture=  useTexture("https://images.unsplash.com/photo-1784039798906-e00bd48d9f73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8")
   const texture= useLoader(THREE.TextureLoader,"https://images.unsplash.com/photo-1783962211635-ef0af72c7759?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")

//    const {scene} =useGLTF("./model.glb")
// const handleClick=()=>{
//     cubeRef.current.material.color.set('red')
//     cubesRef.current.material.color.set('green')
// }
// const handleClick1=()=>{
//     cubeRef.current.material.color.set()
//     cubesRef.current.material.color.set()
// }
  return (
    <>
     {/* <mesh onClick={handleClick1} ref={cubeRef} position={[-2,0,0]}  >
    <boxGeometry args={[2,3,2]} />
    <meshStandardMaterial roughness={0.01} metalness={0.9} map={drieTexture}  />
    <OrbitControls/>
    </mesh>
     <mesh onClick={handleClick} ref={cubesRef} position={[2,0,0]}>
    <boxGeometry />
    <meshStandardMaterial roughness={0.001} metalness={0.9} map={texture}  />
    <OrbitControls/>
    </mesh>
    <Environment  files='./envMap.hdr'/> 
     */}
    {/* <ambientLight intensity={3} color={'#ffffff'}/> */}
    {/* <primitive object={scene}/> */}

    <Instances ref={cubeRef}  >
        <OrbitControls/>
        <boxGeometry />
        <meshBasicMaterial roughness={0.01} metalness={0.9} map={texture}  />
        {Array.from({length:200}).map((_, id)=>{
        return <Instance  key={id}   position={[Math.random()*50-25, Math.random()*10-5, Math.random()*50 -25]} />
        })}
    </Instances>
    </>
  )
}

export default Expression