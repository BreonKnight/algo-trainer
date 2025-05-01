import { Pattern } from "../../Pattern";
import { MonsterHunterGuide } from "../../MonsterHunterGuide";

export const MillerRabinPrimalityTest = () => {
  const isPrime = (n: number, k: number): boolean => {
    // Handle edge cases
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;

    // Write n-1 as d*2^s
    let d = n - 1;
    let s = 0;
    while (d % 2 === 0) {
      d /= 2;
      s++;
    }

    // Test k times
    for (let i = 0; i < k; i++) {
      // Choose random base a
      const a = 2 + Math.floor(Math.random() * (n - 3));
      let x = modExp(a, d, n);

      if (x === 1 || x === n - 1) continue;

      // Test for strong pseudoprimes
      let isComposite = true;
      for (let j = 0; j < s - 1; j++) {
        x = modExp(x, 2, n);
        if (x === n - 1) {
          isComposite = false;
          break;
        }
        if (x === 1) return false;
      }

      if (isComposite) return false;
    }

    return true;
  };

  // Helper function for modular exponentiation
  const modExp = (base: number, exp: number, mod: number): number => {
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
  };

  return (
    <Pattern
      title="Miller-Rabin Primality Test"
      description="A probabilistic primality test that determines if a number is probably prime."
      implementation={isPrime}
      guide={MonsterHunterGuide["Miller-Rabin Primality Test"]}
    />
  );
};
