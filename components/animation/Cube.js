import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import Cannon from "cannon";

const THREEBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x202929);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(50, 50, 50);
    scene.add(light);

    // Add particles
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 800;
      positions[i3 + 1] = (Math.random() - 0.5) * 800;
      positions[i3 + 2] = (Math.random() - 0.5) * 800;

      color.setHSL(i / particleCount, 1.0, 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particles, pMaterial);
    scene.add(particleSystem);

    const geometry = new THREE.BoxGeometry(1, 1, 1, 50, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xf78f6a,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add a ball with wireframe
    const ballGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const ballMaterial = new THREE.MeshBasicMaterial({
      color: 0xf78f6a,
      // wireframe: true,
      wireframeLinewidth: 2, // adjust the width of the wireframe lines
    });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(-2, 0, 0);
    scene.add(ball);

    // Create a cannon.js world
    const world = new Cannon.World();
    world.gravity.set(0, 0, 0); // Set gravity

    // Create a cannon.js body for the cube
    const mass = 1; // Mass in kg
    const size = new Cannon.Vec3(10, 10, 10); // Size in meters
    const boxShape = new Cannon.Box(size);
    const boxBody = new Cannon.Body({
      mass: mass,
      shape: boxShape,
    });
    boxBody.position.set(5, 5, 5); // Initial position in meters
    world.addBody(boxBody);

    // Create a cannon.js body for the sphere
    const sphereShape = new Cannon.Sphere(5);
    const sphereBody = new Cannon.Body({
      mass: mass,
      shape: sphereShape,
    });
    sphereBody.position.set(-5, -5, -5); // Initial position in meters
    world.addBody(sphereBody);

    // Add DragControls
    const dragControls = new DragControls([cube], camera, renderer.domElement);
    dragControls.addEventListener("dragstart", () => {
      // Stop rotating the cube while it's being dragged
      cube.userData.rotating = false;
    });
    dragControls.addEventListener("dragend", () => {
      // Resume rotating the cube when dragging is done
      cube.userData.rotating = true;
    });

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.001;

      ball.rotation.x += 0.001;
      ball.rotation.y += 0.002;
      // Update particles
      particleSystem.rotation.x += 0.00002;
      particleSystem.rotation.y += 0.00001;

      if (cube.userData.rotating) {
        // Rotate the cube if it's not being dragged
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.001;

        // Add physics-based motion to the cube
        cube.userData.velocity = cube.userData.velocity || new THREE.Vector3();
        cube.userData.acceleration =
          cube.userData.acceleration || new THREE.Vector3(0, -0.01, 0);
        cube.userData.velocity.add(cube.userData.acceleration);
        cube.position.add(cube.userData.velocity);

        // Reverse the y-velocity if the cube hits the ground
        if (cube.position.y < 0) {
          cube.position.y = -1;
          cube.userData.velocity.y = -cube.userData.velocity.y * 0.9;
        }
      }

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default THREEBackground;
