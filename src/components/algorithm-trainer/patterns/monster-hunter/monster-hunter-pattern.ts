import { AlgorithmPattern } from "../../types";

export const monsterHunterPattern: AlgorithmPattern = {
  title: "Monster Hunter",
  description:
    "A pattern for solving monster hunting problems where you need to optimize the order of hunting monsters to maximize rewards or minimize damage taken.",
  timeComplexity: "O(n * 2^n) where n is the number of monsters",
  spaceComplexity: "O(2^n)",
  pseudocode: `
function monsterHunter(monsters, time_limit):
    n = len(monsters)
    dp = [0] * (1 << n)
    
    for mask in range(1 << n):
        current_time = 0
        for i in range(n):
            if mask & (1 << i):
                current_time += monsters[i].time
        
        if current_time > time_limit:
            continue
            
        for i in range(n):
            if not (mask & (1 << i)):
                new_mask = mask | (1 << i)
                reward = monsters[i].reward
                dp[new_mask] = max(dp[new_mask], dp[mask] + reward)
    
    return max(dp)
  `,
  example: `
// Example usage:
const monstersPatternPatternPatternPattern = [
  { time: 2, reward: 10 },
  { time: 3, reward: 15 },
  { time: 5, reward: 20 }
];
const timeLimitPatternPatternPatternPattern = 7;
const maxRewardPatternPatternPatternPattern = monsterHunter(monsters, timeLimit);
console.log(maxReward); // Output: 25 (monsters 0 and 1)
  `,
  implementation: `
interface Monster {
  time: number;
  reward: number;
}

function monsterHunter(monsters: Monster[], timeLimit: number): number {
  const nPatternPatternPatternPattern = monsters.length;
  const dp: number[] = new Array(1 << n).fill(0);
  
  for (let mask = 0; mask < (1 << n); mask++) {
    let currentTime = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        currentTime += monsters[i].time;
      }
    }
    
    if (currentTime > timeLimit) {
      continue;
    }
    
    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i))) {
        const newMaskPatternPatternPatternPattern = mask | (1 << i);
        const rewardPatternPatternPatternPattern = monsters[i].reward;
        dp[newMask] = Math.max(dp[newMask], dp[mask] + reward);
      }
    }
  }
  
  return Math.max(...dp);
}

// Helper function to get the optimal monster sequence
function getOptimalSequence(monsters: Monster[], timeLimit: number): Monster[] {
  const nPatternPatternPatternPattern = monsters.length;
  const dp: number[] = new Array(1 << n).fill(0);
  const prev: number[] = new Array(1 << n).fill(-1);
  
  for (let mask = 0; mask < (1 << n); mask++) {
    let currentTime = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        currentTime += monsters[i].time;
      }
    }
    
    if (currentTime > timeLimit) {
      continue;
    }
    
    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i))) {
        const newMaskPatternPatternPatternPattern = mask | (1 << i);
        const rewardPatternPatternPatternPattern = monsters[i].reward;
        if (dp[newMask] < dp[mask] + reward) {
          dp[newMask] = dp[mask] + reward;
          prev[newMask] = i;
        }
      }
    }
  }
  
  // Reconstruct the sequence
  const sequence: Monster[] = [];
  let mask = dp.indexOf(Math.max(...dp));
  while (mask > 0) {
    const monsterIndexPatternPatternPatternPattern = prev[mask];
    sequence.unshift(monsters[monsterIndex]);
    mask ^= (1 << monsterIndex);
  }
  
  return sequence;
}
  `,
  category: "monster-hunter",
};
