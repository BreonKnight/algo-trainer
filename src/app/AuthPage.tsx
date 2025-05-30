import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/hooks/useAuth";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: THREE.Color;
  type: "array" | "tree" | "graph" | "stack";
  state?: "idle" | "active" | "visited" | "sorted" | "comparing" | "swapping";
  animation?: {
    type: "sort" | "traverse" | "search" | "push" | "pop";
    progress: number;
    target?: THREE.Vector3;
  };
}

export default function AuthPage() {
  const { login, register, isAuthenticated, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error("Container ref is not available");
      return;
    }

    const container = containerRef.current; // Store ref in variable for cleanup

    try {
      console.log("Starting Three.js initialization...");

      // Scene setup
      console.log("Creating scene...");
      const scene = new THREE.Scene();

      console.log("Creating camera...");
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      console.log("Creating renderer...");
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });

      console.log("Setting renderer size...");
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      console.log("Appending renderer to container...");
      container.appendChild(renderer.domElement);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.zIndex = "0";
      renderer.domElement.style.backgroundColor = "transparent";
      renderer.domElement.style.pointerEvents = "none";

      // Camera position
      camera.position.z = 5;

      // Create particles
      console.log("Creating particles...");
      const particles: Particle[] = [];
      const particleCount = 100;

      // Theme-aware colors using CSS variables
      const getThemeColor = (colorVar: string) => {
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue(colorVar).trim() || "#000000";
      };

      const colors = {
        // Base colors from theme
        array: getThemeColor("--primary"),
        tree: getThemeColor("--destructive"),
        graph: getThemeColor("--secondary"),
        stack: getThemeColor("--accent"),
        active: getThemeColor("--accent"),
        visited: getThemeColor("--secondary"),
        sorted: getThemeColor("--primary"),
        comparing: getThemeColor("--destructive"),
        swapping: getThemeColor("--accent"),

        // Additional theme colors
        accent2: getThemeColor("--accent2"),
        accent3: getThemeColor("--accent3"),
        muted: getThemeColor("--muted"),
        mutedForeground: getThemeColor("--muted-foreground"),
        card: getThemeColor("--card"),
        cardForeground: getThemeColor("--card-foreground"),
      };

      // Create particles with initial states
      for (let i = 0; i < particleCount; i++) {
        const type = ["array", "tree", "graph", "stack"][
          Math.floor(Math.random() * 4)
        ] as Particle["type"];

        // Create a more diverse color palette based on type
        let baseColor;
        switch (type) {
          case "array":
            baseColor = new THREE.Color(colors.array);
            break;
          case "tree":
            baseColor = new THREE.Color(colors.tree);
            break;
          case "graph":
            baseColor = new THREE.Color(colors.graph);
            break;
          case "stack":
            baseColor = new THREE.Color(colors.stack);
            break;
        }

        // Add some variation to the base color
        const hsl = { h: 0, s: 0, l: 0 };
        baseColor.getHSL(hsl);
        const saturation = Math.min(hsl.s + (Math.random() * 0.2 - 0.1), 1);
        const lightness = Math.min(hsl.l + (Math.random() * 0.2 - 0.1), 1);
        baseColor.setHSL(hsl.h, saturation, lightness);

        particles.push({
          position: new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
          ),
          size: Math.random() * 0.05 + 0.025,
          color: baseColor,
          type,
          state: "idle",
          animation: {
            type: ["sort", "traverse", "search", "push", "pop"][Math.floor(Math.random() * 5)] as
              | "sort"
              | "traverse"
              | "search"
              | "push"
              | "pop",
            progress: 0,
          },
        });
      }

      console.log("Creating geometries...");
      // Create custom geometries for different data structures
      const createDataStructureGeometry = (type: Particle["type"]) => {
        const group = new THREE.Group();

        // Helper function to create text sprite
        const createTextSprite = (text: string, position: THREE.Vector3) => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) return null;

          canvas.width = 256;
          canvas.height = 128;
          context.font = "Bold 40px Arial";
          context.fillStyle = "white";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(text, canvas.width / 2, canvas.height / 2);

          const texture = new THREE.CanvasTexture(canvas);
          const material = new THREE.SpriteMaterial({ map: texture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(0.5, 0.25, 1);
          sprite.position.copy(position);
          return sprite;
        };

        switch (type) {
          case "array": {
            // Create an array-like structure with contiguous memory cells
            const cellCount = 6;
            const cellSize = 0.15;
            const spacing = 0.02;

            for (let i = 0; i < cellCount; i++) {
              // Create cell container
              const cell = new THREE.Mesh(
                new THREE.BoxGeometry(cellSize, cellSize, cellSize),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                })
              );
              cell.position.x = i * (cellSize + spacing);
              group.add(cell);

              // Add cell content (random number)
              const content = new THREE.Mesh(
                new THREE.SphereGeometry(cellSize * 0.3, 8, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              content.position.x = i * (cellSize + spacing);
              group.add(content);

              // Add index label
              const indexSprite = createTextSprite(
                i.toString(),
                new THREE.Vector3(i * (cellSize + spacing), -cellSize * 0.8, 0)
              );
              if (indexSprite) group.add(indexSprite);

              // Add random value
              const value = Math.floor(Math.random() * 100);
              const valueSprite = createTextSprite(
                value.toString(),
                new THREE.Vector3(i * (cellSize + spacing), 0, cellSize * 0.6)
              );
              if (valueSprite) group.add(valueSprite);
            }

            // Add array label
            const arrayLabel = createTextSprite(
              "Array",
              new THREE.Vector3(
                (cellCount * (cellSize + spacing)) / 2 - cellSize,
                cellSize * 1.2,
                0
              )
            );
            if (arrayLabel) group.add(arrayLabel);
            break;
          }
          case "tree": {
            // Create a more realistic binary tree structure
            const createTreeNode = (
              depth: number,
              x: number,
              y: number,
              value: number
            ): THREE.Group => {
              const nodeGroup = new THREE.Group();

              // Node with better visual representation
              const node = new THREE.Mesh(
                new THREE.CircleGeometry(0.08, 16),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  side: THREE.DoubleSide,
                })
              );
              node.position.set(x, y, 0);
              nodeGroup.add(node);

              // Add value label
              const valueSprite = createTextSprite(value.toString(), new THREE.Vector3(x, y, 0.01));
              if (valueSprite) nodeGroup.add(valueSprite);

              if (depth > 0) {
                const spacing = 0.4;
                const leftX = x - spacing;
                const rightX = x + spacing;
                const nextY = y - spacing;

                // Left child
                const leftChild = createTreeNode(
                  depth - 1,
                  leftX,
                  nextY,
                  Math.floor(Math.random() * 100)
                );
                nodeGroup.add(leftChild);

                // Left connection with arrow
                const leftConnector = new THREE.Group();
                const line = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                line.position.set((x + leftX) / 2, (y + nextY) / 2, 0);
                line.rotation.z = Math.atan2(nextY - y, leftX - x);
                leftConnector.add(line);

                // Add arrow head
                const arrowHead = new THREE.Mesh(
                  new THREE.ConeGeometry(0.03, 0.06, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                arrowHead.position.set(leftX + 0.1, nextY + 0.1, 0);
                arrowHead.rotation.z = Math.atan2(nextY - y, leftX - x) + Math.PI / 2;
                leftConnector.add(arrowHead);
                nodeGroup.add(leftConnector);

                // Right child
                const rightChild = createTreeNode(
                  depth - 1,
                  rightX,
                  nextY,
                  Math.floor(Math.random() * 100)
                );
                nodeGroup.add(rightChild);

                // Right connection with arrow
                const rightConnector = new THREE.Group();
                const rightLine = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                rightLine.position.set((x + rightX) / 2, (y + nextY) / 2, 0);
                rightLine.rotation.z = Math.atan2(nextY - y, rightX - x);
                rightConnector.add(rightLine);

                // Add arrow head
                const rightArrowHead = new THREE.Mesh(
                  new THREE.ConeGeometry(0.03, 0.06, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                rightArrowHead.position.set(rightX - 0.1, nextY + 0.1, 0);
                rightArrowHead.rotation.z = Math.atan2(nextY - y, rightX - x) + Math.PI / 2;
                rightConnector.add(rightArrowHead);
                nodeGroup.add(rightConnector);
              }

              return nodeGroup;
            };

            const tree = createTreeNode(2, 0, 0, Math.floor(Math.random() * 100));
            group.add(tree);

            // Add tree label
            const treeLabel = createTextSprite("Binary Tree", new THREE.Vector3(0, 0.6, 0));
            if (treeLabel) group.add(treeLabel);
            break;
          }
          case "graph": {
            // Create a more realistic graph structure
            const nodeCount = 6;
            const radius = 0.3;

            // Create nodes in a circular arrangement
            const nodes = [];
            for (let i = 0; i < nodeCount; i++) {
              const angle = (i / nodeCount) * Math.PI * 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              // Create node with better visual representation
              const nodeGroup = new THREE.Group();

              // Outer circle
              const outerCircle = new THREE.Mesh(
                new THREE.CircleGeometry(0.06, 16),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  side: THREE.DoubleSide,
                })
              );
              nodeGroup.add(outerCircle);

              // Inner circle
              const innerCircle = new THREE.Mesh(
                new THREE.CircleGeometry(0.04, 16),
                new THREE.MeshBasicMaterial({
                  color: 0x000000,
                  side: THREE.DoubleSide,
                })
              );
              nodeGroup.add(innerCircle);

              // Add node label
              const nodeLabel = createTextSprite(
                String.fromCharCode(65 + i),
                new THREE.Vector3(x, y, 0.01)
              );
              if (nodeLabel) nodeGroup.add(nodeLabel);

              nodeGroup.position.set(x, y, 0);
              group.add(nodeGroup);
              nodes.push({ x, y });
            }

            // Create edges between nodes with better visual representation
            for (let i = 0; i < nodeCount; i++) {
              for (let j = i + 1; j < nodeCount; j++) {
                const start = nodes[i];
                const end = nodes[j];

                const length = Math.sqrt(
                  Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
                );

                // Create edge with arrow
                const edgeGroup = new THREE.Group();

                // Edge line
                const edge = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.005, 0.005, length, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                edge.position.set((start.x + end.x) / 2, (start.y + end.y) / 2, 0);
                edge.rotation.z = Math.atan2(end.y - start.y, end.x - start.x);
                edgeGroup.add(edge);

                // Add weight label
                const weight = Math.floor(Math.random() * 10);
                const weightSprite = createTextSprite(
                  weight.toString(),
                  new THREE.Vector3((start.x + end.x) / 2, (start.y + end.y) / 2, 0.05)
                );
                if (weightSprite) edgeGroup.add(weightSprite);

                // Arrow head
                const arrowHead = new THREE.Mesh(
                  new THREE.ConeGeometry(0.02, 0.04, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                arrowHead.position.set(
                  end.x - Math.cos(Math.atan2(end.y - start.y, end.x - start.x)) * 0.08,
                  end.y - Math.sin(Math.atan2(end.y - start.y, end.x - start.x)) * 0.08,
                  0
                );
                arrowHead.rotation.z = Math.atan2(end.y - start.y, end.x - start.x) + Math.PI / 2;
                edgeGroup.add(arrowHead);

                group.add(edgeGroup);
              }
            }

            // Add graph label
            const graphLabel = createTextSprite("Graph", new THREE.Vector3(0, radius + 0.2, 0));
            if (graphLabel) group.add(graphLabel);
            break;
          }
          case "stack": {
            // Create a more realistic stack structure
            const plateCount = 5;
            const spacing = 0.1;
            const plateSize = 0.2;

            for (let i = 0; i < plateCount; i++) {
              // Create plate with better visual representation
              const plateGroup = new THREE.Group();

              // Main plate
              const plate = new THREE.Mesh(
                new THREE.BoxGeometry(plateSize, plateSize * 0.1, plateSize),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                })
              );
              plate.position.y = i * spacing;
              plateGroup.add(plate);

              // Plate content
              const content = new THREE.Mesh(
                new THREE.BoxGeometry(plateSize * 0.8, plateSize * 0.05, plateSize * 0.8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              content.position.y = i * spacing;
              plateGroup.add(content);

              // Add value label
              const value = Math.floor(Math.random() * 100);
              const valueSprite = createTextSprite(
                value.toString(),
                new THREE.Vector3(0, i * spacing, plateSize * 0.6)
              );
              if (valueSprite) plateGroup.add(valueSprite);

              // Add shadow effect
              const shadow = new THREE.Mesh(
                new THREE.PlaneGeometry(plateSize * 1.2, plateSize * 1.2),
                new THREE.MeshBasicMaterial({
                  color: 0x000000,
                  transparent: true,
                  opacity: 0.2,
                  side: THREE.DoubleSide,
                })
              );
              shadow.position.y = i * spacing - 0.02;
              shadow.rotation.x = Math.PI / 2;
              plateGroup.add(shadow);

              group.add(plateGroup);
            }

            // Add stack label
            const stackLabel = createTextSprite(
              "Stack",
              new THREE.Vector3(plateSize * 1.2, (plateCount * spacing) / 2, 0)
            );
            if (stackLabel) group.add(stackLabel);
            break;
          }
        }

        return group;
      };

      console.log("Creating materials...");
      // Create materials for each particle
      const materials = particles.map(
        (p) =>
          new THREE.MeshBasicMaterial({
            color: p.color,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
          })
      );

      console.log("Creating meshes...");
      // Create meshes with custom geometries
      const meshes = particles.map((p, i) => {
        const geometry = createDataStructureGeometry(p.type);
        geometry.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = materials[i];
          }
        });
        return geometry;
      });
      meshes.forEach((mesh) => scene.add(mesh));

      console.log("Setting up animation...");
      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Update particle positions and animations
        meshes.forEach((mesh, i) => {
          const particle = particles[i];

          // Handle animations
          if (particle.animation) {
            particle.animation.progress += 0.002; // Slowed down animation speed

            switch (particle.animation.type) {
              case "sort":
                if (particle.type === "array") {
                  // Simulate bubble sort animation with smoother transitions
                  const arrayLength = 6;
                  const currentStep = Math.floor(
                    particle.animation.progress * arrayLength * arrayLength
                  );
                  const i = Math.floor(currentStep / arrayLength);
                  const j = currentStep % arrayLength;

                  if (i < arrayLength - 1 && j < arrayLength - i - 1) {
                    // Only change state when actually comparing or swapping
                    if (j === 0) {
                      particle.state = "comparing";
                    } else if (j === 1) {
                      particle.state = "swapping";
                    }
                  } else if (i >= arrayLength - 1) {
                    particle.state = "sorted";
                  }
                }
                break;

              case "traverse":
                if (particle.type === "tree" || particle.type === "graph") {
                  // Smoother traversal animation
                  const steps = 20; // More steps for smoother transition
                  const currentStep = Math.floor(particle.animation.progress * steps);
                  if (currentStep % 4 === 0) {
                    // Reduced frequency of state changes
                    particle.state = "active";
                  } else if (currentStep % 4 === 2) {
                    particle.state = "visited";
                  }
                }
                break;

              case "search":
                if (particle.type === "array" || particle.type === "tree") {
                  // Smoother search animation
                  const steps = 16; // More steps for smoother transition
                  const currentStep = Math.floor(particle.animation.progress * steps);
                  if (currentStep % 4 === 0) {
                    // Reduced frequency of state changes
                    particle.state = "comparing";
                  } else if (currentStep % 4 === 2) {
                    particle.state = "active";
                  }
                }
                break;

              case "push":
              case "pop":
                if (particle.type === "stack") {
                  // Smoother stack operations
                  const steps = 8; // More steps for smoother transition
                  const currentStep = Math.floor(particle.animation.progress * steps);
                  if (currentStep % 4 === 0) {
                    // Reduced frequency of state changes
                    particle.state = "active";
                  } else if (currentStep % 4 === 2) {
                    particle.state = "idle";
                  }
                }
                break;
            }

            // Reset animation when complete
            if (particle.animation.progress >= 1) {
              particle.animation.progress = 0;
              particle.state = "idle";
            }
          }

          // Update color based on state with smooth transition
          if (particle.state && particle.state !== "idle") {
            const stateColor = new THREE.Color(colors[particle.state]);
            const currentColor = new THREE.Color();

            mesh.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const material = child.material as THREE.MeshBasicMaterial;
                currentColor.copy(material.color);

                // Convert colors to HSL for smoother transitions
                const currentHSL = { h: 0, s: 0, l: 0 };
                const targetHSL = { h: 0, s: 0, l: 0 };
                currentColor.getHSL(currentHSL);
                stateColor.getHSL(targetHSL);

                // Interpolate HSL values
                const newHSL = {
                  h: currentHSL.h + (targetHSL.h - currentHSL.h) * 0.05,
                  s: currentHSL.s + (targetHSL.s - currentHSL.s) * 0.05,
                  l: currentHSL.l + (targetHSL.l - currentHSL.l) * 0.05,
                };

                // Set new color using interpolated HSL values
                material.color.setHSL(newHSL.h, newHSL.s, newHSL.l);
              }
            });
          }

          // Update position
          particle.position.add(particle.velocity);

          // Bounce off boundaries
          if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
          if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
          if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

          mesh.position.copy(particle.position);

          // Smoother rotation based on animation type
          if (particle.animation) {
            switch (particle.animation.type) {
              case "sort":
                mesh.rotation.y += 0.005; // Slowed down rotation
                break;
              case "traverse":
                mesh.rotation.x += 0.003;
                break;
              case "search":
                mesh.rotation.z += 0.004;
                break;
              default:
                mesh.rotation.x += 0.001;
                mesh.rotation.y += 0.001;
                mesh.rotation.z += 0.001;
            }
          } else {
            mesh.rotation.x += 0.001;
            mesh.rotation.y += 0.001;
            mesh.rotation.z += 0.001;
          }
        });

        renderer.render(scene, camera);
      };

      // Handle window resize
      const handleResize = () => {
        console.log("Handling window resize...");
        if (container) {
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        }
      };

      window.addEventListener("resize", handleResize);
      console.log("Starting animation loop...");
      animate();

      console.log("Three.js scene initialized successfully");

      // Update colors when theme changes
      const updateColors = () => {
        const newColors = {
          array: getThemeColor("--primary"),
          tree: getThemeColor("--destructive"),
          graph: getThemeColor("--secondary"),
          stack: getThemeColor("--accent"),
          active: getThemeColor("--accent"),
          visited: getThemeColor("--secondary"),
          sorted: getThemeColor("--primary"),
          comparing: getThemeColor("--destructive"),
          swapping: getThemeColor("--accent"),
          accent2: getThemeColor("--accent2"),
          accent3: getThemeColor("--accent3"),
        };

        meshes.forEach((mesh, i) => {
          const particle = particles[i];
          let newColor;

          if (particle.state && particle.state !== "idle") {
            newColor = new THREE.Color(newColors[particle.state]);
          } else {
            // Create a new base color with variation
            const baseColor = new THREE.Color(newColors[particle.type]);
            const hsl = { h: 0, s: 0, l: 0 };
            baseColor.getHSL(hsl);
            const saturation = Math.min(hsl.s + (Math.random() * 0.2 - 0.1), 1);
            const lightness = Math.min(hsl.l + (Math.random() * 0.2 - 0.1), 1);
            newColor = new THREE.Color().setHSL(hsl.h, saturation, lightness);
          }

          mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const material = child.material as THREE.MeshBasicMaterial;
              const currentColor = material.color.clone();
              const currentHSL = { h: 0, s: 0, l: 0 };
              const targetHSL = { h: 0, s: 0, l: 0 };

              currentColor.getHSL(currentHSL);
              newColor.getHSL(targetHSL);

              // Interpolate HSL values with a smaller factor for smoother transitions
              const newHSL = {
                h: currentHSL.h + (targetHSL.h - currentHSL.h) * 0.03,
                s: currentHSL.s + (targetHSL.s - currentHSL.s) * 0.03,
                l: currentHSL.l + (targetHSL.l - currentHSL.l) * 0.03,
              };

              material.color.setHSL(newHSL.h, newHSL.s, newHSL.l);
            }
          });
        });
      };

      // Listen for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            updateColors();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Add mouse interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onMouseMove = (event: MouseEvent) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Reset all particles to idle state
        particles.forEach((particle) => {
          if (!particle.animation) {
            particle.state = "idle";
          }
        });

        // Highlight intersected particle
        if (intersects.length > 0) {
          const intersectedMesh = intersects[0].object;
          const particleIndex = meshes.findIndex(
            (mesh) => mesh.children.includes(intersectedMesh) || mesh === intersectedMesh
          );

          if (particleIndex !== -1 && !particles[particleIndex].animation) {
            particles[particleIndex].state = "active";
          }
        }
      };

      container.addEventListener("mousemove", onMouseMove);

      // Cleanup
      return () => {
        console.log("Cleaning up Three.js scene...");
        window.removeEventListener("resize", handleResize);
        container.removeEventListener("mousemove", onMouseMove);
        observer.disconnect();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        scene.clear();
        renderer.dispose();
      };
    } catch (error) {
      console.error("Error initializing Three.js scene:", error);
      if (error instanceof Error) {
        console.error("Error details:", {
          message: error.message,
          stack: error.stack,
          name: error.name,
        });
      }
    }
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email: formData.email, password: formData.password });
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register({ email: formData.email, password: formData.password, name: formData.name });
      toast.success("Signup successful!");
      navigate("/dashboard");
    } catch {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10 animate-pulse" />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text text-transparent animate-gradient-x mystical-text">
              You are already logged in
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 transform hover:scale-105"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {!isLogin ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md p-8 space-y-8 bg-background/80 backdrop-blur-lg rounded-xl shadow-2xl border border-accent/20"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent">
                  Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-foreground/60">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>

              <form onSubmit={handleSignup} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-foreground">
                      Password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary via-accent to-accent2 hover:opacity-90 transition-opacity"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md p-8 space-y-8 bg-background/80 backdrop-blur-lg rounded-xl shadow-2xl border border-accent/20"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-foreground/60">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </div>

              <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-foreground">
                      Password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary via-accent to-accent2 hover:opacity-90 transition-opacity"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
