import { loader, scene, cam, renderer } from '../index.js';

const loadLantai = () => {
    const sceneLantai = './assets/floor.glb';

    loader.load(sceneLantai, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(1, -9.6, -2);
        model.scale.set(0.025, 0.025, 0.025);
        model.rotation.set(0, 0, 0)
        const animate = () => {

            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadLantai;