import { loader, scene, cam, renderer } from '../index.js';

const loadMentah= () => {
    const sceneMentah = './assets/MIE_MENTAH.glb';

    loader.load(sceneMentah, (gltf) => {
        const model = gltf.scene;
        const initialPosition = new THREE.Vector3(0, 0.8, 0.3);
        const resetPositionThresholdX = -4.0;
        const resetPositionThresholdY = 3.0; 
    
        scene.add(model);
        model.position.copy(initialPosition);
        model.scale.set(0.26, 0.26, 0.26);
        model.rotation.set(5, 0.3, 9.5);
    
        const animate = () => {
            requestAnimationFrame(animate);
            //controls.update();
            if (model.position.x < resetPositionThresholdX || model.position.y > resetPositionThresholdY) {
                model.position.copy(initialPosition); 
            } else {
                model.position.x -= 0.009;
                model.position.y += 0.003;
                model.position.z += 0.0016;
            }
    
            renderer.render(scene, cam);
        };
    
        animate();
    });
};

export default loadMentah