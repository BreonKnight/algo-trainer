import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const CodeBlock = ({ code }: { code: string }) => {
  const { theme: appTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [highlightedLine, setHighlightedLine] = useState<number | null>(null);

  // Custom theme styles using our CSS variables
  const customTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
      color: `var(--code-text-${appTheme})`,
      background: "transparent",
      textShadow: "none",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      tabSize: 4,
      MozTabSize: 4,
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      letterSpacing: "0.3px",
    },
    'pre[class*="language-"]': {
      color: `var(--code-text-${appTheme})`,
      background: "transparent",
      textShadow: "none",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      tabSize: 4,
      MozTabSize: 4,
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      margin: 0,
      padding: "2rem 1.5rem",
      overflow: "auto",
      letterSpacing: "0.3px",
    },
    ':not(pre) > code[class*="language-"]': {
      background: "var(--secondary)",
      padding: "0.2em 0.4em",
      borderRadius: "0.3em",
      whiteSpace: "normal",
    },
    comment: {
      color: "var(--text-secondary)",
      fontStyle: "italic",
      opacity: 0.8,
    },
    punctuation: {
      color: "var(--text-main)",
      opacity: 0.7,
    },
    property: {
      color: "var(--accent)",
    },
    tag: {
      color: "var(--accent)",
    },
    boolean: {
      color: "var(--accent2)",
    },
    number: {
      color: "var(--accent2)",
    },
    constant: {
      color: "var(--accent2)",
    },
    symbol: {
      color: "var(--accent2)",
    },
    selector: {
      color: "var(--accent3)",
    },
    "attr-name": {
      color: "var(--accent3)",
    },
    string: {
      color: "var(--accent3)",
    },
    char: {
      color: "var(--accent3)",
    },
    builtin: {
      color: "var(--accent3)",
    },
    operator: {
      color: "var(--accent)",
      opacity: 0.8,
    },
    entity: {
      color: "var(--accent)",
      cursor: "help",
    },
    url: {
      color: "var(--accent3)",
      textDecoration: "underline",
      opacity: 0.8,
    },
    variable: {
      color: "var(--text-main)",
    },
    function: {
      color: "var(--accent)",
    },
    keyword: {
      color: "var(--accent)",
      fontWeight: "500",
    },
    regex: {
      color: "var(--accent3)",
    },
    important: {
      color: "var(--accent)",
      fontWeight: "500",
    },
    bold: {
      fontWeight: "500",
    },
    italic: {
      fontStyle: "italic",
    },
    ".namespace": {
      opacity: 0.7,
    },
    "line-numbers": {
      color: "var(--text-secondary)",
      borderRight: "1px solid var(--border)",
      paddingRight: "1.5em",
      opacity: 0.5,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLineClick = (lineNumber: number) => {
    setHighlightedLine(lineNumber === highlightedLine ? null : lineNumber);
  };

  return (
    <div
      className={cn(
        "code-block relative rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg group",
        `bg-[var(--code-bg-${appTheme})]/90`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Copy button */}
      <div
        className={cn(
          "copy-button absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          appTheme === "nord" ? "text-white" : "text-accent"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className={cn(
                  "h-8 w-8 rounded-full transition-colors",
                  appTheme === "nord"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-secondary/20 hover:bg-secondary/40"
                )}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">{copied ? "Copied!" : "Copy code"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Glass overlay with reduced opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(var(--code-bg-${appTheme}), 0.3), transparent)`,
        }}
      />
      <div className="relative z-10">
        <SyntaxHighlighter
          language="python"
          style={customTheme}
          showLineNumbers={true}
          wrapLines={true}
          useInlineStyles={true}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1.5em",
            textAlign: "right",
            userSelect: "none",
            opacity: 0.5,
            transition: "opacity 0.2s ease",
            cursor: "pointer",
          }}
          customStyle={{
            transition: "all 0.2s ease",
            padding: "2rem 1.5rem",
            margin: 0,
            borderRadius: "0.5rem",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            letterSpacing: "0.3px",
          }}
          lineProps={(lineNumber) => ({
            style: {
              transition: "all 0.2s ease",
              backgroundColor:
                lineNumber === highlightedLine
                  ? "rgba(255, 255, 255, 0.1)"
                  : isHovered
                    ? "rgba(255, 255, 255, 0.05)"
                    : "transparent",
              cursor: "pointer",
            },
            onClick: () => handleLineClick(lineNumber),
          })}
          startingLineNumber={1}
          lineNumberContainerStyle={{
            float: "left",
            paddingRight: "1.5em",
            borderRight: "1px solid var(--border)",
            marginRight: "1.5em",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const PythonTechniques = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollPosition / totalHeight, 1);

      setShowBackToTop(scrollPosition > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sections = [
    {
      title: "Control Flow and Error Handling",
      description:
        "Control flow statements and error handling are fundamental to writing robust and logical code. Understanding these concepts helps create more reliable and maintainable programs.",
      code: `# 1. Basic if-elif-else conditions
monster_health = 75
monster_state = "normal"

# Simple if condition
if monster_health < 30:
    monster_state = "enraged"
    print("Monster is enraged!")

# if-elif-else chain
if monster_health <= 0:
    print("Monster defeated!")
elif monster_health < 25:
    print("Monster is limping!")
elif monster_health < 50:
    print("Monster is wounded!")
else:
    print("Monster is healthy")

# 2. Nested conditions
def check_monster_status(health, is_enraged, element):
    if health <= 0:
        return "Defeated"
    elif is_enraged:
        if element == "fire":
            return "Enraged and on fire!"
        else:
            return "Enraged!"
    elif health < 25:
        return "Limping"
    else:
        return "Normal"

# 3. While loops
def hunt_monster(initial_health):
    health = initial_health
    hits = 0
    
    while health > 0:
        damage = 10
        health -= damage
        hits += 1
        print(f"Hit {hits}: Monster health at {health}")
    
    print(f"Monster defeated in {hits} hits!")

# 4. Break and Continue
def search_for_rare_part(parts_list):
    for part in parts_list:
        if part == "Ruby":
            print("Found rare part!")
            break  # Exit loop when found
        elif part == "Scale+":
            print("Found enhanced part, but keep looking...")
            continue  # Skip to next iteration
        print(f"Found {part}")

# 5. Try-Except error handling
def safe_monster_attack(monster, damage):
    try:
        if damage < 0:
            raise ValueError("Damage cannot be negative")
        if monster.health <= 0:
            raise Exception("Monster is already defeated")
        
        monster.health -= damage
        return f"Dealt {damage} damage. Monster health: {monster.health}"
    
    except ValueError as e:
        print(f"Invalid attack: {e}")
        return "Attack failed"
    except Exception as e:
        print(f"Attack error: {e}")
        return "Attack failed"
    finally:
        print("Attack attempt completed")

# 6. Custom exceptions
class MonsterError(Exception):
    """Base exception for monster-related errors"""
    pass

class MonsterDefeatedError(MonsterError):
    """Raised when trying to attack a defeated monster"""
    pass

class InvalidDamageError(MonsterError):
    """Raised when damage value is invalid"""
    pass

# 7. Using custom exceptions
def advanced_monster_attack(monster, damage):
    try:
        if damage < 0:
            raise InvalidDamageError("Damage cannot be negative")
        if monster.health <= 0:
            raise MonsterDefeatedError("Monster is already defeated")
        
        monster.health -= damage
        return f"Dealt {damage} damage. Monster health: {monster.health}"
    
    except MonsterDefeatedError as e:
        print(f"Monster error: {e}")
        return "Cannot attack defeated monster"
    except InvalidDamageError as e:
        print(f"Damage error: {e}")
        return "Invalid damage value"
    except MonsterError as e:
        print(f"General monster error: {e}")
        return "Attack failed"
    finally:
        print("Attack attempt completed")

# 8. Context managers (with statement)
class MonsterHunt:
    def __init__(self, monster_name):
        self.monster_name = monster_name
        self.is_hunt_active = False
    
    def __enter__(self):
        self.is_hunt_active = True
        print(f"Starting hunt for {self.monster_name}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.is_hunt_active = False
        if exc_type:
            print(f"Hunt failed: {exc_val}")
        else:
            print(f"Hunt for {self.monster_name} completed")

# Using the context manager
def start_hunt(monster_name):
    with MonsterHunt(monster_name) as hunt:
        if hunt.is_hunt_active:
            print("Hunt is in progress")
            # Hunt logic here
            if monster_name == "Rathalos":
                raise Exception("Rathalos escaped!")`,
      emoji: "🔄",
    },
    {
      title: "Enumerate and Range",
      description:
        "Enumerate and range are powerful tools for iterating over sequences with indices. Understanding when to use each is crucial for efficient and safe code.",
      code: `# 1. Enumerate - When you need both index and value
monster_parts = ['Scale+', 'Wing', 'Plate', 'Ruby']

# Basic enumerate - returns (index, value) pairs
for index, part in enumerate(monster_parts):
    print(f"Index {index}: {part}")
    # Output:
    # Index 0: Scale+
    # Index 1: Wing
    # Index 2: Plate
    # Index 3: Ruby

# Enumerate with start index
for index, part in enumerate(monster_parts, start=1):
    print(f"Part #{index}: {part}")
    # Output:
    # Part #1: Scale+
    # Part #2: Wing
    # Part #3: Plate
    # Part #4: Ruby

# 2. Range - When you need precise control over indices
# range(stop) - 0 to stop-1
for i in range(len(monster_parts)):
    print(f"Position {i}: {monster_parts[i]}")

# range(start, stop) - start to stop-1
for i in range(1, len(monster_parts)):  # Skip first element
    print(f"Rare part at {i}: {monster_parts[i]}")

# range(start, stop, step) - start to stop-1 with step
for i in range(0, len(monster_parts), 2):  # Every other part
    print(f"Even index {i}: {monster_parts[i]}")

# 3. When to use each:
# Use enumerate when:
# - You need both index and value
# - You want to track position while iterating
for i, part in enumerate(monster_parts):
    if part.endswith('+'):  # Enhanced parts
        print(f"Enhanced part found at position {i}")

# Use range when:
# - You need to iterate backwards
# - You need to skip elements
# - You need to modify elements at specific indices
for i in range(len(monster_parts) - 1, -1, -1):  # Reverse iteration
    print(f"Processing part {i}: {monster_parts[i]}")

# Use simple for-in when:
# - You only need values
# - Order doesn't matter
for part in monster_parts:
    print(f"Processing: {part}")

# 4. Bounds checking and safety
# Always check bounds when using range with indices
def safe_get_part(parts, index):
    if 0 <= index < len(parts):  # Bounds check
        return parts[index]
    return None

# Safe iteration with range
for i in range(len(monster_parts)):
    part = safe_get_part(monster_parts, i)
    if part:
        print(f"Safe access at {i}: {part}")

# 5. Common patterns
# Iterate over adjacent pairs
for i in range(len(monster_parts) - 1):
    current = monster_parts[i]
    next_part = monster_parts[i + 1]
    print(f"Comparing {current} with {next_part}")

# Iterate over every third element
for i in range(0, len(monster_parts), 3):
    print(f"Every third part at {i}: {monster_parts[i]}")

# Iterate backwards with step
for i in range(len(monster_parts) - 1, -1, -2):
    print(f"Backwards every other at {i}: {monster_parts[i]}")`,
      emoji: "🔢",
    },
    {
      title: "Array Swapping",
      description: "Python makes array swapping simple with multiple assignment.",
      code: `# Swapping monster positions in a hunt
monsters = ['Rathalos', 'Nargacuga', 'Zinogre']

# Basic swap
monsters[0], monsters[1] = monsters[1], monsters[0]
# Now: ['Nargacuga', 'Rathalos', 'Zinogre']

# Swapping multiple elements
monsters[0], monsters[1], monsters[2] = monsters[2], monsters[0], monsters[1]
# Now: ['Zinogre', 'Nargacuga', 'Rathalos']

# Swapping in a loop (reversing array)
left, right = 0, len(monsters) - 1
while left < right:
    monsters[left], monsters[right] = monsters[right], monsters[left]
    left += 1
    right -= 1`,
      emoji: "🔄",
    },
    {
      title: "Stacks and Queues",
      description:
        "Stacks (LIFO) and queues (FIFO) are fundamental data structures for managing ordered data.",
      code: `# Using lists as stacks
quest_stack = []
quest_stack.append('Hunt Rathalos')    # Push
quest_stack.append('Capture Nargacuga')
quest_stack.append('Slay Zinogre')

next_quest = quest_stack.pop()         # Pop
# next_quest is 'Slay Zinogre'

# Using deque as a queue
from collections import deque
quest_queue = deque(['Hunt Rathalos', 'Capture Nargacuga'])
quest_queue.append('Slay Zinogre')     # Enqueue
first_quest = quest_queue.popleft()    # Dequeue
# first_quest is 'Hunt Rathalos'

# Stack for tracking monster states
monster_states = []
monster_states.append('Normal')        # Push
monster_states.append('Enraged')
monster_states.append('Exhausted')
current_state = monster_states.pop()   # Pop
# current_state is 'Exhausted'`,
      emoji: "📚",
    },
    {
      title: "Sets",
      description:
        "Sets are unordered collections of unique elements, perfect for tracking unique items or quick lookups.",
      code: `# Unique monster parts from quests
monster_parts = {'Rathalos Scale+', 'Rathalos Wing', 'Rathalos Plate'}
rare_parts = {'Rathalos Plate', 'Rathalos Ruby'}

# Set operations
common_parts = monster_parts & rare_parts  # Intersection
all_parts = monster_parts | rare_parts     # Union
unique_to_quest = monster_parts - rare_parts  # Difference

# Adding and removing
monster_parts.add('Rathalos Tail')
monster_parts.remove('Rathalos Wing')`,
      emoji: "🎯",
    },
    {
      title: "Dictionaries",
      description:
        "Dictionaries store key-value pairs, ideal for mapping relationships and quick lookups.",
      code: `# Monster weakness mapping
monster_weaknesses = {
    'Rathalos': {'dragon': 3, 'flash': 'weak'},
    'Nargacuga': {'thunder': 2, 'pitfall': 'weak'},
    'Zinogre': {'ice': 3, 'shock': 'immune'}
}

# Dictionary comprehension
element_effectiveness = {
    monster: data['dragon']
    for monster, data in monster_weaknesses.items()
    if 'dragon' in data
}

# Get with default
zinogre_water = monster_weaknesses.get('Zinogre', {}).get('water', 0)`,
      emoji: "🗝️",
    },
    {
      title: "List Slicing",
      description: "List slicing provides powerful ways to extract and manipulate sequences.",
      code: `# Quest rewards list
rewards = ['Plate', 'Scale+', 'Wing', 'Ruby', 'Tail', 'Gem']

# Basic slicing
first_three = rewards[:3]      # ['Plate', 'Scale+', 'Wing']
last_two = rewards[-2:]        # ['Tail', 'Gem']
middle = rewards[2:4]          # ['Wing', 'Ruby']

# Step slicing
every_other = rewards[::2]     # ['Plate', 'Wing', 'Tail']
reversed_list = rewards[::-1]  # ['Gem', 'Tail', 'Ruby', 'Wing', 'Scale+', 'Plate']

# Copy list
rewards_backup = rewards[:]`,
      emoji: "✂️",
    },
    {
      title: "Collections Module",
      description:
        "The collections module provides specialized container datatypes as alternatives to Python's built-in containers.",
      code: `from collections import deque, Counter, defaultdict

# Deque for efficient queue operations
quest_queue = deque(['Hunt Rathalos', 'Capture Nargacuga', 'Slay Zinogre'])
quest_queue.append('Hunt Rajang')      # Add to right
quest_queue.appendleft('Hunt Magnamalo')  # Add to left
next_quest = quest_queue.popleft()     # Remove from left

# Counter for counting occurrences
monster_parts = ['Scale+', 'Wing', 'Scale+', 'Plate', 'Scale+', 'Ruby']
part_counts = Counter(monster_parts)
most_common = part_counts.most_common(2)  # [('Scale+', 3), ('Wing', 1)]

# DefaultDict for automatic default values
monster_locations = defaultdict(list)
monster_locations['Ancient Forest'].append('Rathalos')
monster_locations['Coral Highlands'].append('Legiana')
# No KeyError if key doesn't exist
print(monster_locations['Hoarfrost Reach'])  # []`,
      emoji: "📦",
    },
    {
      title: "Heap Queue (heapq)",
      description:
        "The heapq module provides implementation of the heap queue algorithm, useful for priority queues.",
      code: `import heapq

# Priority queue for quest rewards
quest_rewards = []
heapq.heappush(quest_rewards, (1, 'Scale+'))     # Common
heapq.heappush(quest_rewards, (4, 'Ruby'))       # Very Rare
heapq.heappush(quest_rewards, (3, 'Plate'))      # Rare
heapq.heappush(quest_rewards, (2, 'Wing'))       # Uncommon

# Get rarest items first
rarest_item = heapq.heappop(quest_rewards)  # (1, 'Scale+')

# Find n smallest/largest
monsters = [(4, 'Rathalos'), (2, 'Jagras'), (5, 'Fatalis'), 
           (3, 'Nargacuga'), (1, 'Kelbi')]
weakest = heapq.nsmallest(2, monsters)  # First 2 weakest
strongest = heapq.nlargest(2, monsters)  # First 2 strongest`,
      emoji: "📊",
    },
    {
      title: "Classes and Objects",
      description:
        "Classes allow you to create custom data types with their own properties and methods.",
      code: `class Monster:
    def __init__(self, name, element, weakness):
        self.name = name
        self.element = element
        self.weakness = weakness
        self.health = 100
        self.is_enraged = False

    def take_damage(self, amount):
        self.health -= amount
        if self.health < 30 and not self.is_enraged:
            self.enrage()

    def enrage(self):
        self.is_enraged = True
        print(f"{self.name} is enraged!")

    def get_status(self):
        return f"{self.name} ({self.health}% HP) - {'Enraged' if self.is_enraged else 'Normal'}"

# Creating monster instances
rathalos = Monster("Rathalos", "Fire", "Dragon")
nargacuga = Monster("Nargacuga", "None", "Thunder")

# Using the monsters
rathalos.take_damage(50)
print(rathalos.get_status())  # Rathalos (50% HP) - Normal
rathalos.take_damage(30)
print(rathalos.get_status())  # Rathalos (20% HP) - Enraged

# Inheritance example
class ElderDragon(Monster):
    def __init__(self, name, element, weakness, special_ability):
        super().__init__(name, element, weakness)
        self.special_ability = special_ability

    def use_special_ability(self):
        print(f"{self.name} uses {self.special_ability}!")

fatalis = ElderDragon("Fatalis", "Fire", "Dragon", "Black Flame")
fatalis.use_special_ability()  # Fatalis uses Black Flame!`,
      emoji: "🏗️",
    },
  ];

  return (
    <div className="w-full">
      {/* Back to Top Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={cn(
                "fixed bottom-6 right-6 z-50 rounded-full transition-all duration-300",
                showBackToTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 pointer-events-none",
                theme === "nord"
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-secondary/20 hover:bg-secondary/40 text-main",
                "shadow-lg backdrop-blur-md",
                "hover:scale-110 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                "touch-manipulation select-none",
                "w-12 h-12 sm:w-14 sm:h-14"
              )}
              aria-label="Back to top"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background circle animation */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-full transition-transform duration-300",
                    isHovered ? "scale-100" : "scale-0",
                    theme === "nord" ? "bg-white/10" : "bg-secondary/20"
                  )}
                />

                {/* Arrow icon with animation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300",
                    isHovered ? "translate-y-[-2px]" : "translate-y-0"
                  )}
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>

                {/* Progress indicator */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className={cn(
                      "transition-colors duration-200",
                      theme === "nord" ? "text-white/20" : "text-accent/20"
                    )}
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="46"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={cn(
                      "transition-colors duration-200",
                      theme === "nord" ? "text-white" : "text-accent"
                    )}
                    strokeWidth="4"
                    strokeDasharray={289.03}
                    strokeDashoffset={289.03 - 289.03 * scrollProgress}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="46"
                    cx="50"
                    cy="50"
                  />
                </svg>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className={cn(
              "px-3 py-2 text-sm font-medium",
              theme === "nord" ? "bg-white/10 text-white" : "bg-secondary/20 text-main"
            )}
          >
            <p>Back to Top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="w-full px-6">
        <TooltipProvider>
          {/* Title and Section Navigation */}
          <div className="flex flex-col items-center justify-center mt-6 mb-8 relative w-full">
            <Link
              to="/"
              className="text-2xl font-extrabold text-transparent bg-clip-text text-center animate-gradient-x drop-shadow-lg tracking-tight select-none mb-4"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
              }}
            >
              Python Techniques
            </Link>

            {/* Section Navigation */}
            <div className="w-full max-w-4xl mx-auto">
              <div
                className={cn(
                  "flex flex-wrap gap-2 justify-center p-4 rounded-xl backdrop-blur-md",
                  theme === "nord"
                    ? "bg-white/10 border border-white/20"
                    : "bg-secondary/20 border border-secondary/40"
                )}
              >
                {sections.map((section, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const element = document.getElementById(`section-${index}`);
                          element?.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(section.title);
                        }}
                        className={cn(
                          "transition-all duration-200 whitespace-nowrap",
                          "text-sm px-3 py-1.5",
                          // Adjust width based on content length
                          section.title.length > 20
                            ? "w-48"
                            : section.title.length > 15
                              ? "w-40"
                              : section.title.length > 10
                                ? "w-36"
                                : "w-32",
                          activeSection === section.title
                            ? theme === "nord"
                              ? "bg-white/20 text-white"
                              : "bg-secondary/40 text-main"
                            : theme === "nord"
                              ? "text-white/70 hover:text-white hover:bg-white/10"
                              : "text-main/70 hover:text-main hover:bg-secondary/30"
                        )}
                      >
                        {section.title}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className={cn(
                        "px-3 py-2 text-sm font-medium max-w-[200px]",
                        theme === "nord" ? "bg-white/10 text-white" : "bg-secondary/20 text-main"
                      )}
                    >
                      <p className="text-xs leading-relaxed">{section.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full mb-6 rounded-xl shadow-lg p-4 glassy-gradient-bg relative">
            {/* Glass overlay */}
            <div
              style={{
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "var(--pseudocode-gradient-overlay)",
                zIndex: 0,
                pointerEvents: "none",
                opacity: 0.7,
                borderRadius: "0.75rem",
              }}
            />
            <div className="relative z-10 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className={cn(
                    "rounded-lg p-6 backdrop-blur-sm border",
                    theme === "nord"
                      ? "bg-nord-1/95 border-white/20"
                      : "bg-zinc-900/95 border-zinc-700/30"
                  )}
                >
                  <h2
                    className={cn(
                      "text-2xl font-bold mb-4 tracking-tight",
                      "flex items-center gap-3"
                    )}
                  >
                    <span
                      className="text-3xl select-none"
                      style={{ WebkitTextFillColor: "initial" }}
                    >
                      {section.emoji}
                    </span>
                    <span
                      className={cn(
                        "bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent",
                        "hover:from-accent2 hover:to-accent transition-all duration-300",
                        "animate-gradient-x"
                      )}
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {section.title}
                    </span>
                  </h2>
                  <div className="space-y-4">
                    <p
                      className={cn(
                        "text-base leading-relaxed",
                        theme === "nord" ? "text-nord-4" : "text-zinc-400",
                        "font-medium tracking-wide",
                        "italic",
                        "border-l-4 pl-4",
                        theme === "nord" ? "border-white/20" : "border-zinc-700/30",
                        "hover:border-accent/50 transition-colors duration-300",
                        "relative",
                        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-accent/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
                        "after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-gradient-to-b after:from-accent/0 after:via-accent/50 after:to-accent/0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
                        "text-shadow-sm",
                        "hover:translate-x-1 transition-transform duration-300"
                      )}
                    >
                      <span className="relative z-10">{section.description}</span>
                    </p>
                    <div className="overflow-x-auto">
                      <CodeBlock code={section.code} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};
