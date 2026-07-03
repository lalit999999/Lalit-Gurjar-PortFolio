"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RetroGrid() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.14);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);
    camera.rotation.x = -0.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const segmentSize = 40;
    const geometry = new THREE.PlaneGeometry(segmentSize, segmentSize, 40, 40);
    const material = new THREE.MeshBasicMaterial({ color: 0x1f1f1f, wireframe: true });
    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    let frameId: number;
    let z = 0;
    const velocity = 0.05;
    const renderFrame = () => renderer.render(scene, camera);

    const animate = () => {
      z += velocity;
      grid.position.z = z % segmentSize;
      renderFrame();
      frameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      animate();
    }

    const handleVisibility = () => {
      if (prefersReducedMotion) return;
      if (document.hidden) cancelAnimationFrame(frameId);
      else animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderFrame();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
