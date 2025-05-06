// Types for gamification system
export interface UserProgress {
  level: number;
  experience: number;
  points: number;
  completedAlgorithms: string[];
  badges: Badge[];
  streak: number;
  lastActiveDate: Date;
  algorithmProgress: AlgorithmProgress[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  dateEarned?: Date;
  progress: number;
  maxProgress: number;
}

export interface AlgorithmProgress {
  id: string;
  name: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
}

// Default badges
export const DEFAULT_BADGES: Badge[] = [
  {
    id: "first-run",
    name: "First Run",
    description: "Run your first piece of code",
    icon: "🚀",
    unlocked: false,
    progress: 0,
    maxProgress: 1,
  },
  {
    id: "code-learner",
    name: "Code Learner",
    description: "Write 100 lines of code",
    icon: "📚",
    unlocked: false,
    progress: 0,
    maxProgress: 100,
  },
  {
    id: "algorithm-explorer",
    name: "Algorithm Explorer",
    description: "Try 3 different algorithm patterns",
    icon: "🔍",
    unlocked: false,
    progress: 0,
    maxProgress: 3,
  },
  {
    id: "efficiency-expert",
    name: "Efficiency Expert",
    description: "Run code that executes in under 100ms",
    icon: "⚡",
    unlocked: false,
    progress: 0,
    maxProgress: 1,
  },
  {
    id: "bug-squasher",
    name: "Bug Squasher",
    description: "Fix 5 syntax errors",
    icon: "🐛",
    unlocked: false,
    progress: 0,
    maxProgress: 5,
  },
  {
    id: "streak-master",
    name: "Streak Master",
    description: "Code for 3 days in a row",
    icon: "🔥",
    unlocked: false,
    progress: 0,
    maxProgress: 3,
  },
];

// Experience points needed for each level
const XP_PER_LEVEL = 1000;

// Gamification service
class GamificationService {
  private static instance: GamificationService;
  private userProgress: UserProgress;
  private listeners: ((progress: UserProgress) => void)[] = [];

  private constructor() {
    this.userProgress = this.loadProgress();
    this.checkStreak();
  }

  public static getInstance(): GamificationService {
    if (!GamificationService.instance) {
      GamificationService.instance = new GamificationService();
    }
    return GamificationService.instance;
  }

  // Load user progress from localStorage
  private loadProgress(): UserProgress {
    const storedProgress = localStorage.getItem("userProgress");
    if (storedProgress) {
      return JSON.parse(storedProgress);
    }

    // Default progress
    return {
      level: 1,
      experience: 0,
      points: 0,
      completedAlgorithms: [],
      badges: DEFAULT_BADGES,
      streak: 0,
      lastActiveDate: new Date(),
      algorithmProgress: [],
    };
  }

  // Save user progress to localStorage
  private saveProgress(): void {
    localStorage.setItem("userProgress", JSON.stringify(this.userProgress));
    this.notifyListeners();
  }

  // Check and update streak
  private checkStreak(): void {
    const today = new Date();
    const lastActive = new Date(this.userProgress.lastActiveDate);

    // Reset time part for date comparison
    today.setHours(0, 0, 0, 0);
    lastActive.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      // Already logged in today, no streak update needed
      return;
    } else if (diffDays === 1) {
      // Next day, increment streak
      this.userProgress.streak++;
      this.addPoints(10); // Bonus points for maintaining streak
    } else {
      // Streak broken
      this.userProgress.streak = 1;
    }

    this.userProgress.lastActiveDate = new Date();
    this.saveProgress();

    // Check for streak badge
    this.updateBadgeProgress("streak-master", this.userProgress.streak);
  }

  // Add experience points
  public addExperience(amount: number): void {
    this.userProgress.experience += amount;

    // Check for level up
    while (this.userProgress.experience >= XP_PER_LEVEL) {
      this.userProgress.experience -= XP_PER_LEVEL;
      this.userProgress.level++;
    }

    this.saveProgress();
  }

  // Add points
  public addPoints(amount: number): void {
    this.userProgress.points += amount;
    this.addExperience(amount);
    this.saveProgress();
  }

  // Record algorithm attempt
  public recordAlgorithmAttempt(algorithmId: string, success: boolean): void {
    // Update algorithm progress
    let algorithmProgress = this.userProgress.algorithmProgress.find((p) => p.id === algorithmId);

    if (!algorithmProgress) {
      algorithmProgress = {
        id: algorithmId,
        name: algorithmId, // This should be replaced with actual name
        progress: 0,
        maxProgress: 1,
        completed: false,
      };
      this.userProgress.algorithmProgress.push(algorithmProgress);
    }

    if (success) {
      algorithmProgress.progress++;
      algorithmProgress.completed = algorithmProgress.progress >= algorithmProgress.maxProgress;

      if (!this.userProgress.completedAlgorithms.includes(algorithmId)) {
        this.userProgress.completedAlgorithms.push(algorithmId);
        this.addPoints(50); // Points for completing a new algorithm
      }
    }

    // Update algorithm explorer badge
    this.updateBadgeProgress("algorithm-explorer", this.userProgress.completedAlgorithms.length);

    this.saveProgress();
  }

  // Record code execution
  public recordCodeExecution(linesOfCode: number, executionTime: number, hasError: boolean): void {
    // Points for running code
    this.addPoints(5);

    // Update first run badge
    this.updateBadgeProgress("first-run", 1);

    // Update code learner badge
    this.updateBadgeProgress("code-learner", linesOfCode);

    // Update efficiency expert badge
    if (executionTime < 100) {
      this.updateBadgeProgress("efficiency-expert", 1);
    }

    // Update bug squasher badge
    if (hasError) {
      this.updateBadgeProgress("bug-squasher", 1);
    }

    this.saveProgress();
  }

  // Update badge progress
  private updateBadgeProgress(badgeId: string, progress: number): void {
    const badge = this.userProgress.badges.find((b) => b.id === badgeId);
    if (badge) {
      badge.progress = Math.min(progress, badge.maxProgress);

      // Check if badge was just unlocked
      if (!badge.unlocked && badge.progress >= badge.maxProgress) {
        badge.unlocked = true;
        badge.dateEarned = new Date();
        this.addPoints(20); // Bonus points for unlocking a badge
      }
    }
  }

  // Get current user progress
  public getUserProgress(): UserProgress {
    return { ...this.userProgress };
  }

  // Add a listener for progress updates
  public addListener(listener: (progress: UserProgress) => void): void {
    this.listeners.push(listener);
  }

  // Remove a listener
  public removeListener(listener: (progress: UserProgress) => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  // Notify all listeners of progress update
  private notifyListeners(): void {
    const progress = this.getUserProgress();
    this.listeners.forEach((listener) => listener(progress));
  }
}

export default GamificationService;
