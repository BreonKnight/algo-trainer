import { PatternKey } from "./types";

export const monsterHunterPatternsExtended2 = new Map<PatternKey, string>([
  [
    "Binary Search Tree" as PatternKey,
    `class MonsterHunterBST:
    """
    Binary Search Tree for organizing monster materials.
    Operations: O(h) - height of tree
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing materials by rarity in a hierarchical structure
    - Left subtree contains less rare materials
    - Right subtree contains more rare materials
    
    Example:
    Tree structure for materials:
                Rathalos Ruby
               /             \\
        Rathalos Scale    Rathalos Wing
        /
    Monster Bone
    
    Operations:
    - Insert: Add new material to correct position
    - Search: Find specific material
    - Delete: Remove material while maintaining order
    """
    def __init__(self, material, rarity):
        self.material = material
        self.rarity = rarity
        self.left = None
        self.right = None
    
    def insert(self, material, rarity):
        if rarity < self.rarity:
            if self.left is None:
                self.left = MonsterHunterBST(material, rarity)
            else:
                self.left.insert(material, rarity)
        else:
            if self.right is None:
                self.right = MonsterHunterBST(material, rarity)
            else:
                self.right.insert(material, rarity)`,
  ],

  [
    "Trie Operations" as PatternKey,
    `class MonsterHunterTrie:
    """
    Trie for organizing monster names and information.
    Operations: O(key_length)
    Space: O(ALPHABET_SIZE * key_length * n)
    
    Monster Hunter Context:
    - Like organizing monster encyclopedia
    - Each path represents a monster name
    - Leaf nodes contain monster information
    
    Example:
    Trie structure:
    Root
    |-- R
    |   |-- a
    |   |   |-- t
    |   |   |   |-- h
    |   |   |   |   |-- a
    |   |   |   |   |   |-- l
    |   |   |   |   |   |   |-- o
    |   |   |   |   |   |   |   |-- s (info)
    |-- N
    |   |-- e
    |   |   |-- r
    |   |   |   |-- g
    |   |   |   |   |-- i (info)
    """
    def __init__(self):
        self.root = {}
        self.end_symbol = "*"
    
    def insert(self, monster_name, info):
        node = self.root
        for char in monster_name:
            if char not in node:
                node[char] = {}
            node = node[char]
        node[self.end_symbol] = info
    
    def search(self, monster_name):
        node = self.root
        for char in monster_name:
            if char not in node:
                return None
            node = node[char]
        return node.get(self.end_symbol)`,
  ],

  [
    "Graph" as PatternKey,
    `class MonsterHunterGraph:
    """
    Graph for representing monster territories and connections.
    Operations: O(1) or O(V+E)
    Space: O(V + E)
    
    Monster Hunter Context:
    - Vertices are hunting zones
    - Edges are paths between zones
    - Weights could be difficulty or time to traverse
    
    Example:
    Map structure:
    Ancient Forest ---> Wildspire Waste
         |                    |
         v                    v
    Coral Highlands -----> Rotten Vale
                             |
                             v
                        Elder's Recess
    """
    def __init__(self):
        self.zones = {}
        self.paths = {}
    
    def add_zone(self, zone_name):
        if zone_name not in self.zones:
            self.zones[zone_name] = []
    
    def add_path(self, zone1, zone2, difficulty):
        if zone1 in self.zones and zone2 in self.zones:
            self.zones[zone1].append(zone2)
            self.paths[(zone1, zone2)] = difficulty`,
  ],

  [
    "Heap Implementation" as PatternKey,
    `class MonsterHunterHeap:
    """
    Heap for managing quest priorities.
    Operations: O(log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Quests arranged by urgency/reward
    - Parent quests more urgent than children
    - Extract most urgent quest first
    
    Example:
    Max-heap of urgent quests:
           Fatalis Hunt
          /           \\
    Teostra Hunt  Kushala Hunt
        /
    Rathalos Hunt
    """
    def __init__(self):
        self.quests = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def insert_quest(self, quest, urgency):
        self.quests.append((quest, urgency))
        self._bubble_up(len(self.quests) - 1)
    
    def extract_most_urgent(self):
        if not self.quests:
            return None
        
        most_urgent = self.quests[0]
        self.quests[0] = self.quests[-1]
        self.quests.pop()
        self._bubble_down(0)
        
        return most_urgent`,
  ],

  [
    "Stack Implementation" as PatternKey,
    `class MonsterHunterStack:
    """
    Stack for managing hunter's item loadout.
    Operations: O(1)
    Space: O(n)
    
    Monster Hunter Context:
    - Like managing items in your item pouch
    - Last item in is first item out
    - Perfect for tracking recent items used
    
    Example:
    Item stack:
    Top -> Mega Potion
          First Aid Med
          Antidote
    Bottom -> Ration
    
    Operations:
    - push: Add new item to top
    - pop: Use item from top
    - peek: Check top item
    """
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.items:
            return None
        return self.items.pop()
    
    def peek(self):
        if not self.items:
            return None
        return self.items[-1]`,
  ],

  [
    "Queue Implementation" as PatternKey,
    `class MonsterHunterQueue:
    """
    Queue for managing hunt requests.
    Operations: O(1)
    Space: O(n)
    
    Monster Hunter Context:
    - Like managing quest board requests
    - First request in is first to be handled
    - Fair order for processing hunt requests
    
    Example:
    Quest queue:
    Front -> Hunt Rathalos
             Hunt Diablos
             Hunt Nergigante
    Back -> Hunt Teostra
    
    Operations:
    - enqueue: Add new quest request
    - dequeue: Accept next quest
    - peek: Check next quest
    """
    def __init__(self):
        self.quests = []
    
    def enqueue(self, quest):
        self.quests.append(quest)
    
    def dequeue(self):
        if not self.quests:
            return None
        return self.quests.pop(0)
    
    def peek(self):
        if not self.quests:
            return None
        return self.quests[0]`,
  ],

  [
    "Hash Table" as PatternKey,
    `class MonsterHunterHashTable:
    """
    Hash Table for quick monster information lookup.
    Operations: O(1) average
    Space: O(n)
    
    Monster Hunter Context:
    - Like a monster field guide
    - Quick access to monster information
    - Efficient material drop rates lookup
    
    Example:
    monster_info = {
        "Rathalos": {
            "weakness": ["Flash", "Dragon"],
            "materials": ["Scale", "Ruby", "Wing"]
        },
        "Nergigante": {
            "weakness": ["Thunder", "Dragon"],
            "materials": ["Spike", "Gem", "Horn"]
        }
    }
    """
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return sum(ord(c) for c in str(key)) % self.size
    
    def put(self, monster, info):
        index = self._hash(monster)
        for item in self.table[index]:
            if item[0] == monster:
                item[1] = info
                return
        self.table[index].append([monster, info])
    
    def get(self, monster):
        index = self._hash(monster)
        for item in self.table[index]:
            if item[0] == monster:
                return item[1]
        return None`,
  ],
]);

// Export combined patterns
export const allMonsterHunterPatterns = new Map([
  ...monsterHunterPatternsExtended2,
  // Add original patterns here when combining
]);
