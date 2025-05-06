import { AlgorithmPattern } from "../../types/pattern-types";
import { createPatternRecord } from "../../../../lib/patterns/pattern-utils";
import { extendedEuclideanPattern } from "./extended-euclidean";
import { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
import { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
import { sieveOfSundaramPattern } from "./sieve-of-sundaram";
import { sieveOfAtkinPattern } from "./sieve-of-atkin";
import { fastFourierTransformPattern } from "./fast-fourier-transform";
import { millerRabinPrimalityTestPattern } from "./miller-rabin-primality-test";

export const numberTheoryPatterns = createPatternRecord<AlgorithmPattern>({
  "Extended Euclidean": extendedEuclideanPattern,
  "Chinese Remainder Theorem": chineseRemainderTheoremPattern,
  "Sieve of Eratosthenes": sieveOfEratosthenesPattern,
  "Sieve of Sundaram": sieveOfSundaramPattern,
  "Sieve of Atkin": sieveOfAtkinPattern,
  "Miller-Rabin Primality Test": millerRabinPrimalityTestPattern,
  "Fast Fourier Transform": fastFourierTransformPattern,
});
