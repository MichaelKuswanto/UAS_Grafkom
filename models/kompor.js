import { loader, scene, cam, renderer } from '../index.js';

const loadKompor = () => {
    const sceneKompor = './assets/kompor.glb';

    loader.load(sceneKompor, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-4, -4, 1);
        model.scale.set(1.2, 1.2, 1.2);
        model.rotation.set(0, 0.2, -0.05)
        
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadKompor;