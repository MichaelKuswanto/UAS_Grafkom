import { loader, scene, cam, renderer } from '../index.js';

const createSwalayanInstance = (position, rotation) => {
    loader.load('./assets/sm_convenience_store_01t.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(position.x, position.y, position.z);
        model.scale.set(0.02, 0.02, 0.02);
        model.rotation.set(rotation.x, rotation.y, rotation.z);
    });
};

const loadSwalayan = () => {
    //createSwalayanInstance({ x: 0, y: -3, z: 4.5 }, { x: 0, y: 0, z: 0 });
    createSwalayanInstance({ x: 0, y: -3, z: -4.5 }, { x: 0, y: 3.15, z: 0 });
    createSwalayanInstance({ x: 4.5, y: -3, z: 0 }, { x: 0, y: 1.58, z: 0 });
    createSwalayanInstance({ x: -4.5, y: -3, z: 0 }, { x: 0, y: -1.58, z: 0 });
};

export default loadSwalayan;