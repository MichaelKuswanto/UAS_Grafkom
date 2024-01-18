import { loader, scene, cam, renderer } from '../index.js';

const loadPanci = () => {
    const scenePanci = './assets/PANCI.glb';

    loader.load(scenePanci, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(-4.3, -3.2, 0.8);
        model.scale.set(0.4, 0.4, 0.4);
        model.rotation.set(0, 0.2, -0.05)
        const animate = () => {
    
            requestAnimationFrame(animate);
            renderer.render(scene, cam);
        };
        animate();
    });
};

export default loadPanci;