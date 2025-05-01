import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "./types";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

// Monster hunter themed explanations for different algorithms
export const monsterHunterExplanations: Partial<
  Record<
    PatternKey,
    {
      title: string;
      description: string;
      example: string;
      tips: string[];
    }
  >
> = {
  "Quick Sort": {
    title: "Monster Territory Division",
    description:
      "Like dividing a monster's territory into smaller regions, Quick Sort efficiently sorts elements by partitioning around a pivot.",
    example:
      "Imagine dividing a monster's territory by choosing a central location (pivot) and organizing everything around it - stronger monsters on one side, weaker on the other.",
    tips: [
      "Choose a good pivot - like selecting a strategic central point in the territory",
      "Partition around pivot - similar to organizing monsters based on their strength relative to the pivot",
      "Recursively sort partitions - like organizing each sub-territory in the same way",
    ],
  },
  "Merge Sort": {
    title: "Monster Territory Merger",
    description:
      "Like merging two organized monster territories into one, Merge Sort combines sorted subarrays into a larger sorted array.",
    example:
      "Imagine having two organized monster territories and merging them into one larger territory while maintaining the order of monster strength.",
    tips: [
      "Divide territory in half - like splitting a monster territory into two equal parts",
      "Sort each half - similar to organizing each sub-territory",
      "Merge sorted halves - like combining two organized territories while maintaining order",
    ],
  },
  "Heap Sort": {
    title: "Monster Power Hierarchy",
    description:
      "Like organizing monsters in a power hierarchy where the strongest is always at the top, Heap Sort uses a heap data structure to sort elements.",
    example:
      "Imagine organizing monsters in a hierarchy where the strongest monster is always at the top, and you can quickly remove and replace the top monster.",
    tips: [
      "Build max heap - like creating a power hierarchy of monsters",
      "Extract maximum - similar to removing the strongest monster from the hierarchy",
      "Maintain heap property - like ensuring the hierarchy stays properly organized",
    ],
  },
  "Bubble Sort": {
    title: "Monster Strength Comparison",
    description:
      "Like comparing adjacent monsters and swapping them if they're in the wrong order, Bubble Sort repeatedly steps through the list.",
    example:
      "Imagine lining up monsters by strength and walking down the line, swapping any monster that's stronger than the one next to it.",
    tips: [
      "Compare adjacent elements - like comparing the strength of adjacent monsters",
      "Swap if in wrong order - similar to repositioning monsters based on their strength",
      "Repeat until no swaps needed - like continuing until all monsters are in the correct order",
    ],
  },
  "Selection Sort": {
    title: "Monster Selection Tournament",
    description:
      "Like finding the strongest monster in a group and placing it at the front, Selection Sort repeatedly finds the minimum element and places it at the beginning.",
    example:
      "Imagine holding a tournament to find the strongest monster, then placing that monster at the front of the line, and repeating with the remaining monsters.",
    tips: [
      "Find minimum element - like identifying the strongest monster in the current group",
      "Swap with first position - similar to moving the strongest monster to the front",
      "Repeat with remaining elements - like continuing the tournament with the remaining monsters",
    ],
  },
  "Insertion Sort": {
    title: "Monster Line Formation",
    description:
      "Like building a line of monsters one by one, Insertion Sort builds the final sorted array one item at a time.",
    example:
      "Imagine forming a line of monsters by strength, adding one monster at a time and inserting each new monster in the correct position.",
    tips: [
      "Start with first element - like beginning with a single monster",
      "Insert each new element in correct position - similar to placing each new monster in the right spot in the line",
      "Shift elements as needed - like making space for a monster by moving others",
    ],
  },
  "Binary Search": {
    title: "Monster Territory Search",
    description:
      "Like efficiently searching for a specific monster in a sorted territory, Binary Search quickly finds an element in a sorted array.",
    example:
      "Imagine looking for a specific monster in a territory where monsters are arranged by strength - you can quickly narrow down the search area.",
    tips: [
      "Start in the middle - like beginning your search at the center of the territory",
      "Eliminate half the search space - similar to determining which half of the territory to search next",
      "Repeat until found - like continuing to narrow down the search area until you find the monster",
    ],
  },
  "Binary Search on Answer": {
    title: "Monster Rarity Search",
    description:
      "Like finding the minimum rarity needed for a craft, Binary Search on Answer efficiently finds the optimal value in a range.",
    example:
      "Imagine trying to find the minimum rarity material needed for a craft - you can quickly narrow down the possibilities.",
    tips: [
      "Define search range - like establishing the possible range of material rarities",
      "Check middle value - similar to testing a specific rarity level",
      "Adjust range based on result - like narrowing down the search based on whether the test succeeded",
    ],
  },
  "Linear Search": {
    title: "Monster Territory Scan",
    description:
      "Like systematically scanning a territory for a specific monster, Linear Search checks each element in sequence.",
    example:
      "Imagine walking through a territory and checking each monster you encounter until you find the one you're looking for.",
    tips: [
      "Check each element in order - like examining each monster as you encounter it",
      "Stop when found - similar to stopping your search once you've found the target monster",
      "Continue to end if not found - like completing your scan if the monster isn't in the territory",
    ],
  },
  "Two Sum": {
    title: "Monster Material Pairing",
    description:
      "Like finding two monster materials that combine to meet a crafting requirement, Two Sum finds two numbers that add up to a target.",
    example:
      "Imagine needing two materials that together have a specific value for crafting - you need to find the right pair.",
    tips: [
      "Check all possible pairs - like trying different combinations of materials",
      "Return indices when found - similar to noting which materials work together",
      "Consider each element only once - like not using the same material twice",
    ],
  },
  "Two Sum Dict": {
    title: "Monster Material Registry",
    description:
      "Like using a material registry to quickly find complementary materials, Two Sum Dict uses a hash table for efficient lookup.",
    example:
      "Imagine having a registry of all your materials and their values, allowing you to quickly find pairs that sum to a target.",
    tips: [
      "Build hash table of complements - like creating a registry of needed complementary materials",
      "Check if complement exists - similar to looking up if you have a matching material",
      "Return indices in sorted order - like noting which materials work together in a consistent format",
    ],
  },
  "Two Sum Two Pointers": {
    title: "Monster Material Pincer Search",
    description:
      "Like coordinating a pincer attack on a monster from two directions, Two Sum Two Pointers uses two pointers to find pairs.",
    example:
      "Imagine having two hunters approaching from opposite sides of a territory, narrowing down the search area until they find the target.",
    tips: [
      "Sort array first - like organizing materials by value",
      "Move pointers based on sum - similar to adjusting your approach based on what you find",
      "Return indices when found - like noting which materials work together",
    ],
  },
  "Dynamic Programming": {
    title: "Monster Farming Route Optimization",
    description:
      "Like planning the most efficient farming route for rare materials, Dynamic Programming solves complex problems by breaking them into simpler subproblems.",
    example:
      "Imagine trying to maximize the value of materials collected with limited stamina - you need to plan your route carefully.",
    tips: [
      "Identify subproblems - like breaking down the farming route into smaller segments",
      "Store intermediate results - similar to remembering the best routes you've already calculated",
      "Build solution from subproblems - like combining the best segments into an optimal route",
    ],
  },
  "Dynamic Programming Fibonacci": {
    title: "Monster Population Growth",
    description:
      "Like calculating monster population growth over generations, Dynamic Programming Fibonacci efficiently computes Fibonacci numbers.",
    example:
      "Imagine tracking how a monster population grows over time, where each generation's size depends on the previous two.",
    tips: [
      "Store previous values - like keeping track of population sizes from previous generations",
      "Build up from base cases - similar to starting with initial population sizes",
      "Use stored values for efficiency - like using known population sizes instead of recalculating",
    ],
  },
  "Dynamic Programming Iterative": {
    title: "Monster Resource Collection",
    description:
      "Like collecting resources from monsters in an optimal sequence, Dynamic Programming Iterative builds solutions step by step.",
    example:
      "Imagine trying to maximize the value of materials collected from a series of monsters, making decisions at each step.",
    tips: [
      "Build solution iteratively - like making decisions one monster at a time",
      "Store intermediate results - similar to remembering the best collection strategies so far",
      "Use previous results for current decision - like using what you've learned to make better choices",
    ],
  },
  "Dynamic Programming Coin Change": {
    title: "Monster Material Combination",
    description:
      "Like finding the minimum number of materials needed for a craft, Dynamic Programming Coin Change solves the coin change problem.",
    example:
      "Imagine needing to craft an item that requires a specific value, and you need to find the most efficient combination of materials.",
    tips: [
      "Build solutions for smaller amounts - like finding combinations for smaller material requirements first",
      "Use previous results for larger amounts - similar to building on what you've already calculated",
      "Track minimum materials needed - like keeping track of the most efficient combinations",
    ],
  },
  "Greedy Activity Selection": {
    title: "Monster Hunt Scheduling",
    description:
      "Like scheduling non-overlapping hunts to maximize efficiency, Greedy Activity Selection solves the activity selection problem.",
    example:
      "Imagine trying to fit as many monster hunts as possible into your day, where each hunt has a start and end time.",
    tips: [
      "Sort by end time - like organizing hunts by when they finish",
      "Select earliest finishing activity - similar to choosing hunts that end soonest",
      "Skip overlapping activities - like avoiding hunts that conflict with your chosen schedule",
    ],
  },
  "Greedy Fractional Knapsack": {
    title: "Monster Material Inventory",
    description:
      "Like optimizing inventory space with divisible materials, Greedy Fractional Knapsack solves the fractional knapsack problem.",
    example:
      "Imagine having limited inventory space and needing to maximize the value of materials you carry, where you can take partial amounts.",
    tips: [
      "Calculate value per unit - like determining which materials are most valuable per space",
      "Take as much as possible of highest value - similar to filling your inventory with the most valuable materials first",
      "Take fractional amounts if needed - like taking partial amounts of materials when space is limited",
    ],
  },
  "Greedy Job Scheduling": {
    title: "Monster Hunt Deadline Management",
    description:
      "Like scheduling hunts with deadlines to maximize rewards, Greedy Job Scheduling solves the job scheduling problem.",
    example:
      "Imagine having various monster hunts, each with a deadline and reward, and needing to maximize your total rewards.",
    tips: [
      "Sort by deadline or reward - like organizing hunts by when they need to be completed",
      "Schedule earliest deadline first - similar to prioritizing hunts with the most urgent deadlines",
      "Consider reward-to-deadline ratio - like evaluating hunts based on their reward relative to their deadline",
    ],
  },
  "Greedy Huffman Coding": {
    title: "Monster Data Compression",
    description:
      "Like compressing monster data efficiently, Greedy Huffman Coding creates optimal prefix codes for data compression.",
    example:
      "Imagine needing to store information about different monsters efficiently, where some monsters appear more frequently than others.",
    tips: [
      "Build frequency table - like counting how often each monster appears in your data",
      "Create Huffman tree - similar to building a decision tree for encoding monsters",
      "Generate variable-length codes - like creating shorter codes for more frequent monsters",
    ],
  },
  "Greedy Dijkstra": {
    title: "Monster Territory Pathfinding",
    description:
      "Like finding the shortest paths between hunting grounds, Greedy Dijkstra solves the single-source shortest path problem.",
    example:
      "Imagine needing to find the quickest route between different hunting grounds in a monster's territory.",
    tips: [
      "Maintain distance estimates - like keeping track of the shortest known paths to each location",
      "Select vertex with minimum distance - similar to choosing the closest unexplored location",
      "Update distances to neighbors - like finding shorter paths through the current location",
    ],
  },
  "Sliding Window": {
    title: "Monster Behavior Tracking",
    description:
      "Like tracking monster behavior patterns through a time window, Sliding Window maintains a window of elements that slides over the data.",
    example:
      "Imagine observing a monster's behavior over time, focusing on a specific time period that moves forward as you continue observing.",
    tips: [
      "Maintain window of fixed size - like keeping track of a specific time period",
      "Slide window forward - similar to moving your observation period forward in time",
      "Update window contents efficiently - like adding new observations and removing old ones",
    ],
  },
  "Bit Manipulation": {
    title: "Monster Status Encoding",
    description:
      "Like encoding multiple monster status effects in a single value, Bit Manipulation performs operations on binary representations.",
    example:
      "Imagine tracking various status effects on a monster (poisoned, paralyzed, etc.) using a single number where each bit represents a different status.",
    tips: [
      "Use bitwise operations - like setting, clearing, or toggling specific bits",
      "Check individual bits - similar to checking if a specific status effect is active",
      "Combine multiple flags - like encoding multiple status effects in a single value",
    ],
  },
  "Topological Sort": {
    title: "Monster Upgrade Path Planning",
    description:
      "Like planning upgrade paths for your equipment, Topological Sort orders elements based on dependencies.",
    example:
      "Imagine having a set of weapon upgrades where some upgrades require others to be completed first, and you need to determine the order to perform them.",
    tips: [
      "Build dependency graph - like creating a map of upgrade requirements",
      "Find nodes with no dependencies - similar to identifying upgrades that can be performed first",
      "Remove nodes and update dependencies - like completing upgrades and updating what's available next",
    ],
  },
  "DFS Linked List": {
    title: "Monster Chain Exploration",
    description:
      "Like exploring a chain of connected areas, DFS Linked List performs depth-first search on a linked list structure.",
    example:
      "Imagine following a chain of connected hunting grounds, exploring each one thoroughly before moving to the next.",
    tips: [
      "Process current node - like exploring the current hunting ground",
      "Recursively explore next node - similar to moving to the next connected area",
      "Backtrack when done - like returning to previous areas when finished",
    ],
  },
  "DFS Binary Tree": {
    title: "Monster Territory Branch Exploration",
    description:
      "Like exploring a branching path of monster territories, DFS Binary Tree performs depth-first search on a binary tree.",
    example:
      "Imagine exploring a territory that branches into two paths at each decision point, following one path completely before exploring the other.",
    tips: [
      "Process current node - like exploring the current territory",
      "Recursively explore left subtree - similar to following the left branch",
      "Recursively explore right subtree - like following the right branch",
    ],
  },
  DFS: {
    title: "Monster Territory Deep Exploration",
    description:
      "Like exploring a monster's territory by following each path to its end before backtracking, DFS explores as far as possible along each branch before backtracking.",
    example:
      "Imagine exploring a monster's territory where you follow each path completely to its end before returning to explore other paths, like following a trail until you reach a dead end before trying another route.",
    tips: [
      "Mark visited nodes - like keeping track of areas you've already explored",
      "Explore each path completely - similar to following a trail until you can't go further",
      "Backtrack when path ends - like returning to the last decision point when you reach a dead end",
      "Use recursion or stack - like keeping track of your exploration path",
    ],
  },
  "BFS Linked List": {
    title: "Monster Chain Level Exploration",
    description:
      "Like exploring a chain of connected areas level by level, BFS Linked List performs breadth-first search on a linked list structure.",
    example:
      "Imagine exploring a series of connected hunting grounds, checking all areas at the same distance from your starting point before moving further along the chain.",
    tips: [
      "Use queue for level order - like keeping track of areas to explore in order",
      "Process nodes level by level - similar to exploring areas at the same distance",
      "Add unvisited nodes to queue - like adding connected areas to your exploration list",
    ],
  },
  BFS: {
    title: "Monster Territory Level Exploration",
    description:
      "Like exploring a monster's territory level by level, BFS explores all vertices at the present depth before moving to vertices at the next depth level.",
    example:
      "Imagine exploring a monster's territory where you check all areas at the same distance from your starting point before moving further out, like expanding your search in concentric circles.",
    tips: [
      "Use queue for level order - like keeping track of areas to explore in order",
      "Process nodes level by level - similar to exploring areas at the same distance",
      "Mark visited nodes - like keeping track of areas you've already explored",
      "Add unvisited neighbors to queue - like adding connected areas to your exploration list",
    ],
  },
  "Stack Implementation": {
    title: "Monster Item Loadout",
    description:
      "Like managing items in your item pouch, Stack Implementation provides a last-in-first-out data structure.",
    example:
      "Imagine organizing your items in a stack where you can only access the most recently added item, like a pile of materials where you can only take from the top.",
    tips: [
      "Push adds to top - like placing a new item on top of the stack",
      "Pop removes from top - similar to taking the top item from the stack",
      "Peek views top without removing - like checking what's on top without taking it",
    ],
  },
  "Queue Implementation": {
    title: "Monster Hunt Request Line",
    description:
      "Like managing quest board requests, Queue Implementation provides a first-in-first-out data structure.",
    example:
      "Imagine a line of hunters waiting to accept quests, where the first hunter in line gets the next available quest.",
    tips: [
      "Enqueue adds to back - like joining the end of the quest line",
      "Dequeue removes from front - similar to accepting the next quest in line",
      "Peek views front without removing - like checking what quest is next without accepting it",
    ],
  },
  "Linked List": {
    title: "Monster Material Chain",
    description:
      "Like creating a chain of monster materials, Linked List provides a linear collection of elements connected by references.",
    example:
      "Imagine creating a chain of materials where each material points to the next one, forming a flexible sequence that can be easily modified.",
    tips: [
      "Each node points to next - like each material connecting to the next one",
      "Traverse by following pointers - similar to following the chain of materials",
      "Insert/delete by updating pointers - like adding or removing materials by changing connections",
    ],
  },
  "Circular Linked List": {
    title: "Monster Spawn Pattern",
    description:
      "Like creating a rotating monster spawn pattern, Circular Linked List forms a closed loop where the last element points back to the first.",
    example:
      "Imagine a cycle of monster spawns where after the last monster, the pattern repeats from the beginning, creating an endless loop.",
    tips: [
      "Last node points to first - like the final spawn connecting back to the beginning",
      "Traverse without end condition - similar to following the cycle indefinitely",
      "Insert/delete with circular awareness - like maintaining the circular structure when modifying",
    ],
  },
  "Hash Table": {
    title: "Monster Field Guide",
    description:
      "Like a monster field guide for quick information lookup, Hash Table provides efficient key-value storage and retrieval.",
    example:
      "Imagine having a reference book where you can quickly look up information about any monster by its name, without having to search through the entire book.",
    tips: [
      "Hash function maps keys to indices - like converting monster names to page numbers",
      "Handle collisions - similar to dealing with multiple monsters that map to the same page",
      "O(1) average case operations - like quick lookups regardless of guide size",
    ],
  },
  "Graph Floyd-Warshall": {
    title: "Monster Territory Network",
    description:
      "Like finding the shortest paths between all pairs of hunting grounds, Floyd-Warshall helps us compute shortest paths between all locations, even when considering paths through intermediate areas.",
    example:
      "Imagine having a complete network of hunting grounds and needing to know the shortest path between any two locations, including paths that might go through other hunting grounds. This is like having a master map that shows the quickest route between any two points, even if it means taking a detour through another area.",
    tips: [
      "Consider all intermediate points - like checking all possible routes through other hunting grounds",
      "Update distances iteratively - similar to finding better paths through each location",
      "Handle negative weights - like accounting for difficult terrain or shortcuts",
      "Build complete distance matrix - like creating a master map of all possible routes",
      "Use dynamic programming - similar to building up knowledge of paths step by step",
    ],
  },
  "Graph Kruskal": {
    title: "Monster Territory Connection",
    description:
      "Like connecting hunting grounds with the minimum total path length, Kruskal's algorithm helps us find the minimum spanning tree by connecting areas in order of increasing distance.",
    example:
      "Imagine having multiple hunting grounds and needing to connect them all with paths while minimizing the total distance. You start by connecting the closest pairs first, then gradually add longer paths only if they connect previously unconnected areas.",
    tips: [
      "Sort edges by weight - like organizing paths by their length",
      "Use union-find - similar to keeping track of which areas are already connected",
      "Add edges in order - like connecting the shortest available paths first",
      "Skip edges that create cycles - similar to avoiding redundant connections",
      "Stop when all areas are connected - like ensuring every hunting ground is reachable",
    ],
  },
  "Exponential Search": {
    title: "Monster Territory Range Finding",
    description:
      "Like quickly finding the approximate range where a monster might be hiding before doing a detailed search, Exponential Search helps us find an element in an unbounded or infinite sorted array by first finding a range that contains the target.",
    example:
      "Imagine searching for a monster in a vast territory. Instead of checking every location, you first make large jumps to quickly find the general area where the monster might be, then do a detailed search in that smaller area, like a hunter first scouting large sections before focusing on specific locations.",
    tips: [
      "Start with small range - like beginning with a manageable search area",
      "Double the range - similar to expanding your search area exponentially",
      "Find containing range - like identifying the general area where the monster is",
      "Use binary search - like doing a detailed search in the identified area",
      "Handle unbounded arrays - like searching in territories of unknown size",
    ],
  },
  "Interpolation Search": {
    title: "Monster Territory Smart Estimation",
    description:
      "Like using your knowledge of monster behavior patterns to make educated guesses about where to search next, Interpolation Search helps us find an element in a sorted array by estimating its position based on the distribution of values.",
    example:
      "Imagine searching for a monster in a territory where you know the monsters are distributed based on their strength. Instead of always checking the middle, you make an educated guess about where the monster might be based on its strength relative to the strongest and weakest monsters in the area, like a hunter using their knowledge of monster behavior to predict locations.",
    tips: [
      "Use value distribution - like considering how monsters are distributed in the territory",
      "Calculate position estimate - similar to making an educated guess about where to search",
      "Adjust search range - like narrowing down the search area based on findings",
      "Handle uniform distribution - like searching in territories with evenly spaced monsters",
      "Consider edge cases - like dealing with territories where monsters are clustered",
    ],
  },
  "Binary Search Tree": {
    title: "Monster Territory Hierarchy",
    description:
      "Like organizing a monster's territory into a hierarchy where stronger monsters are to the right and weaker ones to the left, a Binary Search Tree helps us maintain a sorted collection of elements where each node has at most two children.",
    example:
      "Imagine organizing a monster territory where each area is connected to two others - one for weaker monsters and one for stronger ones. When you enter an area, you can quickly decide whether to search left (weaker monsters) or right (stronger monsters), like a hunter navigating through a territory organized by monster strength.",
    tips: [
      "Maintain sorted order - like keeping monsters organized by strength",
      "Left child is smaller - similar to weaker monsters being to the left",
      "Right child is larger - like stronger monsters being to the right",
      "Handle insertions and deletions - like adding new monsters or removing defeated ones",
      "Balance the tree - like ensuring the territory remains organized for efficient searching",
    ],
  },
  "Jump Search": {
    title: "Monster Territory Leaping",
    description:
      "Like making strategic jumps through a monster's territory to find it quickly, Jump Search efficiently searches a sorted array by making fixed-size jumps.",
    example:
      "Imagine tracking a monster through a large territory by making calculated leaps forward, then carefully searching the smaller area where you think the monster is. This is like a hunter making strategic jumps to cover ground quickly, then doing a detailed search in the promising area.",
    tips: [
      "Calculate optimal jump size - like determining how far to leap based on territory size",
      "Make jumps until you overshoot - similar to leaping forward until you pass the monster's location",
      "Linear search final block - like carefully searching the small area where you know the monster must be",
      "Works best in sorted territories - like tracking a monster through areas arranged by difficulty",
      "Balance jump size and search time - like finding the right balance between covering ground and detailed searching",
    ],
  },
  "Fibonacci Search": {
    title: "Monster Territory Golden Section Search",
    description:
      "Like searching for a monster in a territory using the golden ratio to divide the search area, Fibonacci Search helps us find an element in a sorted array by dividing the search space in a way that minimizes the number of comparisons.",
    example:
      "Imagine searching for a monster in a territory where you know it's hiding in a specific area. You divide the territory using the golden ratio, check the division points, and eliminate the section where the monster can't be, like a hunter using the natural proportions of the territory to efficiently narrow down the search.",
    tips: [
      "Use Fibonacci numbers - like following the natural proportions of the territory",
      "Divide search space - similar to splitting the territory at golden ratio points",
      "Compare and eliminate - like checking key locations and ruling out areas",
      "Update search boundaries - like adjusting your search area based on findings",
      "Handle sorted arrays - like working with territories that have a clear order",
    ],
  },
  "Ternary Search": {
    title: "Monster Territory Peak Finding",
    description:
      "Like searching for the highest point in a monster's territory by dividing the search area into three parts, Ternary Search helps us find the maximum or minimum value in a unimodal function.",
    example:
      "Imagine searching for the highest point in a monster's territory where the elevation changes in a predictable pattern. You divide the territory into three sections, compare the middle points, and eliminate one-third of the search area each time, like a hunter systematically narrowing down the location of the highest peak.",
    tips: [
      "Divide into three parts - like splitting the territory into three equal sections",
      "Compare middle points - similar to checking elevation at key locations",
      "Eliminate one section - like ruling out areas that can't contain the peak",
      "Repeat with remaining area - like continuing the search in the promising section",
      "Handle unimodal functions - like working with territories that have a single highest point",
    ],
  },
  "Stack Sort": {
    title: "Monster Equipment Stack Organization",
    description:
      "Like organizing your equipment in a stack where you can only access the top item, Stack Sort helps us sort elements using a stack data structure, where we can only access the top element at any time.",
    example:
      "Imagine having a stack of monster materials that you need to sort by value. You can only see and access the top material in the stack, and you have a temporary stack to help with the sorting. This is like carefully organizing your materials by moving them between stacks until they're in the right order.",
    tips: [
      "Use temporary stack - like having a second stack to help with organization",
      "Compare top elements - similar to checking the value of materials at the top of each stack",
      "Move elements between stacks - like transferring materials to get them in the right order",
      "Maintain sorted order - like ensuring materials are always in the correct sequence",
      "Handle stack operations - like pushing and popping materials as needed",
    ],
  },
  "Suffix Array": {
    title: "Monster Attack Pattern Array",
    description:
      "Like organizing all possible monster attack patterns in a sorted array, Suffix Array helps us efficiently search for patterns in a string.",
    example: `Imagine organizing monster attacks:
1. Create all possible attack sequences
2. Sort them for efficient searching
3. Quickly find matching patterns
4. Use this to predict monster behavior`,
    tips: [
      "Think of each suffix as an attack sequence",
      "Sort them for efficient searching",
      "Use this to find attack patterns",
      "Apply to pattern matching",
    ],
  },
  "Extended Euclidean Algorithm": {
    title: "Monster Resource Division",
    description:
      "Like finding the optimal way to divide monster resources between hunters, the Extended Euclidean algorithm helps us find integer solutions to equations of the form ax + by = gcd(a,b). It's like a hunter who needs to distribute resources fairly while ensuring no resources are wasted.",
    example:
      "Imagine you have two types of monster materials, and you need to find a way to combine them in specific quantities to create a perfect crafting recipe. The Extended Euclidean algorithm helps you find the exact amounts of each material needed, like a hunter who carefully calculates the optimal combination of resources for their equipment.",
    tips: [
      "Find greatest common divisor - like determining the largest amount that can be evenly divided",
      "Calculate coefficients - similar to finding the exact quantities needed for each material",
      "Handle special cases - like dealing with materials that can't be combined",
      "Use recursion - like breaking down the problem into smaller resource divisions",
      "Find all solutions - like exploring different ways to combine the materials",
    ],
  },
  "Chinese Remainder Theorem": {
    title: "Monster Quest Synchronization",
    description:
      "Like coordinating multiple monster hunts that have different time requirements, the Chinese Remainder Theorem helps us find a number that satisfies multiple congruence conditions. It's like a hunter who needs to schedule multiple quests with different time constraints.",
    example:
      "Imagine you have three monster hunts: one that repeats every 3 days, another every 5 days, and a third every 7 days. You want to find the next day when all three hunts will occur simultaneously. The Chinese Remainder Theorem helps you calculate this, like a hunter who plans their schedule to maximize efficiency.",
    tips: [
      "Break down into smaller problems - like handling each hunt's schedule separately",
      "Find common solutions - similar to identifying overlapping time slots",
      "Handle non-coprime moduli - like dealing with quests that have related time constraints",
      "Use modular arithmetic - like calculating with time cycles",
      "Verify solutions - like double-checking your schedule works for all hunts",
    ],
  },
  "Sieve of Eratosthenes": {
    title: "Monster Territory Sieving",
    description:
      "Like systematically eliminating areas where monsters cannot be found, the Sieve of Eratosthenes helps us find all prime numbers up to a given limit by eliminating their multiples. It's like a hunter who marks off areas where they know monsters won't appear.",
    example:
      "Imagine you're exploring a large territory and want to find all the prime monster habitats. You start by marking off areas that are multiples of 2, then 3, then 5, and so on. The remaining unmarked areas are the prime habitats, like a hunter who systematically eliminates impossible locations to find the best hunting grounds.",
    tips: [
      "Start with the smallest prime - like beginning with the most basic hunting area",
      "Mark off multiples - similar to eliminating areas that are multiples of known locations",
      "Move to next unmarked number - like exploring new areas systematically",
      "Optimize by stopping at square root - like knowing when you've checked enough areas",
      "Use boolean array for efficiency - like keeping a clear map of checked locations",
    ],
  },
  "Sieve of Atkin": {
    title: "Advanced Monster Territory Sieving",
    description:
      "Like using advanced techniques to identify prime monster habitats, the Sieve of Atkin is a modern algorithm for finding all prime numbers up to a given limit. It's like a hunter who uses sophisticated methods to identify the best hunting grounds.",
    example:
      "Imagine you're exploring a vast territory and want to find all prime monster habitats using advanced techniques. The Sieve of Atkin helps you identify these areas by considering quadratic forms and modular arithmetic, like a hunter who uses sophisticated tracking methods to find the most valuable hunting grounds.",
    tips: [
      "Use quadratic forms - like applying advanced tracking patterns",
      "Consider modular arithmetic - similar to using time-based patterns",
      "Mark potential primes - like identifying promising hunting areas",
      "Filter out non-primes - similar to eliminating false leads",
      "Optimize with wheel factorization - like using specialized tools for efficiency",
    ],
  },
  "Sieve of Sundaram": {
    title: "Monster Territory Exclusion",
    description:
      "Like systematically excluding areas where monsters cannot be found, the Sieve of Sundaram helps us find all prime numbers by eliminating numbers of the form i + j + 2ij. It's like a hunter who uses a specific pattern to identify areas that can be safely ignored.",
    example:
      "Imagine you're exploring a territory and want to find prime monster habitats. The Sieve of Sundaram helps you identify these by marking off areas that follow a specific pattern (i + j + 2ij), like a hunter who uses a systematic approach to eliminate impossible locations and focus on promising areas.",
    tips: [
      "Use the formula i + j + 2ij - like following a specific tracking pattern",
      "Mark off composite numbers - similar to eliminating known non-habitat areas",
      "Consider the range carefully - like knowing the boundaries of your search",
      "Transform results to get primes - like converting your findings to actual habitat locations",
      "Optimize with proper indexing - like efficiently organizing your search pattern",
    ],
  },
};

export function MonsterHunterGuide({
  currentPattern,
}: MonsterHunterGuideProps) {
  const explanation = monsterHunterExplanations[currentPattern] || {
    title: "Monster Hunter Guide",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  };

  return (
    <div
      className={`${styles.pseudocodeContainer} w-full h-full overflow-hidden`}
    >
      <div
        className={`${styles.pseudocodeContent} text-sm sm:text-base w-full h-full overflow-y-auto`}
      >
        <div className="space-y-4 p-2">
          <div>
            <h3 className="text-lg font-semibold text-accent">
              {explanation.title}
            </h3>
            <p className="mt-1 text-main">{explanation.description}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">
              Hunting Example:
            </h4>
            <p className="mt-1 italic text-main">{explanation.example}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">Hunter's Tips:</h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {explanation.tips.map((tip, index) => (
                <li key={index} className="text-main">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
