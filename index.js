import * as THREE from 'three'
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"
import { FirstPersonControls } from "./node_modules/three/examples/jsm/controls/FirstPersonControls.js"
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

const scenePath01 = './assets/indomie.gltf'
const scenePath02 = './assets/mangkok.glb'

loader.load(scenePath01, (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(2, 0, 0);

    const animate = () => {

        requestAnimationFrame(animate);
        model.rotation.x += 0.01
        model.rotation.y += 0.01
        renderer.render(scene, cam);
    };
    animate();
});

loader.load(scenePath02, (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-2, 0, 0);
    model.rotation.set(0.5,0,0)
    const animate = () => {

        requestAnimationFrame(animate);
        model.rotation.y += 0.01
        renderer.render(scene, cam);
    };
    animate();
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);