import { loader, scene, cam, renderer } from '../index.js';

const loadMeja = (x, y, z) => {
    const sceneMeja = './assets/meja.glb';

    loader.load(sceneMeja, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(x,y,z);
        model.scale.set(0.3, 0.3, 0.3);
        model.rotation.set(0, 1.58, 0)
    });
};

export default loadMeja;