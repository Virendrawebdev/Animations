import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";

import './style.css'


gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin, Flip);

const flipToggle = document.getElementById('flip-toggle');
const imageShow1 = document.querySelector('.imageShow');
let isFlipped = false;

flipToggle?.addEventListener('click', () => {
  isFlipped = !isFlipped;
  if (isFlipped) {
    gsap.to(imageShow1, {
      duration: 0.6,
      rotationY: 180,
      ease: 'power2.out',
      onStart: () => imageShow.classList.add('flipping'),
      onComplete: () => imageShow.classList.toggle('flipped', true)
    });
  } else {
    gsap.to(imageShow1, {
      duration: 0.6,
      rotationY: 0,
      ease: 'power2.out',
      onComplete: () => imageShow.classList.toggle('flipped', false)
    });
  }
});

//DAY01_ANIMATION

// const box = document.querySelector('.box')
// gsap.to(['.box', '.box2'])
//to method is used to animate from a starting point to an ending point
//from method is used to animate from an ending point to a starting point
// gsap.from('.box',{
//     delay:0.6,
//     x:500,
//     duration:1,
//     ease:'bounce'
// })
//fromTo method is used to animate from a starting point to an ending point and then back to the starting point
// gsap.fromTo('.box', {
//     x: 0,
// }, {
//     delay: 0.6,
//     duration: 1,
//     x: 800,
//     y:200
// })

//custom properties can also be animated using gsap
// const obj = {
//     a:0,
// };

// gsap.to(obj,{
//     a:100,
//     onUpdate:()=>{
//         console.log(obj.a);
//     }
// });

// DAY02_ANIMATION

// gsap.to('.box',{
//     delay:0.6,
//     x:500,
//     duration:1,
//     ease:'steps(12)',
//     repeat:3,
//     yoyo:true
// })
// gsap.set('.box',{
//     x:-300,
// })
// gsap.from('.box',{
//     delay:0.6,
//     x:1500,
//     duration:1,
//     ease:'power2.inOut',
//     repeat:-1,
// })

// callback function after animation is complete
// gsap.to('.box', {
//     x:500,
//     duration:1,
//     onComplete:()=>{
//         console.log('Animation complete');
//     }
// })
// gsap.to('.box', {
//     x:500,
//     duration:1,
//     onUpdate:()=>{
//         console.log('Animation in progress');
//     }
// })

// Day03_ANIMATION

// gsap.to('box',{
//     x:1200,
//     duration:1.3,
//     ease:'power2.',
//     delay:1.6,
//     stagger:{
//         each:0.2,
//         from:"center"
//     },
//     repeat:-1,
//     yoyo:true
// })


// gsap.from('h1 span',{
//     yPercent:100,
//     opacity:0,
//     duration:1,
//     ease:'expo.out',
//     stagger:{
//         each:0.08,
//         from:'center'
//     },
//     repeat:-1,
//     yoyo:true

// })

// timeline


// const tl = gsap.timeline();
// tl.to('.box',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
//     delay:0.6,
// }).to('.box1',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// },"viru",).to('.box2',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// },"viru-=0.5",).to('.box3',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// })



//position parameters

// tl.to(element,{property}, parameters);
//types
//1."<" => a. "<0.2"
//2. "=" => a. "=-0.2"
//3. labels 

// Day04_ANIMATION
// Timeline control methods
// const play = document.querySelector('.play');
// const pause = document.querySelector('.pause');
// const reverse = document.querySelector('.reverse');
// const restart = document.querySelector('.restart');
// const resume = document.querySelector('.resume');
// const seek = document.querySelector('.seek');

// const tl = gsap.timeline({paused:true});

// tl.to('.box',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
//     delay:0.6,
// }).to('.box1',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// })
// .addLabel("viru")
// .to('.box2',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// })
// .to('.box3',{
//     x:1000,
//     duration:1,
//     ease:'power2.inOut',
// })

// play.addEventListener('click',()=>{
//     tl.play();
// })
// pause.addEventListener('click',()=>{
//     tl.pause();
// })
// reverse.addEventListener('click',()=>{
//     tl.reverse();
// })
// restart.addEventListener('click',()=>{
//     tl.restart();
// })
// resume.addEventListener('click',()=>{
//     tl.resume();
// }
// )
// seek.addEventListener('click',()=>{
//     tl.seek("viru");
// })

//Architecture of GSAP Layer

//Loading Timeline

// const loadingTimeline =()=>{
//     return gsap.timeline().to(Element, {})
// }

// // Navbar Timeline
// const navbarTimeline =()=>{
//     return gsap.timeline().to(Element, {})
// }

// // Master Timeline

// const master = gsap.timeline();

// master.add(loadingTimeline()).add(navbarTimeline(),"-=0.5")


//ScrollTrigger 

// gsap.set('.imageDiv',{
//     scale:0.2,
// });

// gsap.set(".content",{
//     gap:"25rem",
// })

// const tl=gsap.timeline({
// scrollTrigger:{
//         trigger:'.page2',
//         start:'top top',
//         end:'top -100%',
//         scrub:true,
//         pin:true  
//     }
// })

// tl.to('.imageDiv',{
//     scale:1,
//     ease:'steps(12)',    
// }).to('.content',{
//     gap:"2rem",
// },"<",)


//Day05 Animation

//Splittext

// const split= new SplitText('.title h1',{
//     type:'chars, words, lines',
//     wordsClass:'titleWord',
//     charsClass:'titleChars'
// });

// gsap.from(split.chars,{
//     yPercent:100,
//     opacity:0,
//     duration:1.2,
//     ease:'expo.out',
//     stagger:{
//         each:0.04,
//         from:'start',
//     }

// })

//Draggable

// Draggable.create('.box',{
//     bounds:"#app",
//     type:"x,y",
//     edgeResistance:0,
//     inertia:true,
//     dragResistance:0.5,
// });


// flip

const img = document.querySelector('.spacialImage');
const img2 = document.querySelector('.spacialImage2');
const imageGallery = document.querySelector('.imageGallery');
const imageShow = document.querySelector('.imageShow');
let imageToggled = false;

const toggleImageSwap = () => {
  const state = Flip.getState([img, img2]);

  if (imageToggled) {
    imageGallery.appendChild(img);
    imageShow.appendChild(img2);
  } else {
    imageGallery.appendChild(img2);
    imageShow.appendChild(img);
  }

  Flip.from(state, {
    duration: 0.8,
    ease: 'power3.inOut',
    absolute: true,
    scale: true,
  });

  imageToggled = !imageToggled;
};

img.addEventListener('click', toggleImageSwap);
img2.addEventListener('click', toggleImageSwap);




