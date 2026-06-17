import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import './App.css';
import AnimateOnX from './components/AnimateOnX';

const App = () => {
  const boxRef = useRef([]);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.to([boxRef.current] ,{
      x: 700,
      duration: 1,
      delay: 0.5,
      ease: 'power1.inOut',
      stagger:0.2,
    })
  }, { scope: containerRef.current, dependencies: [], revertOnUpdate: true },
  )

  return (
    <div ref={containerRef}>
      {/* <div ref={boxRef} className='box'></div> */}
     
      {/* <button onClick={contextSafe(()=>{
      gsap.to(boxRef.current,{
         x:400,
      duration:1,
      delay:0.5,
      ease:'power1.inOut',
      backgroundColor:'green'
      })
    })}>click me</button> */}

      {/* <AnimateOnX>
        <div className='box'></div>
      </AnimateOnX>

      <AnimateOnX>
        <div className='box1'></div>
      </AnimateOnX>

       <AnimateOnX>
        <div className='box2'></div>
      </AnimateOnX> */}

      <div ref={(el)=>boxRef.current.push(el)} className='box'></div>
      <div ref={(el)=>boxRef.current.push(el)} className='box'></div>
      <div ref={(el)=>boxRef.current.push(el)} className='box'></div>

    </div>
  )
}

export default App