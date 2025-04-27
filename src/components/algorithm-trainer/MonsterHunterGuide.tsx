import React from "react";
import styles from "@/styles/pseudocode.module.css";
import { PatternKey, PATTERN_KEYS } from "./types";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

// Monster hunter themed explanations for different algorithms
const monsterHunterExplanations: Record<
  PatternKey,
  {
    title: string;
    description: string;
    example: string;
    tips: string[];
  }
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
  Greedy: {
    title: "Monster Hunt Prioritization",
    description:
      "Like choosing which monsters to hunt based on immediate rewards, Greedy algorithms make locally optimal choices at each step.",
    example:
      "Imagine having limited time to hunt and needing to maximize your material collection - you choose the most valuable hunts first.",
    tips: [
      "Make locally optimal choice - like choosing the most valuable hunt available right now",
      "Don't reconsider previous choices - similar to not going back to hunts you've already decided against",
      "Hope for global optimum - like trusting that your immediate choices will lead to the best overall result",
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
  Backtracking: {
    title: "Monster Equipment Combination",
    description:
      "Like trying different combinations of equipment to find the optimal build, Backtracking systematically explores all possibilities by trying a choice, recursively exploring, and then undoing the choice if it doesn't lead to a solution.",
    example:
      "Imagine trying to find the best combination of armor pieces that meets specific requirements, trying different combinations until you find one that works.",
    tips: [
      "Try a choice - like selecting a specific armor piece",
      "Recursively explore - similar to trying different combinations with your current selection",
      "Undo choice and try another - like removing the current piece and trying a different one",
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
  DFS: {
    title: "Monster Territory Exploration",
    description:
      "Like thoroughly exploring a monster's territory, Depth-First Search explores as far as possible along each branch before backtracking.",
    example:
      "Imagine tracking a monster through its territory, following each path as far as you can before turning back to explore other paths.",
    tips: [
      "Mark vertices as visited - like keeping track of areas you've already explored",
      "Explore unvisited neighbors - similar to following paths you haven't taken yet",
      "Backtrack when stuck - like turning back when you reach a dead end",
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
  BFS: {
    title: "Monster Territory Level Mapping",
    description:
      "Like mapping monster territory levels, Breadth-First Search explores all vertices at the current depth before moving to the next level.",
    example:
      "Imagine exploring a monster's territory level by level, checking all areas at the same distance from your starting point before moving further out.",
    tips: [
      "Use queue for level order - like keeping track of areas to explore in order",
      "Process all nodes at current level - similar to exploring all areas at the same distance",
      "Add unvisited neighbors to queue - like adding connected areas to your exploration list",
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
  Graph: {
    title: "Monster Territory Map",
    description:
      "Like mapping monster territories and connections, Graph represents a set of vertices connected by edges.",
    example:
      "Imagine creating a map of hunting grounds where each location is connected to others by paths, forming a network of interconnected areas.",
    tips: [
      "Vertices represent locations - like marking each hunting ground on the map",
      "Edges represent connections - similar to drawing paths between connected areas",
      "Can be directed or undirected - like one-way or two-way paths between areas",
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
  "Binary Search Tree": {
    title: "Monster Material Organization",
    description:
      "Like organizing materials by rarity in a hierarchical structure, Binary Search Tree provides efficient searching and sorting.",
    example:
      "Imagine organizing your materials in a tree where less rare materials are on the left and more rare materials are on the right, making it easy to find specific materials.",
    tips: [
      "Left subtree contains less rare materials - like keeping common materials on the left",
      "Right subtree contains more rare materials - similar to placing rare materials on the right",
      "In-order traversal gives sorted order - like walking through materials in order of rarity",
    ],
  },
  "Heap Implementation": {
    title: "Monster Quest Priority",
    description:
      "Like creating a priority system for rare materials, Heap Implementation provides efficient priority queue operations.",
    example:
      "Imagine organizing your quests by urgency, where the most urgent quest is always at the top and can be quickly accessed.",
    tips: [
      "Maintain heap property - like ensuring the most urgent quest stays at the top",
      "Insert with bubbling up - similar to adding a new quest and moving it to its proper position",
      "Extract with bubbling down - like removing the top quest and reorganizing the remaining ones",
    ],
  },
  Trie: {
    title: "Monster Encyclopedia",
    description:
      "Like creating a prefix tree for monster names, Trie provides efficient string storage and retrieval.",
    example:
      "Imagine having an encyclopedia where you can quickly find all monsters that start with a specific prefix, like finding all monsters that begin with 'Rath'.",
    tips: [
      "Each node represents a character - like each letter in a monster's name",
      "Common prefixes share nodes - similar to different monsters sharing the same beginning letters",
      "Efficient prefix searches - like quickly finding all monsters with a specific prefix",
    ],
  },
  "Monotonic Stack": {
    title: "Monster Threat Level Tracking",
    description:
      "Like tracking increasing monster threat levels, Monotonic Stack maintains a stack with monotonic properties.",
    example:
      "Imagine keeping track of increasingly dangerous monsters, where each new monster must be more threatening than the previous one.",
    tips: [
      "Maintain monotonic property - like ensuring each monster is more threatening than the previous",
      "Remove elements that violate property - similar to removing less threatening monsters when a more threatening one appears",
      "Use for next greater element - like finding the next more threatening monster for each current monster",
    ],
  },
  "Monotonic Queue": {
    title: "Monster Damage Window",
    description:
      "Like tracking maximum damage in time windows, Monotonic Queue maintains a queue with monotonic properties.",
    example:
      "Imagine tracking the highest damage dealer in a sliding time window, where you need to quickly identify the maximum damage at any point.",
    tips: [
      "Maintain monotonic property - like ensuring the queue contains elements in decreasing order",
      "Remove elements outside window - similar to removing damage values that are no longer in the current time window",
      "Use for sliding window maximum - like finding the maximum damage in each time window",
    ],
  },
  "Two Pointers": {
    title: "Monster Dual Hunt",
    description:
      "Like coordinating a dual monster hunt, Two Pointers uses two pointers to traverse an array from different positions.",
    example:
      "Imagine having two hunters approaching from different directions to corner a monster, narrowing down the search area until they meet.",
    tips: [
      "Move pointers based on condition - like adjusting your approach based on what you find",
      "Converge pointers - similar to having the hunters meet in the middle",
      "Use for array manipulation - like efficiently processing array elements from both ends",
    ],
  },
  "Prefix Sum": {
    title: "Monster Damage Accumulation",
    description:
      "Like calculating cumulative damage on a monster, Prefix Sum computes the sum of all previous elements.",
    example:
      "Imagine tracking the total damage dealt to a monster over time, where each hit adds to the cumulative total.",
    tips: [
      "Build prefix sum array - like creating a running total of damage dealt",
      "Query sum in O(1) - similar to quickly finding the total damage between any two points",
      "Use for range queries - like efficiently calculating damage in any time window",
    ],
  },
  "Kadane's Algorithm": {
    title: "Monster Best Damage Phase",
    description:
      "Like finding the best damage phase in a hunt, Kadane's Algorithm finds the maximum subarray sum in an array.",
    example:
      "Imagine tracking your damage output over time and trying to identify the period where you dealt the most damage in a continuous sequence.",
    tips: [
      "Track current and maximum sum - like keeping track of your current damage streak and your best streak so far",
      "Reset when current becomes negative - similar to starting a new streak when your damage output drops too low",
      "Update maximum when current exceeds it - like updating your best streak when your current streak becomes better",
    ],
  },
  "Floyd Cycle Detection": {
    title: "Monster Patrol Pattern",
    description:
      "Like detecting monster patrol patterns, Floyd Cycle Detection finds cycles in linked lists using two pointers.",
    example:
      "Imagine tracking a monster's patrol route and trying to determine if it follows a circular path, and if so, finding where the cycle begins.",
    tips: [
      "Use slow and fast pointers - like having two scouts tracking the monster at different speeds",
      "Detect cycle when pointers meet - similar to determining if the monster's path loops back on itself",
      "Find cycle start - like identifying where the monster's patrol route begins to repeat",
    ],
  },
  "Rabin-Karp": {
    title: "Monster Track Pattern",
    description:
      "Like searching for monster track patterns, Rabin-Karp uses rolling hash for efficient pattern matching.",
    example:
      "Imagine following a sequence of monster tracks and trying to find a specific pattern of tracks, using a quick method to check for matches.",
    tips: [
      "Calculate pattern hash - like creating a signature for the track pattern you're looking for",
      "Use rolling hash for efficiency - similar to quickly updating the signature as you move along the tracks",
      "Verify matches when hashes match - like confirming the pattern when the signatures match",
    ],
  },
  "Knuth-Morris-Pratt": {
    title: "Monster Attack Pattern",
    description:
      "Like matching complex monster behavior patterns, Knuth-Morris-Pratt provides efficient pattern matching with failure function.",
    example:
      "Imagine trying to recognize a specific sequence of monster attacks, using a method that doesn't need to backtrack through the entire sequence.",
    tips: [
      "Build failure function - like creating a guide for where to continue searching when a partial match fails",
      "Use failure function to skip unnecessary comparisons - similar to efficiently moving past areas that can't contain a match",
      "Find all pattern occurrences - like identifying every instance of the attack pattern",
    ],
  },
  "Manacher's Algorithm": {
    title: "Monster Formation Symmetry",
    description:
      "Like finding symmetric monster formations, Manacher's Algorithm finds the longest palindromic substring in linear time.",
    example:
      "Imagine observing a group of monsters arranged in a formation, and trying to find the longest symmetric part of the formation.",
    tips: [
      "Transform string for even lengths - like adding markers to handle formations of any size",
      "Use mirror property for efficiency - similar to using symmetry to avoid redundant checks",
      "Find longest palindrome - like identifying the largest symmetric part of the formation",
    ],
  },
  "Z-Algorithm": {
    title: "Monster Pattern Occurrence",
    description:
      "Like finding all pattern occurrences in monster data, Z-Algorithm finds all occurrences of a pattern in a text.",
    example:
      "Imagine analyzing monster behavior data and trying to find every instance of a specific behavior pattern.",
    tips: [
      "Build Z-array - like creating a guide for pattern matching at each position",
      "Use previous values for efficiency - similar to using what you've already calculated to speed up the process",
      "Find all pattern occurrences - like identifying every instance of the behavior pattern",
    ],
  },
  "Matrix Traversal": {
    title: "Monster Territory Grid",
    description:
      "Like exploring a 2D map grid, Matrix Traversal systematically visits each cell in a matrix.",
    example:
      "Imagine exploring a hunting ground divided into a grid of areas, systematically checking each area for resources or monsters.",
    tips: [
      "Visit each cell once - like ensuring you check every area in the grid",
      "Use nested loops for systematic traversal - similar to moving row by row, column by column",
      "Process cell based on position - like taking different actions based on what you find in each area",
    ],
  },
  "Matrix Traversal Recursive": {
    title: "Monster Nested Area Exploration",
    description:
      "Like recursively exploring nested areas, Matrix Traversal Recursive visits each cell using recursion.",
    example:
      "Imagine exploring a hunting ground with nested regions, where you need to thoroughly explore each subarea before moving to the next.",
    tips: [
      "Define base case - like determining when to stop exploring a particular area",
      "Recursively explore subareas - similar to thoroughly exploring each nested region",
      "Track visited cells - like marking areas you've already explored to avoid revisiting",
    ],
  },
  "Matrix Spiral Traversal": {
    title: "Monster Territory Spiral",
    description:
      "Like spiraling through a monster's territory, Matrix Spiral Traversal visits cells in a spiral pattern.",
    example:
      "Imagine exploring a hunting ground by moving in a spiral pattern from the outer edges toward the center, or vice versa.",
    tips: [
      "Maintain boundaries - like keeping track of the edges of your spiral",
      "Move in four directions - similar to changing direction at each corner of the spiral",
      "Update boundaries after each layer - like moving inward after completing each layer of the spiral",
    ],
  },
  "Matrix Spiral Recursive": {
    title: "Monster Territory Spiral Exploration (Recursive)",
    description:
      "Like exploring a monster's territory in a spiral pattern using recursion, Matrix Spiral Recursive traverses a matrix in a spiral order using recursive calls.",
    example:
      "Imagine exploring a monster's territory in a spiral pattern, starting from the outer edges and moving inward, using recursive calls to handle each layer of the spiral.",
    tips: [
      "Define base case for recursion - like determining when to stop exploring a particular layer",
      "Process current layer - similar to exploring the current boundary of the spiral",
      "Recursively process inner layers - like continuing to spiral through the inner regions",
    ],
  },
  "Stack Sort": {
    title: "Monster Material Stack Organization",
    description:
      "Like organizing materials in a stack, Stack Sort uses a stack data structure to sort elements.",
    example:
      "Imagine organizing your materials in a stack where you can only access the top item, and you need to sort them by rarity.",
    tips: [
      "Use temporary stack - like having a second stack to help with sorting",
      "Compare top elements - similar to comparing the rarity of materials at the top of each stack",
      "Maintain sorted order - like ensuring materials are always in order of rarity",
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
    <div className={`${styles.pseudocodeContainer} w-full`}>
      <div
        className={`${styles.pseudocodeContent} text-sm sm:text-base w-full`}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-amber-700">
              {explanation.title}
            </h3>
            <p className="mt-1 text-[#f8f8f2]">{explanation.description}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-amber-600">
              Hunting Example:
            </h4>
            <p className="mt-1 italic text-[#f8f8f2]">{explanation.example}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-amber-600">
              Hunter's Tips:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {explanation.tips.map((tip, index) => (
                <li key={index} className="text-[#f8f8f2]">
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
