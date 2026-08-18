"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 12;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 2.5, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xece7e1, 1.5, 100);
    pointLight2.position.set(-10, -10, -5);
    scene.add(pointLight2);

    // 4. Group for 3D Background Mesh & Particles
    const group = new THREE.Group();
    scene.add(group);

    // Floating 3D Wireframe Mesh 1 (Gold TorusKnot)
    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.4, 100, 16);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.35,
    });
    const knotMesh = new THREE.Mesh(knotGeo, wireMat);
    knotMesh.position.set(6, 3, -4);
    group.add(knotMesh);

    // Floating 3D Wireframe Mesh 2 (Icosahedron)
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xece7e1,
      wireframe: true,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.3,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-7, -4, -5);
    group.add(icoMesh);

    // Floating 3D Wireframe Mesh 3 (Octahedron)
    const octGeo = new THREE.OctahedronGeometry(1.4, 1);
    const octMesh = new THREE.Mesh(octGeo, wireMat);
    octMesh.position.set(-5, 5, -8);
    group.add(octMesh);

    // 5. Global Floating Particle Starfield
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    group.add(particleSystem);

    // 6. Interactive Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - width / 2;
      const y = e.clientY - height / 2;
      targetX = (x / width) * 1.5;
      targetY = (y / height) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous 3D Object Rotation
      knotMesh.rotation.y = elapsedTime * 0.3;
      knotMesh.rotation.x = elapsedTime * 0.15;

      icoMesh.rotation.y = -elapsedTime * 0.25;
      icoMesh.rotation.z = elapsedTime * 0.2;

      octMesh.rotation.x = elapsedTime * 0.2;
      octMesh.rotation.y = elapsedTime * 0.35;

      // Particle system subtle float
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 1.2;
      camera.position.y = -mouseY * 1.2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      knotGeo.dispose();
      icoGeo.dispose();
      octGeo.dispose();
      wireMat.dispose();
      icoMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient Gold Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#ECE7E1]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full opacity-70 sm:opacity-85" />
    </div>
  );
}
