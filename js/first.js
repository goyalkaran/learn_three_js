
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer= new THREE.WebGLRenderer();
console.log(scene);
console.log(renderer);
console.log(camera);

 renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(
    renderer.domElement
);
renderer.render(scene,camera);