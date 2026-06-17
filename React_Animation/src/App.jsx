import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import './App.css';
import {AnimatePresence, motion} from 'motion/react'

const App = () => {
  
  const [show, setShow] = useState(false);

  return (
    
    <div>
     {/* <div className='page'></div>
<motion.div initial={{opacity:0, scale:0.7}}  
// animate={{x:500, opacity:1}} 
transition={{duration:0.8, ease:"easeInOut"}} 
whileHover={{scale:1.5}} 
viewport={{once:false, amount:1}}
whileInView={{opacity:1, scale:1}}
 className='box'>

</motion.div>
<div className='page'></div> */}

<button onClick={()=>{
  setShow((prev)=>!prev);
}}>
 click me
</button>
<AnimatePresence>
{show && (<motion.div initial={{opacity:0, y:200}}
 animate={{opacity:1, y:0}} transition={{duration:1}}
 exit={{opacity:0, y:200}}
  className='box'>
    {" "}
  </motion.div>
  )}
</AnimatePresence>
    </div>
  )
}

export default App