import { loader, scene, cam, renderer } from '../index.js';

const loadAir = () => {
    const sceneAir = './assets/boil-water.glb';

    loader.load(sceneAir, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-4.3, -3.2, 0.8);
        model.scale.set(0.4, 0.4, 0.4);
        model.rotation.set(0, 0.2, -0.05)
        
        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
            const clips = gltf.animations;
            console.log(gltf.animations[0])
            //const clip = THREE.AnimationClip.findByName(clips, "Action")
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

export default loadAir;