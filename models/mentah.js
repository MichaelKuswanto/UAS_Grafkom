import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three';

const loadMentah= () => {
    const sceneMentah = './assets/MIE_MENTAH.glb';

    loader.load(sceneMentah, (gltf) => {
        const model = gltf.scene;
        const initialPosition = new THREE.Vector3(-3.55, 0, 1.25);
        const resetPositionThresholdY = -1.05; 
    
        scene.add(model);
        model.position.copy(initialPosition);
        model.scale.set(0.08, 0.08, 0.08);
        model.rotation.set(0, 0, 1.58);
    
        const animate = () => {
            requestAnimationFrame(animate);
            if (model.position.y < resetPositionThresholdY) {
                scene.remove(model);
            } else {
                model.position.y -= 0.05;
            }
    
            renderer.render(scene, cam);
        };
    
        animate();
    });
};

export default loadMentah