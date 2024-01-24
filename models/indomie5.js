import { loader, scene, cam, renderer } from '../index.js';

const loadIndomie5 = (x_coordinate,y_coordinate, z_coordinate) => {
    const sceneIndomie5 = './assets/indomie_goreng-hypeAbis.glb';

    return new Promise((resolve) => {
        loader.load(sceneIndomie5, (gltf) => {
            const indomieModel = gltf.scene;
            scene.add(indomieModel);

            // Set initial properties
            indomieModel.position.set(x_coordinate,y_coordinate, z_coordinate);
            indomieModel.scale.set(0.15, 0.15, 0.15);
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
