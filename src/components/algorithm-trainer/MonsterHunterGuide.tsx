import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "./types";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

// Monster hunter themed explanations for different algorithms
const monsterHunterExplanations: Partial<
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
  String: {
    title: "Monster Hunter's Journal",
    description:
      "Like keeping detailed records of monster encounters and behaviors, String operations help us manipulate and analyze sequences of characters, from simple concatenation to complex pattern matching.",
    example:
      "Imagine maintaining a hunter's journal where you record monster sightings, behaviors, and patterns. You can combine different entries, search for specific information, or analyze patterns in monster behavior, like a hunter carefully documenting and studying their prey.",
    tips: [
      "Handle character sequences - like recording detailed monster observations",
      "Use string operations - similar to combining or modifying journal entries",
      "Implement pattern matching - like identifying recurring monster behaviors",
      "Consider string manipulation - like updating or reorganizing your records",
      "Work with substrings - like focusing on specific parts of your observations",
    ],
  },
  "Heap Implementation": {
    title: "Monster Priority Queue",
    description:
      "Like organizing your hunting targets by priority, Heap Implementation helps us maintain a collection of elements where the highest (or lowest) priority element is always at the top, allowing for efficient access and updates.",
    example:
      "Imagine having a list of monsters to hunt, where each monster has a different priority based on its threat level or reward. You can quickly access the most important monster to hunt next, and when you add new monsters or complete hunts, the list automatically reorganizes to keep the highest priority monster at the top.",
    tips: [
      "Maintain heap property - like ensuring the most important monster is always at the top",
      "Use array representation - similar to keeping your monster list in an organized format",
      "Implement heapify operations - like reorganizing the list when priorities change",
      "Handle insertions and deletions - like adding new monsters or removing hunted ones",
      "Support priority updates - like adjusting monster priorities as situations change",
    ],
  },
  "Grid Traversal": {
    title: "Monster Territory Grid Search",
    description:
      "Like systematically searching a monster's territory divided into a grid, Grid Traversal helps us explore each cell of a grid while handling obstacles and finding paths between locations.",
    example:
      "Imagine searching for a monster in a territory divided into squares. You can move up, down, left, or right, carefully exploring each square while avoiding obstacles like rocks or rivers, like a hunter methodically searching through a grid of hunting grounds.",
    tips: [
      "Define movement directions - like deciding which directions you can move in the grid",
      "Handle obstacles - similar to avoiding impassable terrain",
      "Track visited cells - like marking which areas you've already searched",
      "Use BFS or DFS - like choosing between exploring nearby areas first or following paths to their end",
      "Find shortest paths - like determining the quickest route to the monster",
    ],
  },
  Backtracking: {
    title: "Monster Territory Path Exploration",
    description:
      "Like exploring different paths in a monster's territory and backtracking when you hit a dead end, Backtracking helps us systematically try different solutions and undo choices that don't lead to a valid solution.",
    example:
      "Imagine exploring a monster's territory with multiple paths. You try one path, and if it leads to a dead end, you backtrack to the last decision point and try a different path. This is like systematically trying all possible routes until you find the one that leads to the monster.",
    tips: [
      "Try each possible choice - like exploring each available path",
      "Backtrack when stuck - similar to returning to the last decision point when you hit a dead end",
      "Mark visited paths - like keeping track of which routes you've already tried",
      "Undo choices that don't work - like retracing your steps when a path doesn't lead to the monster",
      "Find all valid solutions - like exploring until you've found all possible routes to the monster",
    ],
  },
  "Rotate Matrix": {
    title: "Monster Territory Map Rotation",
    description:
      "Like rotating your monster territory map to view it from different angles, Rotate Matrix helps us transform a matrix by rotating its elements 90 degrees clockwise or counterclockwise.",
    example:
      "Imagine having a map of monster territories and needing to view it from different angles. You can rotate the map 90 degrees to get a different perspective, like turning your map to see the territory from a new direction.",
    tips: [
      "Transpose the matrix - like flipping the map diagonally",
      "Reverse rows or columns - similar to adjusting the orientation of the map",
      "Handle in-place rotation - like rotating the map without creating a new copy",
      "Consider rotation direction - like choosing whether to rotate clockwise or counterclockwise",
      "Process elements in layers - like rotating the map section by section",
    ],
  },
  "Matrix Traversal": {
    title: "Monster Territory Grid Exploration",
    description:
      "Like systematically exploring a monster's territory organized in a grid, Matrix Traversal helps us visit all elements of a matrix in a structured way, either row by row, column by column, or in a specific pattern.",
    example:
      "Imagine exploring a monster's territory that's divided into a grid of areas. You can explore it row by row, moving from left to right, or column by column, moving from top to bottom, ensuring you don't miss any area in your search.",
    tips: [
      "Choose traversal direction - like deciding whether to explore rows or columns first",
      "Use nested loops - similar to systematically checking each area in the grid",
      "Track current position - like keeping track of which area you're currently exploring",
      "Handle boundaries - like knowing when you've reached the edge of the territory",
      "Process each element - like thoroughly exploring each area of the grid",
    ],
  },
  "Matrix Traversal Recursive": {
    title: "Monster Territory Recursive Exploration",
    description:
      "Like exploring a monster's territory by breaking it down into smaller sections and exploring each section recursively, Matrix Traversal Recursive helps us visit all elements of a matrix using recursive calls.",
    example:
      "Imagine exploring a monster's territory by dividing it into quadrants. You explore the first quadrant, then recursively explore each sub-quadrant, continuing this process until you've thoroughly searched the entire territory, like systematically breaking down a large area into smaller, more manageable sections.",
    tips: [
      "Define base case - like knowing when an area is small enough to explore directly",
      "Break into subproblems - similar to dividing the territory into smaller sections",
      "Recursively explore each section - like having a team explore each sub-area",
      "Combine results - like merging findings from different sections",
      "Handle boundaries - like knowing when you've reached the edge of a section",
    ],
  },
  "Matrix Spiral Traversal": {
    title: "Monster Territory Spiral Exploration",
    description:
      "Like exploring a monster's territory in a spiral pattern, starting from the outer edges and moving inward, Matrix Spiral Traversal helps us visit all elements of a matrix in a spiral order.",
    example:
      "Imagine exploring a monster's territory by starting at the outer edge and moving in a spiral pattern towards the center. You move along the edges, then turn inward, continuing this pattern until you've explored the entire territory, like following a spiral path to the center.",
    tips: [
      "Track boundaries - like keeping track of the edges of your current exploration area",
      "Move in layers - similar to exploring one complete ring at a time",
      "Update boundaries after each layer - like adjusting your search area as you move inward",
      "Handle direction changes - like knowing when to turn inward after completing a side",
      "Process elements in order - like systematically exploring each area of the territory",
    ],
  },
  "Matrix Spiral Recursive": {
    title: "Monster Territory Spiral Search",
    description:
      "Like searching a monster's territory in a spiral pattern, starting from the outer edges and moving inward, Matrix Spiral Recursive helps us traverse a matrix in a spiral order using recursion.",
    example:
      "Imagine searching a monster's territory by starting at the outer edge and moving in a spiral pattern towards the center. Each time you complete a full circle, you move inward and repeat the process, like peeling layers of an onion to find the monster at the center.",
    tips: [
      "Define spiral layers - like identifying the boundaries of each search ring",
      "Process outer layer first - similar to searching the perimeter before moving inward",
      "Recursively handle inner layers - like repeating the spiral search for smaller areas",
      "Track current layer boundaries - like keeping track of your search progress",
      "Handle base case for center - like knowing when you've reached the innermost area",
    ],
  },
  "Matrix Chain Multiplication": {
    title: "Monster Equipment Crafting Chain",
    description:
      "Like optimizing the order of crafting multiple pieces of equipment to minimize resource usage, Matrix Chain Multiplication helps us find the most efficient way to multiply a sequence of matrices.",
    example:
      "Imagine you need to craft several pieces of equipment in sequence, where each piece requires materials from the previous one. The order in which you craft them affects the total resources needed. This is like finding the most efficient way to combine multiple crafting steps to minimize material waste.",
    tips: [
      "Find optimal parenthesization - like determining the best order to craft equipment",
      "Use dynamic programming - similar to building up knowledge of optimal crafting sequences",
      "Store intermediate results - like keeping track of resource costs for different crafting orders",
      "Consider all possible splits - like evaluating different ways to group crafting steps",
      "Build solution from smaller subproblems - like starting with small equipment sets and expanding",
    ],
  },
  "Divide and Conquer": {
    title: "Monster Territory Division",
    description:
      "Like dividing a large monster territory into smaller, more manageable sections, Divide and Conquer breaks down complex problems into smaller subproblems that are easier to solve.",
    example:
      "Imagine having a vast monster territory to explore. Instead of trying to search the entire area at once, you divide it into smaller sections, explore each section thoroughly, and then combine your findings to understand the whole territory.",
    tips: [
      "Divide problem into subproblems - like splitting the territory into smaller areas",
      "Conquer each subproblem - similar to exploring each section thoroughly",
      "Combine solutions - like merging your findings from each section",
      "Use recursion - similar to repeating the process for each subsection",
      "Base case for smallest problems - like knowing when a section is small enough to explore directly",
    ],
  },
  Graph: {
    title: "Monster Territory Map",
    description:
      "Like creating a map of interconnected hunting grounds, a Graph represents a collection of connected locations where each location can be connected to multiple others.",
    example:
      "Imagine having a map of hunting grounds where each ground is connected to others by paths. Some grounds might have many connections (like central hubs), while others might have just a few (like remote outposts).",
    tips: [
      "Vertices represent locations - like marking each hunting ground on your map",
      "Edges represent connections - similar to drawing paths between connected grounds",
      "Directed edges show one-way paths - like marking paths that can only be traveled in one direction",
      "Weighted edges show path difficulty - like noting how difficult each path is to traverse",
      "Use adjacency list or matrix - like keeping track of connections in your map",
    ],
  },
  "Graph Dijkstra": {
    title: "Monster Territory Pathfinding",
    description:
      "Like finding the shortest path from your base camp to any hunting ground, Dijkstra's algorithm helps us find the shortest paths from a single source to all other locations.",
    example:
      "Imagine starting from your base camp and needing to find the quickest route to any hunting ground in the territory. This is like having a map that shows you the fastest way to reach any location from your starting point, considering the terrain and obstacles.",
    tips: [
      "Use priority queue - like keeping track of the closest unvisited locations",
      "Update distances when finding shorter paths - similar to discovering better routes to hunting grounds",
      "Mark visited locations - like keeping track of areas you've already explored",
      "Consider edge weights - like accounting for terrain difficulty and travel time",
      "Find shortest paths to all locations - like creating a complete route map from your base",
    ],
  },
  "Graph Bellman-Ford": {
    title: "Monster Territory Pathfinding",
    description:
      "Like finding the shortest paths between hunting grounds while accounting for negative terrain effects, Bellman-Ford helps us find shortest paths in graphs with negative weights.",
    example:
      "Imagine planning routes between hunting grounds where some paths might have negative effects (like stamina drain), and you need to find the most efficient route. This is like finding the best path even when some routes might temporarily reduce your stamina but lead to better overall outcomes.",
    tips: [
      "Relax edges repeatedly - like checking all possible paths multiple times",
      "Handle negative weights - similar to accounting for stamina-draining terrain",
      "Detect negative cycles - like identifying areas that would drain your stamina indefinitely",
      "Update distances iteratively - similar to finding better paths through each location",
      "Consider all possible paths - like exploring every potential route between hunting grounds",
    ],
  },
  "Graph Prim": {
    title: "Monster Territory Expansion",
    description:
      "Like expanding your hunting territory efficiently, Prim's algorithm helps us find the minimum spanning tree by growing from a starting point.",
    example:
      "Imagine starting from your base camp and gradually expanding your hunting territory by adding the closest unconnected areas, ensuring you always take the shortest path to connect new areas.",
    tips: [
      "Start from any vertex - like choosing your base camp location",
      "Use priority queue - similar to keeping track of the closest unconnected areas",
      "Add minimum weight edges - like connecting to the nearest hunting grounds",
      "Maintain visited set - like keeping track of areas you've already connected",
      "Grow tree one edge at a time - similar to expanding your territory step by step",
    ],
  },
  "Graph Articulation Points": {
    title: "Monster Territory Weak Points",
    description:
      "Like identifying critical points in a monster's territory, Articulation Points helps us find vertices whose removal would disconnect the graph.",
    example:
      "Imagine analyzing a monster's territory to find key locations that, if blocked, would split the territory into disconnected regions.",
    tips: [
      "Use DFS - like exploring the territory systematically",
      "Track discovery times - similar to noting when you discover each location",
      "Identify critical points - like finding locations that connect multiple regions",
    ],
  },
  "Graph Bridges": {
    title: "Monster Territory Chokepoints",
    description:
      "Like finding critical paths in a monster's territory, Bridges helps us identify edges whose removal would disconnect the graph.",
    example:
      "Imagine analyzing a monster's territory to find key paths that, if blocked, would split the territory into disconnected regions.",
    tips: [
      "Use DFS - like exploring the territory systematically",
      "Track discovery times - similar to noting when you discover each path",
      "Identify critical edges - like finding paths that connect multiple regions",
    ],
  },
  "Graph Kosaraju": {
    title: "Monster Territory Clusters",
    description:
      "Like identifying strongly connected regions in a monster's territory, Kosaraju's algorithm helps us find strongly connected components in a graph.",
    example:
      "Imagine analyzing a monster's territory to find groups of locations where you can travel between any two locations in the group.",
    tips: [
      "Perform two DFS passes - like exploring the territory in both directions",
      "Use transpose graph - similar to reversing all paths in the territory",
      "Identify components - like finding groups of interconnected locations",
    ],
  },
  "Network Flow": {
    title: "Monster Resource Distribution",
    description:
      "Like optimizing the flow of resources through a monster's territory, Network Flow helps us find the maximum flow in a network.",
    example:
      "Imagine having a network of resource nodes and paths, and needing to maximize the amount of resources that can flow from source to destination.",
    tips: [
      "Use residual graph - like keeping track of available capacity on paths",
      "Find augmenting paths - similar to identifying paths that can carry more flow",
      "Update flow iteratively - like increasing flow along the best paths",
    ],
  },
  "Strongly Connected Components": {
    title: "Monster Territory Groups",
    description:
      "Like identifying groups of interconnected locations in a monster's territory, Strongly Connected Components helps us find groups where any location can reach any other.",
    example:
      "Imagine analyzing a monster's territory to find groups of locations where you can travel between any two locations in the group in both directions.",
    tips: [
      "Use DFS - like exploring the territory systematically",
      "Track discovery times - similar to noting when you discover each location",
      "Identify components - like finding groups of interconnected locations",
    ],
  },
  "Maximum Bipartite Matching": {
    title: "Monster Hunter Assignments",
    description:
      "Like matching hunters to monster hunts, Maximum Bipartite Matching helps us find the maximum matching in a bipartite graph.",
    example:
      "Imagine having a group of hunters and a set of monster hunts, and needing to assign each hunter to at most one hunt they're qualified for.",
    tips: [
      "Use augmenting paths - like finding paths that can improve the matching",
      "Alternate between matched and unmatched edges - similar to switching assignments",
      "Find maximum matching - like assigning as many hunters as possible",
    ],
  },
  "A* Search": {
    title: "Monster Territory Pathfinding",
    description:
      "Like finding the most efficient path to a monster while considering terrain, A* Search helps us find the shortest path using heuristics.",
    example:
      "Imagine having a map of hunting grounds and needing to find the quickest route to a specific monster, considering both distance and terrain difficulty.",
    tips: [
      "Use heuristic function - like estimating distance to the target",
      "Maintain priority queue - similar to keeping track of promising paths",
      "Update path costs - like finding better routes as you explore",
    ],
  },
  "State Compression DP": {
    title: "Monster Equipment States",
    description:
      "Like tracking different equipment states efficiently, State Compression DP helps us solve problems with many possible states.",
    example:
      "Imagine having different equipment combinations and needing to find the optimal set that meets specific requirements.",
    tips: [
      "Use bitmasking - like representing states with binary numbers",
      "Track state transitions - similar to moving between equipment sets",
      "Optimize state space - like reducing the number of states to consider",
    ],
  },
  "Digit DP": {
    title: "Monster Count Tracking",
    description:
      "Like counting monsters with specific properties, Digit DP helps us solve problems involving digits and numbers.",
    example:
      "Imagine needing to count how many monsters have specific characteristics in their identification numbers.",
    tips: [
      "Track digit position - like processing numbers digit by digit",
      "Use memoization - similar to remembering previous calculations",
      "Handle constraints - like checking specific digit requirements",
    ],
  },
  "Tree DP": {
    title: "Monster Territory Tree Analysis",
    description:
      "Like analyzing a monster's territory organized as a tree, Tree DP helps us solve problems on tree structures.",
    example:
      "Imagine having a tree-like territory where each location connects to others, and needing to find optimal paths or configurations.",
    tips: [
      "Process nodes recursively - like exploring the territory from leaves to root",
      "Combine subtree results - similar to building up solutions from smaller parts",
      "Handle different cases - like considering different ways to process each location",
    ],
  },
  "Probability DP": {
    title: "Monster Encounter Risk Assessment",
    description:
      "Like calculating the probabilities of different monster encounters and their outcomes, Probability DP helps us solve problems involving uncertain events by breaking them down into smaller subproblems and considering the likelihood of each possible outcome. It's like a hunter who carefully assesses the risks and rewards of different hunting strategies, taking into account the probability of various monster behaviors and environmental factors.",
    example:
      "Imagine you're planning a series of monster hunts where each encounter has different possible outcomes. You need to calculate the probability of successfully completing all hunts while considering factors like monster behavior patterns, weather conditions, and equipment durability. Probability DP helps you make informed decisions by calculating the likelihood of success for each possible strategy, like a hunter who weighs the risks and rewards of different approaches.",
    tips: [
      "Consider all possible states - like accounting for different monster behaviors and environmental conditions",
      "Calculate transition probabilities - similar to determining the likelihood of different outcomes",
      "Store intermediate results - like keeping track of success probabilities for different scenarios",
      "Handle dependent events - similar to considering how one hunt's outcome affects the next",
      "Optimize expected outcomes - like choosing the strategy with the highest probability of success",
    ],
  },
  "Miller-Rabin": {
    title: "Monster Rarity Verification",
    description:
      "Like verifying the rarity of monster materials, Miller-Rabin helps us test if a number is prime.",
    example:
      "Imagine needing to verify if a monster material's rarity value is a prime number.",
    tips: [
      "Use probabilistic test - like checking multiple bases for primality",
      "Handle edge cases - similar to dealing with special rarity values",
      "Verify efficiently - like quickly checking material rarity",
    ],
  },
  "Fast Fourier Transform": {
    title: "Monster Signal Analysis",
    description:
      "Like analyzing monster signals and patterns, FFT helps us efficiently compute the discrete Fourier transform.",
    example:
      "Imagine analyzing the frequency patterns of monster calls or movements to identify specific behaviors.",
    tips: [
      "Use divide and conquer - like breaking down signals into smaller parts",
      "Handle complex numbers - similar to processing signal components",
      "Apply inverse transform - like reconstructing the original signal",
    ],
  },
  "Heavy Light Decomposition": {
    title: "Monster Territory Organization",
    description:
      "Like organizing a monster's territory into heavy and light paths for efficient traversal, Heavy Light Decomposition helps us break down a tree into chains for efficient operations.",
    example: `Imagine organizing a monster's territory:
1. Identify the main paths (heavy edges)
2. Break down side paths (light edges)
3. Create efficient traversal routes
4. Use this to quickly navigate the territory`,
    tips: [
      "Think of heavy edges as main hunting routes",
      "Light edges are side paths and shortcuts",
      "Use this to optimize territory exploration",
      "Apply to path queries and updates",
    ],
  },
  Lca: {
    title: "Monster Territory Ancestry",
    description:
      "Like finding the common ancestor of two monster territories, LCA helps us find the lowest common ancestor in a tree structure.",
    example: `Imagine tracking monster territories:
1. Two hunters are in different territories
2. Find their closest common territory
3. Use this to plan meeting points
4. Optimize territory exploration`,
    tips: [
      "Think of territories as nodes in a tree",
      "Find the closest common territory",
      "Use this for efficient path planning",
      "Apply to territory navigation",
    ],
  },
  "Suffix Tree": {
    title: "Monster Attack Pattern Tree",
    description:
      "Like building a tree of all possible monster attack patterns, Suffix Tree helps us efficiently store and search for patterns in a string.",
    example: `Imagine analyzing monster attacks:
1. Build a tree of all attack sequences
2. Each path represents a possible attack pattern
3. Quickly find matching patterns
4. Use this to predict monster behavior`,
    tips: [
      "Think of each node as an attack state",
      "Edges represent possible next moves",
      "Use this to predict monster patterns",
      "Apply to attack pattern matching",
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
  "B Tree": {
    title: "Monster Material Database",
    description:
      "Like organizing a large database of monster materials, B Tree helps us efficiently store and retrieve data in a balanced tree structure.",
    example: `Imagine organizing monster materials:
1. Create a balanced tree structure
2. Each node contains multiple materials
3. Maintain balance for efficient access
4. Use this for quick material lookup`,
    tips: [
      "Think of each node as a material category",
      "Maintain balance for efficiency",
      "Use this for large material databases",
      "Apply to material organization",
    ],
  },
  "Avl Tree": {
    title: "Monster Material Balance",
    description:
      "Like maintaining a balanced collection of monster materials, AVL Tree helps us keep a balanced binary search tree.",
    example: `Imagine organizing monster materials:
1. Create a balanced binary tree
2. Each node represents a material
3. Maintain balance through rotations
4. Use this for efficient material access`,
    tips: [
      "Think of each node as a material",
      "Maintain balance through rotations",
      "Use this for efficient searching",
      "Apply to material organization",
    ],
  },
  "Red Black Tree": {
    title: "Monster Material Organization",
    description:
      "Like organizing materials with color coding, Red Black Tree helps us maintain a balanced binary search tree with color properties.",
    example: `Imagine organizing monster materials:
1. Create a balanced tree with color coding
2. Each node has a color property
3. Maintain balance through color rules
4. Use this for efficient material access`,
    tips: [
      "Think of colors as material categories",
      "Maintain balance through color rules",
      "Use this for efficient searching",
      "Apply to material organization",
    ],
  },
  "Fenwick Tree": {
    title: "Monster Material Counting",
    description:
      "Like tracking material counts efficiently, Fenwick Tree helps us perform prefix sum operations in logarithmic time.",
    example: `Imagine tracking monster materials:
1. Create a tree for efficient counting
2. Each node tracks a range of materials
3. Quickly calculate material totals
4. Use this for inventory management`,
    tips: [
      "Think of each node as a material range",
      "Use binary indexing for efficiency",
      "Apply to range sum queries",
      "Use for material tracking",
    ],
  },
  "Segment Tree": {
    title: "Monster Material Range Queries",
    description:
      "Like performing range queries on monster materials, Segment Tree helps us efficiently answer range queries and updates.",
    example: `Imagine querying monster materials:
1. Create a tree for range operations
2. Each node represents a material range
3. Quickly perform range queries
4. Use this for material analysis`,
    tips: [
      "Think of each node as a material range",
      "Use for range queries and updates",
      "Apply to material analysis",
      "Use for efficient operations",
    ],
  },
  "Prefix Sums": {
    title: "Monster Material Accumulation",
    description:
      "Like keeping track of accumulated monster materials in your inventory, Prefix Sums help us efficiently calculate the sum of elements in any range of an array.",
    example:
      "Imagine having a series of monster hunts where you collect materials. You want to quickly know how many materials you've collected between any two hunts without recounting everything each time.",
    tips: [
      "Precompute cumulative sums - like keeping a running total of your materials",
      "Calculate range sums in O(1) - similar to quickly finding how many materials you got between two hunts",
      "Update individual elements - like adding new materials to your inventory",
      "Handle multiple dimensions - like tracking different types of materials separately",
      "Use for efficient range queries - like quickly checking material counts for any period",
    ],
  },
  "KMP Algorithm": {
    title: "Monster Pattern Recognition",
    description:
      "Like recognizing monster attack patterns to predict their next moves, the KMP Algorithm helps us efficiently find patterns in text by using precomputed information about the pattern itself.",
    example:
      "Imagine studying a monster's attack sequence. Instead of starting over each time you see a partial match, you use your knowledge of the pattern to skip ahead, like a hunter who recognizes the beginning of a familiar attack pattern and knows exactly where to look for the next move.",
    tips: [
      "Build prefix table - like creating a guide of known attack patterns",
      "Skip unnecessary comparisons - similar to not rechecking parts of the pattern you already know",
      "Use pattern knowledge - like leveraging your understanding of the monster's moves",
      "Handle partial matches - like recognizing when an attack sequence might be starting",
      "Linear time complexity - like efficiently tracking the monster's patterns",
    ],
  },
  "Matrix Exponentiation": {
    title: "Monster Power Amplification",
    description:
      "Like calculating monster evolution over time, Matrix Exponentiation helps us efficiently compute high powers of matrices.",
    example: `Imagine tracking monster evolution:
1. Each matrix represents a state change
2. Calculate evolution over time
3. Find final state efficiently
4. Use this for power prediction`,
    tips: [
      "Think of matrices as state changes",
      "Use binary exponentiation",
      "Apply to power calculations",
      "Use for efficient computation",
    ],
  },
  Tree: {
    title: "Monster Species Hierarchy",
    description:
      "Like organizing monster species in a hierarchy, Tree provides a hierarchical data structure with a root and branches.",
    example:
      "Imagine organizing monsters by their species and subspecies, where each species can have multiple subspecies, forming a branching structure.",
    tips: [
      "Root at top - like starting with the most general monster category",
      "Nodes can have children - similar to species having subspecies",
      "No cycles - like ensuring the hierarchy doesn't loop back on itself",
    ],
  },
  "Z Algorithm": {
    title: "Monster Territory Pattern Matching",
    description:
      "Like efficiently finding patterns in a monster's territory, the Z Algorithm helps us find all occurrences of a pattern in a text by using a Z-array to store the length of the longest substring starting from each position that matches the prefix.",
    example:
      "Imagine tracking a monster's movement patterns through its territory. You can quickly identify where the same pattern of movement repeats by comparing each position with the beginning of the territory, like a hunter who recognizes familiar movement sequences to predict the monster's next location.",
    tips: [
      "Build Z-array - like creating a map of pattern matches",
      "Compare with prefix - similar to checking if current movements match the start",
      "Use previous results - like leveraging known pattern matches",
      "Handle edge cases - like dealing with pattern boundaries",
      "Linear time complexity - like efficiently tracking the monster's patterns",
    ],
  },
  "Manacher's Algorithm": {
    title: "Monster Territory Symmetry Detection",
    description:
      "Like identifying symmetrical patterns in a monster's territory, Manacher's Algorithm helps us find the longest palindromic substring by efficiently expanding around each center point while using previously computed information to avoid redundant checks.",
    example:
      "Imagine tracking a monster's movement patterns through its territory. You notice that some of its paths form perfect mirror images - like a monster that moves in a symmetrical pattern. Manacher's Algorithm helps you quickly identify these symmetrical patterns by checking each point as a potential center of symmetry, while using your knowledge of previous symmetrical patterns to speed up the search.",
    tips: [
      "Use center expansion - like checking each point as a potential center of symmetry",
      "Leverage mirror properties - similar to using known symmetrical patterns to predict new ones",
      "Maintain palindrome boundaries - like keeping track of the largest symmetrical area found",
      "Handle even and odd lengths - like detecting both simple and complex symmetrical patterns",
      "Linear time complexity - like efficiently scanning the monster's territory for patterns",
    ],
  },
  Greedy: {
    title: "Monster Hunting Strategy",
    description:
      "Like making tactical decisions during a hunt, the Greedy algorithm makes locally optimal choices at each step, hoping to find a global optimum. It's like a hunter who makes the best immediate decision at each moment, such as choosing the most valuable monster to hunt next or the most efficient path to take.",
    example:
      "Imagine you're a monster hunter with limited time and resources. At each decision point, you choose the most immediately beneficial option - like hunting the monster that gives the most valuable materials right now, or taking the path that leads to the nearest resource node. While this might not always lead to the absolute best outcome, it often provides a good solution quickly.",
    tips: [
      "Make locally optimal choices - like always choosing the most valuable immediate target",
      "Don't reconsider past decisions - similar to not second-guessing your hunting choices",
      "Consider constraints - like working within your stamina and resource limits",
      "Evaluate immediate benefits - like assessing the value of each potential hunt",
      "Balance speed and quality - like finding a good solution quickly rather than the perfect one slowly",
    ],
  },
  "Dynamic Programming Pattern": {
    title: "Monster Territory Planning",
    description:
      "Like planning the most efficient route through a monster's territory, Dynamic Programming Pattern helps us solve complex problems by breaking them into smaller subproblems and storing their solutions to avoid redundant calculations. It's like a hunter who carefully plans each step of their journey, remembering the best paths they've discovered to optimize their overall route.",
    example:
      "Imagine you're planning a series of monster hunts across different territories. Instead of recalculating the best path from scratch each time, you remember the optimal routes you've already discovered. When you reach a new area, you can combine your knowledge of previous paths with the current situation to make the best decision, like a hunter who builds up their knowledge of the territory piece by piece.",
    tips: [
      "Break down complex problems - like dividing a large territory into manageable sections",
      "Store intermediate results - similar to keeping a map of known optimal paths",
      "Build up solutions - like combining knowledge of smaller areas to plan larger routes",
      "Avoid redundant calculations - similar to not re-exploring areas you already know well",
      "Consider all possible states - like planning for different monster behaviors and terrain conditions",
    ],
  },
  "Trie Operations": {
    title: "Monster Territory Knowledge Tree",
    description:
      "Like organizing your knowledge of monster territories in a branching structure, Trie Operations help us efficiently store and search for strings by building a tree where each node represents a character and paths represent complete words. It's like a hunter who organizes their knowledge of monster locations in a way that makes it easy to find specific information quickly.",
    example:
      "Imagine you're keeping track of different monster territories and their characteristics. You organize this information in a tree structure where each branch represents a different aspect (like location, type, or behavior). When you need to find information about a specific monster, you can follow the branches that match its characteristics, like a hunter who can quickly navigate their knowledge base to find relevant information.",
    tips: [
      "Build character-based trees - like organizing monster information by categories",
      "Share common prefixes - similar to grouping monsters with similar characteristics",
      "Efficient prefix searches - like quickly finding all monsters in a specific area",
      "Handle word completions - similar to suggesting possible monster types based on partial information",
      "Optimize space usage - like efficiently storing information about many monsters",
    ],
  },
  "Monotonic Queue": {
    title: "Monster Territory Priority Line",
    description:
      "Like maintaining an ordered line of monster hunting priorities, a Monotonic Queue keeps elements in a strictly increasing or decreasing order. It's like a hunter who organizes their targets based on importance, always keeping the most significant monster at the front of their attention while removing less important ones from consideration.",
    example:
      "Imagine you're tracking multiple monsters in a territory, each with different threat levels. You maintain a list where monsters are always ordered by their threat level, and you can quickly access the most dangerous monster. As new monsters appear or existing ones change their threat level, you update your list while maintaining the order, like a hunter who constantly re-evaluates their priorities based on the current situation.",
    tips: [
      "Maintain strict order - like keeping monsters sorted by their threat level",
      "Remove outdated elements - similar to dropping monsters that are no longer relevant",
      "Access front element quickly - like immediately knowing which monster to focus on",
      "Handle sliding windows - similar to tracking monsters within a specific area",
      "Optimize for specific operations - like efficiently finding the most dangerous monster in a region",
    ],
  },
  "Matrix Operations": {
    title: "Monster Territory Matrix",
    description:
      "Like organizing and analyzing a monster's territory using a grid system, Matrix Operations help us perform various transformations and calculations on two-dimensional data. It's like a hunter who uses a grid map to track monster movements, analyze territory patterns, and plan efficient hunting routes.",
    example:
      "Imagine you have a detailed map of a monster's territory divided into a grid. Each cell contains information about the terrain, monster presence, or resource availability. Matrix Operations help you rotate the map to view it from different angles, combine information from different areas, or transform the data to reveal hidden patterns, like a hunter who uses different map orientations to plan their approach.",
    tips: [
      "Understand matrix dimensions - like knowing the size and shape of the monster's territory",
      "Master basic operations - similar to learning how to navigate and analyze the territory",
      "Use transformations - like rotating or flipping the map to gain new perspectives",
      "Combine matrices - similar to merging information from different areas of the territory",
      "Apply matrix properties - like using mathematical relationships to predict monster movements",
    ],
  },
  "Rabin-Karp": {
    title: "Monster Pattern Hash Tracking",
    description:
      "Like efficiently tracking monster movement patterns using a unique identifier system, the Rabin-Karp algorithm helps us find patterns in text by using hash values to quickly compare sequences. It's like a hunter who assigns unique codes to different monster movement patterns, allowing them to quickly identify when a familiar pattern appears in a new location.",
    example:
      "Imagine you're tracking a monster's movement through its territory. Instead of comparing each step of its path directly, you create a unique code (hash) for each segment of its movement. When you see a new movement pattern, you can quickly check if its code matches any known patterns, like a hunter who can instantly recognize familiar movement sequences even when they appear in different parts of the territory.",
    tips: [
      "Use rolling hash - like updating the pattern code as the monster moves",
      "Handle hash collisions - similar to double-checking when patterns seem similar",
      "Compare patterns efficiently - like quickly identifying familiar movement sequences",
      "Choose good hash function - like creating unique and reliable pattern codes",
      "Update hash incrementally - similar to tracking the monster's path step by step",
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
