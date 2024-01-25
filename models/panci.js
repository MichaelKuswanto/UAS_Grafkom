import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three';
import loadMatang from './matang.js';

const loadPanci = () => {
    const scenePanci = './assets/boil_pot.glb';

    loader.load(scenePanci, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-3.55, -1.45, 1.25);
        model.scale.set(2, 2, 2);
        model.rotation.set(0, 1.58, 0);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();


        function onClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, cam);
            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                handleClickOnPanci();
            }
        }

        function handleClickOnPanci() {
            cam.position.set(-1.2, -0.5, 2.4);

            const lookAtPosition = new THREE.Vector3(-12, -1.3, 7);
            cam.lookAt(lookAtPosition);

            model.position.set(-3.55, 0.4, 2.78);
            model.rotation.set(2.8, -1, 0);
            loadMatang();

            window.removeEventListener('click', onClick);

            setTimeout(() => {
                resetPanciPosition();
            }, 3000);
        }

        function resetPanciPosition() {
            model.position.set(-3.55, -1.45, 1.25);
            model.rotation.set(0, 1.58, 0);

            window.addEventListener('click', onClick);
        }

        window.addEventListener('click', onClick);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadPanci;
