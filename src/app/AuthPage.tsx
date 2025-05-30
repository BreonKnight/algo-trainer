import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "@fontsource/inter/700.css";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/hooks/useAuth";

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

      // Add space background
      const createStar = () => {
        const geometry = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 8, 8);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: 0.5 + Math.random() * 0.5,
        });
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        return star;
      };

      // Create stars
      const stars = Array.from({ length: 200 }, createStar);
      stars.forEach((star) => scene.add(star));

      // Theme-aware colors using CSS variables
      const getThemeColor = (colorVar: string) => {
        const computedStyle = getComputedStyle(document.documentElement);
        const colorValue = computedStyle.getPropertyValue(colorVar).trim();

        // Debug logging
        console.debug(`Parsing color for ${colorVar}:`, colorValue);

        // Handle empty or invalid values
        if (!colorValue) {
          console.warn(`Empty color value for ${colorVar}, using fallback`);
          return new THREE.Color(0xffffff);
        }

        try {
          // Handle HSL values in format "222.2 47.4% 11.2%"
          if (colorValue.includes("%")) {
            const hslMatch = colorValue.match(/(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);
            if (hslMatch) {
              const [, h, s, l] = hslMatch;
              const color = new THREE.Color();
              color.setHSL(parseFloat(h) / 360, parseFloat(s) / 100, parseFloat(l) / 100);
              return color;
            }
          }

          // Handle HSL values in format "hsl(222.2, 47.4%, 11.2%)"
          if (colorValue.includes("hsl")) {
            const hslMatch = colorValue.match(/hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/);
            if (hslMatch) {
              const [, h, s, l] = hslMatch;
              const color = new THREE.Color();
              color.setHSL(parseFloat(h) / 360, parseFloat(s) / 100, parseFloat(l) / 100);
              return color;
            }
          }

          // Handle hex values
          if (colorValue.startsWith("#")) {
            return new THREE.Color(colorValue);
          }

          // Handle RGB values
          if (colorValue.startsWith("rgb")) {
            const rgbMatch = colorValue.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch;
              return new THREE.Color(parseInt(r) / 255, parseInt(g) / 255, parseInt(b) / 255);
            }
          }

          // Try to parse as a named color
          try {
            return new THREE.Color(colorValue);
          } catch {
            console.warn(
              `Failed to parse color value: ${colorValue} for ${colorVar}, using fallback`
            );
            return new THREE.Color(0xffffff);
          }
        } catch (error) {
          console.warn(`Error parsing color ${colorValue} for ${colorVar}:`, error);
          return new THREE.Color(0xffffff);
        }
      };

      // Create a color cache to prevent repeated parsing
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
      const nebulaGeometry = new THREE.SphereGeometry(10, 32, 32);
      const nebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(getCachedColor("--accent")) },
          color2: { value: new THREE.Color(getCachedColor("--accent2")) },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          
          float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
          }
          
          void main() {
            vec2 uv = vUv;
            float n = noise(uv + time * 0.1);
            vec3 color = mix(color1, color2, n);
            gl_FragColor = vec4(color, 0.1);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
      });
      const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
      scene.add(nebula);

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

      const colors = {
        // Base colors from theme
        array: getCachedColor("--primary"),
        tree: getCachedColor("--destructive"),
        graph: getCachedColor("--secondary"),
        stack: getCachedColor("--accent"),
        queue: getCachedColor("--accent2"),
        linkedList: getCachedColor("--accent3"),
        hashTable: getCachedColor("--muted"),
        heap: getCachedColor("--muted-foreground"),
        active: getCachedColor("--accent"),
        visited: getCachedColor("--secondary"),
        sorted: getCachedColor("--primary"),
        comparing: getCachedColor("--destructive"),
        swapping: getCachedColor("--accent"),

        // Additional theme colors
        accent2: getCachedColor("--accent2"),
        accent3: getCachedColor("--accent3"),
        muted: getCachedColor("--muted"),
        mutedForeground: getCachedColor("--muted-foreground"),
        card: getCachedColor("--card"),
        cardForeground: getCachedColor("--card-foreground"),
      };

      // Create particles with initial states
      for (let i = 0; i < particleCount; i++) {
        const type = [
          "array",
          "tree",
          "graph",
          "stack",
          "queue",
          "linkedList",
          "hashTable",
          "heap",
        ][Math.floor(Math.random() * 8)] as Particle["type"];

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
          case "queue":
            baseColor = new THREE.Color(colors.accent2);
            break;
          case "linkedList":
            baseColor = new THREE.Color(colors.accent3);
            break;
          case "hashTable":
            baseColor = new THREE.Color(colors.muted);
            break;
          case "heap":
            baseColor = new THREE.Color(colors.mutedForeground);
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
            type: [
              "sort",
              "traverse",
              "search",
              "push",
              "pop",
              "enqueue",
              "dequeue",
              "insert",
              "delete",
            ][Math.floor(Math.random() * 9)] as
              | "sort"
              | "traverse"
              | "search"
              | "push"
              | "pop"
              | "enqueue"
              | "dequeue"
              | "insert"
              | "delete",
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
          case "queue": {
            // Create a queue structure
            const itemCount = 5;
            const spacing = 0.15;
            const itemSize = 0.2;

            for (let i = 0; i < itemCount; i++) {
              const itemGroup = new THREE.Group();

              // Queue item
              const item = new THREE.Mesh(
                new THREE.BoxGeometry(itemSize, itemSize * 0.1, itemSize),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                })
              );
              item.position.x = i * spacing;
              itemGroup.add(item);

              // Item content
              const content = new THREE.Mesh(
                new THREE.SphereGeometry(itemSize * 0.3, 8, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              content.position.x = i * spacing;
              itemGroup.add(content);

              // Add value
              const value = Math.floor(Math.random() * 100);
              const valueSprite = createTextSprite(
                value.toString(),
                new THREE.Vector3(i * spacing, 0, itemSize * 0.6)
              );
              if (valueSprite) itemGroup.add(valueSprite);

              group.add(itemGroup);
            }

            // Add queue label
            const queueLabel = createTextSprite(
              "Queue",
              new THREE.Vector3((itemCount * spacing) / 2 - itemSize, itemSize * 1.2, 0)
            );
            if (queueLabel) group.add(queueLabel);
            break;
          }
          case "linkedList": {
            // Create a linked list structure
            const nodeCount = 5;
            const spacing = 0.3;
            const nodeSize = 0.15;

            for (let i = 0; i < nodeCount; i++) {
              const nodeGroup = new THREE.Group();

              // Node
              const node = new THREE.Mesh(
                new THREE.CircleGeometry(nodeSize, 16),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  side: THREE.DoubleSide,
                })
              );
              node.position.x = i * spacing;
              nodeGroup.add(node);

              // Node value
              const value = Math.floor(Math.random() * 100);
              const valueSprite = createTextSprite(
                value.toString(),
                new THREE.Vector3(i * spacing, 0, 0.01)
              );
              if (valueSprite) nodeGroup.add(valueSprite);

              // Arrow to next node
              if (i < nodeCount - 1) {
                const arrow = new THREE.Mesh(
                  new THREE.ConeGeometry(0.05, 0.1, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                arrow.position.x = i * spacing + spacing / 2;
                arrow.rotation.z = Math.PI / 2;
                nodeGroup.add(arrow);
              }

              group.add(nodeGroup);
            }

            // Add linked list label
            const listLabel = createTextSprite(
              "Linked List",
              new THREE.Vector3((nodeCount * spacing) / 2 - nodeSize, nodeSize * 1.2, 0)
            );
            if (listLabel) group.add(listLabel);
            break;
          }
          case "hashTable": {
            // Create a hash table structure
            const bucketCount = 4;
            const itemsPerBucket = 2;
            const bucketSpacing = 0.4;
            const itemSpacing = 0.2;
            const itemSize = 0.15;

            for (let i = 0; i < bucketCount; i++) {
              const bucketGroup = new THREE.Group();

              // Bucket container
              const bucket = new THREE.Mesh(
                new THREE.BoxGeometry(itemSize * 2, itemSize * 3, itemSize),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                })
              );
              bucket.position.x = i * bucketSpacing;
              bucketGroup.add(bucket);

              // Bucket items
              for (let j = 0; j < itemsPerBucket; j++) {
                const item = new THREE.Mesh(
                  new THREE.SphereGeometry(itemSize * 0.5, 8, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                item.position.set(i * bucketSpacing, -itemSize + j * itemSpacing, 0);
                bucketGroup.add(item);

                // Item value
                const value = Math.floor(Math.random() * 100);
                const valueSprite = createTextSprite(
                  value.toString(),
                  new THREE.Vector3(i * bucketSpacing, -itemSize + j * itemSpacing, itemSize * 0.6)
                );
                if (valueSprite) bucketGroup.add(valueSprite);
              }

              group.add(bucketGroup);
            }

            // Add hash table label
            const tableLabel = createTextSprite(
              "Hash Table",
              new THREE.Vector3((bucketCount * bucketSpacing) / 2 - itemSize, itemSize * 2, 0)
            );
            if (tableLabel) group.add(tableLabel);
            break;
          }
          case "heap": {
            // Create a binary heap structure
            const createHeapNode = (
              depth: number,
              x: number,
              y: number,
              value: number
            ): THREE.Group => {
              const nodeGroup = new THREE.Group();

              // Node
              const node = new THREE.Mesh(
                new THREE.CircleGeometry(0.08, 16),
                new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  side: THREE.DoubleSide,
                })
              );
              node.position.set(x, y, 0);
              nodeGroup.add(node);

              // Node value
              const valueSprite = createTextSprite(value.toString(), new THREE.Vector3(x, y, 0.01));
              if (valueSprite) nodeGroup.add(valueSprite);

              if (depth > 0) {
                const spacing = 0.4;
                const leftX = x - spacing;
                const rightX = x + spacing;
                const nextY = y - spacing;

                // Left child
                const leftChild = createHeapNode(
                  depth - 1,
                  leftX,
                  nextY,
                  Math.floor(Math.random() * 100)
                );
                nodeGroup.add(leftChild);

                // Left connection
                const leftLine = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                leftLine.position.set((x + leftX) / 2, (y + nextY) / 2, 0);
                leftLine.rotation.z = Math.atan2(nextY - y, leftX - x);
                nodeGroup.add(leftLine);

                // Right child
                const rightChild = createHeapNode(
                  depth - 1,
                  rightX,
                  nextY,
                  Math.floor(Math.random() * 100)
                );
                nodeGroup.add(rightChild);

                // Right connection
                const rightLine = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                rightLine.position.set((x + rightX) / 2, (y + nextY) / 2, 0);
                rightLine.rotation.z = Math.atan2(nextY - y, rightX - x);
                nodeGroup.add(rightLine);
              }

              return nodeGroup;
            };

            const heap = createHeapNode(2, 0, 0, Math.floor(Math.random() * 100));
            group.add(heap);

            // Add heap label
            const heapLabel = createTextSprite("Binary Heap", new THREE.Vector3(0, 0.6, 0));
            if (heapLabel) group.add(heapLabel);
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

        // Update nebula
        nebulaMaterial.uniforms.time.value += 0.01;
        nebula.rotation.y += 0.0005;
        nebula.rotation.x += 0.0003;

        // Update stars
        stars.forEach((star) => {
          star.rotation.x += 0.0001;
          star.rotation.y += 0.0001;
          const material = star.material as THREE.MeshBasicMaterial;
          material.opacity = 0.5 + Math.sin(Date.now() * 0.001 + star.position.x) * 0.25;
        });

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

          // Update color based on state
          if (particle.state && particle.state !== "idle") {
            const stateColor = colors[particle.state];
            mesh.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const material = child.material as THREE.MeshBasicMaterial;
                // Use an even smaller lerp factor for very slow transitions
                material.color.lerp(stateColor, 0.005);
              }
            });
          } else {
            const typeColor = colors[particle.type];
            mesh.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const material = child.material as THREE.MeshBasicMaterial;
                // Use an even smaller lerp factor for very slow transitions
                material.color.lerp(typeColor, 0.005);
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
        const currentThemeClass = document.documentElement.className;
        if (currentThemeClass === lastThemeClass) return;

        lastThemeClass = currentThemeClass;
        colorCache.clear();

        // Update nebula colors
        nebulaMaterial.uniforms.color1.value = getCachedColor("--accent");
        nebulaMaterial.uniforms.color2.value = getCachedColor("--accent2");

        const newColors = {
          array: getCachedColor("--primary"),
          tree: getCachedColor("--destructive"),
          graph: getCachedColor("--secondary"),
          stack: getCachedColor("--accent"),
          queue: getCachedColor("--accent2"),
          linkedList: getCachedColor("--accent3"),
          hashTable: getCachedColor("--muted"),
          heap: getCachedColor("--muted-foreground"),
          active: getCachedColor("--accent"),
          visited: getCachedColor("--secondary"),
          sorted: getCachedColor("--primary"),
          comparing: getCachedColor("--destructive"),
          swapping: getCachedColor("--accent"),
          accent2: getCachedColor("--accent2"),
          accent3: getCachedColor("--accent3"),
        };

        meshes.forEach((mesh, i) => {
          const particle = particles[i];
          let newColor;

          if (particle.state && particle.state !== "idle") {
            newColor = newColors[particle.state];
          } else {
            newColor = newColors[particle.type];
          }

          mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const material = child.material as THREE.MeshBasicMaterial;
              // Use an even smaller lerp factor for very slow transitions
              material.color.lerp(newColor, 0.005);
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
              className="w-full max-w-md p-10 space-y-10 glassmorphism unique-border shadow-2xl relative"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.25), 0 0 20px 0 #a5b4fc33",
                borderRadius: "1.2rem",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(90deg, #a5b4fc, #f472b6, #facc15) 1",
                background: "rgba(30, 30, 60, 0.7)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Animated particles background */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ maxHeight: "90%" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0 animate-pulse"
                  style={{ filter: "blur(2px)" }}
                >
                  <circle cx="20%" cy="30%" r="18" fill="#a5b4fc55">
                    <animate
                      attributeName="cy"
                      values="30%;40%;30%"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="80%" cy="60%" r="12" fill="#f472b655">
                    <animate
                      attributeName="cy"
                      values="60%;50%;60%"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="50%" cy="80%" r="10" fill="#facc1555">
                    <animate
                      attributeName="cy"
                      values="80%;70%;80%"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="relative z-10 text-center space-y-3">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2
                    className="text-3xl font-black tracking-widest bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent uppercase flex items-center justify-center gap-2"
                    style={{
                      letterSpacing: "0.08em",
                      fontFamily: "Inter, ui-sans-serif, system-ui",
                    }}
                  >
                    🚀 AlgoTrainer
                  </h2>
                  <div className="mt-1 text-accent2 text-base font-mono tracking-wide">
                    Continue your algorithm learning journey
                  </div>
                  <div className="mt-0.5 text-xs text-foreground/60 italic">
                    Master algorithms, one step at a time.
                  </div>
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-foreground/70 mt-2"
                >
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="font-semibold text-primary hover:text-primary/80 transition-colors border border-primary rounded-lg px-3 py-1 ml-2 bg-background/60"
                  >
                    Sign in
                  </button>
                </motion.p>
              </div>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-accent/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-2 bg-background/80 rounded-full border border-accent/20 shadow-lg shadow-accent/5"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-sm font-semibold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                        Begin Your Journey
                      </span>
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>

              <form onSubmit={handleSignup} className="mt-6 space-y-6">
                <div className="rounded-md shadow-sm space-y-5">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2 group"
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2 group"
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-2 group"
                  >
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 text-base font-semibold bg-gradient-to-r from-primary via-accent to-accent2 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/20"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        <span>Create account</span>
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md p-10 space-y-10 glassmorphism unique-border shadow-2xl relative"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.25), 0 0 20px 0 #a5b4fc33",
                borderRadius: "1.2rem",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(90deg, #a5b4fc, #f472b6, #facc15) 1",
                background: "rgba(30, 30, 60, 0.7)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Animated particles background */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ maxHeight: "90%" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0 animate-pulse"
                  style={{ filter: "blur(2px)" }}
                >
                  <circle cx="20%" cy="30%" r="18" fill="#a5b4fc55">
                    <animate
                      attributeName="cy"
                      values="30%;40%;30%"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="80%" cy="60%" r="12" fill="#f472b655">
                    <animate
                      attributeName="cy"
                      values="60%;50%;60%"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="50%" cy="80%" r="10" fill="#facc1555">
                    <animate
                      attributeName="cy"
                      values="80%;70%;80%"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="relative z-10 text-center space-y-3">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2
                    className="text-3xl font-black tracking-widest bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent uppercase flex items-center justify-center gap-2"
                    style={{
                      letterSpacing: "0.08em",
                      fontFamily: "Inter, ui-sans-serif, system-ui",
                    }}
                  >
                    🚀 AlgoTrainer
                  </h2>
                  <div className="mt-1 text-accent2 text-base font-mono tracking-wide">
                    Welcome back to your algorithm learning journey
                  </div>
                  <div className="mt-0.5 text-xs text-foreground/60 italic">
                    Continue mastering algorithms, one step at a time.
                  </div>
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-foreground/70 mt-2"
                >
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="font-semibold text-primary hover:text-primary/80 transition-colors border border-primary rounded-lg px-3 py-1 ml-2 bg-background/60"
                  >
                    Sign up
                  </button>
                </motion.p>
              </div>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-accent/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-2 bg-background/80 rounded-full border border-accent/20 shadow-lg shadow-accent/5"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-sm font-semibold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                        Continue Your Journey
                      </span>
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>

              <form onSubmit={handleLogin} className="mt-6 space-y-6">
                <div className="rounded-md shadow-sm space-y-5">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2 group"
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2 group"
                  >
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 text-base font-semibold bg-gradient-to-r from-primary via-accent to-accent2 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/20"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <span>Sign in</span>
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
