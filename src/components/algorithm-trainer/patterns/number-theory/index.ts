import type { AlgorithmPattern } from "../../types";
import { extendedEuclideanPattern } from "./extended-euclidean";
import { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
import { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
import { primeFactorizationPattern } from "./prime-factorization";
import { sieveOfSundaramPattern } from "./sieve-of-sundaram";
import { sieveOfAtkinPattern } from "./sieve-of-atkin";
import { fastFourierTransformPattern } from "./fast-fourier-transform";
import { millerRabinPrimalityTestPattern } from "./miller-rabin-primality-test";
export const numberTheoryPatterns: AlgorithmPattern[] = [
  extendedEuclideanPattern,
  chineseRemainderTheoremPattern,
  sieveOfEratosthenesPattern,
  primeFactorizationPattern,
  sieveOfSundaramPattern,
  sieveOfAtkinPattern,
  millerRabinPrimalityTestPattern,
  fastFourierTransformPattern,
];

export { extendedEuclideanPattern } from "./extended-euclidean";
export { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
export { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
export { primeFactorizationPattern } from "./prime-factorization";
export { sieveOfSundaramPattern } from "./sieve-of-sundaram";
export { sieveOfAtkinPattern } from "./sieve-of-atkin";
export { millerRabinPrimalityTestPattern } from "./miller-rabin-primality-test";
export { fastFourierTransformPattern } from "./fast-fourier-transform";
