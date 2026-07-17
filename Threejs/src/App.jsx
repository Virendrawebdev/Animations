import React from 'react'
import { Canvas } from '@react-three/fiber'
import Expression from './components/Expression'

const App = () => {
  return (
   <>
   <div className='h-screen w-full'>
    <Canvas>
    <Expression />
    </Canvas>
    </div>
   </>
  )
}

export default App