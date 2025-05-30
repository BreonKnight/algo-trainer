import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useTheme } from "@/components/theme/use-theme";
import { Background } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  getCardClass,
  getButtonClass,
  getTooltipClass,
  getCodeBlockClass,
  getIconClass,
} from "@/lib/utils/theme-class-utils";

// Custom hook to detect desktop
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.matchMedia("(min-width: 640px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

const CodeBlock = memo(({ code }: { code: string }) => {
  const { theme: appTheme } = useTheme();
  const isDesktop = useIsDesktop();
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
      fontSize: "1.05rem",
      lineHeight: 2,
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
      fontSize: "1.05rem",
      lineHeight: 2,
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
      color: "#8b949e",
      fontStyle: "italic",
      opacity: 0.85,
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

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleLineClick = useCallback(
    (lineNumber: number) => {
      setHighlightedLine(lineNumber === highlightedLine ? null : lineNumber);
      // Highlight for 1s
      setTimeout(() => setHighlightedLine(null), 1000);
    },
    [highlightedLine]
  );

  return (
    <div className="space-y-2 w-full">
      {/* Copy button in a flex container */}
      <div className="flex justify-end items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                aria-label={copied ? "Copied!" : "Copy code"}
                className={getButtonClass(appTheme, copied)}
              >
                <div className="flex items-center gap-2">
                  {copied ? (
                    <Check
                      className={
                        getIconClass(appTheme) +
                        " h-5 w-5 transition-transform duration-200 " +
                        (copied ? "scale-125" : "scale-100")
                      }
                    />
                  ) : (
                    <Copy className={getIconClass(appTheme) + " h-5 w-5"} />
                  )}
                  <span className="font-medium">{copied ? "Copied!" : "Copy code"}</span>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent className={getTooltipClass(appTheme)}>
              <p className="text-xs">{copied ? "Copied!" : "Copy code"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Code block container */}
      <div
        className={
          getCodeBlockClass(appTheme) + " w-full transition-all duration-200 group relative"
        }
        style={{ color: appTheme === "light" ? "#1a1a1a" : `var(--code-text-${appTheme})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glass overlay with reduced opacity, hidden on mobile */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 hidden sm:block"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(var(--code-bg-${appTheme}), 0.3), transparent)`,
          }}
        />
        {/* Horizontal scroll hint (fade) on mobile */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[rgba(0,0,0,0.08)] to-transparent sm:hidden z-20" />
        <div className="relative z-10">
          <SyntaxHighlighter
            language="python"
            style={customTheme}
            showLineNumbers={isDesktop}
            wrapLongLines={true}
            useInlineStyles={true}
            lineNumberStyle={{
              minWidth: "2.5em",
              paddingRight: "1.2em",
              textAlign: "right",
              userSelect: "none",
              opacity: 0.7,
              transition: "opacity 0.2s ease",
              cursor: "pointer",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              background: "rgba(120,120,120,0.07)",
              borderRadius: "0.4em 0 0 0.4em",
              marginRight: "1.2em",
            }}
            customStyle={{
              transition: "all 0.2s ease",
              padding: 0,
              margin: 0,
              borderRadius: "0.5rem",
              fontSize: "1.05rem",
              lineHeight: 2,
              letterSpacing: "0.2px",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              paddingLeft: "0.5em",
            }}
            lineProps={(lineNumber) => ({
              style: {
                transition: "all 0.2s ease",
                backgroundColor:
                  lineNumber === highlightedLine
                    ? "rgba(255, 255, 0, 0.12)"
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
              paddingRight: "1.2em",
              borderRight: "1px solid var(--border)",
              marginRight: "1.2em",
              userSelect: "none",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              background: "rgba(120,120,120,0.07)",
              borderRadius: "0.4em 0 0 0.4em",
            }}
            className="text-sm sm:text-base leading-relaxed sm:leading-[2] min-w-full whitespace-pre-wrap break-words"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
});

export default function PythonTechniques() {
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
    <Background>
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
                getButtonClass(theme, false),
                "fixed bottom-6 right-6 z-50 rounded-full transition-all duration-300",
                showBackToTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 pointer-events-none",
                "shadow-lg backdrop-blur-md hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent touch-manipulation select-none w-12 h-12 sm:w-14 sm:h-14"
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
                    strokeDashoffset={289.03 - 289.03 * Number(scrollProgress)}
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
          <TooltipContent className={cn(getTooltipClass(theme), "px-3 py-2 text-sm font-medium")}>
            <p>Back to Top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="w-full px-6">
        <TooltipProvider>
          {/* Title and Section Navigation */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent leading-[1.15] pb-2",
                "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
              )}
            >
              Python Techniques
            </motion.h1>

            {/* Section Navigation */}
            <div className="w-full max-w-3xl mx-auto">
              <div
                className={cn(
                  "flex flex-wrap gap-2 justify-center p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-xl z-auto",
                  theme === "nord"
                    ? "bg-white/10 border border-white/20 hover:bg-white/15"
                    : "bg-secondary/20 border border-secondary/40 hover:bg-secondary/30"
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
                          getButtonClass(theme, activeSection === section.title),
                          "transition-all duration-200 whitespace-normal text-sm px-3 py-1.5 min-w-0 flex-grow text-ellipsis overflow-hidden max-w-xs sm:max-w-sm"
                        )}
                      >
                        {section.title}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      className={cn(getTooltipClass(theme), "z-[9999] max-w-[200px]")}
                      side="bottom"
                    >
                      <p className="text-xs leading-relaxed">{section.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow-lg p-4 glassy-gradient-bg relative group">
            {/* Enhanced glass overlay - more subtle */}
            <div
              className="absolute inset-0 rounded-xl transition-all duration-300"
              style={{
                background:
                  theme === "nord"
                    ? "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                    : "linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02))",
                backdropFilter: "blur(8px)",
                border:
                  theme === "nord"
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "1px solid rgba(0,0,0,0.05)",
              }}
            />

            {/* Interactive hover effect - more subtle */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.05), transparent 40%)",
              }}
            />

            <div className="relative z-10 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className={cn(
                    getCardClass(theme),
                    "w-full p-0 border-0 bg-transparent rounded-none sm:rounded-lg sm:p-6 sm:border sm:backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] sm:max-w-3xl mx-0 sm:mx-auto"
                  )}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
                  }}
                >
                  <h2
                    className={cn(
                      "text-2xl font-bold mb-4 tracking-tight",
                      "flex items-center gap-3"
                    )}
                  >
                    <span
                      className={getIconClass(theme) + " text-3xl select-none"}
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
                        "text-base leading-relaxed font-medium tracking-wide italic border-l-4 pl-4 transition-colors duration-300 relative",
                        theme === "light" || theme === "solarized"
                          ? "text-main border-accent/30"
                          : theme === "nord"
                            ? "text-nord-4 border-white/20"
                            : "text-zinc-400 border-zinc-700/30 hover:border-accent/50"
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
    </Background>
  );
}
