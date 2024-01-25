import * as THREE from 'three'
import { PointerLockControls } from './node_modules/three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Dari Youtube
const cursorElement = document.createElement('div');
cursorElement.style.width = '20px';
cursorElement.style.height = '20px';
cursorElement.style.borderRadius = '50%';
cursorElement.style.backgroundColor = 'white';
cursorElement.style.position = 'absolute';
cursorElement.style.pointerEvents = 'none';

document.body.appendChild(cursorElement);

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


// Dari Youtube
let controlsEnabled = false;
let controls = new PointerLockControls(cam, document.body);

document.addEventListener('click', function () {
    if (!controlsEnabled) {
        controls.lock();
    }
}, false);

controls.addEventListener('lock', function () {
    controlsEnabled = true;
    cursorElement.style.display = "block";
});

controls.addEventListener('unlock', function () {
    controlsEnabled = false;
    cursorElement.style.display = 'none';
});

document.addEventListener('mousemove', function (event) {
    if (controlsEnabled) {
        cursorElement.style.left = event.clientX + 'px';
        cursorElement.style.top = event.clientY + 'px';
    }
}); 

scene.add(controls);

import loadIndomie1 from './models/indomie1.js';
import loadIndomie2 from './models/indomie2.js';
import loadIndomie3 from './models/indomie3.js';
import loadIndomie4 from './models/indomie4.js';
import loadKompor from './models/kompor.js';
import loadPanci from './models/panci.js';
import loadMeja from './models/meja.js';
import loadSwalayan from './models/swalayan.js';
import loadRak from './models/rak.js';
import loadLantai from './models/lantai.js';
import loadAtap from './models/atap.js';
import loadMangkok from './models/mangkok.js';
import loadOpenSwalayan from './models/open_swalayan.js';
import loadUdang from './models/udang.js';
import loadbeef from './models/daging.js';
import loadegg from './models/telurceplok.js';
import loadTray from './models/tray.js';
import loadSmoke from './models/smoke.js';

loadKompor();
loadTray();
loadPanci();
loadMeja();
loadSwalayan();
loadOpenSwalayan();
loadRak();
loadLantai();
loadAtap();
loadMangkok();
loadUdang();
loadegg();
loadbeef();
loadSmoke();

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

let meja = loadMeja(-3.5, -3.2, 2)
meja = loadMeja(3.5, -3.2, 2)


let isJumping = false;
let jumpStartTime;
document.addEventListener('keydown', function (event) {
    if (controlsEnabled) {
        switch (event.key) {
            case 'w':
                controls.moveForward(0.1);
                break;
            case 's':
                controls.moveForward(-0.1);
                break;
            case 'a':
                controls.moveRight(-0.1);
                break;
            case 'd':
                controls.moveRight(0.1);
                break;
            case 'ArrowUp':
                cam.position.y += 0.1;
                break;
            case 'ArrowDown':
                cam.position.y -= 0.1;
                break;
            case ' ':
                // Dari ChatGPT
                if (!isJumping) {
                    controls.getObject().position.y += 1;
                    isJumping = true;
                    jumpStartTime = Date.now();
                    pullDownEffect();
                }
                break;
        }
    }
});

// Dari ChatGPT
function pullDownEffect() {
    const originalY = cam.position.y;

    function animatePullDown() {
        const elapsedTime = Date.now() - jumpStartTime;
        const duration = 200; 

        if (elapsedTime < duration) {
            const t = elapsedTime / duration;
            cam.position.y = originalY + 1 - 2 * t; 

            requestAnimationFrame(animatePullDown);
        } else {
            isJumping = false;
            animateReturn();
        }
    }

    function animateReturn() {
        const originalY = cam.position.y;

        function animateUp() {
            const elapsedTime = Date.now() - jumpStartTime;
            const duration = 100;

            if (elapsedTime < duration) {
                const t = elapsedTime / duration;
                cam.position.y = originalY + 1 - t; 

                requestAnimationFrame(animateUp);
            } else {
                cam.position.y = originalY;
            }
        }

        requestAnimationFrame(animateUp);
    }

    requestAnimationFrame(animatePullDown);
}
const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(0, 0, 0).normalize();
scene.add(directionalLight);