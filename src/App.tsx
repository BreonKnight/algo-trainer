import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlgorithmTrainer from "./components/algorithm-trainer/AlgorithmTrainer";
import { ProgressView } from "./components/ProgressView";
import { TutorialView } from "./components/tutorials/TutorialView";
import { PythonTechniques } from "./components/algorithm-trainer/PythonTechniques";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full bg-main">
          <Routes>
            <Route path="/" element={<AlgorithmTrainer />} />
            <Route path="/progress" element={<ProgressView />} />
            <Route path="/tutorials" element={<TutorialView />} />
            <Route path="/python-techniques" element={<PythonTechniques />} />
          </Routes>
          <Toaster position="top-center" richColors theme="dark" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
