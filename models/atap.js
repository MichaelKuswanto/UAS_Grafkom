import { loader, scene, cam, renderer } from '../index.js';

const loadAtap = () => {
    const sceneAloadAtap = './assets/cyberpunk_japanese_roof.glb';

    loader.load(sceneAloadAtap, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, 2.8, 0);
        model.scale.set(0.02, 0.02, 0.02);
        model.rotation.set(0, 0, 0)
        const animate = () => {

            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadAtap;