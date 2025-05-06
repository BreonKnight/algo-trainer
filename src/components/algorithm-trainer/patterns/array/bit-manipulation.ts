import { AlgorithmPattern } from "../../types/pattern-types";

export const bitManipulationPattern: AlgorithmPattern = {
  title: "Bit Manipulation Pattern",
  description:
    "Techniques for performing operations at the bit level, often used to optimize space usage or perform fast arithmetic operations.",
  timeComplexity: "Usually O(1) or O(number of bits)",
  category: "Bit Manipulation",
  spaceComplexity: "O(1)",
  pseudocode: `Common operations:\n1. Get bit: num & (1 << i)\n2. Set bit: num | (1 << i)\n3. Clear bit: num & ~(1 << i)\n4. Toggle bit: num ^ (1 << i)\n5. Count set bits: while n: count += n & 1; n >>= 1`,
  example: `Number: 10 (1010 in binary)\n\nGet bit at position 1:\n1010 & (1 << 1) = 1010 & 0010 = 0010 (bit is 1)\n\nSet bit at position 2:\n1010 | (1 << 2) = 1010 | 0100 = 1110\n\nClear bit at position 3:\n1010 & ~(1 << 3) = 1010 & 0111 = 0010\n\nToggle bit at position 1:\n1010 ^ (1 << 1) = 1010 ^ 0010 = 1000`,
  implementation: `class BitManipulation:
    @staticmethod
    def get_bit(num, i):
        return (num & (1 << i)) != 0
    
    @staticmethod
    def set_bit(num, i):
        return num | (1 << i)
    
    @staticmethod
    def clear_bit(num, i):
        return num & ~(1 << i)
    
    @staticmethod
    def toggle_bit(num, i):
        return num ^ (1 << i)
    
    @staticmethod
    def count_set_bits(num):
        count = 0
        while num:
            count += num & 1
            num >>= 1
        return count`,
};
