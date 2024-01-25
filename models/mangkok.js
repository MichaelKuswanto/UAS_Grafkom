import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three'
import loadMieMangkok from './mie_mangkok.js';

const loadMangkok = () => {
    const sceneMangkok = './assets/mangkok.glb';

    loader.load(sceneMangkok, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-3.5, -1.6, 3);
        model.scale.set(0.2, 0.2, 0.2);
        model.rotation.set(0, 0, 0)

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, cam);

            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                handleClickOnMangkok();
            }
        }

        function handleClickOnMangkok() {
            cam.position.set(1.5, 0.2, 2); 
            const lookAtPosition = new THREE.Vector3(12, -8, 2); 
            cam.lookAt(lookAtPosition);
            loadMieMangkok();

            window.removeEventListener('click', onClick);
        }

        window.addEventListener('click', onClick);


        const animate = () => {
    
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
    
};

export default loadMangkok;