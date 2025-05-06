import { AlgorithmPattern } from "../../types/pattern-types";

export const hashTablePattern: AlgorithmPattern = {
  title: "Hash Table Implementation",
  description:
    "Implementation of a data structure that maps keys to values using a hash function, providing constant-time average case operations.",
  timeComplexity: "Average: O(1) for insert/delete/search, Worst: O(n)",
  category: "Data Structures",
  spaceComplexity: "O(n) for n key-value pairs",
  pseudocode: `
Hash Table operations:
1. put(key, value):
   - Hash key to get index
   - Handle collisions
   - Store key-value pair
2. get(key):
   - Hash key to get index
   - Return value if found
3. remove(key):
   - Hash key to get index
   - Remove key-value pair
4. contains(key):
   - Check if key exists
`,
  example: `table = HashTable()
table.put("name", "John")  # hash("name") = 2
table.put("age", 30)      # hash("age") = 5
table.get("name")         # returns "John"
table.contains("age")     # returns True
table.remove("name")      # removes entry`,
  implementation: `class HashTable:
    def __init__(self, size=1024):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                item[1] = value
                return
        self.table[index].append([key, value])
    
    def get(self, key):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                return item[1]
        raise KeyError(key)
    
    def remove(self, key):
        index = self._hash(key)
        for i, item in enumerate(self.table[index]):
            if item[0] == key:
                del self.table[index][i]
                return
        raise KeyError(key)
    
    def contains(self, key):
        index = self._hash(key)
        return any(item[0] == key for item in self.table[index])`,
};
