import { loader, scene, cam, renderer } from '../index.js';

const loadTray = () => {
    const sceneTray = './assets/food_tray.glb';

    loader.load(sceneTray, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(3.3, -1.6, 3);
        model.scale.set(0.5, 0.5, 0.5);
        model.rotation.set(0, 0, 0)
    });
};

export default loadTray;