import GamificationService from "../gamification";

interface SessionProgress {
  progress: number;
  startTime: Date;
  duration?: number;
}

class SessionService {
  private static instance: SessionService;
  private currentSession: SessionProgress | null = null;

  private constructor() {
    // Initialize from localStorage if available
    const savedSession = localStorage.getItem("currentSession");
    if (savedSession) {
      this.currentSession = JSON.parse(savedSession);
    }
  }

  public static getInstance(): SessionService {
    if (!SessionService.instance) {
      SessionService.instance = new SessionService();
    }
    return SessionService.instance;
  }

  public async getSessionProgress(): Promise<number> {
    // In a real API, this would fetch from the backend
    // For now, we'll use localStorage
    return this.currentSession?.progress ?? 0;
  }

  public async updateSessionProgress(progress: number): Promise<void> {
    if (!this.currentSession) {
      this.currentSession = {
        progress: 0,
        startTime: new Date(),
      };
    }

    this.currentSession.progress = Math.min(Math.max(progress, 0), 100);
    localStorage.setItem("currentSession", JSON.stringify(this.currentSession));
  }

  public async endSession(): Promise<{ experience: number }> {
    if (!this.currentSession) {
      return { experience: 0 };
    }

    const sessionDuration =
      new Date().getTime() - new Date(this.currentSession.startTime).getTime();
    const experience = Math.floor(sessionDuration / 1000); // Convert ms to seconds

    // Update gamification service
    const gamificationService = GamificationService.getInstance();
    gamificationService.addExperience(experience);

    // Clear session
    this.currentSession = null;
    localStorage.removeItem("currentSession");

    return { experience };
  }
}

export default SessionService;
