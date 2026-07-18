import React from 'react'
import { Canvas } from '@react-three/fiber'
import Expression from './components/Expression'
import Exprience from './components/Exprience'

const App = () => {
  return (
   <>
   <div className='parent h-screen w-full'>
    <Canvas>
    {/* <Expression /> */}
    <Exprience/>
    </Canvas>

    <mesh>
      <boxGeometry/>
      <meshBasicMaterial color={'red'}/>
    </mesh>
    </div>
   </>
  )
}

export default App