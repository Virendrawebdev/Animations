import React from 'react'
import {useControls} from 'leva';
import FanGroup from './FanGroup';
import { OrbitControls } from '@react-three/drei';

const Exprience = () => {
  const {x, y} = useControls("Box controls",{
    x:{ value:0, min:-4, max:4, step:0.01},
    y:{ value:0, min:-4, max:4, step:0.01}
  })
  return (
    <>
    <ambientLight intensity={2} color={'#ffffff'}/>
   <FanGroup/>
   <OrbitControls/>
    </>
  )
}

export default Exprience