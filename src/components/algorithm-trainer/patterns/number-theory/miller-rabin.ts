import type { AlgorithmPattern } from "../../types";

export const millerRabinPattern: AlgorithmPattern = {
  title: "Miller-Rabin Primality Test",
  description:
    "A probabilistic primality test that determines whether a given number is probably prime or definitely composite. It's more efficient than deterministic tests for large numbers.",
  timeComplexity: "O(k log³ n), where k is the number of rounds",
  spaceComplexity: "O(1)",
  pseudocode: `function isPrime(n, k):
    # Handle base cases
    if n <= 1 or n == 4:
        return false
    if n <= 3:
        return true
    
    # Find d such that n-1 = 2^s * d
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    
    # Test k times
    for i in range(k):
        a = random(2, n-2)
        x = pow(a, d, n)
        
        if x == 1 or x == n-1:
            continue
            
        for j in range(s-1):
            x = pow(x, 2, n)
            if x == n-1:
                break
        else:
            return false
    
    return true`,
  example: `// Test if 561 is prime (it's a Carmichael number)
const isPrime = millerRabinTest(561, 5);
console.log(isPrime); // false

// Test if 104729 is prime (it is)
const isPrime2 = millerRabinTest(104729, 5);
console.log(isPrime2); // true`,
  implementation: `function millerRabinTest(n: number, k: number): boolean {
  // Handle base cases
  if (n <= 1 || n === 4) return false;
  if (n <= 3) return true;
  
  // Find d such that n-1 = 2^s * d
  let d = n - 1;
  let s = 0;
  while (d % 2 === 0) {
    d = Math.floor(d / 2);
    s++;
  }
  
  // Test k times
  for (let i = 0; i < k; i++) {
    const a = 2 + Math.floor(Math.random() * (n - 4));
    let x = modExp(a, d, n);
    
    if (x === 1 || x === n - 1) continue;
    
    let found = false;
    for (let j = 0; j < s - 1; j++) {
      x = modExp(x, 2, n);
      if (x === n - 1) {
        found = true;
        break;
      }
    }
    
    if (!found) return false;
  }
  
  return true;
}

function modExp(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  
  return result;
}`,
  category: "number-theory",
};
