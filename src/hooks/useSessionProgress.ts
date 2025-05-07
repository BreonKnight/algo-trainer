import { useState, useEffect } from "react";
import GamificationService from "@/lib/gamification";
import SessionService from "@/lib/services/session-service";

export function useSessionProgress() {
  const [sessionProgress, setSessionProgress] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);
  const sessionService = SessionService.getInstance();

  useEffect(() => {
    // Initialize session when component mounts
    setSessionStartTime(new Date());

    // Load initial progress
    sessionService.getSessionProgress().then(setSessionProgress);

    // Cleanup when component unmounts
    return () => {
      sessionService.endSession().then(({ experience }) => {
        // Update gamification service with experience points
        const gamificationService = GamificationService.getInstance();
        gamificationService.addExperience(experience);
      });
    };
  }, [sessionService]);

  const updateProgress = async (progress: number) => {
    const newProgress = Math.min(Math.max(progress, 0), 100);
    await sessionService.updateSessionProgress(newProgress);
    setSessionProgress(newProgress);
  };

  return {
    sessionProgress,
    updateProgress,
    sessionStartTime,
  };
}
