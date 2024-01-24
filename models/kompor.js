import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three'

const loadKompor = () => {
    const sceneKompor = './assets/kompor.glb';

    loader.load(sceneKompor, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-3.5, -1.5, 1.2);
        model.scale.set(0.3, 0.3, 0.3);
        model.rotation.set(0, 1.58, -0.05)
        
        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
            const clips = gltf.animations;
            const action = mixer.clipAction(clips[0]);
            action.play();

            const clock = new THREE.Clock();
            function animate()  {
                const deltaTime = clock.getDelta();
                mixer.update(deltaTime);
                renderer.render(scene, cam);
            }
            renderer.setAnimationLoop(animate);
        } else {
            console.error("No animations found in the GLTF file.");
        }
    });
};

export default loadKompor;