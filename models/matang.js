import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three';

const loadMatang = () => {
    const sceneMatang = './assets/miematang0.glb';

    loader.load(sceneMatang, (gltf) => {
        const model = gltf.scene;
        const initialPosition = new THREE.Vector3(-3.5, -0.08, 3);
        const resetPositionThresholdY = -1.45; 
    
        scene.add(model);
        model.position.copy(initialPosition);
        model.scale.set(1.8, 1.8, 1.8);
        model.rotation.set(0, 0, 0);
    
        const animate = () => {
            if (model.position.y < resetPositionThresholdY) {
                return;
            }
            model.position.y -= 0.07;
            renderer.render(scene, cam);
            requestAnimationFrame(animate);
        };
        animate();
    });
};

export default loadMatang;