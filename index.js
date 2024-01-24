import * as THREE from 'three'
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"
import { FirstPersonControls } from "./node_modules/three/examples/jsm/controls/FirstPersonControls.js"
import { TrackballControls } from "./node_modules/three/examples/jsm/controls/TrackballControls.js"
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const cursorElement = document.createElement('div');
cursorElement.style.width = '20px';
cursorElement.style.height = '20px';
cursorElement.style.borderRadius = '50%';
cursorElement.style.backgroundColor = 'white';
cursorElement.style.position = 'absolute';
cursorElement.style.pointerEvents = 'none';

// Tambahkan elemen ke dalam elemen body
document.body.appendChild(cursorElement);

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
cam.position.y = -1
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var loader = new GLTFLoader();

export { loader, scene, cam, renderer };

let clock = new THREE.Clock();
let control = new FirstPersonControls(cam, renderer.domElement);
control.lookSpeed = 0.1;

import loadIndomie1 from './models/indomie1.js';
import loadIndomie2 from './models/indomie2.js';
import loadIndomie3 from './models/indomie3.js';
import loadIndomie4 from './models/indomie4.js';
import loadKompor from './models/kompor.js';
import loadPanci from './models/panci.js';
import loadMeja from './models/meja.js';
import loadSwalayan from './models/swalayan.js';
import loadOpenSwalayan from './models/open_swalayan.js';
import loadRak from './models/rak.js';
import loadLantai from './models/lantai.js';
import loadAtap from './models/atap.js';

// loadIndomie2();
// loadIndomie3();
// loadIndomie4();
// loadIndomie5();
// loadMentah();
// loadMatang();
// loadKompor();
// loadAir();
// loadPanci();
//loadMeja();
loadSwalayan();
loadOpenSwalayan();
loadRak();
loadLantai();
loadAtap();

const indomie1a = await loadIndomie1();
const indomie1b = await loadIndomie1();
const indomie1c = await loadIndomie1();
const indomie1d = await loadIndomie1();
const indomie1e = await loadIndomie1();

if (indomie1a) {
    indomie1a.position.set(-2, -0.43, -0.8);
    indomie1a.scale.set(0.2, 0.2, 0.2);
    indomie1a.rotation.set(4.2, 0, 9.5);
}

if (indomie1b) {
    indomie1b.position.set(-1, -0.43, -0.8);
    indomie1b.scale.set(0.2, 0.2, 0.2);
    indomie1b.rotation.set(4.2, 0, 9.5);
}

if (indomie1c) {
    indomie1c.position.set(0, -0.43, -0.8);
    indomie1c.scale.set(0.2, 0.2, 0.2);
    indomie1c.rotation.set(4.2, 0, 9.5);
}

if (indomie1d) {
    indomie1d.position.set(1, -0.43, -0.8);
    indomie1d.scale.set(0.2, 0.2, 0.2);
    indomie1d.rotation.set(4.2, 0, 9.5);
}

if (indomie1e) {
    indomie1e.position.set(2, -0.43, -0.8);
    indomie1e.scale.set(0.2, 0.2, 0.2);
    indomie1e.rotation.set(4.2, 0, 9.5);
}

const indomie2a = await loadIndomie2();
const indomie2b = await loadIndomie2();
const indomie2c = await loadIndomie2();
const indomie2d = await loadIndomie2();
const indomie2e = await loadIndomie2();

if (indomie2a) {
    indomie2a.position.set(-2, -1.2, -0.8);
    indomie2a.scale.set(0.2, 0.2, 0.2);
    indomie2a.rotation.set(4.2, 0, 9.5);
}

if (indomie2b) {
    indomie2b.position.set(-1, -1.2, -0.8);
    indomie2b.scale.set(0.2, 0.2, 0.2);
    indomie2b.rotation.set(4.2, 0, 9.5);
}

if (indomie2c) {
    indomie2c.position.set(0, -1.2, -0.8);
    indomie2c.scale.set(0.2, 0.2, 0.2);
    indomie2c.rotation.set(4.2, 0, 9.5);
}

if (indomie2d) {
    indomie2d.position.set(1, -1.2, -0.8);
    indomie2d.scale.set(0.2, 0.2, 0.2);
    indomie2d.rotation.set(4.2, 0, 9.5);
}

if (indomie2e) {
    indomie2e.position.set(2, -1.2, -0.8);
    indomie2e.scale.set(0.2, 0.2, 0.2);
    indomie2e.rotation.set(4.2, 0, 9.5);
}

const indomie3a = await loadIndomie3();
const indomie3b = await loadIndomie3();
const indomie3c = await loadIndomie3();
const indomie3d = await loadIndomie3();
const indomie3e = await loadIndomie3();

if (indomie3a) {
    indomie3a.position.set(-2, -2, -0.8);
    indomie3a.scale.set(0.2, 0.2, 0.2);
    indomie3a.rotation.set(4.2, 0, 9.5);
}

if (indomie3b) {
    indomie3b.position.set(-1, -2, -0.8);
    indomie3b.scale.set(0.2, 0.2, 0.2);
    indomie3b.rotation.set(4.2, 0, 9.5);
}

if (indomie3c) {
    indomie3c.position.set(0, -2, -0.8);
    indomie3c.scale.set(0.2, 0.2, 0.2);
    indomie3c.rotation.set(4.2, 0, 9.5);
}

if (indomie3d) {
    indomie3d.position.set(1, -2, -0.8);
    indomie3d.scale.set(0.2, 0.2, 0.2);
    indomie3d.rotation.set(4.2, 0, 9.5);
}

if (indomie3e) {
    indomie3e.position.set(2, -2, -0.8);
    indomie3e.scale.set(0.2, 0.2, 0.2);
    indomie3e.rotation.set(4.2, 0, 9.5);
}

const indomie4a = await loadIndomie4();
const indomie4b = await loadIndomie4();
const indomie4c = await loadIndomie4();
const indomie4d = await loadIndomie4();
const indomie4e = await loadIndomie4();

if (indomie4a) {
    indomie4a.position.set(-2, -2.7, -0.8);
    indomie4a.scale.set(0.2, 0.2, 0.2);
    indomie4a.rotation.set(4.2, 0, 9.5);
}

if (indomie4b) {
    indomie4b.position.set(-1, -2.7, -0.8);
    indomie4b.scale.set(0.2, 0.2, 0.2);
    indomie4b.rotation.set(4.2, 0, 9.5);
}

if (indomie4c) {
    indomie4c.position.set(0, -2.7, -0.8);
    indomie4c.scale.set(0.2, 0.2, 0.2);
    indomie4c.rotation.set(4.2, 0, 9.5);
}

if (indomie4d) {
    indomie4d.position.set(1, -2.7, -0.8);
    indomie4d.scale.set(0.2, 0.2, 0.2);
    indomie4d.rotation.set(4.2, 0, 9.5);
}

if (indomie4e) {
    indomie4e.position.set(2, -2.7, -0.8);
    indomie4e.scale.set(0.2, 0.2, 0.2);
    indomie4e.rotation.set(4.2, 0, 9.5);
}

let lookSpeed = 0.05; 
control.lookSpeed = lookSpeed;
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            control.moveForward(100); // Pergi ke depan
            break;
        case 'ArrowDown':
            control.moveForward(-100); // Pergi ke belakang
            break;
        case 'ArrowLeft':
            control.moveRight(-100); // Pergi ke kiri
            break;
        case 'ArrowRight':
            control.moveRight(100); // Pergi ke kanan
            break;
    }
});

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    control.update(delta); // Panggil update untuk menggerakkan kontrol

    renderer.render(scene, cam);
}

animate();

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(0, 0, 0).normalize();
scene.add(directionalLight);
