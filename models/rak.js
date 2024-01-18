import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three'

const clickableObjects = []; // Array untuk menyimpan referensi objek yang dapat diklik

const loadRak = () => {
    const sceneRak = './assets/grocery_store_shelf.glb';

    loader.load(sceneRak, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, -3, -1);
        model.scale.set(1.5, 1.5, 1.5);
        model.rotation.set(0, 1.58, 0);

        clickableObjects.push(model);

        // Raycaster setup
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Event listener for mouse click
        window.addEventListener('click', onClick);

        function onClick(event) {
            // Calculate mouse coordinates
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update the raycaster
            raycaster.setFromCamera(mouse, cam);

            // Perform raycasting
            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                // Handle the click on the model (rak)
                handleClickOnRak();
            }
        }

        function handleClickOnRak() {
            // Set camera position and lookAt based on your desired view
            cam.position.set(0, -1.2, 3); // Adjust the coordinates based on your desired position

            const lookAtPosition = new THREE.Vector3(0, 0, 3); // Adjust the coordinates based on your desired target
            cam.lookAt(lookAtPosition);

            // Remove the event listener to prevent additional clicks
            window.removeEventListener('click', onClick);
        }

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };

        animate();
    });
};

export default loadRak;