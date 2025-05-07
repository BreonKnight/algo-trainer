# 🎯 Algorithm Trainer

A modern, interactive web application for practicing and learning algorithms with a built-in timer and background music player featuring Madlib and J Dilla instrumentals.

![Algorithm Trainer Screenshot](public/favicon.png)

## ✨ Features

### 🧮 Algorithm Practice

- 💻 Interactive code editor with Dracula theme
- 📚 Built-in pseudocode patterns for common algorithms:

  | Category           | Patterns                                                                                                                                                                                                                                                                                                                                             |
  | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 🔄 Sorting         | `Quick Sort` `Merge Sort` `Heap Sort` `Bubble Sort` `Selection Sort` `Insertion Sort` `Radix Sort` `Counting Sort` `Bucket Sort` `Shell Sort` `Stack Sort`                                                                                                                                                                                           |
  | 🔍 Searching       | `Binary Search` `Linear Search` `Binary Search on Answer` `Exponential Search` `Interpolation Search` `Fibonacci Search` `Ternary Search` `Jump Search`                                                                                                                                                                                              |
  | 📊 Data Structures | `Trees` `Linked Lists` `Graphs` `Hash Tables` `Stack` `Queue` `Heap` `Trie` `AVL Tree` `B Tree` `Red-Black Tree` `Fenwick Tree` `Segment Tree` `Binary Indexed Tree` `Suffix Tree` `Circular Linked List` `Doubly Linked List` `Monotonic Stack` `Monotonic Queue` `Sparse Table`                                                                    |
  | 🧩 Techniques      | `Dynamic Programming` `Greedy` `Backtracking` `Two Pointers` `Sliding Window` `Bit Manipulation` `State Compression DP` `Digit DP` `Tree DP` `Probability DP` `Bitwise DP`                                                                                                                                                                           |
  | 🌳 Tree Operations | `DFS` `BFS` `Binary Search Tree` `Zigzag Traversal` `Heavy Light Decomposition` `Lowest Common Ancestor` `Inorder Traversal`                                                                                                                                                                                                                         |
  | 📝 Advanced        | `Monotonic Stack` `Monotonic Queue` `Bit Manipulation` `Topological Sort` `A* Search` `Dijkstra` `Kosaraju` `Articulation Points` `Bridges` `Strongly Connected Components` `Network Flow` `Maximum Bipartite Matching` `Grid Traversal` `Kruskal` `Prim` `Bellman-Ford` `Floyd-Warshall` `Ford-Fulkerson` `Hopcroft-Karp` `Kahn's Topological Sort` |
  | 🔤 String          | `String Operations` `Z Algorithm` `Manacher's Algorithm` `Knuth-Morris-Pratt` `Rabin-Karp` `Suffix Array` `String Hashing` `Palindrome Partitioning` `Edit Distance`                                                                                                                                                                                 |
  | 🔢 Number Theory   | `Extended Euclidean` `Chinese Remainder Theorem` `Sieve of Eratosthenes` `Sieve of Atkin` `Sieve of Sundaram` `Miller-Rabin Primality Test`                                                                                                                                                                                                          |
  | 📐 Matrix          | `Matrix Operations` `Matrix Traversal` `Matrix Spiral Traversal` `Matrix Chain Multiplication` `Matrix Exponentiation`                                                                                                                                                                                                                               |
  | 🎯 Other           | `Fast Fourier Transform` `Divide and Conquer` `Karatsuba Multiplication` `Fast and Slow Pointers` `Recursion` `Fibonacci`                                                                                                                                                                                                                            |

- 🔄 Side-by-side comparison of your solution with the reference implementation
- 🎯 Interactive Python REPL for testing solutions
- 📊 Progress tracking and gamification system
- 🏆 Achievement badges and experience points
- 🔥 Daily practice streaks with bonus rewards

### 🎮 Monster Hunter Themed Learning

- 🐉 **Monster Hunter Algorithm Explanations**

  - Each algorithm explained through Monster Hunter themed analogies
  - Real-world examples using monster materials, territories, and behaviors
  - Practical tips for implementation using monster hunting scenarios

- 🗺️ **Monster Territory Mapping**

  - Graph algorithms explained through monster territory navigation
  - Tree structures visualized as monster family hierarchies
  - Hash tables demonstrated through monster material registries
  - Trie operations for efficient monster name organization

- 🎯 **Monster Hunting Challenges**

  - Algorithm problems presented as monster hunting scenarios
  - Test cases based on monster materials and crafting
  - Performance optimization through monster behavior patterns
  - Monster-themed tips and hints for each challenge

- 🏃 **Monster Movement Patterns**
  - Sorting algorithms explained through monster migration patterns
  - Search algorithms demonstrated through monster tracking
  - Dynamic programming illustrated through hunting route optimization
  - Zigzag traversal for territory exploration

### ⚡ Productivity Tools

- ⏱️ **Timebox Timer**

  - Preset intervals (15m, 30m, 45m, 1h)
  - Play/Pause functionality
  - Reset option
  - Visual countdown
  - Focus alerts

- 🎵 **Background Music Player**
  - Curated playlist of Madlib and J Dilla instrumentals
  - Volume control
  - Auto-shuffling playlist
  - Minimal interface

### 📚 Learning Resources

- 🎥 Video tutorials for each algorithm pattern
- 📖 Detailed explanations with time and space complexity
- 🎯 Practice problems with Monster Hunter themes
- 💡 Tips and tricks for implementation
- 🔍 Common pitfalls and best practices
- 📊 Real-world applications and use cases

## 🛠️ Tech Stack

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)

</div>

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/algo-trainer.git
cd algo-trainer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

### 🌐 Web Build

```bash
npm run build
```

### 🖥️ Desktop Build

```bash
npm run electron:build
```

## 📁 Project Structure

```
algo-trainer/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Algorithm patterns and utilities
│   ├── styles/        # CSS modules and global styles
│   └── assets/        # Static assets
├── public/            # Public assets
├── electron/          # Electron app configuration
└── build/            # Build outputs and icons
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- 🎵 Background music featuring the works of J Dilla and Madlib
- 🎨 Dracula theme for the code editor
- 💫 All the amazing open-source libraries that made this project possible

## 📄 Usage

1. Select an algorithm pattern to practice
2. Write your implementation in the code editor
3. Use the Python REPL to test your code
4. Compare your solution with the provided implementation
5. Use the timer to track your practice sessions
6. Navigate between patterns using the navigation buttons

## 📄 Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Monaco Editor
- Pyodide (Python in the browser)
- Shadcn UI
