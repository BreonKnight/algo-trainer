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

interface ParticleAnimation {
  type:
    | "pop"
    | "push"
    | "sort"
    | "search"
    | "traverse"
    | "enqueue"
    | "dequeue"
    | "insert"
    | "delete";
  progress: number;
  target?: THREE.Vector3;
}

interface Particle {
  type:
    | "array"
    | "stack"
    | "queue"
    | "tree"
    | "graph"
    | "hash"
    | "linkedList"
    | "hashTable"
    | "heap";
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: THREE.Color;
  state?: "idle" | "active" | "visited" | "sorted" | "comparing" | "swapping";
  animation?: ParticleAnimation;
}

// Toggle for vibrant mode
const vibrantMode = true; // Set to false to use theme colors

// Vibrant color palette for data structures
const vibrantColors: Record<Particle["type"], string> = {
  array: "#FF6384", // Pink
  stack: "#36A2EB", // Blue
  queue: "#FFCE56", // Yellow
  tree: "#4BC0C0", // Teal
  graph: "#9966FF", // Purple
  linkedList: "#FF9F40", // Orange
  hashTable: "#00A86B", // Green
  heap: "#E7E9ED", // Light Gray
  hash: "#C9CBCF", // Gray
};

// Three.js scene setup and management
const createScene = () => {
  const scene = new THREE.Scene();
  return scene;
};

const createCamera = (container: HTMLElement) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  return camera;
};

const createRenderer = (container: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.zIndex = "0";
  renderer.domElement.style.backgroundColor = "transparent";
  renderer.domElement.style.pointerEvents = "none";
  container.appendChild(renderer.domElement);
  return renderer;
};

const createStars = (count: number) => {
  const stars = Array.from({ length: count }, () => {
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
  });
  return stars;
};

const createNebula = (color1: THREE.Color, color2: THREE.Color) => {
  const nebulaGeometry = new THREE.SphereGeometry(10, 32, 32);
  const nebulaMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: color1 },
      color2: { value: color2 },
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
  return { nebula, material: nebulaMaterial };
};

const createParticles = (colors: Record<string, THREE.Color>) => {
  const types: Particle["type"][] = [
    "array",
    "tree",
    "graph",
    "stack",
    "queue",
    "linkedList",
    "hashTable",
    "heap",
  ];
  const animationTypes: ParticleAnimation["type"][] = [
    "sort",
    "traverse",
    "search",
    "push",
    "pop",
    "enqueue",
    "dequeue",
    "insert",
    "delete",
  ];
  const particles: Particle[] = [];
  types.forEach((type) => {
    for (let i = 0; i < 2; i++) {
      let baseColor: THREE.Color;
      if (vibrantMode) {
        baseColor = new THREE.Color(vibrantColors[type]);
      } else {
        baseColor = new THREE.Color(colors[type]);
      }
      // Add color variation
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
        state: "idle" as const,
        animation: {
          type: animationTypes[Math.floor(Math.random() * animationTypes.length)],
          progress: 0,
        },
      });
    }
  });
  return particles;
};

// Helper function to get theme color
const getThemeColor = (colorVar: string): THREE.Color => {
  const computedStyle = getComputedStyle(document.documentElement);
  const colorValue = computedStyle.getPropertyValue(colorVar).trim();

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
    return new THREE.Color(colorValue);
  } catch (error) {
    console.warn(`Error parsing color ${colorValue} for ${colorVar}:`, error);
    return new THREE.Color(0xffffff);
  }
};

// Helper function to create text sprite
const createTextSprite = (text: string, position: THREE.Vector3): THREE.Sprite | null => {
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

// Create data structure geometries
const createDataStructureGeometry = (type: Particle["type"]): THREE.Group => {
  const group = new THREE.Group();

  // If vibrantMode, use vibrant palette for all elements
  let primaryColor: THREE.Color, accentColor: THREE.Color, borderColor: THREE.Color;
  if (vibrantMode) {
    primaryColor = new THREE.Color(vibrantColors[type]);
    accentColor = new THREE.Color("#FFD700"); // Gold accent
    borderColor = new THREE.Color("#bbbbbb"); // Lighter border for vibrant mode
  } else {
    // Get theme colors with fallbacks for SNES theme
    const getContrastColor = (colorVar: string, fallbackVar: string) => {
      const color = getThemeColor(colorVar);
      const fallback = getThemeColor(fallbackVar);
      const hsl = { h: 0, s: 0, l: 0 };
      color.getHSL(hsl);
      if (hsl.s < 0.2 || (hsl.l > 0.4 && hsl.l < 0.6)) {
        return fallback;
      }
      return color;
    };
    primaryColor = getContrastColor("--primary", "--accent");
    accentColor = getContrastColor("--accent", "--primary");
    borderColor = getContrastColor("--border", "--accent");
  }

  // Add color variation to prevent monochromatic look
  const addColorVariation = (color: THREE.Color, variation: number = 0.1) => {
    const hsl = { h: 0, s: 0, l: 0 };
    color.getHSL(hsl);

    // Ensure minimum saturation
    hsl.s = Math.max(hsl.s, 0.3);

    // Add slight hue variation
    hsl.h = (hsl.h + Math.random() * variation) % 1;

    // Ensure good contrast
    hsl.l = hsl.l < 0.5 ? Math.min(hsl.l + 0.1, 0.4) : Math.max(hsl.l - 0.1, 0.6);

    color.setHSL(hsl.h, hsl.s, hsl.l);
    return color;
  };

  const getVariedColor = (baseColor: THREE.Color) => {
    return addColorVariation(baseColor.clone());
  };

  switch (type) {
    case "array": {
      const cellCount = 6;
      const cellSize = 0.15;
      const spacing = 0.02;

      for (let i = 0; i < cellCount; i++) {
        const cell = new THREE.Mesh(
          new THREE.BoxGeometry(cellSize, cellSize, cellSize),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        cell.position.x = i * (cellSize + spacing);
        group.add(cell);

        const content = new THREE.Mesh(
          new THREE.SphereGeometry(cellSize * 0.3, 8, 8),
          new THREE.MeshBasicMaterial({ color: getVariedColor(accentColor) })
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
        new THREE.Vector3((cellCount * (cellSize + spacing)) / 2 - cellSize, cellSize * 1.2, 0)
      );
      if (arrayLabel) group.add(arrayLabel);
      break;
    }

    case "stack": {
      const stackHeight = 5;
      const elementSize = 0.15;
      const spacing = 0.02;

      // Create base with theme color
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(elementSize * 1.2, elementSize * 0.2, elementSize * 1.2),
        new THREE.MeshBasicMaterial({ color: getVariedColor(borderColor) })
      );
      base.position.y = -elementSize * 0.6;
      group.add(base);

      for (let i = 0; i < stackHeight; i++) {
        const element = new THREE.Mesh(
          new THREE.BoxGeometry(elementSize, elementSize, elementSize),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        element.position.y = i * (elementSize + spacing);
        group.add(element);

        // Add value
        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(0, i * (elementSize + spacing), elementSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      }

      // Add stack label
      const stackLabel = createTextSprite(
        "Stack",
        new THREE.Vector3(0, stackHeight * (elementSize + spacing) + elementSize * 0.5, 0)
      );
      if (stackLabel) group.add(stackLabel);
      break;
    }

    case "queue": {
      const queueLength = 5;
      const elementSize = 0.15;
      const spacing = 0.02;

      // Create entry and exit arrows with theme color
      const createArrow = (x: number, rotation: number) => {
        const arrow = new THREE.Mesh(
          new THREE.ConeGeometry(elementSize * 0.2, elementSize * 0.4, 8),
          new THREE.MeshBasicMaterial({ color: getVariedColor(accentColor) })
        );
        arrow.position.set(x, 0, 0);
        arrow.rotation.z = rotation;
        group.add(arrow);
      };

      createArrow(-elementSize * 2, 0);
      createArrow(queueLength * (elementSize + spacing) + elementSize, Math.PI);

      for (let i = 0; i < queueLength; i++) {
        const element = new THREE.Mesh(
          new THREE.BoxGeometry(elementSize, elementSize, elementSize),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        element.position.x = i * (elementSize + spacing);
        group.add(element);

        // Add value
        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(i * (elementSize + spacing), 0, elementSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      }

      // Add queue label
      const queueLabel = createTextSprite(
        "Queue",
        new THREE.Vector3((queueLength * (elementSize + spacing)) / 2, elementSize * 1.2, 0)
      );
      if (queueLabel) group.add(queueLabel);
      break;
    }

    case "tree": {
      const levels = 3;
      const nodeSize = 0.15;
      const levelSpacing = 0.4;
      const horizontalSpacing = 0.3;

      const createNode = (x: number, y: number, value: number) => {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(nodeSize * 0.5, 8, 8),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        node.position.set(x, y, 0);
        group.add(node);

        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(x, y, nodeSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      };

      const createEdge = (start: THREE.Vector3, end: THREE.Vector3) => {
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: getVariedColor(borderColor) });
        const line = new THREE.Line(geometry, material);
        group.add(line);
      };

      const createTree = (level: number, x: number, y: number) => {
        if (level >= levels) return;

        const value = Math.floor(Math.random() * 100);
        const nodePos = new THREE.Vector3(x, y, 0);
        createNode(x, y, value);

        const leftX = x - horizontalSpacing * (levels - level);
        const leftY = y - levelSpacing;
        createTree(level + 1, leftX, leftY);
        createEdge(nodePos, new THREE.Vector3(leftX, leftY, 0));

        const rightX = x + horizontalSpacing * (levels - level);
        const rightY = y - levelSpacing;
        createTree(level + 1, rightX, rightY);
        createEdge(nodePos, new THREE.Vector3(rightX, rightY, 0));
      };

      createTree(0, 0, 0);

      // Add tree label
      const treeLabel = createTextSprite("Binary Tree", new THREE.Vector3(0, levelSpacing, 0));
      if (treeLabel) group.add(treeLabel);
      break;
    }

    case "graph": {
      const nodeCount = 5;
      const nodeSize = 0.15;
      const radius = 1;

      const nodePositions: THREE.Vector3[] = [];
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        nodePositions.push(new THREE.Vector3(x, y, 0));

        const node = new THREE.Mesh(
          new THREE.SphereGeometry(nodeSize * 0.5, 8, 8),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        node.position.set(x, y, 0);
        group.add(node);

        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(x, y, nodeSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      }

      // Create edges with varied colors
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (Math.random() > 0.5) {
            const points = [nodePositions[i], nodePositions[j]];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ color: getVariedColor(borderColor) });
            const line = new THREE.Line(geometry, material);
            group.add(line);
          }
        }
      }

      // Add graph label
      const graphLabel = createTextSprite("Graph", new THREE.Vector3(0, radius + nodeSize, 0));
      if (graphLabel) group.add(graphLabel);
      break;
    }

    case "linkedList": {
      const nodeCount = 5;
      const nodeSize = 0.15;
      const spacing = 0.4;

      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(nodeSize * 0.5, 8, 8),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        node.position.x = i * spacing;
        group.add(node);

        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(i * spacing, 0, nodeSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);

        if (i < nodeCount - 1) {
          const arrow = new THREE.Mesh(
            new THREE.ConeGeometry(nodeSize * 0.2, nodeSize * 0.4, 8),
            new THREE.MeshBasicMaterial({ color: getVariedColor(accentColor) })
          );
          arrow.position.x = i * spacing + spacing / 2;
          arrow.rotation.z = -Math.PI / 2;
          group.add(arrow);

          const points = [
            new THREE.Vector3(i * spacing + nodeSize * 0.3, 0, 0),
            new THREE.Vector3((i + 1) * spacing - nodeSize * 0.3, 0, 0),
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({ color: getVariedColor(borderColor) });
          const line = new THREE.Line(geometry, material);
          group.add(line);
        }
      }

      // Add linked list label
      const listLabel = createTextSprite(
        "Linked List",
        new THREE.Vector3((nodeCount * spacing) / 2, nodeSize, 0)
      );
      if (listLabel) group.add(listLabel);
      break;
    }

    case "hashTable": {
      const bucketCount = 4;
      const bucketSize = 0.15;
      const spacing = 0.3;

      for (let i = 0; i < bucketCount; i++) {
        const bucket = new THREE.Mesh(
          new THREE.BoxGeometry(bucketSize, bucketSize, bucketSize),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        bucket.position.x = i * spacing;
        group.add(bucket);

        const indexSprite = createTextSprite(
          i.toString(),
          new THREE.Vector3(i * spacing, -bucketSize * 0.8, 0)
        );
        if (indexSprite) group.add(indexSprite);

        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(i * spacing, 0, bucketSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);

        if (Math.random() > 0.7) {
          const collisionValue = Math.floor(Math.random() * 100);
          const collisionSprite = createTextSprite(
            collisionValue.toString(),
            new THREE.Vector3(i * spacing, bucketSize * 0.6, bucketSize * 0.6)
          );
          if (collisionSprite) group.add(collisionSprite);
        }
      }

      // Add hash table label
      const tableLabel = createTextSprite(
        "Hash Table",
        new THREE.Vector3((bucketCount * spacing) / 2, bucketSize * 1.2, 0)
      );
      if (tableLabel) group.add(tableLabel);
      break;
    }

    case "heap": {
      const levels = 3;
      const nodeSize = 0.15;
      const levelSpacing = 0.4;
      const horizontalSpacing = 0.3;

      const createNode = (x: number, y: number, value: number) => {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(nodeSize * 0.5, 8, 8),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        node.position.set(x, y, 0);
        group.add(node);

        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(x, y, nodeSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      };

      const createEdge = (start: THREE.Vector3, end: THREE.Vector3) => {
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: getVariedColor(borderColor) });
        const line = new THREE.Line(geometry, material);
        group.add(line);
      };

      const createHeap = (level: number, x: number, y: number) => {
        if (level >= levels) return;

        const value = Math.floor(Math.random() * 100);
        const nodePos = new THREE.Vector3(x, y, 0);
        createNode(x, y, value);

        const leftX = x - horizontalSpacing * (levels - level);
        const leftY = y - levelSpacing;
        createHeap(level + 1, leftX, leftY);
        createEdge(nodePos, new THREE.Vector3(leftX, leftY, 0));

        const rightX = x + horizontalSpacing * (levels - level);
        const rightY = y - levelSpacing;
        createHeap(level + 1, rightX, rightY);
        createEdge(nodePos, new THREE.Vector3(rightX, rightY, 0));
      };

      createHeap(0, 0, 0);

      // Add heap label
      const heapLabel = createTextSprite("Binary Heap", new THREE.Vector3(0, levelSpacing, 0));
      if (heapLabel) group.add(heapLabel);
      break;
    }

    case "hash": {
      const bucketCount = 4;
      const bucketSize = 0.15;
      const spacing = 0.3;

      for (let i = 0; i < bucketCount; i++) {
        const bucket = new THREE.Mesh(
          new THREE.BoxGeometry(bucketSize, bucketSize, bucketSize),
          new THREE.MeshBasicMaterial({
            color: getVariedColor(primaryColor),
            wireframe: vibrantMode ? false : true,
          })
        );
        bucket.position.x = i * spacing;
        group.add(bucket);

        const indexSprite = createTextSprite(
          i.toString(),
          new THREE.Vector3(i * spacing, -bucketSize * 0.8, 0)
        );
        if (indexSprite) group.add(indexSprite);

        const value = Math.floor(Math.random() * 100);
        const valueSprite = createTextSprite(
          value.toString(),
          new THREE.Vector3(i * spacing, 0, bucketSize * 0.6)
        );
        if (valueSprite) group.add(valueSprite);
      }

      // Add hash label
      const hashLabel = createTextSprite(
        "Hash",
        new THREE.Vector3((bucketCount * spacing) / 2, bucketSize * 1.2, 0)
      );
      if (hashLabel) group.add(hashLabel);
      break;
    }
  }

  return group;
};

const createParticleMeshes = (particles: Particle[]) => {
  const materials = particles.map(
    (p) =>
      new THREE.MeshBasicMaterial({
        color: p.color,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      })
  );

  const meshes = particles.map((p, i) => {
    const geometry = createDataStructureGeometry(p.type);
    geometry.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.material = materials[i];
      }
    });
    return geometry;
  });

  return { meshes, materials };
};

const setupMouseInteraction = (
  container: HTMLElement,
  camera: THREE.Camera,
  scene: THREE.Scene,
  particles: Particle[],
  meshes: THREE.Group[]
) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const onMouseMove = (event: MouseEvent) => {
    mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    particles.forEach((particle) => {
      if (!particle.animation) {
        particle.state = "idle";
      }
    });

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
  return () => container.removeEventListener("mousemove", onMouseMove);
};

const createAnimationLoop = (
  scene: THREE.Scene,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  particles: Particle[],
  meshes: THREE.Group[],
  stars: THREE.Mesh[],
  nebula: THREE.Mesh,
  nebulaMaterial: THREE.ShaderMaterial
) => {
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

    // Update particles
    meshes.forEach((mesh, i) => {
      const particle = particles[i];
      updateParticleAnimation(particle);
      updateParticlePosition(particle, mesh);
    });

    renderer.render(scene, camera);
  };

  return animate;
};

const updateParticleAnimation = (particle: Particle) => {
  const animation = particle.animation;
  if (!animation) return;

  animation.progress += 0.002;

  const animationType = animation.type;
  switch (animationType) {
    case "sort":
      if (particle.type === "array") {
        const arrayLength = 6;
        const currentStep = Math.floor(animation.progress * arrayLength * arrayLength);
        const i = Math.floor(currentStep / arrayLength);
        const j = currentStep % arrayLength;
        particle.state = i === j ? "comparing" : "swapping";
      }
      break;
    case "traverse":
      if (particle.type === "tree" || particle.type === "graph") {
        const steps = 20;
        const currentStep = Math.floor(animation.progress * steps);
        particle.state = currentStep % 4 === 0 ? "active" : "visited";
      }
      break;
    case "search":
      if (particle.type === "array" || particle.type === "tree") {
        const steps = 16;
        const currentStep = Math.floor(animation.progress * steps);
        particle.state = currentStep % 4 === 0 ? "comparing" : "active";
      }
      break;
    case "push":
    case "pop":
    case "enqueue":
    case "dequeue":
      if (particle.type === "stack") {
        const steps = 8;
        const currentStep = Math.floor(animation.progress * steps);
        particle.state = currentStep % 4 === 0 ? "active" : "idle";
      }
      break;
  }

  if (animation.progress >= 1) {
    animation.progress = 0;
    particle.state = "idle";
  }
};

const updateParticlePosition = (particle: Particle, mesh: THREE.Group) => {
  particle.position.add(particle.velocity);

  // Bounce off boundaries
  if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
  if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
  if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

  mesh.position.copy(particle.position);

  // Update rotation based on animation type
  if (particle.animation) {
    switch (particle.animation.type) {
      case "sort":
        mesh.rotation.y += 0.005;
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
};

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

    const container = containerRef.current;

    try {
      console.log("Starting Three.js initialization...");

      // Initialize scene components
      const scene = createScene();
      const camera = createCamera(container);
      const renderer = createRenderer(container);
      const stars = createStars(200);
      stars.forEach((star) => scene.add(star));

      // Create color cache and get initial colors
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

      // Create nebula
      const { nebula, material: nebulaMaterial } = createNebula(
        getCachedColor("--accent"),
        getCachedColor("--accent2")
      );
      scene.add(nebula);

      // Create particles and meshes
      const colors: Record<string, THREE.Color> = {
        array: getCachedColor("--primary"),
        tree: getCachedColor("--secondary"),
        graph: getCachedColor("--accent"),
        stack: getCachedColor("--muted"),
        queue: getCachedColor("--popover"),
        linkedList: getCachedColor("--card"),
        hashTable: getCachedColor("--border"),
        heap: getCachedColor("--input"),
        hash: getCachedColor("--border"),
        active: getCachedColor("--destructive"),
        visited: getCachedColor("--ring"),
        sorted: getCachedColor("--success"),
        comparing: getCachedColor("--warning"),
        swapping: getCachedColor("--error"),
      };

      const particles = createParticles(colors);
      const { meshes } = createParticleMeshes(particles);
      meshes.forEach((mesh) => scene.add(mesh));

      // Setup mouse interaction
      const cleanupMouseInteraction = setupMouseInteraction(
        container,
        camera,
        scene,
        particles,
        meshes
      );

      // Create animation loop
      const animate = createAnimationLoop(
        scene,
        camera,
        renderer,
        particles,
        meshes,
        stars,
        nebula,
        nebulaMaterial
      );

      // Handle window resize
      const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener("resize", handleResize);
      animate();

      // Update colors when theme changes
      const updateColors = () => {
        const currentThemeClass = document.documentElement.className;
        if (currentThemeClass === lastThemeClass) return;

        lastThemeClass = currentThemeClass;
        colorCache.clear();

        nebulaMaterial.uniforms.color1.value = getCachedColor("--accent");
        nebulaMaterial.uniforms.color2.value = getCachedColor("--accent2");

        const newColors = {
          array: getCachedColor("--primary"),
          tree: getCachedColor("--secondary"),
          graph: getCachedColor("--accent"),
          stack: getCachedColor("--muted"),
          queue: getCachedColor("--popover"),
          linkedList: getCachedColor("--card"),
          hashTable: getCachedColor("--border"),
          heap: getCachedColor("--input"),
          hash: getCachedColor("--border"),
          active: getCachedColor("--destructive"),
          visited: getCachedColor("--ring"),
          sorted: getCachedColor("--success"),
          comparing: getCachedColor("--warning"),
          swapping: getCachedColor("--error"),
        };

        meshes.forEach((mesh, i) => {
          const particle = particles[i];
          const newColor =
            particle.state && particle.state !== "idle"
              ? newColors[particle.state]
              : newColors[particle.type];

          mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const material = child.material as THREE.MeshBasicMaterial;
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

      // Cleanup
      return () => {
        console.log("Cleaning up Three.js scene...");
        window.removeEventListener("resize", handleResize);
        cleanupMouseInteraction();
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
