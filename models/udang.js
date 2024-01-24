import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three';

const loadUdang = () => {
    const sceneudang = './assets/udang.glb';

    loader.load(sceneudang, (gltf) => {
        const model = gltf.scene;
        const initialPosition = new THREE.Vector3(3.3, -1.55, 3);
        const resetPositionThresholdY = -1.37; 
    
        scene.add(model);
        model.position.copy(initialPosition);
        model.scale.set(0.2, 0.2, 0.2);
        model.rotation.set(0, 0, 1.58)

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, cam);
            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                handleClickOnShrimp();
            }
        }

        function handleClickOnShrimp() {
            model.position.set(2.9, 1, 2);
            model.rotation.set(0, 0, 1.58);
            const animate = () => {
                if (model.position.y < resetPositionThresholdY) {
                    return;
                }
                model.position.y -= 0.07;
                renderer.render(scene, cam);
                requestAnimationFrame(animate);
            };
            animate();
            window.removeEventListener('click', onClick);
            
        }
        window.addEventListener('click', onClick);
    });
};

export default loadUdang;