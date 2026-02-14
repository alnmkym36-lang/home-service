
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useApp } from '../App';

const Scene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const { theme } = useApp();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x2563eb, 15, 60);
    blueLight.position.set(20, 20, 20);
    scene.add(blueLight);

    const orangeLight = new THREE.PointLight(0xf97316, 10, 50);
    orangeLight.position.set(-20, 10, 10);
    scene.add(orangeLight);

    // 3. Grid Floor
    const gridSize = 120;
    const gridDivisions = 60;
    const mainGrid = new THREE.GridHelper(gridSize, gridDivisions, 0x2563eb, 0x1e293b);
    mainGrid.position.y = -10;
    mainGrid.material.transparent = true;
    mainGrid.material.opacity = 0.15;
    scene.add(mainGrid);

    // 4. Materials
    const createMaterial = (color: number) => new THREE.MeshPhysicalMaterial({
      color: color,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      emissiveIntensity: 0,
      wireframe: false
    });

    const matBlue = createMaterial(0x3b82f6);
    const matOrange = createMaterial(0xf97316);
    const matWood = createMaterial(0xd97706);
    const matMetal = createMaterial(0x94a3b8);

    // 5. Objects Group
    const parallaxGroup = new THREE.Group();
    scene.add(parallaxGroup);

    // --- CYBER HOUSE ---
    const houseGroup = new THREE.Group();
    const houseBody = new THREE.Mesh(new THREE.BoxGeometry(4, 3, 4), matBlue);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(3.5, 2, 4), matOrange);
    roof.position.y = 2.5;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(houseBody, roof);
    houseGroup.position.set(15, 0, -20);
    parallaxGroup.add(houseGroup);

    // --- TOOL: HAMMER ---
    const hammerGroup = new THREE.Group();
    const hammerHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3, 12), matWood);
    const hammerHead = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 0.6), matMetal);
    hammerHead.position.y = 1.5;
    const hammerClaw = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.5), matMetal);
    hammerClaw.position.set(0.6, 1.6, 0);
    hammerClaw.rotation.z = Math.PI / 6;
    hammerGroup.add(hammerHandle, hammerHead, hammerClaw);
    hammerGroup.position.set(-15, 8, -10);
    parallaxGroup.add(hammerGroup);

    // --- TOOL: WRENCH ---
    const wrenchGroup = new THREE.Group();
    const wrenchBody = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.5, 0.2), matMetal);
    const wrenchHead1 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 8, 20, Math.PI * 1.5), matMetal);
    wrenchHead1.position.y = 1.25;
    wrenchHead1.rotation.z = Math.PI / 4;
    const wrenchHead2 = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.15, 8, 20, Math.PI * 1.5), matMetal);
    wrenchHead2.position.y = -1.25;
    wrenchHead2.rotation.z = -Math.PI / 1.2;
    wrenchGroup.add(wrenchBody, wrenchHead1, wrenchHead2);
    wrenchGroup.position.set(10, 10, -5);
    parallaxGroup.add(wrenchGroup);

    // --- TOOL: SCREWDRIVER ---
    const driverGroup = new THREE.Group();
    const driverHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.5, 16), matOrange);
    const driverShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2, 12), matMetal);
    driverShaft.position.y = 1.75;
    const driverTip = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 0.05), matMetal);
    driverTip.position.y = 2.75;
    driverGroup.add(driverHandle, driverShaft, driverTip);
    driverGroup.position.set(-8, 12, -8);
    parallaxGroup.add(driverGroup);

    // --- WOOD PLANKS ---
    const planksGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const plank = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 0.8), matWood);
      plank.position.set(i * 0.5, i * 0.4, 0);
      plank.rotation.y = Math.PI / 8 * i;
      planksGroup.add(plank);
    }
    planksGroup.position.set(-12, -4, -15);
    parallaxGroup.add(planksGroup);

    // 6. Particles
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({ 
        size: 0.1, 
        color: 0x60a5fa, 
        transparent: true, 
        opacity: 0.4,
        blending: THREE.AdditiveBlending 
    });
    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particlesMesh);

    camera.position.z = 30;

    // 7. Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const isDark = themeRef.current === 'dark';
      const scrollY = scrollRef.current;

      // Parallax effect
      parallaxGroup.position.y = scrollY * 0.02;
      parallaxGroup.rotation.x = scrollY * 0.0002;

      // Theme UI Updates
      if (isDark) {
        mainGrid.material.opacity = 0.4;
        mainGrid.material.color.set(0x3b82f6);
        particlesMat.color.set(0x60a5fa);
        particlesMat.opacity = 0.7;
        
        [matBlue, matOrange, matWood, matMetal].forEach(m => {
          m.emissiveIntensity = 0.6;
          m.opacity = 0.9;
          m.wireframe = false;
        });
        matBlue.emissive.set(0x1e3a8a);
        matOrange.emissive.set(0x9a3412);
        matWood.emissive.set(0x78350f);
        matMetal.emissive.set(0x334155);
      } else {
        mainGrid.material.opacity = 0.1;
        mainGrid.material.color.set(0x2563eb);
        particlesMat.color.set(0x2563eb);
        particlesMat.opacity = 0.2;
        
        [matBlue, matOrange, matWood, matMetal].forEach(m => {
          m.emissiveIntensity = 0;
          m.opacity = 0.7;
          m.wireframe = true;
        });
      }

      // Floating animations
      houseGroup.position.y = Math.sin(time * 0.5) * 1.5;
      houseGroup.rotation.y += 0.002;

      hammerGroup.rotation.z = Math.sin(time * 0.8) * 0.5;
      hammerGroup.position.y = 8 + Math.cos(time * 0.6) * 2;
      hammerGroup.rotation.y += 0.005;

      wrenchGroup.rotation.x = Math.sin(time * 0.7) * 1;
      wrenchGroup.position.y = 10 + Math.sin(time * 0.9) * 2.5;
      wrenchGroup.rotation.y += 0.008;

      driverGroup.rotation.z = Math.cos(time * 1.1) * 0.8;
      driverGroup.position.y = 12 + Math.sin(time * 0.5) * 3;
      driverGroup.rotation.x += 0.01;

      planksGroup.rotation.x = Math.sin(time * 0.2) * 0.2;
      planksGroup.position.y = -4 + Math.cos(time * 0.5) * 1;

      particlesMesh.rotation.y += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default Scene3D;
