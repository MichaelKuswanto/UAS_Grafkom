import { loader, scene, cam, renderer } from '../index.js';

const loadegg = () => {
    const sceneegg = './assets/meatball.glb';

    loader.load(sceneegg, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-4, 0, 1);
        model.scale.set(1, 1, 1);
        model.rotation.set(0, 0.2, -0.03)
        const animate = () => {

            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadegg;