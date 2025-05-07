import { chineseRemainderTheoremPattern } from "@/components/algorithm-trainer/patterns/number-theory/chinese-remainder-theorem";
import { extendedEuclideanPattern } from "@/components/algorithm-trainer/patterns/number-theory/extended-euclidean";
import { fastFourierTransformPattern } from "@/components/algorithm-trainer/patterns/number-theory/fast-fourier-transform";
import { millerRabinPrimalityTestPattern } from "@/components/algorithm-trainer/patterns/number-theory/miller-rabin-primality-test";
import { sieveOfAtkinPattern } from "@/components/algorithm-trainer/patterns/number-theory/sieve-of-atkin";
import { sieveOfEratosthenesPattern } from "@/components/algorithm-trainer/patterns/number-theory/sieve-of-eratosthenes";
import { sieveOfSundaramPattern } from "@/components/algorithm-trainer/patterns/number-theory/sieve-of-sundaram";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

export const numberTheoryPatterns = createPatternRecord<AlgorithmPattern>({
  "Extended Euclidean": extendedEuclideanPattern,
  "Chinese Remainder Theorem": chineseRemainderTheoremPattern,
  "Sieve of Eratosthenes": sieveOfEratosthenesPattern,
  "Sieve of Sundaram": sieveOfSundaramPattern,
  "Sieve of Atkin": sieveOfAtkinPattern,
  "Miller-Rabin Primality Test": millerRabinPrimalityTestPattern,
  "Fast Fourier Transform": fastFourierTransformPattern,
});
