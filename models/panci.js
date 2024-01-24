import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three';
import loadMatang from './matang.js';

const loadPanci = () => {
    const scenePanci = './assets/PANCI.glb';

    loader.load(scenePanci, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-3.55, -1.25, 1.25);
        model.scale.set(0.12, 0.12, 0.12);
        model.rotation.set(0, 1.58, 0)

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
            // Calculate mouse coordinates
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update the raycaster
            raycaster.setFromCamera(mouse, cam);

            // Perform raycasting on the PanciModel
            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                // Handle the click on the model (Panci)
                handleClickOnPanci();
            }
        }

        function handleClickOnPanci() {
            // Set camera position and lookAt based on your desired view
            cam.position.set(-1.2, -0.5, 2.4); // Adjust the coordinates based on your desired position

            const lookAtPosition = new THREE.Vector3(-12, -1.3, 6); // Adjust the coordinates based on your desired target
            cam.lookAt(lookAtPosition);

            model.position.set(-3.55, 0, 2.85)
            model.rotation.set(2.8, -1, 0);
            loadMatang();

            // Remove the event listener to prevent additional clicks
            window.removeEventListener('click', onClick);
        }

        // Event listener for mouse click
        window.addEventListener('click', onClick);


        const animate = () => {
    
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadPanci;