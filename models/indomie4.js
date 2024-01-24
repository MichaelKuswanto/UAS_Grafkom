import { loader, scene, cam, renderer } from '../index.js';
import loadMentah from './mentah.js';
import * as THREE from 'three';

const loadIndomie4 = () => {
    const sceneIndomie4 = './assets/indomie_goreng-ayamPop.glb';

    return new Promise((resolve) => {
        loader.load(sceneIndomie4, (gltf) => {
            const indomieModel = gltf.scene;
            scene.add(indomieModel);

            // Set initial properties
            indomieModel.position.set(-2, -0.43, -0.8);
            indomieModel.scale.set(0.2, 0.2, 0.2);
            indomieModel.rotation.set(4.2, 0, 9.5);

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, cam);
            };
            animate();

            resolve(indomieModel);
        });
    });
};

export default loadIndomie4;
