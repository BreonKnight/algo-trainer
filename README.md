# 🎯 Algorithm Trainer

A modern, interactive web application for practicing and learning algorithms with a built-in timer and background music player featuring Madlib and J Dilla instrumentals.

![Algorithm Trainer Screenshot](public/favicon.png)

## ✨ Features

### 🧮 Algorithm Practice

- 💻 Interactive code editor with Dracula theme
- 📚 Built-in pseudocode patterns for common algorithms:

  | Category           | Patterns                                                                              |
  | ------------------ | ------------------------------------------------------------------------------------- |
  | 🔄 Sorting         | `Quick Sort` `Merge Sort` `Heap Sort` `Bubble Sort` `Selection Sort` `Insertion Sort` |
  | 🔍 Searching       | `Binary Search` `Linear Search` `Binary Search on Answer`                             |
  | 📊 Data Structures | `Trees` `Linked Lists` `Graphs` `Hash Tables` `Stack` `Queue` `Heap` `Trie`           |
  | 🧩 Techniques      | `Dynamic Programming` `Greedy` `Backtracking` `Two Pointers` `Sliding Window`         |
  | 🌳 Tree Operations | `DFS` `BFS` `Binary Search Tree`                                                      |
  | 📝 Advanced        | `Monotonic Stack` `Monotonic Queue` `Bit Manipulation` `Topological Sort`             |

- 🔄 Side-by-side comparison of your solution with the reference implementation

### ⚡ Productivity Tools

- ⏱️ **Timebox Timer**

  - Preset intervals (15m, 30m, 45m, 1h)
  - Play/Pause functionality
  - Reset option
  - Visual countdown

- 🎵 **Background Music Player**
  - Curated playlist of Madlib and J Dilla instrumentals
  - Volume control
  - Auto-shuffling playlist
  - Minimal interface

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
