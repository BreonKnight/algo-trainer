import type { AlgorithmPattern } from "../../types";

export const fastFourierTransformPattern: AlgorithmPattern = {
  title: "Fast Fourier Transform",
  description:
    "An efficient algorithm to compute the Discrete Fourier Transform (DFT) and its inverse. It's widely used in signal processing, polynomial multiplication, and other applications.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `function FFT(a, invert):
    n = len(a)
    if n == 1:
        return a
    
    # Split into even and odd
    a0 = [a[2*i] for i in range(n//2)]
    a1 = [a[2*i+1] for i in range(n//2)]
    
    # Recursive calls
    y0 = FFT(a0, invert)
    y1 = FFT(a1, invert)
    
    # Combine results
    y = [0] * n
    w = 1
    wn = exp(2j * pi / n * (-1 if invert else 1))
    
    for k in range(n//2):
        t = w * y1[k]
        y[k] = y0[k] + t
        y[k + n//2] = y0[k] - t
        w *= wn
    
    return y`,
  example: `// Multiply two polynomials
const p1 = [1, 2, 3];  // 1 + 2x + 3x²
const p2 = [4, 5, 6];  // 4 + 5x + 6x²

const result = multiplyPolynomials(p1, p2);
// Result: [4, 13, 28, 27, 18]  // 4 + 13x + 28x² + 27x³ + 18x⁴`,
  implementation: `function FFT(a: number[], invert: boolean = false): Complex[] {
  const n = a.length;
  if (n === 1) return a.map(x => ({ real: x, imag: 0 }));
  
  // Split into even and odd
  const a0 = a.filter((_, i) => i % 2 === 0);
  const a1 = a.filter((_, i) => i % 2 === 1);
  
  // Recursive calls
  const y0 = FFT(a0, invert);
  const y1 = FFT(a1, invert);
  
  // Combine results
  const y: Complex[] = new Array(n);
  let w = { real: 1, imag: 0 };
  const wn = {
    real: Math.cos((2 * Math.PI) / n),
    imag: (invert ? -1 : 1) * Math.sin((2 * Math.PI) / n)
  };
  
  for (let k = 0; k < n / 2; k++) {
    const t = multiplyComplex(w, y1[k]);
    y[k] = addComplex(y0[k], t);
    y[k + n / 2] = subtractComplex(y0[k], t);
    w = multiplyComplex(w, wn);
  }
  
  return y;
}

function multiplyPolynomials(p1: number[], p2: number[]): number[] {
  const n = 1 << Math.ceil(Math.log2(p1.length + p2.length - 1));
  
  // Pad with zeros
  const a = [...p1, ...new Array(n - p1.length).fill(0)];
  const b = [...p2, ...new Array(n - p2.length).fill(0)];
  
  // Compute FFT
  const fa = FFT(a);
  const fb = FFT(b);
  
  // Pointwise multiplication
  const fc = fa.map((x, i) => multiplyComplex(x, fb[i]));
  
  // Inverse FFT
  const c = FFT(fc, true).map(x => x.real / n);
  
  // Round to integers and remove trailing zeros
  return c.map(x => Math.round(x)).filter((x, i) => i < p1.length + p2.length - 1);
}

interface Complex {
  real: number;
  imag: number;
}

function addComplex(a: Complex, b: Complex): Complex {
  return { real: a.real + b.real, imag: a.imag + b.imag };
}

function subtractComplex(a: Complex, b: Complex): Complex {
  return { real: a.real - b.real, imag: a.imag - b.imag };
}

function multiplyComplex(a: Complex, b: Complex): Complex {
  return {
    real: a.real * b.real - a.imag * b.imag,
    imag: a.real * b.imag + a.imag * b.real
  };
}`,
  category: "number-theory",
};
