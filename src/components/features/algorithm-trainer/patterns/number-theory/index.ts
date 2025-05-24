import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

import { chineseRemainderTheoremPattern } from "./chinese-remainder-theorem";
import { extendedEuclideanPattern } from "./extended-euclidean";
import { fastFourierTransformPattern } from "./fast-fourier-transform";
import { millerRabinPrimalityTestPattern } from "./miller-rabin-primality-test";
import { sieveOfAtkinPattern } from "./sieve-of-atkin";
import { sieveOfEratosthenesPattern } from "./sieve-of-eratosthenes";
import { sieveOfSundaramPattern } from "./sieve-of-sundaram";

export const numberTheoryPatterns = createPatternRecord<AlgorithmPattern>({
  "Extended Euclidean": {
    ...extendedEuclideanPattern,
    difficulty: "Medium",
  },
  "Chinese Remainder Theorem": {
    ...chineseRemainderTheoremPattern,
    difficulty: "Hard",
  },
  "Sieve of Eratosthenes": {
    ...sieveOfEratosthenesPattern,
    difficulty: "Easy",
  },
  "Sieve of Sundaram": {
    ...sieveOfSundaramPattern,
    difficulty: "Medium",
  },
  "Sieve of Atkin": {
    ...sieveOfAtkinPattern,
    difficulty: "Hard",
  },
  "Miller-Rabin Primality Test": {
    ...millerRabinPrimalityTestPattern,
    difficulty: "Hard",
  },
  "Fast Fourier Transform": {
    ...fastFourierTransformPattern,
    difficulty: "Hard",
  },
});
