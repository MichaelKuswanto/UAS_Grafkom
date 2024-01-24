import { loader, scene, cam, renderer } from '../index.js';
import loadMentah from './mentah.js';
import * as THREE from 'three';

const loadIndomie4 = (x, y, z) => {
    const sceneIndomie4 = './assets/indomie_goreng-ayamPop.glb';

    return new Promise((resolve) => {
        loader.load(sceneIndomie4, (gltf) => {
            const indomieModel = gltf.scene;
            scene.add(indomieModel);

            // Set initial properties
            indomieModel.position.set(x, y, z);
            indomieModel.scale.set(0.2, 0.2, 0.2);
            indomieModel.rotation.set(4.2, 0, 9.5);

            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            function onClick(event) {
                // Calculate mouse coordinates
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                // Update the raycaster
                raycaster.setFromCamera(mouse, cam);

                // Perform raycasting on the indomieModel
                const intersects = raycaster.intersectObject(indomieModel, true);

                if (intersects.length > 0) {
                    // Handle the click on the model (indomie)
                    handleClickOnIndomie();
                }
            }

            function handleClickOnIndomie() {
                // Set camera position and lookAt based on your desired view
                cam.position.set(-1, -0.5, 1); // Adjust the coordinates based on your desired position

                const lookAtPosition = new THREE.Vector3(-10, -0.7, 3); // Adjust the coordinates based on your desired target
                cam.lookAt(lookAtPosition);

                indomieModel.position.set(-3.55, 0, 1.25)
                indomieModel.scale.set(0.2, 0.2, 0.2);
                indomieModel.rotation.set(0, 0, 5);
                loadMentah();

                // Remove the event listener to prevent additional clicks
                window.removeEventListener('click', onClick);
            }

            // Event listener for mouse click
            window.addEventListener('click', onClick);

            resolve(indomieModel);
        });
    });
};

export default loadIndomie4;