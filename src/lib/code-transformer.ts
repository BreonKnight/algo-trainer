// Runtime helpers
const PYTHON_RUNTIME_HELPERS = `
// Python built-in functions
const len = (obj) => {
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length;
  if (typeof obj === 'object') return Object.keys(obj).length;
  throw new Error('len() argument must be a sequence or collection');
};

const map = (fn, iterable) => Array.from(iterable).map(fn);
const filter = (fn, iterable) => Array.from(iterable).filter(fn);
const zip = (...iterables) => {
  const minLength = Math.min(...iterables.map(len));
  return Array.from({ length: minLength }, (_, i) => 
    iterables.map(iterable => iterable[i])
  );
};

const enumerate = (iterable) => {
  return Array.from(iterable).map((item, index) => [index, item]);
};

// Tuple implementation
const Tuple = (...items) => Object.freeze(items);
Tuple.prototype.toString = function() { return \`(\${this.join(', ')})\`; };

// Set operations
const set = (iterable) => new Set(iterable);
const frozenset = (iterable) => Object.freeze(new Set(iterable));

// Dictionary operations
const dict = (obj) => Object.fromEntries(Object.entries(obj));
const copy = (obj) => {
  if (Array.isArray(obj)) return [...obj];
  if (typeof obj === 'object') return { ...obj };
  return obj;
};

const deepcopy = (obj) => {
  if (Array.isArray(obj)) return obj.map(deepcopy);
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, deepcopy(value)])
    );
  }
  return obj;
};

// Exception handling
class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValueError';
  }
}

class TypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TypeError';
  }
}

// Truthiness helpers
const bool = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (Array.isArray(value) || typeof value === 'string') return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
};
`;

// Module resolution helpers
interface ModuleResolution {
  [key: string]: string;
}

const MODULE_RESOLUTION: ModuleResolution = {
  // Python standard library mappings
  os: "@stdlib/os",
  sys: "@stdlib/sys",
  math: "@stdlib/math",
  random: "@stdlib/random",
  datetime: "@stdlib/datetime",
  json: "@stdlib/json",
  re: "@stdlib/regex",
  collections: "@stdlib/collections",
  itertools: "@stdlib/itertools",
  functools: "@stdlib/functools",
  pathlib: "@stdlib/path",
  typing: "@stdlib/types",
};

function resolveImportPath(modulePath: string): string {
  // Handle relative imports
  if (modulePath.startsWith(".")) {
    return modulePath.replace(/\.py$/, ".js");
  }

  // Handle standard library mappings
  const mappedPath = MODULE_RESOLUTION[modulePath];
  if (mappedPath) {
    return mappedPath;
  }

  // Handle local modules
  return `./${modulePath.replace(/\.py$/, ".js")}`;
}

// Circular import handling
interface ModuleDependency {
  name: string;
  path: string;
  isCircular: boolean;
}

class ModuleResolver {
  private dependencies: Map<string, ModuleDependency[]>;
  private visited: Set<string>;
  private currentModule: string;

  constructor() {
    this.dependencies = new Map();
    this.visited = new Set();
    this.currentModule = "";
  }

  setCurrentModule(modulePath: string) {
    this.currentModule = modulePath;
    this.visited.clear();
  }

  addDependency(modulePath: string, importPath: string): ModuleDependency {
    const resolvedPath = resolveImportPath(importPath);
    const dependency: ModuleDependency = {
      name: importPath.split(".").pop() || importPath,
      path: resolvedPath,
      isCircular: false,
    };

    if (!this.dependencies.has(modulePath)) {
      this.dependencies.set(modulePath, []);
    }
    this.dependencies.get(modulePath)?.push(dependency);
    return dependency;
  }

  detectCircularDependencies(modulePath: string): ModuleDependency[] {
    const circularDeps: ModuleDependency[] = [];
    this.visited.clear();
    this._detectCircular(modulePath, new Set(), circularDeps);
    return circularDeps;
  }

  private _detectCircular(
    modulePath: string,
    path: Set<string>,
    circularDeps: ModuleDependency[]
  ) {
    if (path.has(modulePath)) {
      const deps = this.dependencies.get(modulePath) || [];
      circularDeps.push(...deps.filter((d) => path.has(d.path)));
      return;
    }

    path.add(modulePath);
    this.visited.add(modulePath);

    const deps = this.dependencies.get(modulePath) || [];
    for (const dep of deps) {
      this._detectCircular(dep.path, new Set(path), circularDeps);
    }
  }
}

const moduleResolver = new ModuleResolver();

function transformImport(importStmt: string, currentModule: string): string {
  moduleResolver.setCurrentModule(currentModule);

  // Handle from ... import ...
  const fromMatch = importStmt.match(/from\s+([\w.]+)\s+import\s+(.+)/);
  if (fromMatch) {
    const [_, modulePath, imports] = fromMatch;
    const resolvedPath = resolveImportPath(modulePath);
    const dependency = moduleResolver.addDependency(currentModule, modulePath);

    // Check for circular dependencies
    const circularDeps =
      moduleResolver.detectCircularDependencies(currentModule);
    if (circularDeps.some((dep) => dep.path === resolvedPath)) {
      dependency.isCircular = true;
      // For circular imports, we need to hoist the imports
      return `
// Circular import handling for ${modulePath}
let ${dependency.name};
try {
  ${transformImport(importStmt, currentModule)}
} catch (e) {
  if (e instanceof ReferenceError) {
    // Module not yet initialized, will be resolved later
    ${dependency.name} = undefined;
  } else {
    throw e;
  }
}`;
    }

    // Handle import as
    const importItems = imports.split(",").map((item) => {
      const [name, alias] = item.trim().split(/\s+as\s+/);
      return alias ? `{ ${name} as ${alias} }` : `{ ${name} }`;
    });

    return `import ${importItems.join(", ")} from '${resolvedPath}';`;
  }

  // Handle import ...
  const importMatch = importStmt.match(/import\s+([\w.]+)(?:\s+as\s+(\w+))?/);
  if (importMatch) {
    const [_, modulePath, alias] = importMatch;
    const resolvedPath = resolveImportPath(modulePath);
    const dependency = moduleResolver.addDependency(currentModule, modulePath);

    // Check for circular dependencies
    const circularDeps =
      moduleResolver.detectCircularDependencies(currentModule);
    if (circularDeps.some((dep) => dep.path === resolvedPath)) {
      dependency.isCircular = true;
      // For circular imports, we need to hoist the imports
      return `
// Circular import handling for ${modulePath}
let ${alias || modulePath.split(".").pop()};
try {
  ${transformImport(importStmt, currentModule)}
} catch (e) {
  if (e instanceof ReferenceError) {
    // Module not yet initialized, will be resolved later
    ${alias || modulePath.split(".").pop()} = undefined;
  } else {
    throw e;
  }
}`;
    }

    return `import ${alias || modulePath.split(".").pop()} from '${resolvedPath}';`;
  }

  return importStmt;
}

// Scoping helpers
interface Scope {
  variables: Set<string>;
  parent: Scope | null;
  isFunction: boolean;
  isLoop: boolean;
  isClass: boolean;
  isComprehension: boolean;
  decorators: string[];
}

class ScopeManager {
  private currentScope: Scope;
  private globalScope: Scope;
  private loopVariables: Map<string, string>;
  private classVariables: Map<string, string>;
  private comprehensionVariables: Map<string, string>;

  constructor() {
    this.globalScope = {
      variables: new Set(),
      parent: null,
      isFunction: false,
      isLoop: false,
      isClass: false,
      isComprehension: false,
      decorators: []
    };
    this.currentScope = this.globalScope;
    this.loopVariables = new Map();
    this.classVariables = new Map();
    this.comprehensionVariables = new Map();
  }

  enterFunction() {
    const newScope: Scope = {
      variables: new Set(),
      parent: this.currentScope,
      isFunction: true,
      isLoop: false,
      isClass: false,
      isComprehension: false,
      decorators: []
    };
    this.currentScope = newScope;
  }

  enterLoop() {
    const newScope: Scope = {
      variables: new Set(),
      parent: this.currentScope,
      isFunction: false,
      isLoop: true,
      isClass: false,
      isComprehension: false,
      decorators: []
    };
    this.currentScope = newScope;
  }

  enterClass() {
    const newScope: Scope = {
      variables: new Set(),
      parent: this.currentScope,
      isFunction: false,
      isLoop: false,
      isClass: true,
      isComprehension: false,
      decorators: []
    };
    this.currentScope = newScope;
  }

  enterComprehension() {
    const newScope: Scope = {
      variables: new Set(),
      parent: this.currentScope,
      isFunction: false,
      isLoop: false,
      isClass: false,
      isComprehension: true,
      decorators: []
    };
    this.currentScope = newScope;
  }

  exitScope() {
    if (this.currentScope.parent) {
      this.currentScope = this.currentScope.parent;
    }
  }

  addVariable(name: string) {
    this.currentScope.variables.add(name);
  }

  isGlobal(name: string): boolean {
    let scope: Scope | null = this.currentScope;
    while (scope) {
      if (scope.variables.has(name)) {
        return scope === this.globalScope;
      }
      scope = scope.parent;
    }
    return false;
  }

  isInLoop(name: string): boolean {
    let scope: Scope | null = this.currentScope;
    while (scope) {
      if (scope.variables.has(name) && scope.isLoop) {
        return true;
      }
      scope = scope.parent;
    }
    return false;
  }

  addLoopVariable(name: string, uniqueName: string) {
    this.loopVariables.set(name, uniqueName);
  }

  getLoopVariable(name: string): string | undefined {
    return this.loopVariables.get(name);
  }

  addDecorator(decorator: string) {
    this.currentScope.decorators.push(decorator);
  }

  getDecorators(): string[] {
    return this.currentScope.decorators;
  }

  clearDecorators() {
    this.currentScope.decorators = [];
  }

  addClassVariable(name: string, uniqueName: string) {
    this.classVariables.set(name, uniqueName);
  }

  getClassVariable(name: string): string | undefined {
    return this.classVariables.get(name);
  }

  addComprehensionVariable(name: string, uniqueName: string) {
    this.comprehensionVariables.set(name, uniqueName);
  }

  getComprehensionVariable(name: string): string | undefined {
    return this.comprehensionVariables.get(name);
  }
}

const scopeManager = new ScopeManager();

function transformScopedCode(code: string): string {
  let jsCode = code;
  
  // Handle decorators
  jsCode = jsCode.replace(/@([a-zA-Z_][a-zA-Z0-9_]*)(?:\(([^)]*)\))?/g, (match, decorator, args) => {
    scopeManager.addDecorator(decorator + (args ? `(${args})` : ''));
    return '';
  });

  // Handle class variables
  jsCode = jsCode.replace(/self\.([a-zA-Z_][a-zA-Z0-9_]*)/g, (match, name) => {
    const uniqueName = scopeManager.getClassVariable(name);
    return uniqueName ? `this.${uniqueName}` : `this.${name}`;
  });

  // Handle nested comprehensions
  jsCode = jsCode.replace(/\[([^[\]]+)\s+for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+([^[\]]+)(?:\s+if\s+([^[\]]+))?\]/g, 
    (match, expr, varName, iterable, condition) => {
      const uniqueName = `_${varName}_${Math.random().toString(36).substr(2, 9)}`;
      scopeManager.addComprehensionVariable(varName, uniqueName);
      const filter = condition ? `.filter(${uniqueName} => ${condition})` : '';
      return `${iterable}${filter}.map(${uniqueName} => ${expr})`;
    }
  );

  // Handle class method definitions
  jsCode = jsCode.replace(/def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(self\s*(?:,\s*([^)]*))?\)/g, 
    (match, name, params) => {
      const decorators = scopeManager.getDecorators();
      scopeManager.clearDecorators();
      const decoratorCode = decorators.map(d => `${d}\n`).join('');
      return `${decoratorCode}${name}(${params || ''})`;
    }
  );

  // Handle static and class methods
  jsCode = jsCode.replace(/@(?:staticmethod|classmethod)\s+def\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 
    (match, methodName) => {
      const decorators = scopeManager.getDecorators();
      scopeManager.clearDecorators();
      const decoratorCode = decorators.map(d => `${d}\n`).join('');
      return `${decoratorCode}static ${methodName}`;
    }
  );

  // Handle property decorators
  jsCode = jsCode.replace(/@property\s+def\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 
    (match, propName) => {
      const decorators = scopeManager.getDecorators();
      scopeManager.clearDecorators();
      const decoratorCode = decorators.map(d => `${d}\n`).join('');
      return `${decoratorCode}get ${propName}()`;
    }
  );

  // Handle global variables
  jsCode = jsCode.replace(/(?:^|\n)\s*global\s+([^\n;]+)/g, (_, vars) => {
    const variables = vars.split(",").map((v: string) => v.trim());
    return variables.map((v: string) => `window.${v} = ${v};`).join("\n");
  });

  // Handle nonlocal variables
  jsCode = jsCode.replace(/(?:^|\n)\s*nonlocal\s+([^\n;]+)/g, (_, vars) => {
    const variables = vars.split(",").map((v: string) => v.trim());
    return variables.map((v: string) => `let ${v};`).join("\n");
  });

  // Handle variable assignments
  jsCode = jsCode.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, (match, name) => {
    if (scopeManager.isGlobal(name)) {
      return `window.${name} =`;
    }
    return match;
  });

  // Handle loop variables (late binding)
  jsCode = jsCode.replace(
    /for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in/g,
    (match, name) => {
      const uniqueName = `_${name}_${Math.random().toString(36).substr(2, 9)}`;
      scopeManager.addLoopVariable(name, uniqueName);
      return `for (const ${uniqueName} of`;
    }
  );

  // Handle variable references
  jsCode = jsCode.replace(/([a-zA-Z_][a-zA-Z0-9_]*)(?![(])/g, (match, name) => {
    if (scopeManager.isGlobal(name)) {
      return `window.${name}`;
    }
    const loopVar = scopeManager.getLoopVariable(name);
    if (loopVar) {
      return loopVar;
    }
    return match;
  });

  return jsCode;
}

// Basic Python to JavaScript conversion rules
const PYTHON_TO_JS_RULES = {
  // Function definitions with arrow functions
  "def\\s+([\\w_]+)\\s*\\(([^)]*)\\)\\s*:": (name: string, params: string) => {
    scopeManager.enterFunction();
    return `const ${name} = (${params}) => {`;
  },

  // Print statements
  "print\\(([^)]+)\\)": (content: string) => `console.log(${content})`,

  // List comprehensions to array methods
  "\\[([^\\]]+)\\s+for\\s+([\\w_]+)\\s+in\\s+([^\\]]+)\\s+if\\s+([^\\]]+)\\]": (
    expr: string,
    varName: string,
    array: string,
    condition: string
  ) => `${array}.filter(${varName} => ${condition}).map(${varName} => ${expr})`,
  "\\[([^\\]]+)\\s+for\\s+([\\w_]+)\\s+in\\s+([^\\]]+)\\]": (
    expr: string,
    varName: string,
    array: string
  ) => `${array}.map(${varName} => ${expr})`,

  // Dictionary comprehensions to reduce
  "\\{([^:]+):\\s*([^}]+)\\s+for\\s+([^\\]]+)\\s+in\\s+([^}]+)\\s+if\\s+([^}]+)\\}":
    (
      key: string,
      value: string,
      varName: string,
      array: string,
      condition: string
    ) =>
      `${array}.filter(${varName} => ${condition}).reduce((acc, ${varName}) => ({...acc, [${key}]: ${value}}), {})`,
  "\\{([^:]+):\\s*([^}]+)\\s+for\\s+([^\\]]+)\\s+in\\s+([^}]+)\\}": (
    key: string,
    value: string,
    varName: string,
    array: string
  ) =>
    `${array}.reduce((acc, ${varName}) => ({...acc, [${key}]: ${value}}), {})`,

  // String formatting with template literals
  'f"([^"]+)"': (content: string) => `\`${content}\``,
  'r"([^"]+)"': (content: string) => `\`${content}\``,

  // Boolean values
  True: () => "true",
  False: () => "false",
  None: () => "null",

  // List methods
  "append\\(([^)]+)\\)": (value: string) => `push(${value})`,
  "pop\\(\\)": () => "pop()",
  "len\\(([^)]+)\\)": (obj: string) => `len(${obj})`,

  // Dictionary to object
  "\\{([^}]+)\\}": (content: string) => {
    if (content.includes(":")) return `{${content}}`;
    return `set([${content}])`;
  },

  // Control structures
  "if\\s+([^:]+)\\s*:": (condition: string) => `if (${condition}) {`,
  "elif\\s+([^:]+)\\s*:": (condition: string) => `} else if (${condition}) {`,
  "else\\s*:": () => "} else {",
  "for\\s+([\\w_]+)\\s+in\\s+([^:]+)\\s*:": (
    varName: string,
    iterable: string
  ) => {
    scopeManager.enterLoop();
    return `for (const ${varName} of ${iterable}) {`;
  },
  "while\\s+([^:]+)\\s*:": (condition: string) => {
    scopeManager.enterLoop();
    return `while (${condition}) {`;
  },

  // Array slicing
  "\\[:\\]": () => ".slice()",
  "\\[([^:]+):\\]": (start: string) => `.slice(${start})`,
  "\\[:([^:]+)\\]": (end: string) => `.slice(0, ${end})`,
  "\\[([^:]+):([^:]+)\\]": (start: string, end: string) =>
    `.slice(${start}, ${end})`,

  // Variable declarations
  "([\\w_]+)\\s*=\\s*([^\\n;]+)": (name: string, value: string) => {
    scopeManager.addVariable(name);
    return `${name} = ${value}`;
  },

  // Comments
  "#\\s*(.+)": (content: string) => `// ${content}`,
  '"""([\\s\\S]*?)"""': (content: string) => `/*${content}*/`,
  "'''([\\s\\S]*?)'''": (content: string) => `/*${content}*/`,

  // Async/await
  "async\\s+def\\s+([\\w_]+)\\s*\\(([^)]*)\\)\\s*:": (
    name: string,
    params: string
  ) => `const ${name} = async (${params}) => {`,
  "await\\s+([^\\s]+)": (value: string) => `await ${value}`,

  // Classes
  "class\\s+([\\w_]+)\\s*:": (name: string) => {
    scopeManager.enterClass();
    return `class ${name} {`;
  },
  "def\\s+__init__\\s*\\(([^)]*)\\)\\s*:": (params: string) =>
    `constructor(${params}) {`,
  "self\\.([\\w_]+)": (prop: string) => `this.${prop}`,

  // Generators
  "yield\\s+([^\\s]+)": (value: string) => `yield ${value}`,
  "yield\\s+from\\s+([^\\s]+)": (value: string) => `yield* ${value}`,

  // Type hints (remove them)
  ":\\s*[\\w\\[\\],\\s]+\\s*=": () => "=",
  "->\\s*[\\w\\[\\],\\s]+\\s*:": () => ":",

  // Array access
  "\\[\\{": () => "[",
  "\\[\\s*\\]": () => "[]",

  // Statement endings
  "([^;\\n])(?<!=>\\s*{)(?<!\\{)\\n(?![\\s]*[\\{\\[]|\\s*//)": (
    content: string
  ) => `${content};\n`,
  "([^;\\n])(?<=\\})\\n": (content: string) => `${content};\n`,
  "([^;\\n])(?<=\\])\\n": (content: string) => `${content};\n`,
  "([^;\\n])(?<=\\))\\n(?![\\s]*[\\{\\[]|\\s*//)": (content: string) =>
    `${content};\n`,

  // Math operations
  "\\*\\*": () => "**",
  "//": () => "/",
  "\\/\\/": (a: string, b: string) => `Math.floor(${a} / ${b})`,

  // Import statements
  "from\\s+([\\w.]+)\\s+import\\s+([^\\n]+)": (
    modulePath: string,
    imports: string
  ) => transformImport(`from ${modulePath} import ${imports}`, modulePath),
  "import\\s+([\\w.]+)(?:\\s+as\\s+(\\w+))?": (
    modulePath: string,
    alias?: string
  ) =>
    transformImport(
      `import ${modulePath}${alias ? ` as ${alias}` : ""}`,
      modulePath
    ),

  // Fix double braces and semicolons
  "\\{\\s*\\{": () => "{",
  "\\}\\s*;\\s*\\}": () => "}",
  "\\}\\s*;\\s*;": () => "};",
  "\\}\\s*;\\s*$": () => "}",

  // Fix multiple semicolons
  ";\\s*;+": () => ";",
  ";\\s*$\\s*;": () => ";",

  // Fix semicolons after comments
  "//.*;": (match: string) => match.replace(/;$/, ""),
  "/\\*.*\\*/;": (match: string) => match.replace(/;$/, ""),

  // Fix semicolons in empty lines
  "^\\s*;\\s*$": () => "",
  "\\n\\s*;\\s*\\n": () => "\n",

  // Method chaining
  "([\\w_]+)\\.([\\w_]+)\\(\\)\\.([\\w_]+)\\(\\)": (
    _: string,
    obj: string,
    method1: string,
    method2: string
  ) => `${obj}.${method1}().${method2}()`,
  "([\\w_]+)\\.([\\w_]+)\\(\\)": (_: string, obj: string, method: string) =>
    `${obj}.${method}()`,

  // Built-in functions
  "map\\(([^,]+),\\s*([^)]+)\\)": (fn: string, iterable: string) =>
    `map(${fn}, ${iterable})`,
  "filter\\(([^,]+),\\s*([^)]+)\\)": (fn: string, iterable: string) =>
    `filter(${fn}, ${iterable})`,
  "zip\\(([^)]+)\\)": (iterables: string) => `zip(${iterables})`,
  "enumerate\\(([^)]+)\\)": (iterable: string) => `enumerate(${iterable})`,

  // Tuples
  "\\(([^)]+)\\)": (items: string) => `Tuple(${items})`,

  // Dictionaries
  "dict\\(([^)]+)\\)": (obj: string) => `dict(${obj})`,

  // Copy operations
  "copy\\.copy\\(([^)]+)\\)": (obj: string) => `copy(${obj})`,
  "copy\\.deepcopy\\(([^)]+)\\)": (obj: string) => `deepcopy(${obj})`,

  // Exceptions
  "raise\\s+ValueError\\(([^)]+)\\)": (message: string) =>
    `throw new ValueError(${message})`,
  "raise\\s+TypeError\\(([^)]+)\\)": (message: string) =>
    `throw new TypeError(${message})`,

  // Truthiness
  "bool\\(([^)]+)\\)": (value: string) => `bool(${value})`,

  // Module exports
  "__all__\\s*=\\s*\\[([^\\]]+)\\]": (exports: string) => {
    const exportList = exports
      .split(",")
      .map((e) => e.trim().replace(/['"]/g, ""));
    return `export { ${exportList.join(", ")} };`,

  // List comprehensions
  "\\[([^\\]]+)\\s+for\\s+([\\w_]+)\\s+in\\s+([^\\]]+)(?:\\s+if\\s+([^\\]]+))?\\]": 
    (expr: string, varName: string, iterable: string, condition?: string) => {
      scopeManager.enterComprehension();
      const uniqueName = `_${varName}_${Math.random().toString(36).substr(2, 9)}`;
      scopeManager.addComprehensionVariable(varName, uniqueName);
      const filter = condition ? `.filter(${uniqueName} => ${condition})` : '';
      return `${iterable}${filter}.map(${uniqueName} => ${expr})`;
    }
};

// JavaScript to Python conversion rules
const JS_TO_PYTHON_RULES = {
  // Arrow functions to def
  "const\\s+([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{": "def $1($2):",
  // Console.log to print
  "console\\.log\\(([^)]+)\\)": "print($1)",
  // Map to list comprehension
  "\\.map\\(([^)]+)\\)": "[$1 for $1 in $1]",
  // Array.from to range
  "Array\\.from\\({length:\\s*([^,]+)},\\s*\\(_,\\s*i\\)\\s*=>\\s*i\\)":
    "range($1)",
  // Template literals to f-strings
  "`([^`]+)`": 'f"$1"',
  // Boolean values
  true: "True",
  false: "False",
  // Null to None
  null: "None",
  // Array methods
  "\\.push\\(([^)]+)\\)": ".append($1)",
  "\\.pop\\(\\)": ".pop()",
  // Object to dictionary
  "\\{([^}]+)\\}": "{$1}",
  // Curly brace to indentation
  "\\}": "",
  // Class definitions
  "class\\s+([\\w_]+)\\s*\\{": "class $1:",
  // Constructor to __init__
  "constructor\\(([^)]*)\\)\\s*\\{": "def __init__($1):",
  // This to self
  "this\\.([\\w_]+)": "self.$1",
  // Instance methods
  "([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{": "def $1(self, $2):",
  // Static methods
  "static\\s+([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{":
    "@staticmethod\ndef $1($2):",
  // Slice to list slicing
  "\\.slice\\(([^,]+),\\s*([^)]+)\\)": "[$1:$2]",
  "\\.slice\\(([^)]+)\\)": "[$1:]",
  "\\.slice\\(0,\\s*([^)]+)\\)": "[:$1]",
  // Length to len
  "\\.length": "len()",
  // String methods
  "String\\.([\\w_]+)": "str.$1",
  // Math operations
  "Math\\.([\\w_]+)": "math.$1",
  // Import statements
  "import\\s+([\\w_]+)\\s+from\\s+'([^']+)'": "import $1",
  "import\\s+{\\s*([\\w_]+)\\s*}\\s+from\\s+'([^']+)'": "from $2 import $1",
  // Return statements
  "return\\s+([^;]+);": "return $1",
  // If statements
  "if\\s*\\(([^)]+)\\)\\s*\\{": "if $1:",
  "}\\s*else\\s*if\\s*\\(([^)]+)\\)\\s*\\{": "elif $1:",
  "}\\s*else\\s*\\{": "else:",
  // For loops
  "for\\s*\\(const\\s+([\\w_]+)\\s+of\\s+([^)]+)\\)\\s*\\{": "for $1 in $2:",
  // While loops
  "while\\s*\\(([^)]+)\\)\\s*\\{": "while $1:",
  // Try/catch blocks
  "try\\s*\\{": "try:",
  "}\\s*catch\\s*\\(([^)]+)\\)\\s*\\{": "except $1:",
  "}\\s*finally\\s*\\{": "finally:",
  // Error throwing to assert
  "if\\s*\\(!([^)]+)\\)\\s*throw\\s+new\\s+Error\\(([^)]+)\\)": "assert $1, $2",
  "if\\s*\\(!([^)]+)\\)\\s*throw\\s+new\\s+Error\\('Assertion failed'\\)":
    "assert $1",
  // Arrow functions to lambda
  "\\(([^)]+)\\)\\s*=>\\s*([^;]+)": "lambda $1: $2",
  // Spread operator to unpacking
  "\\.\\.\\.([\\w_]+)": "*$1",
  // Filter and map to list comprehension with if
  "\\.filter\\(([^)]+)\\)\\.map\\(([^)]+)\\)": "[$2 for $1 if $1]",
  // Set to set comprehension
  "new\\s+Set\\(([^)]+)\\)": "{$1 for $1 in $1}",
  // Object.fromEntries to dictionary comprehension
  "Object\\.fromEntries\\(([^)]+)\\)": "{$1: $2 for $3 in $4}",
  // Ternary operator to if-else
  "([^\\s]+)\\s*\\?\\s*([^\\s]+)\\s*:\\s*([^\\s]+)": "$2 if $1 else $3",
  // Comments
  "//\\s*(.+)": "# $1",
};

export function convertPythonToJavaScript(code: string): string {
  return PYTHON_RUNTIME_HELPERS + "\n\n" + applyTransformations(code);
}

function applyTransformations(code: string, modulePath: string = ""): string {
  let jsCode = PYTHON_RUNTIME_HELPERS + '\n\n' + code;
  
  // First pass: handle imports and exports
  const lines = jsCode.split('\n');
  const transformedLines = lines.map(line => {
    if (line.trim().startsWith('from ') || line.trim().startsWith('import ')) {
      return transformImport(line, modulePath);
    }
    return line;
  });
  jsCode = transformedLines.join('\n');

  // Second pass: handle scoping
  jsCode = transformScopedCode(jsCode);

  // Third pass: apply other transformations
  Object.entries(PYTHON_TO_JS_RULES).forEach(([pattern, replacement]) => {
    const regex = new RegExp(pattern, "g");
    jsCode = jsCode.replace(regex, replacement);
  });

  return jsCode;
}

export function convertJavaScriptToPython(code: string): string {
  let pythonCode = code;

  // Apply conversion rules
  Object.entries(JS_TO_PYTHON_RULES).forEach(([pattern, replacement]) => {
    const regex = new RegExp(pattern, "g");
    pythonCode = pythonCode.replace(regex, replacement);
  });

  // Remove semicolons
  pythonCode = pythonCode.replace(/;/g, "");

  // Fix indentation
  const lines = pythonCode.split("\n");
  const indentedLines: string[] = [];
  let currentIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const content = line.trim();

    // Skip empty lines
    if (!content) {
      indentedLines.push("");
      continue;
    }

    // Handle function definitions
    if (content.startsWith("def")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle variable assignments
    if (content.includes("=") && !content.includes("def")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Handle control structures
    if (
      content.startsWith("if") ||
      content.startsWith("while") ||
      content.startsWith("for")
    ) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle else
    if (content.startsWith("else")) {
      currentIndent--;
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle return statements
    if (content.startsWith("return")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Handle comments
    if (content.startsWith("#")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Add the current line with proper indentation
    indentedLines.push(" ".repeat(currentIndent * 4) + content);
  }

  pythonCode = indentedLines.join("\n");

  return pythonCode;
}

export type Language = "python" | "javascript";

export function toggleLanguage(
  code: string,
  currentLanguage: Language
): { code: string; language: Language } {
  if (currentLanguage === "python") {
    return {
      code: convertPythonToJavaScript(code),
      language: "javascript",
    };
  } else {
    return {
      code: convertJavaScriptToPython(code),
      language: "python",
    };
  }
}
