import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const ThreeComponent = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Configuración de THREE.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const clock = new THREE.Clock();

    // Debug
    const gui = new dat.GUI();

    //axis helper
    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);

    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({color:0xff0000})
    )
    
    scene.add(cube)

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load('/static/textures/matcaps/1.png');
    const matcapTextureTorus = textureLoader.load('/static/textures/matcaps/3.png');

    //LOAD FUENTE
    const fontLoader = new THREE.CubeTextureLoader();
   
    fontLoader.load('/static/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('Agustin Boasso', {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 3,
      });
      
      textGeometry.center();
     
      const textMaterial = new THREE.MeshMatcapMaterial();
      textMaterial.matcap = matcapTexture;

      const text = new THREE.Mesh(textGeometry, textMaterial);
      
      scene.add(text);

      console.time('donuts');

      const torusGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
      const torusMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTextureTorus });

      for (let i = 0; i < 300; i++) {
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);

        torus.position.x = (Math.random() - 0.5) * 10;
        torus.position.y = (Math.random() - 0.5) * 10;
        torus.position.z = (Math.random() - 0.5) * 10;

        torus.rotation.x = Math.random() * Math.PI;
        torus.rotation.y = Math.random() * Math.PI;

        const scale = Math.random();
        torus.scale.set(scale, scale, scale);

        scene.add(torus);
      }
      console.timeEnd('donuts');
    });

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeComponent;