import { loader, scene, cam, renderer } from '../index.js';
import * as THREE from 'three'

const loadSmoke = () => {
    const sceneSmoke = './assets/smoke.glb';

    loader.load(sceneSmoke, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-3.55, -0.9, 0.75);
        model.scale.set(0.045, 0.045, 0.045);
        model.rotation.set(1.8, 0, 0);

        function onClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, cam);
            const intersects = raycaster.intersectObject(model, true);

            if (intersects.length > 0) {
                handleClickOnSmoke();
            }
        }

        function handleClickOnSmoke() {
            cam.position.set(-1.2, -0.5, 2.4);

            const lookAtPosition = new THREE.Vector3(-12, -1.3, 6);
            cam.lookAt(lookAtPosition);

            model.position.set(-3.55, 0.4, 2.78);
            model.rotation.set(2.8, -1, 0);

            window.removeEventListener('click', onClick);

            setTimeout(() => {
                resetSmokePosition();
            }, 3000);
        }

        function resetSmokePosition() {
            model.position.set(-3.55, -0.9, 0.75);
            model.rotation.set(1.8, 0, 0);

            window.addEventListener('click', onClick);
        }

        // Dari Youtube/Internet
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

export default loadSmoke;
