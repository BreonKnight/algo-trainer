import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

import { useTheme } from "@/components/theme/use-theme";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/hooks/useAuth";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  color: THREE.Color;
  type: "array" | "tree" | "graph" | "stack";
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
        array: getThemeColor("--primary"),
        tree: getThemeColor("--destructive"),
        graph: getThemeColor("--secondary"),
        stack: getThemeColor("--accent"),
      };

      for (let i = 0; i < particleCount; i++) {
        const type = ["array", "tree", "graph", "stack"][
          Math.floor(Math.random() * 4)
        ] as Particle["type"];
        const color = new THREE.Color(colors[type]);

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
          color,
          type,
        });
      }

      console.log("Creating geometries...");
      // Create custom geometries for different data structures
      const createDataStructureGeometry = (type: Particle["type"]) => {
        const group = new THREE.Group();

        switch (type) {
          case "array": {
            // Create a linked list structure
            const nodeCount = 4;
            const spacing = 0.2;

            // Create nodes and connections
            for (let i = 0; i < nodeCount; i++) {
              // Node
              const node = new THREE.Mesh(
                new THREE.BoxGeometry(0.1, 0.1, 0.1),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              node.position.x = i * spacing;
              group.add(node);

              // Connection to next node
              if (i < nodeCount - 1) {
                const connector = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing * 0.8, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                connector.position.x = i * spacing + spacing / 2;
                connector.rotation.z = Math.PI / 2;
                group.add(connector);
              }
            }
            break;
          }
          case "tree": {
            // Create a binary tree structure
            const createTreeNode = (depth: number, x: number, y: number): THREE.Group => {
              const nodeGroup = new THREE.Group();

              // Node
              const node = new THREE.Mesh(
                new THREE.SphereGeometry(0.05, 8, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              node.position.set(x, y, 0);
              nodeGroup.add(node);

              if (depth > 0) {
                const spacing = 0.25;
                const leftX = x - spacing;
                const rightX = x + spacing;
                const nextY = y - spacing;

                // Left child
                const leftChild = createTreeNode(depth - 1, leftX, nextY);
                nodeGroup.add(leftChild);

                // Left connection
                const leftConnector = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                leftConnector.position.set((x + leftX) / 2, (y + nextY) / 2, 0);
                leftConnector.rotation.z = Math.atan2(nextY - y, leftX - x);
                nodeGroup.add(leftConnector);

                // Right child
                const rightChild = createTreeNode(depth - 1, rightX, nextY);
                nodeGroup.add(rightChild);

                // Right connection
                const rightConnector = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                rightConnector.position.set((x + rightX) / 2, (y + nextY) / 2, 0);
                rightConnector.rotation.z = Math.atan2(nextY - y, rightX - x);
                nodeGroup.add(rightConnector);
              }

              return nodeGroup;
            };

            const tree = createTreeNode(2, 0, 0);
            group.add(tree);
            break;
          }
          case "graph": {
            // Create a graph structure with nodes and edges
            const nodeCount = 5;
            const radius = 0.2;

            // Create nodes in a circular arrangement
            const nodes = [];
            for (let i = 0; i < nodeCount; i++) {
              const angle = (i / nodeCount) * Math.PI * 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const node = new THREE.Mesh(
                new THREE.SphereGeometry(0.04, 8, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              node.position.set(x, y, 0);
              group.add(node);
              nodes.push({ x, y });
            }

            // Create edges between nodes
            for (let i = 0; i < nodeCount; i++) {
              for (let j = i + 1; j < nodeCount; j++) {
                const start = nodes[i];
                const end = nodes[j];

                const length = Math.sqrt(
                  Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
                );

                const edge = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, length, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );

                edge.position.set((start.x + end.x) / 2, (start.y + end.y) / 2, 0);

                edge.rotation.z = Math.atan2(end.y - start.y, end.x - start.x);
                group.add(edge);
              }
            }
            break;
          }
          case "stack": {
            // Create a stack structure with plates
            const plateCount = 5;
            const spacing = 0.08;

            for (let i = 0; i < plateCount; i++) {
              // Plate
              const plate = new THREE.Mesh(
                new THREE.BoxGeometry(0.15, 0.03, 0.15),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
              );
              plate.position.y = i * spacing;
              group.add(plate);

              // Vertical connector
              if (i < plateCount - 1) {
                const connector = new THREE.Mesh(
                  new THREE.CylinderGeometry(0.01, 0.01, spacing * 0.8, 8),
                  new THREE.MeshBasicMaterial({ color: 0xffffff })
                );
                connector.position.y = i * spacing + spacing / 2;
                group.add(connector);
              }
            }
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

        // Update particle positions
        meshes.forEach((mesh, i) => {
          const particle = particles[i];
          particle.position.add(particle.velocity);

          // Bounce off boundaries
          if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
          if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
          if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

          mesh.position.copy(particle.position);
          mesh.rotation.x += 0.002;
          mesh.rotation.y += 0.002;
          mesh.rotation.z += 0.002;
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
        };

        meshes.forEach((mesh, i) => {
          const particle = particles[i];
          const newColor = new THREE.Color(newColors[particle.type]);
          mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              (child.material as THREE.MeshBasicMaterial).color = newColor;
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
      navigate("/progress");
    } catch {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch {
      toast.error("Failed to logout");
    }
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
        {!isLogin ? (
          <div className="w-full max-w-md p-8 space-y-8 bg-background/80 backdrop-blur-lg rounded-xl shadow-2xl">
            <div>
              <h2 className="text-3xl font-extrabold text-center text-foreground">
                Create your account
              </h2>
              <p className="mt-2 text-center text-sm text-foreground/60">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign in
                </button>
              </p>
            </div>

            <form onSubmit={handleSignup} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
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
                    className="mt-1 bg-background/50"
                  />
                </div>
                <div>
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
                    className="mt-1 bg-background/50"
                  />
                </div>
                <div>
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
                    className="mt-1 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md p-8 space-y-8 bg-background/80 backdrop-blur-lg rounded-xl shadow-2xl">
            <div>
              <h2 className="text-3xl font-extrabold text-center text-foreground">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-foreground/60">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign up
                </button>
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
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
                    className="mt-1 bg-background/50"
                  />
                </div>
                <div>
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
                    className="mt-1 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
