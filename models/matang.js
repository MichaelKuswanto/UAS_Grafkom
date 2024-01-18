import { loader, scene, cam, renderer } from '../index.js';

const loadMatang = () => {
    const sceneMatang = './assets/MANGKOKDANMIE.glb';

    loader.load(sceneMatang, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-9, -4, 2);
        model.scale.set(0.7, 0.7, 0.7);
        model.rotation.set(0, 0, 0);

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

export default loadMatang;