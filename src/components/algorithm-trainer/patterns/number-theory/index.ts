import { chineseRemainderTheoremPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/chinese-remainder-theorem";
import { extendedEuclideanPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/extended-euclidean";
import { fastFourierTransformPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/fast-fourier-transform";
import { millerRabinPrimalityTestPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/miller-rabin-primality-test";
import { sieveOfAtkinPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/sieve-of-atkin";
import { sieveOfEratosthenesPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/sieve-of-eratosthenes";
import { sieveOfSundaramPattern } from "@/src/components/algorithm-trainer/patterns/number-theory/sieve-of-sundaram";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/src/lib/patterns/pattern-utils";

export const numberTheoryPatterns = createPatternRecord<AlgorithmPattern>({
  "Extended Euclidean": extendedEuclideanPattern,
  "Chinese Remainder Theorem": chineseRemainderTheoremPattern,
  "Sieve of Eratosthenes": sieveOfEratosthenesPattern,
  "Sieve of Sundaram": sieveOfSundaramPattern,
  "Sieve of Atkin": sieveOfAtkinPattern,
  "Miller-Rabin Primality Test": millerRabinPrimalityTestPattern,
  "Fast Fourier Transform": fastFourierTransformPattern,
});
