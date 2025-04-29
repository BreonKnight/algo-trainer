import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlgorithmTrainer from "./components/algorithm-trainer/AlgorithmTrainer";
import { ProgressView } from "./components/ProgressView";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="w-screen h-screen overflow-x-hidden">
          <Toaster position="top-center" richColors theme="dark" />

          <Routes>
            <Route path="/" element={<AlgorithmTrainer />} />
            <Route path="/progress" element={<ProgressView />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
