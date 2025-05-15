import type { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

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
  example: `# Multiply two polynomials
p1 = [1, 2, 3]  # 1 + 2x + 3x²
p2 = [4, 5, 6]  # 4 + 5x + 6x²

result = multiply_polynomials(p1, p2)
# Result: [4, 13, 28, 27, 18]  # 4 + 13x + 28x² + 27x³ + 18x⁴`,
  implementation: `import cmath
from typing import List, Tuple

def fft(a: List[complex], invert: bool = False) -> List[complex]:
    """
    Compute the Fast Fourier Transform of a sequence of complex numbers.
    
    Args:
        a: Input sequence of complex numbers
        invert: Whether to compute the inverse FFT
    
    Returns:
        FFT of the input sequence
    """
    n = len(a)
    if n == 1:
        return a
    
    # Split into even and odd
    a0 = [a[2*i] for i in range(n//2)]
    a1 = [a[2*i+1] for i in range(n//2)]
    
    # Recursive calls
    y0 = fft(a0, invert)
    y1 = fft(a1, invert)
    
    # Combine results
    y = [0] * n
    w = 1
    wn = cmath.exp(2j * cmath.pi / n * (-1 if invert else 1))
    
    for k in range(n//2):
        t = w * y1[k]
        y[k] = y0[k] + t
        y[k + n//2] = y0[k] - t
        w *= wn
    
    return y

def multiply_polynomials(p1: List[float], p2: List[float]) -> List[float]:
    """
    Multiply two polynomials using FFT.
    
    Args:
        p1: Coefficients of first polynomial
        p2: Coefficients of second polynomial
    
    Returns:
        Coefficients of the product polynomial
    """
    n = 1 << (len(p1) + len(p2) - 1).bit_length()
    
    # Pad with zeros
    a = p1 + [0] * (n - len(p1))
    b = p2 + [0] * (n - len(p2))
    
    # Compute FFT
    fa = fft([complex(x) for x in a])
    fb = fft([complex(x) for x in b])
    
    # Pointwise multiplication
    fc = [x * y for x, y in zip(fa, fb)]
    
    # Inverse FFT
    c = fft(fc, True)
    c = [x.real / n for x in c]
    
    # Round to integers and remove trailing zeros
    result = [round(x) for x in c]
    return result[:len(p1) + len(p2) - 1]

# Example usage
p1 = [1, 2, 3]  # 1 + 2x + 3x²
p2 = [4, 5, 6]  # 4 + 5x + 6x²

result = multiply_polynomials(p1, p2)
print(f"Product of polynomials: {result}")  # [4, 13, 28, 27, 18]`,
  category: "Number Theory",
};
