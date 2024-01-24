import { loader, scene, cam, renderer } from '../index.js';

const loadMieMangkok = () => {
    const sceneMieMangkok = './assets/miecoklat1.glb';

    loader.load(sceneMieMangkok, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(2.5, -1.6, 1.8);
        model.scale.set(0.2, 0.2, 0.2);
        model.rotation.set(0, 3, 0)
    });
};

export default loadMieMangkok;