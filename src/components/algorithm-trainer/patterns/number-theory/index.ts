import type { AlgorithmPattern } from "../../types";
import { extendedEuclideanPattern } from "./extended-euclidean";
import { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
import { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
import { primeFactorizationPattern } from "./prime-factorization";
import { sieveOfSundaramPattern } from "./sieve-of-sundaram";
import { sieveOfAtkinPattern } from "./sieve-of-atkin";
import { millerRabinPattern } from "./miller-rabin";
import { fastFourierTransformPattern } from "./fast-fourier-transform";

export const numberTheoryPatterns: AlgorithmPattern[] = [
  extendedEuclideanPattern,
  chineseRemainderTheoremPattern,
  sieveOfEratosthenesPattern,
  primeFactorizationPattern,
  sieveOfSundaramPattern,
  sieveOfAtkinPattern,
  millerRabinPattern,
  fastFourierTransformPattern,
];

export { extendedEuclideanPattern } from "./extended-euclidean";
export { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
export { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
export { primeFactorizationPattern } from "./prime-factorization";
export { sieveOfSundaramPattern } from "./sieve-of-sundaram";
export { sieveOfAtkinPattern } from "./sieve-of-atkin";
export { millerRabinPattern } from "./miller-rabin";
export { fastFourierTransformPattern } from "./fast-fourier-transform";
