import gsap from 'gsap'
import './style.css'

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
gsap.fromTo('.box', {
    x: 0,
}, {
    delay: 0.6,
    duration: 1,
    x: 800,
    y:200
})

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