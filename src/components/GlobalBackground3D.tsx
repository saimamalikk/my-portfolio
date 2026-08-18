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
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.z = 10;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 3, 100);
    pointLight1.position.set(12, 12, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xece7e1, 2, 100);
    pointLight2.position.set(-12, -12, -5);
    scene.add(pointLight2);

    // 4. Main 3D Group
    const group = new THREE.Group();
    scene.add(group);

    // Floating 3D Wireframe Geometry 1 (TorusKnot)
    const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.45, 120, 16);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.4,
    });
    const knotMesh = new THREE.Mesh(knotGeo, wireMat);
    knotMesh.position.set(7, 2, -3);
    group.add(knotMesh);

    // Floating 3D Wireframe Geometry 2 (Icosahedron)
    const icoGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xece7e1,
      wireframe: true,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-8, -3, -4);
    group.add(icoMesh);

    // Floating 3D Wireframe Geometry 3 (Dodecahedron)
    const dodGeo = new THREE.DodecahedronGeometry(1.3, 0);
    const dodMesh = new THREE.Mesh(dodGeo, wireMat);
    dodMesh.position.set(-6, 6, -6);
    group.add(dodMesh);

    // 5. Dense 800+ Star Particle Field (Gold & Diamond White Stars)
    const starCount = 850;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const scales = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 25;
      scales[i / 3] = Math.random() * 0.06 + 0.02;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.065,
      transparent: true,
      opacity: 0.8,
    });

    const starSystem = new THREE.Points(starGeo, starMat);
    group.add(starSystem);

    // Secondary White Diamond Stars Layer
    const whiteStarCount = 350;
    const whiteStarGeo = new THREE.BufferGeometry();
    const whitePositions = new Float32Array(whiteStarCount * 3);

    for (let i = 0; i < whiteStarCount * 3; i += 3) {
      whitePositions[i] = (Math.random() - 0.5) * 40;
      whitePositions[i + 1] = (Math.random() - 0.5) * 40;
      whitePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    whiteStarGeo.setAttribute("position", new THREE.BufferAttribute(whitePositions, 3));

    const whiteStarMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
    });

    const whiteStarSystem = new THREE.Points(whiteStarGeo, whiteStarMat);
    group.add(whiteStarSystem);

    // 6. Interactive Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - width / 2;
      const y = e.clientY - height / 2;
      targetX = (x / width) * 2.0;
      targetY = (y / height) * 2.0;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // 7. Render Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous 3D Object Rotation
      knotMesh.rotation.y = elapsedTime * 0.35;
      knotMesh.rotation.x = elapsedTime * 0.2;

      icoMesh.rotation.y = -elapsedTime * 0.3;
      icoMesh.rotation.z = elapsedTime * 0.25;

      dodMesh.rotation.x = elapsedTime * 0.25;
      dodMesh.rotation.y = elapsedTime * 0.4;

      // Starfield rotation & subtle float
      starSystem.rotation.y = elapsedTime * 0.04 + scrollY * 0.0003;
      starSystem.rotation.x = Math.sin(elapsedTime * 0.04) * 0.05;

      whiteStarSystem.rotation.y = -elapsedTime * 0.03 - scrollY * 0.0002;

      // Smooth mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.5 - scrollY * 0.002;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Window Resize
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
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      knotGeo.dispose();
      icoGeo.dispose();
      dodGeo.dispose();
      wireMat.dispose();
      icoMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      whiteStarGeo.dispose();
      whiteStarMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Ambient Gold & Cream Glowing Lighting Orbs */}
      <div className="absolute top-1/6 left-5 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-5 w-[700px] h-[700px] bg-[#D4AF37]/6 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/6 left-1/4 w-[550px] h-[550px] bg-[#ECE7E1]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full opacity-85 sm:opacity-95" />
    </div>
  );
}
