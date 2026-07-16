import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

//resize
const size = {
  width: window.innerWidth,
  height: window.innerHeight
};
// scene
const scene = new THREE.Scene()
const clock = new THREE.Clock()


//light
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
const lights = new THREE.DirectionalLight( 0xFFFFFF,2 );
lights.position.set(1.45,2,-2)
scene.add( lights );
const helper = new THREE.DirectionalLightHelper( lights, 2);
scene.add( helper );
const pointlight = new THREE.PointLight( "#ffffff", 5,2,1);
pointlight.position.set( 0, 2, 0 );
scene.add( pointlight );
const pointLightHelper = new THREE.PointLightHelper( pointlight );
scene.add( pointLightHelper );



//textureloader
const textureloader= new THREE.TextureLoader();
const texture = textureloader.load("https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
  ,()=>{
    console.log("texture loaded")
  },
  ()=>{
    console.log("texture is loading")
  },
  ()=>{
    console.log("texture error")
  }

)


//rgbeloader
const envMap = new RGBELoader();
envMap.load('./envMap.hdr',(envMap)=>{
  envMap.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = envMap;
scene.background = envMap
})

// camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100)
camera.position.z = 5


//mesh
const geometry = new THREE.BoxGeometry( 1, 1,1 );
const material = new THREE.MeshStandardMaterial( { 
  // map: texture,
  color:"green",
  matelness:0.8,
  roughness:0.0
  } );
const cube = new THREE.Mesh( geometry, material );

const raycaster = new THREE.Raycaster();
const mouse= new THREE.Vector2();

window.addEventListener("mousemove", (e)=>{
  mouse.x =(e.clientX/window.innerWidth)*2-1;
  mouse.y=-((e.clientY/window.innerHeight)*2-1);

})


scene.add( cube );



//raycaster

window.addEventListener("click", ()=>{
  raycaster.setFromCamera(mouse, camera)
  const intersect = raycaster.intersectObject(cube);

  if(intersect.length>0){
    cube.material.color.set("red")
  }
})


//canvas
const canvas = document.querySelector('canvas.webgl')

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(size.width, size.height)

window.addEventListener('resize', () => {
size.width = window.innerWidth
size.height = window.innerHeight
camera.aspect = size.width / size.height
camera.updateProjectionMatrix()
renderer.setSize(size.width, size.height)
})

// animation loop
const animate = () => {
  requestAnimationFrame(animate)
  // controls.update();
  const delta = clock.getElapsedTime()
  
  // rotate cube
  // cube.rotation.x = delta
  // cube.rotation.y = delta
  
  renderer.render(scene, camera)
}

animate()
