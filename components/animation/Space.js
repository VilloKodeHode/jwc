import { useEffect, useRef } from "react";
import * as THREE from "three";

const THREESpace = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x202929);

    // const light = new THREE.PointLight(0xffffff, 1, 100);
    // light.position.set(50, 0, 10);
    // scene.add(light);

    // Add particles
    const particleCount = 1000;
    const geometry = new THREE.CircleGeometry(0.1, 200);
    const colors = [
      0xf78f6a, 0xff5722, 0xe91e63, 0x9c27b0, 0x673ab7, 0x3f51b5, 0x2196f3,
      0x03a9f4, 0x00bcd4, 0x009688, 0x4caf50, 0x8bc34a, 0xcddc39, 0xffeb3b,
      0xffc107, 0xff9800, 0xff5722,
    ];

    const particles = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      particle.scale.set(0.1, 0.1, 0.1);

      particles.add(particle);
    }

    scene.add(particles);

    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);

      // Update particles
      particles.rotation.x += 0.00002;
      particles.rotation.y += 0.00001;

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0" />;
};

export default THREESpace;
