import React, { useRef, useEffect } from "react";
import * as THREE from "three";

import { useTheme } from "@/components/theme/use-theme";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: THREE.Color;
  type: "array" | "tree" | "graph" | "stack" | "queue" | "linkedList" | "hashTable" | "heap";
  state?: "idle" | "active" | "visited" | "sorted" | "comparing" | "swapping";
  animation?: {
    type:
      | "sort"
      | "traverse"
      | "search"
      | "push"
      | "pop"
      | "enqueue"
      | "dequeue"
      | "insert"
      | "delete";
    progress: number;
    target?: THREE.Vector3;
  };
  radius: number;
}

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) {
      console.error("Container ref is not available");
      return;
    }

    const container = containerRef.current;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000); // Add black background for testing

      // Debug: Log container dimensions
      console.log("Container dimensions:", {
        width: container.clientWidth,
        height: container.clientHeight,
        rect: container.getBoundingClientRect(),
      });

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Increased ambient light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // Increased directional light
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8); // Increased point light
      pointLight.position.set(-5, -5, 5);
      scene.add(pointLight);

      // Debug: Add axes helper
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);

      // Create data structure particles
      const createDataStructureParticle = (type: Particle["type"]) => {
        let geometry: THREE.BufferGeometry;
        const size = 0.3 + Math.random() * 0.2; // Significantly increased size

        // Create different geometries based on data structure type
        switch (type) {
          case "array":
            geometry = new THREE.BoxGeometry(size, size, size);
            break;
          case "tree":
            geometry = new THREE.ConeGeometry(size, size * 2, 4);
            break;
          case "graph":
            geometry = new THREE.OctahedronGeometry(size);
            break;
          case "stack":
            geometry = new THREE.CylinderGeometry(size * 0.5, size * 0.5, size * 2, 8);
            break;
          case "queue":
            geometry = new THREE.BoxGeometry(size * 1.5, size, size);
            break;
          case "linkedList":
            geometry = new THREE.TorusGeometry(size * 0.5, size * 0.2, 8, 16);
            break;
          case "hashTable":
            geometry = new THREE.DodecahedronGeometry(size);
            break;
          case "heap":
            geometry = new THREE.TetrahedronGeometry(size);
            break;
          default:
            geometry = new THREE.SphereGeometry(size, 16, 16);
        }

        // Use MeshPhongMaterial for better lighting
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: 1.0, // Full opacity
          shininess: 100, // Increased shininess
          specular: new THREE.Color(0xffffff),
          emissive: new THREE.Color(0xffffff).multiplyScalar(0.2), // Added emissive
        });
        const particle = new THREE.Mesh(geometry, material);

        // Position in a wider area with better distribution
        const angle = Math.random() * Math.PI * 2;
        const radius = 6 + Math.random() * 2; // Reduced radius for closer view
        const height = (Math.random() - 0.5) * 4; // Reduced height range
        particle.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, height);

        // Add velocity for more dynamic movement
        const speed = 0.005 + Math.random() * 0.003; // Reduced speed for more stable movement
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed * 0.1 // Reduced vertical movement
        );

        // Set particle properties
        particle.userData = {
          type,
          state: "idle",
          velocity,
          originalSize: size,
          pulseSpeed: 0.2 + Math.random() * 0.1, // Reduced pulse speed
          pulsePhase: Math.random() * Math.PI * 2,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.002, // Reduced rotation speed
            y: (Math.random() - 0.5) * 0.002,
            z: (Math.random() - 0.5) * 0.002,
          },
          radius: size * 1.5,
        };

        return particle;
      };

      // Create particles for each data structure type
      const dataStructureTypes: Particle["type"][] = [
        "array",
        "tree",
        "graph",
        "stack",
        "queue",
        "linkedList",
        "hashTable",
        "heap",
      ];

      // Create multiple instances of each data structure type
      const dataStructureParticles = dataStructureTypes.flatMap((type) => [
        createDataStructureParticle(type),
        createDataStructureParticle(type),
        createDataStructureParticle(type),
      ]);

      dataStructureParticles.forEach((particle) => scene.add(particle));

      // Add space background
      const createStar = () => {
        const size = 0.03 + Math.random() * 0.04; // Increased star size
        const geometry = new THREE.SphereGeometry(size, 8, 8);
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: 0.7 + Math.random() * 0.3, // Increased star opacity
          shininess: 70, // Increased star shininess
          specular: new THREE.Color(0xffffff),
        });
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
          (Math.random() - 0.5) * 25, // Adjusted star distribution
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25
        );
        star.userData = {
          originalSize: size,
          pulseSpeed: 0.4 + Math.random() * 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
        };
        return star;
      };

      // Create stars
      const stars = Array.from({ length: 200 }, createStar); // Reduced number of stars
      stars.forEach((star) => scene.add(star));

      // Theme-aware colors using CSS variables
      const getThemeColor = (colorVar: string) => {
        const computedStyle = getComputedStyle(document.documentElement);
        const colorValue = computedStyle.getPropertyValue(colorVar).trim();

        if (!colorValue) {
          console.warn(`Empty color value for ${colorVar}, using fallback`);
          return new THREE.Color(0xffffff);
        }

        try {
          if (colorValue.includes("%")) {
            const hslMatch = colorValue.match(/(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);
            if (hslMatch) {
              const [, h, s, l] = hslMatch;
              const color = new THREE.Color();
              color.setHSL(parseFloat(h) / 360, parseFloat(s) / 100, parseFloat(l) / 100);
              return color;
            }
          }

          if (colorValue.includes("hsl")) {
            const hslMatch = colorValue.match(/hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/);
            if (hslMatch) {
              const [, h, s, l] = hslMatch;
              const color = new THREE.Color();
              color.setHSL(parseFloat(h) / 360, parseFloat(s) / 100, parseFloat(l) / 100);
              return color;
            }
          }

          if (colorValue.startsWith("#")) {
            return new THREE.Color(colorValue);
          }

          if (colorValue.startsWith("rgb")) {
            const rgbMatch = colorValue.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch;
              return new THREE.Color(parseInt(r) / 255, parseInt(g) / 255, parseInt(b) / 255);
            }
          }

          return new THREE.Color(colorValue);
        } catch (error) {
          console.warn(`Error parsing color ${colorValue} for ${colorVar}:`, error);
          return new THREE.Color(0xffffff);
        }
      };

      // Create a color cache
      const colorCache = new Map<string, THREE.Color>();
      let lastThemeClass = document.documentElement.className;

      const getCachedColor = (colorVar: string) => {
        const currentThemeClass = document.documentElement.className;
        const cacheKey = `${colorVar}-${currentThemeClass}`;

        if (!colorCache.has(cacheKey)) {
          colorCache.set(cacheKey, getThemeColor(colorVar));
        }
        return colorCache.get(cacheKey)!;
      };

      // Create nebula effect
      const nebulaGeometry = new THREE.SphereGeometry(15, 128, 128);
      const nebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(getCachedColor("--accent")) },
          color2: { value: new THREE.Color(getCachedColor("--accent2")) },
          color3: { value: new THREE.Color(getCachedColor("--accent3")) },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vUv = uv;
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          uniform vec2 resolution;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          // Improved noise functions
          float random(vec3 p) {
            return fract(sin(dot(p, vec3(12.9898, 78.233, 45.5432))) * 43758.5453);
          }
          
          float noise(vec3 p) {
            vec3 i = floor(p);
            vec3 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            
            float a = random(i);
            float b = random(i + vec3(1.0, 0.0, 0.0));
            float c = random(i + vec3(0.0, 1.0, 0.0));
            float d = random(i + vec3(1.0, 1.0, 0.0));
            float e = random(i + vec3(0.0, 0.0, 1.0));
            float f1 = random(i + vec3(1.0, 0.0, 1.0));
            float g = random(i + vec3(0.0, 1.0, 1.0));
            float h = random(i + vec3(1.0, 1.0, 1.0));
            
            return mix(
              mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
              mix(mix(e, f1, f.x), mix(g, h, f.x), f.y),
              f.z
            );
          }
          
          float fbm(vec3 p) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 0.0;
            
            for (int i = 0; i < 6; i++) {
              value += amplitude * noise(p);
              p *= 2.0;
              amplitude *= 0.5;
            }
            
            return value;
          }
          
          void main() {
            vec3 pos = vPosition * 2.0;
            
            // Create multiple layers of noise
            float n1 = fbm(pos + time * 0.1);
            float n2 = fbm(pos * 2.0 + time * 0.2);
            float n3 = fbm(pos * 4.0 + time * 0.3);
            
            // Add some turbulence
            float turbulence = fbm(pos * 8.0 + time * 0.4);
            
            // Create swirling effect
            float swirl = sin(pos.x * 2.0 + time) * cos(pos.y * 2.0 + time) * sin(pos.z * 2.0 + time);
            
            // Mix colors with noise and turbulence
            vec3 color = mix(
              mix(color1, color2, n1),
              color3,
              n2 * n3
            );
            
            // Add some sparkle
            float sparkle = pow(random(pos + time), 8.0) * 0.5;
            color += vec3(sparkle);
            
            // Add depth through normal-based lighting
            float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0)));
            color *= 0.5 + 0.5 * lighting;
            
            // Add some glow
            float glow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            color += mix(color1, color2, n1) * glow * 0.2;
            
            // Add some cosmic dust
            float dust = fbm(pos * 16.0 + time * 0.5) * 0.5;
            color += vec3(dust) * 0.1;
            
            // Increased base alpha and multipliers
            float alpha = 0.3 + 0.2 * (n1 + n2 + n3) / 3.0;
            alpha += glow * 0.2;
            alpha += sparkle * 0.3;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
      });
      const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
      nebula.position.z = -5;
      scene.add(nebula);

      // Debug: Log nebula setup
      console.log("Nebula setup:", {
        position: nebula.position,
        geometry: nebulaGeometry.parameters,
        material: nebulaMaterial.uniforms,
      });

      // Create godrays
      const godraysGeometry = new THREE.SphereGeometry(20, 64, 64);
      const godraysMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(getCachedColor("--accent")) },
          density: { value: 0.3 },
          decay: { value: 0.98 },
          weight: { value: 0.8 },
          exposure: { value: 1.0 },
          samples: { value: 100 },
          lightPosition: { value: new THREE.Vector3(0, 0, 10) },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float density;
          uniform float decay;
          uniform float weight;
          uniform float exposure;
          uniform int samples;
          uniform vec3 lightPosition;
          
          varying vec2 vUv;
          varying vec3 vPosition;
          
          float random(vec3 p) {
            return fract(sin(dot(p, vec3(12.9898, 78.233, 45.5432))) * 43758.5453);
          }
          
          float noise(vec3 p) {
            vec3 i = floor(p);
            vec3 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            
            float a = random(i);
            float b = random(i + vec3(1.0, 0.0, 0.0));
            float c = random(i + vec3(0.0, 1.0, 0.0));
            float d = random(i + vec3(1.0, 1.0, 0.0));
            float e = random(i + vec3(0.0, 0.0, 1.0));
            float f1 = random(i + vec3(1.0, 0.0, 1.0));
            float g = random(i + vec3(0.0, 1.0, 1.0));
            float h = random(i + vec3(1.0, 1.0, 1.0));
            
            return mix(
              mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
              mix(mix(e, f1, f.x), mix(g, h, f.x), f.y),
              f.z
            );
          }
          
          void main() {
            vec3 rayDir = normalize(vPosition - lightPosition);
            vec3 rayPos = vPosition;
            
            float illuminationDecay = 1.0;
            float totalIllumination = 0.0;
            
            for(int i = 0; i < 100; i++) {
              if(i >= samples) break;
              
              rayPos += rayDir * density;
              float illumination = noise(rayPos + time * 0.1) * weight;
              illumination *= illuminationDecay;
              totalIllumination += illumination;
              illuminationDecay *= decay;
            }
            
            vec3 finalColor = color * totalIllumination * exposure;
            float alpha = length(finalColor) * 0.8;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const godrays = new THREE.Mesh(godraysGeometry, godraysMaterial);
      godrays.position.z = -3;
      scene.add(godrays);

      // Debug: Log godrays setup
      console.log("Godrays setup:", {
        position: godrays.position,
        geometry: godraysGeometry.parameters,
        material: godraysMaterial.uniforms,
      });

      // Add a subtle fog effect
      scene.fog = new THREE.FogExp2(0x000000, 0.02);

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        60, // Reduced FOV for better perspective
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 12; // Moved camera closer
      camera.position.y = 3; // Reduced camera height
      camera.lookAt(0, 0, 0);

      // Debug: Log camera setup
      console.log("Camera setup:", {
        position: camera.position,
        fov: camera.fov,
        aspect: camera.aspect,
        near: camera.near,
        far: camera.far,
      });

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.zIndex = "0";
      renderer.domElement.style.backgroundColor = "transparent";
      renderer.domElement.style.pointerEvents = "none";

      // Debug: Log renderer setup
      console.log("Renderer setup:", {
        size: { width: container.clientWidth, height: container.clientHeight },
        pixelRatio: window.devicePixelRatio,
        domElement: renderer.domElement.getBoundingClientRect(),
      });

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Update godrays
        godraysMaterial.uniforms.time.value += 0.005;
        godrays.rotation.y += 0.0002;
        godrays.rotation.x += 0.0001;
        godrays.rotation.z += 0.0001;

        // Update nebula
        nebulaMaterial.uniforms.time.value += 0.005;
        nebula.rotation.y += 0.0002;
        nebula.rotation.x += 0.0001;
        nebula.rotation.z += 0.0001;

        // Update data structure particles
        const time = Date.now() * 0.001;

        // Handle collisions and movement
        for (let i = 0; i < dataStructureParticles.length; i++) {
          const particle = dataStructureParticles[i];
          const { velocity, pulseSpeed, pulsePhase, rotationSpeed, radius } = particle.userData;

          // Store previous position for collision resolution
          const prevPosition = particle.position.clone();
          particle.position.add(velocity);

          // Boundary checks with smoother damping
          const damping = 0.98;
          const maxRadius = 10; // Reduced boundary
          const maxHeight = 6; // Reduced height boundary

          if (Math.abs(particle.position.x) > maxRadius) {
            velocity.x *= -damping;
            particle.position.x = Math.sign(particle.position.x) * maxRadius;
          }
          if (Math.abs(particle.position.y) > maxRadius) {
            velocity.y *= -damping;
            particle.position.y = Math.sign(particle.position.y) * maxRadius;
          }
          if (Math.abs(particle.position.z) > maxHeight) {
            velocity.z *= -damping;
            particle.position.z = Math.sign(particle.position.z) * maxHeight;
          }

          // Collision detection with other particles
          for (let j = i + 1; j < dataStructureParticles.length; j++) {
            const otherParticle = dataStructureParticles[j];
            const otherRadius = otherParticle.userData.radius;

            const distance = particle.position.distanceTo(otherParticle.position);
            const minDistance = radius + otherRadius;

            if (distance < minDistance) {
              // Calculate collision response
              const collisionNormal = new THREE.Vector3()
                .subVectors(particle.position, otherParticle.position)
                .normalize();

              // Move particles apart
              const overlap = minDistance - distance;
              const moveVector = collisionNormal.multiplyScalar(overlap * 0.5);

              particle.position.add(moveVector);
              otherParticle.position.sub(moveVector);

              // Reflect velocities
              const relativeVelocity = new THREE.Vector3().subVectors(
                velocity,
                otherParticle.userData.velocity
              );
              const velocityAlongNormal = relativeVelocity.dot(collisionNormal);

              if (velocityAlongNormal < 0) {
                const restitution = 0.8;
                const j = -(1 + restitution) * velocityAlongNormal;
                const impulse = collisionNormal.multiplyScalar(j);

                velocity.sub(impulse);
                otherParticle.userData.velocity.add(impulse);
              }
            }
          }

          // Update rotation and scale
          particle.rotation.x += rotationSpeed.x;
          particle.rotation.y += rotationSpeed.y;
          particle.rotation.z += rotationSpeed.z;

          const scale = 1 + Math.sin(time * pulseSpeed + pulsePhase) * 0.1; // Reduced scale variation
          particle.scale.set(scale, scale, scale);

          // Update material
          const material = particle.material as THREE.MeshPhongMaterial;
          if (particle.userData.state === "active") {
            material.color = getCachedColor("--accent");
            material.opacity = 1.0;
            material.emissive = getCachedColor("--accent").multiplyScalar(0.3);
          } else if (particle.userData.state === "visited") {
            material.color = getCachedColor("--accent2");
            material.opacity = 0.9;
            material.emissive = getCachedColor("--accent2").multiplyScalar(0.2);
          } else {
            material.color = getCachedColor("--accent3");
            material.opacity = 0.8;
            material.emissive = getCachedColor("--accent3").multiplyScalar(0.1);
          }

          // Random state changes
          if (Math.random() < 0.001) {
            // Reduced frequency
            const states: Particle["state"][] = ["idle", "active", "visited"];
            particle.userData.state = states[Math.floor(Math.random() * states.length)];
          }
        }

        // Update stars
        stars.forEach((star) => {
          const { originalSize, pulseSpeed, pulsePhase } = star.userData;
          const scale = 1 + Math.sin(time * pulseSpeed + pulsePhase) * 0.2;
          star.scale.set(scale, scale, scale);

          const material = star.material as THREE.MeshPhongMaterial;
          material.opacity = 0.3 + Math.sin(time * pulseSpeed + pulsePhase) * 0.2;

          star.rotation.x += 0.0001;
          star.rotation.y += 0.0001;
        });

        renderer.render(scene, camera);
      };

      // Handle window resize
      const handleResize = () => {
        if (container) {
          const width = container.clientWidth;
          const height = container.clientHeight;

          // Debug: Log resize
          console.log("Resize:", { width, height });

          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);

          // Update shader uniforms
          nebulaMaterial.uniforms.resolution.value.set(width, height);
        }
      };

      // Update colors when theme changes
      const updateColors = () => {
        const currentThemeClass = document.documentElement.className;
        if (currentThemeClass !== lastThemeClass) {
          lastThemeClass = currentThemeClass;
          colorCache.clear();
          nebulaMaterial.uniforms.color1.value = getCachedColor("--accent");
          nebulaMaterial.uniforms.color2.value = getCachedColor("--accent2");
          nebulaMaterial.uniforms.color3.value = getCachedColor("--accent3");
          godraysMaterial.uniforms.color.value = getCachedColor("--accent");
        }
      };

      // Start animation
      animate();

      // Add event listeners
      window.addEventListener("resize", handleResize);
      const themeObserver = new MutationObserver(updateColors);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        themeObserver.disconnect();
        container.removeChild(renderer.domElement);
        scene.clear();
      };
    } catch (error) {
      console.error("Error in ThreeBackground:", error);
    }
  }, [theme]);

  return <div ref={containerRef} className="absolute inset-0" />;
};
