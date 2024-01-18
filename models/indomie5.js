import { loader, scene, cam, renderer } from '../index.js';

const loadIndomie5 = () => {
    const sceneIndomie5 = './assets/indomie_goreng-hypeAbis.glb';

    return new Promise((resolve) => {
        loader.load(sceneIndomie5, (gltf) => {
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

export default loadIndomie5;