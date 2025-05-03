import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState<number>(0); // Track total time for progress
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (minutes: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(minutes * 60);
    setTotalTime(minutes * 60);
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resumeTimer = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(0);
    setTotalTime(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Circular progress bar calculations
  const radius = 28;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = totalTime > 0 ? timeLeft / totalTime : 0;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="text-xs text-secondary font-medium mb-1">
        Timebox Timer
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <div className="flex flex-col items-center w-full sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <span
              className="mb-4 px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-xs text-center w-full shadow-sm"
              aria-live="polite"
            >
              {isRunning
                ? "Running"
                : timeLeft === 0 && totalTime > 0
                ? "Finished"
                : "Paused"}
            </span>
            <div className="relative flex items-center justify-center w-[56px] h-[56px] mx-auto mb-6">
              {/* Circular Progress Bar */}
              <svg
                height={radius * 2}
                width={radius * 2}
                className="absolute inset-0"
              >
                <circle
                  stroke="var(--bg-secondary)"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  stroke="url(#timer-gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition:
                      "stroke-dashoffset 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
                <defs>
                  <linearGradient
                    id="timer-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="var(--gradient-from)" />
                    <stop offset="100%" stopColor="var(--gradient-to)" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-bold text-main bg-secondary/50 rounded-full px-1 shadow-lg ring-2 ring-accent/20 [text-shadow:_0_0_8px_rgba(0,0,0,0.5)]"
                aria-live="polite"
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {[15, 30, 45, 60].map((min) => (
              <Button
                key={min}
                onClick={() => startTimer(min)}
                variant={totalTime / 60 === min ? "default" : "outline"}
                size="sm"
                className={`text-xs px-3 h-7 min-w-[44px] rounded-md ring-1 ring-accent/20 transition-all duration-150
                  ${
                    totalTime / 60 === min
                      ? "bg-accent text-accent-foreground shadow-lg scale-105"
                      : "bg-secondary text-main hover:bg-accent/10 hover:scale-105 focus:ring-2 focus:ring-accent/40"
                  }
                  active:scale-95`}
                disabled={isRunning}
                title={`Set ${min === 60 ? "1 hour" : min + " minute"} timer`}
                aria-label={`Set ${
                  min === 60 ? "1 hour" : min + " minute"
                } timer`}
              >
                {min === 60 ? "1h" : `${min}m`}
              </Button>
            ))}
          </div>
          <div className="h-2" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <Button
                onClick={isRunning ? pauseTimer : resumeTimer}
                variant="default"
                size="sm"
                className={`h-7 w-7 min-w-[44px] min-h-[44px] p-0 bg-accent text-main hover:bg-accent2 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md transition-transform duration-200 flex items-center justify-center ${
                  isRunning || (!isRunning && timeLeft > 0)
                    ? "ring-2 ring-accent shadow-lg"
                    : ""
                }`}
                title={isRunning ? "Pause timer" : "Start timer"}
                aria-label={isRunning ? "Pause timer" : "Start timer"}
              >
                <span className="transition-transform duration-200 ease-in-out transform group-hover:scale-110">
                  {isRunning ? (
                    <Pause size={18} className="transition-all duration-200" />
                  ) : (
                    <Play size={18} className="transition-all duration-200" />
                  )}
                </span>
              </Button>
              <span className="text-[10px] text-secondary mt-1">
                {isRunning ? "Pause" : "Start"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Button
                onClick={resetTimer}
                variant="ghost"
                size="sm"
                className="h-7 w-7 min-w-[44px] min-h-[44px] p-0 bg-secondary text-main hover:bg-secondary/80 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md transition-transform ring-1 ring-accent/20"
                title="Reset timer"
                aria-label="Reset timer"
              >
                <RotateCcw size={14} />
              </Button>
              <span className="text-[10px] text-secondary mt-1">Reset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
