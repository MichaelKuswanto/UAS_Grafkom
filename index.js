import * as THREE from 'three'
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"
import { FirstPersonControls } from "./node_modules/three/examples/jsm/controls/FirstPersonControls.js"
import { PointerLockControls } from './node_modules/three/examples/jsm/controls/PointerLockControls.js';
import { TrackballControls } from "./node_modules/three/examples/jsm/controls/TrackballControls.js"
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// scene, camera, renderer
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
const renderer = new THREE.WebGLRenderer();

cam.position.z = 10;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var loader = new GLTFLoader();

export { loader, scene, cam, renderer };

let controlsEnabled = false;
let controls = new PointerLockControls(cam, document.body);

document.addEventListener('click', function () {
    if (!controlsEnabled) {
        controls.lock();
    }
}, false);

// Listen for lock and unlock events
controls.addEventListener('lock', function () {
    controlsEnabled = true;
});

controls.addEventListener('unlock', function () {
    controlsEnabled = false;
});

scene.add(controls);

import loadIndomie1 from './models/indomie1.js';
import loadIndomie2 from './models/indomie2.js';
import loadIndomie3 from './models/indomie3.js';
import loadIndomie4 from './models/indomie4.js';
import loadIndomie5 from './models/indomie5.js';
import loadMentah from './models/mentah.js';
import loadMatang from './models/matang.js';
import loadKompor from './models/kompor.js';
import loadAir from './models/air.js';
import loadPanci from './models/panci.js';
import loadMeja from './models/meja.js';
import loadSwalayan from './models/swalayan.js';
import loadRak from './models/rak.js';
import loadLantai from './models/lantai.js';
import loadAtap from './models/atap.js';

// loadIndomie2();
// loadIndomie3();
// loadIndomie4();
// loadIndomie5();
// loadMentah();
// loadMatang();
loadKompor();
loadPanci();
loadMeja();
loadSwalayan();
loadRak();
loadLantai();
loadAtap();

//indomie1 (indomie goreng) 
var indomie_goreng;
for (let i = 0; i < 6; i++) {
    indomie_goreng  = await loadIndomie1(-2+i*0.75, -0.43, -0.8);;

}

//indomie2 (indomie aceh) 
var indomie_aceh;
for (let i = 0; i < 6; i++) {
    indomie_aceh  = await loadIndomie2(-2+i*0.75, -1.2, -0.8);;

}

//indomie3 (indomie rendang) 
var indomie_rendang;
for (let i = 0; i < 6; i++) {
    indomie_rendang = await loadIndomie3(-2+i*0.75, -2, -0.8);;

}
//indomie4 (indomie ayamPop) 
var indomie_ayamPop;
for (let i = 0; i < 6; i++) {
    indomie_ayamPop  = await loadIndomie4(-2+i*0.75, -2.7, -0.8);;

}

document.addEventListener('keydown', function (event) {
    if (controlsEnabled) {
        switch (event.key) {
            case 'w':
                // Handle forward movement
                controls.moveForward(0.1);
                break;
            case 's':
                // Handle backward movement
                controls.moveForward(-0.1);
                break;
            case 'a':
                // Handle left movement
                controls.moveRight(-0.1);
                break;
            case 'd':
                // Handle right movement
                controls.moveRight(0.1);
                break;
            case 'ArrowUp':
                // Handle camera moving up
                controls.moveUp(0.1);
                break;
            case 'ArrowDown':
                // Handle camera moving down
                controls.moveUp(-0.1);
                break;
        }
    }
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
}

animate()

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(0, 0, 0).normalize();
scene.add(directionalLight);
