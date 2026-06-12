import gsap from 'gsap'
import './style.css'

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


const tl = gsap.timeline();
tl.to('.box',{
    x:1000,
    duration:1,
    ease:'power2.inOut',
    delay:0.6,
}).to('.box1',{
    x:1000,
    duration:1,
    ease:'power2.inOut',
},"viru",).to('.box2',{
    x:1000,
    duration:1,
    ease:'power2.inOut',
},"viru-=0.5",).to('.box3',{
    x:1000,
    duration:1,
    ease:'power2.inOut',
})



//position parameters

// tl.to(element,{property}, parameters);
//types
//1."<" => a. "<0.2"
//2. "=" => a. "=-0.2"
//3. labels 