
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ServiceIcon3DProps {
  type: string;
  theme: 'light' | 'dark';
  isHovered?: boolean;
}

const ServiceIcon3D: React.FC<ServiceIcon3DProps> = ({ type, theme, isHovered = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(isHovered);
  const themeRef = useRef(theme);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = 120;
    const height = 120;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x3b82f6, 2, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const group = new THREE.Group();
    const materialMain = new THREE.MeshStandardMaterial({ 
      color: theme === 'dark' ? 0x60a5fa : 0x2563eb,
      metalness: 0.8,
      roughness: 0.2,
      emissive: theme === 'dark' ? 0x1e40af : 0x000000,
      emissiveIntensity: theme === 'dark' ? 0.5 : 0
    });
    const materialAccent = new THREE.MeshStandardMaterial({ 
      color: 0xf97316,
      metalness: 0.9,
      roughness: 0.1,
      emissive: theme === 'dark' ? 0x9a3412 : 0x000000,
      emissiveIntensity: theme === 'dark' ? 0.8 : 0
    });

    switch (type) {
      case 'plumbing': {
        const handle = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2, 0.2), materialMain);
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.3), materialMain);
        head.position.y = 0.8;
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.3), materialAccent);
        jaw.position.set(0.4, 1.0, 0);
        group.add(handle, head, jaw);
        group.rotation.z = -Math.PI / 4;
        break;
      }
      case 'electric': {
        const glass = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshStandardMaterial({
            color: 0xfff7ed,
            transparent: true,
            opacity: 0.9,
            emissive: 0xffd6a5,
            emissiveIntensity: theme === 'dark' ? 2 : 0.5
        }));
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.6, 16), materialMain);
        base.position.y = -0.9;
        group.add(glass, base);
        break;
      }
      case 'ac': {
        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 0.3), materialMain);
        frame.material.transparent = true;
        frame.material.opacity = 0.3;
        const center = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), materialAccent);
        group.add(frame, center);
        const blades = new THREE.Group();
        for(let i=0; i<4; i++) {
            const blade = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.3, 0.05), materialMain);
            blade.rotation.z = (Math.PI / 2) * i;
            blades.add(blade);
        }
        group.add(blades);
        (group as any).blades = blades;
        break;
      }
      case 'cleaning': {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 1.2, 16), materialMain);
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 0.4, 16), materialMain);
        neck.position.y = 0.8;
        const trigger = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.2), materialAccent);
        trigger.position.set(0.3, 1.0, 0);
        group.add(body, neck, trigger);
        break;
      }
      case 'carpentry': {
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.8, 12), materialMain);
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.4), materialAccent);
        head.position.y = 0.8;
        group.add(handle, head);
        group.rotation.z = Math.PI / 6;
        break;
      }
      case 'appliances': {
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 1.2), materialMain);
        const door = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 16, 32), materialAccent);
        door.position.z = 0.6;
        const screen = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.1), materialAccent);
        screen.position.set(0, 0.5, 0.6);
        group.add(body, door, screen);
        break;
      }
      case 'painting': {
        const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 1.2, 32, 1, true), materialMain);
        const paint = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.1, 32), materialAccent);
        paint.position.y = 0.4;
        const handle = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.03, 16, 32, Math.PI), materialMain);
        handle.position.y = 0.5;
        group.add(bucket, paint, handle);
        break;
      }
      case 'construction': {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(1, 0.1, 1.5), materialMain);
        blade.rotation.x = Math.PI / 2;
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 12), materialAccent);
        handle.position.y = 0.5;
        handle.rotation.x = -Math.PI / 4;
        group.add(blade, handle);
        break;
      }
      default:
        group.add(new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), materialMain));
    }

    scene.add(group);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const isHover = hoverRef.current;
      const isDark = themeRef.current === 'dark';

      // Update materials live for theme changes
      materialMain.color.set(isDark ? 0x60a5fa : 0x2563eb);
      materialMain.emissive.set(isDark ? 0x1e40af : 0x000000);
      materialMain.emissiveIntensity = isDark ? 0.6 : 0;
      materialAccent.emissive.set(isDark ? 0x9a3412 : 0x000000);
      materialAccent.emissiveIntensity = isDark ? 1.0 : 0;

      group.rotation.y += isHover ? 0.05 : 0.015;

      if (type === 'ac' && (group as any).blades) {
        (group as any).blades.rotation.z += isHover ? 0.4 : 0.15;
      }

      if (type === 'electric') {
        const mat = (group.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = isDark ? (isHover ? 3.0 : 1.5) : (isHover ? 1.5 : 0.5);
      }

      const scale = 1 + Math.sin(elapsedTime * (isHover ? 8 : 2)) * (isHover ? 0.15 : 0.05);
      group.scale.setScalar(scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [type, theme]);

  return <div ref={mountRef} className="w-24 h-24 flex items-center justify-center" />;
};

export default ServiceIcon3D;
