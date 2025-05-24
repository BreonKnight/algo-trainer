import type { editor } from "monaco-editor";

export const draculaTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "f8f8f2" },
    { token: "comment", foreground: "6272a4" },
    { token: "keyword", foreground: "ff79c6" },
    { token: "string", foreground: "f1fa8c" },
    { token: "number", foreground: "bd93f9" },
    { token: "operator", foreground: "ff79c6" },
    { token: "function", foreground: "50fa7b" },
    { token: "variable", foreground: "f8f8f2" },
    { token: "type", foreground: "8be9fd" },
    { token: "class", foreground: "8be9fd" },
    { token: "interface", foreground: "8be9fd" },
    { token: "enum", foreground: "8be9fd" },
    { token: "constant", foreground: "bd93f9" },
    { token: "parameter", foreground: "ffb86c" },
    { token: "property", foreground: "66d9ef" },
    { token: "punctuation", foreground: "f8f8f2" },
    { token: "delimiter", foreground: "f8f8f2" },
    { token: "bracket", foreground: "f8f8f2" },
    { token: "tag", foreground: "ff79c6" },
    { token: "attribute.name", foreground: "50fa7b" },
    { token: "attribute.value", foreground: "f1fa8c" },
  ],
  colors: {
    "editor.background": "#282a36",
    "editor.foreground": "#f8f8f2",
    "editor.lineHighlightBackground": "#44475a",
    "editor.selectionBackground": "#44475a",
    "editor.inactiveSelectionBackground": "#44475a80",
    "editorCursor.foreground": "#f8f8f2",
    "editorWhitespace.foreground": "#6272a480",
    "editorIndentGuide.background": "#6272a480",
    "editorIndentGuide.activeBackground": "#f8f8f280",
    "editor.selectionHighlightBackground": "#44475a80",
    "editor.wordHighlightBackground": "#44475a80",
    "editor.findMatchBackground": "#44475a80",
    "editor.findMatchHighlightBackground": "#44475a40",
    "editorBracketMatch.background": "#44475a80",
    "editorBracketMatch.border": "#f8f8f280",
    "editorOverviewRuler.border": "#282a36",
    "editorGutter.background": "#282a36",
    "editorError.foreground": "#ff5555",
    "editorWarning.foreground": "#ffb86c",
    "editorInfo.foreground": "#8be9fd",
    "editorHint.foreground": "#6272a4",
  },
};

export const solarizedTheme: editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  rules: [
    { token: "", foreground: "657b83" },
    { token: "comment", foreground: "93a1a1" },
    { token: "keyword", foreground: "b58900" },
    { token: "string", foreground: "2aa198" },
    { token: "number", foreground: "268bd2" },
    { token: "operator", foreground: "b58900" },
    { token: "function", foreground: "268bd2" },
    { token: "variable", foreground: "657b83" },
    { token: "type", foreground: "b58900" },
    { token: "class", foreground: "b58900" },
    { token: "interface", foreground: "b58900" },
    { token: "enum", foreground: "b58900" },
    { token: "constant", foreground: "268bd2" },
    { token: "parameter", foreground: "b58900" },
    { token: "property", foreground: "268bd2" },
    { token: "punctuation", foreground: "657b83" },
    { token: "delimiter", foreground: "657b83" },
    { token: "bracket", foreground: "657b83" },
    { token: "tag", foreground: "b58900" },
    { token: "attribute.name", foreground: "268bd2" },
    { token: "attribute.value", foreground: "2aa198" },
  ],
  colors: {
    "editor.background": "#fdf6e3",
    "editor.foreground": "#657b83",
    "editor.lineHighlightBackground": "#eee8d5",
    "editor.selectionBackground": "#eee8d5",
    "editor.inactiveSelectionBackground": "#eee8d580",
    "editorCursor.foreground": "#657b83",
    "editorWhitespace.foreground": "#93a1a180",
    "editorIndentGuide.background": "#93a1a180",
    "editorIndentGuide.activeBackground": "#657b8380",
    "editor.selectionHighlightBackground": "#eee8d580",
    "editor.wordHighlightBackground": "#eee8d580",
    "editor.findMatchBackground": "#eee8d580",
    "editor.findMatchHighlightBackground": "#eee8d540",
    "editorBracketMatch.background": "#eee8d580",
    "editorBracketMatch.border": "#657b8380",
    "editorOverviewRuler.border": "#fdf6e3",
    "editorGutter.background": "#fdf6e3",
    "editorError.foreground": "#dc322f",
    "editorWarning.foreground": "#b58900",
    "editorInfo.foreground": "#268bd2",
    "editorHint.foreground": "#93a1a1",
  },
};

export const lightTheme: editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  rules: [
    { token: "", foreground: "0f172a" },
    { token: "comment", foreground: "64748b" },
    { token: "keyword", foreground: "2563eb" },
    { token: "string", foreground: "059669" },
    { token: "number", foreground: "dc2626" },
    { token: "operator", foreground: "2563eb" },
    { token: "function", foreground: "059669" },
    { token: "variable", foreground: "0f172a" },
    { token: "type", foreground: "2563eb" },
    { token: "class", foreground: "2563eb" },
    { token: "interface", foreground: "2563eb" },
    { token: "enum", foreground: "2563eb" },
    { token: "constant", foreground: "dc2626" },
    { token: "parameter", foreground: "2563eb" },
    { token: "property", foreground: "059669" },
    { token: "punctuation", foreground: "0f172a" },
    { token: "delimiter", foreground: "0f172a" },
    { token: "bracket", foreground: "0f172a" },
    { token: "tag", foreground: "2563eb" },
    { token: "attribute.name", foreground: "059669" },
    { token: "attribute.value", foreground: "dc2626" },
  ],
  colors: {
    "editor.background": "#ffffff",
    "editor.foreground": "#0f172a",
    "editor.lineHighlightBackground": "#f1f5f9",
    "editor.selectionBackground": "#2563eb33",
    "editor.inactiveSelectionBackground": "#2563eb22",
    "editorCursor.foreground": "#0f172a",
    "editorWhitespace.foreground": "#64748b80",
    "editorIndentGuide.background": "#64748b80",
    "editorIndentGuide.activeBackground": "#0f172a80",
    "editor.selectionHighlightBackground": "#2563eb22",
    "editor.wordHighlightBackground": "#2563eb22",
    "editor.findMatchBackground": "#2563eb80",
    "editor.findMatchHighlightBackground": "#2563eb40",
    "editorBracketMatch.background": "#2563eb22",
    "editorBracketMatch.border": "#0f172a80",
    "editorOverviewRuler.border": "#ffffff",
    "editorGutter.background": "#ffffff",
    "editorError.foreground": "#dc2626",
    "editorWarning.foreground": "#d97706",
    "editorInfo.foreground": "#2563eb",
    "editorHint.foreground": "#64748b",
  },
};

export const nordTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "FFFFFF" },
    { token: "keyword", foreground: "50FF50" },
    { token: "operator", foreground: "FF5555" },
    { token: "string", foreground: "FFE44D" },
    { token: "number", foreground: "66B6FF" },
    { token: "comment", foreground: "B4B4B4" },
    { token: "type", foreground: "50FF50" },
    { token: "function", foreground: "FF5555" },
    { token: "variable", foreground: "FFFFFF" },
    { token: "constant", foreground: "FFE44D" },
    { token: "class", foreground: "66B6FF" },
    { token: "interface", foreground: "50FF50" },
    { token: "enum", foreground: "FF5555" },
    { token: "property", foreground: "66B6FF" },
    { token: "method", foreground: "FF5555" },
    { token: "decorator", foreground: "FFE44D" },
    { token: "regexp", foreground: "50FF50" },
    { token: "tag", foreground: "66B6FF" },
    { token: "attribute.name", foreground: "FF5555" },
    { token: "attribute.value", foreground: "50FF50" },
  ],
  colors: {
    "editor.background": "#2A1F73",
    "editor.foreground": "#FFFFFF",
    "editor.lineHighlightBackground": "#382A94",
    "editor.selectionBackground": "#FF555533",
    "editorCursor.foreground": "#FFFFFF",
    "editorWhitespace.foreground": "#66B6FF40",
    "editorLineNumber.foreground": "#B4B4B4",
    "editorLineNumber.activeForeground": "#FFFFFF",
    "editorIndentGuide.background": "#66B6FF40",
    "editorIndentGuide.activeBackground": "#66B6FF80",
    "editor.selectionHighlightBackground": "#FF555533",
    "editor.wordHighlightBackground": "#50FF5033",
    "editor.wordHighlightStrongBackground": "#FFE44D33",
    "editorBracketMatch.background": "#66B6FF33",
    "editorBracketMatch.border": "#66B6FF",
    "editor.findMatchBackground": "#FFE44D40",
    "editor.findMatchHighlightBackground": "#FFE44D20",
    "editor.findMatchBorder": "#FFE44D",
    "editor.findMatchHighlightBorder": "#FFE44D40",
    "editorOverviewRuler.border": "#66B6FF",
    "editorGutter.background": "#2A1F73",
    "editorError.foreground": "#FF5555",
    "editorWarning.foreground": "#FFE44D",
    "editorInfo.foreground": "#66B6FF",
    "editorHint.foreground": "#50FF50",
    "scrollbarSlider.background": "#66B6FF40",
    "scrollbarSlider.hoverBackground": "#66B6FF60",
    "scrollbarSlider.activeBackground": "#66B6FF80",
  },
};

export const snesTheme: editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  rules: [
    { token: "", foreground: "333333" },
    { token: "keyword", foreground: "0000FF" },
    { token: "operator", foreground: "FF0000" },
    { token: "string", foreground: "00B800" },
    { token: "number", foreground: "FFD700" },
    { token: "comment", foreground: "666666" },
    { token: "type", foreground: "0000FF" },
    { token: "function", foreground: "FF0000" },
    { token: "variable", foreground: "333333" },
    { token: "constant", foreground: "00B800" },
    { token: "class", foreground: "0000FF" },
    { token: "interface", foreground: "00B800" },
    { token: "enum", foreground: "FF0000" },
    { token: "property", foreground: "0000FF" },
    { token: "method", foreground: "FF0000" },
    { token: "decorator", foreground: "FFD700" },
    { token: "regexp", foreground: "00B800" },
    { token: "tag", foreground: "0000FF" },
    { token: "attribute.name", foreground: "FF0000" },
    { token: "attribute.value", foreground: "00B800" },
  ],
  colors: {
    "editor.background": "#B8B8B8",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#A8A8A8",
    "editor.selectionBackground": "#989898",
    "editorCursor.foreground": "#333333",
    "editorWhitespace.foreground": "#808080",
    "editorLineNumber.foreground": "#666666",
    "editorLineNumber.activeForeground": "#333333",
    "editorIndentGuide.background": "#808080",
    "editorIndentGuide.activeBackground": "#666666",
    "editor.selectionHighlightBackground": "#9898984D",
    "editor.wordHighlightBackground": "#9898984D",
    "editor.wordHighlightStrongBackground": "#9898984D",
    "editorBracketMatch.background": "#9898984D",
    "editorBracketMatch.border": "#666666",
    "editor.findMatchBackground": "#FFD7004D",
    "editor.findMatchHighlightBackground": "#FFD7002D",
    "editor.findMatchBorder": "#FFD700",
    "editor.findMatchHighlightBorder": "#FFD7004D",
    "editorOverviewRuler.border": "#808080",
    "editorGutter.background": "#B8B8B8",
    "editorError.foreground": "#FF0000",
    "editorWarning.foreground": "#FFD700",
    "editorInfo.foreground": "#0000FF",
    "editorHint.foreground": "#00B800",
    // Custom pseudocode colors for SNES theme with better contrast
    "--pseudocode-text": "#000000",
    "--pseudocode-text-shadow": "none",
    "--pseudocode-code": "#000080",
    "--pseudocode-code-shadow": "none",
    "--pseudocode-keyword": "#CC0000",
    "--pseudocode-keyword-shadow": "none",
    "--pseudocode-function": "#000080",
    "--pseudocode-function-shadow": "none",
    "--pseudocode-string": "#006400",
    "--pseudocode-string-shadow": "none",
    "--pseudocode-number": "#B8860B",
    "--pseudocode-number-shadow": "none",
    "--pseudocode-comment": "#4A4A4A",
    "--pseudocode-heading": "#CC0000",
    "--pseudocode-heading-shadow": "none",
    "--pseudocode-bullet": "#000080",
    "--pseudocode-bullet-shadow": "none",
    "--pseudocode-sub-bullet": "#CC0000",
    "--pseudocode-sub-bullet-shadow": "none",
    // Updated metadata styles for better visibility
    "--pseudocode-metadata": "#000080",
    "--pseudocode-metadata-shadow": "0 0 0 #000",
    "--pseudocode-type": "#CC0000",
    "--pseudocode-type-shadow": "none",
  },
};

export const ps2Theme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "B4C7FF" },
    { token: "keyword", foreground: "4B75FF" },
    { token: "operator", foreground: "6F9AFF" },
    { token: "string", foreground: "00A5FF" },
    { token: "number", foreground: "2E59FF" },
    { token: "comment", foreground: "6B88CC" },
    { token: "type", foreground: "4B75FF" },
    { token: "function", foreground: "00A5FF" },
    { token: "variable", foreground: "B4C7FF" },
    { token: "constant", foreground: "2E59FF" },
    { token: "class", foreground: "4B75FF" },
    { token: "interface", foreground: "6F9AFF" },
    { token: "enum", foreground: "00A5FF" },
    { token: "property", foreground: "4B75FF" },
    { token: "method", foreground: "00A5FF" },
    { token: "decorator", foreground: "2E59FF" },
    { token: "regexp", foreground: "00A5FF" },
    { token: "tag", foreground: "4B75FF" },
    { token: "attribute.name", foreground: "6F9AFF" },
    { token: "attribute.value", foreground: "00A5FF" },
  ],
  colors: {
    "editor.background": "#001B4D",
    "editor.foreground": "#B4C7FF",
    "editor.lineHighlightBackground": "#002B75",
    "editor.selectionBackground": "#0045B5",
    "editor.inactiveSelectionBackground": "#0045B580",
    "editorCursor.foreground": "#4B75FF",
    "editorWhitespace.foreground": "#002B7580",
    "editorIndentGuide.background": "#002B7580",
    "editorIndentGuide.activeBackground": "#0045B580",
    "editor.selectionHighlightBackground": "#0045B580",
    "editor.wordHighlightBackground": "#0045B580",
    "editor.wordHighlightStrongBackground": "#0045B580",
    "editorBracketMatch.background": "#0045B580",
    "editorBracketMatch.border": "#4B75FF",
    "editor.findMatchBackground": "#0045B580",
    "editor.findMatchHighlightBackground": "#0045B540",
    "editor.findMatchBorder": "#4B75FF",
    "editor.findMatchHighlightBorder": "#4B75FF80",
    "editorOverviewRuler.border": "#002B75",
    "editorGutter.background": "#001B4D",
    "editorError.foreground": "#FF4B4B",
    "editorWarning.foreground": "#4B75FF",
    "editorInfo.foreground": "#00A5FF",
    "editorHint.foreground": "#6F9AFF",
  },
};

export const re2Theme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "E6E0D6" }, // Bone/ivory white
    { token: "keyword", foreground: "B80000" }, // Blood red
    { token: "operator", foreground: "E60000" }, // Bright blood red
    { token: "string", foreground: "C7A14A" }, // Ochre/gold
    { token: "number", foreground: "C7A14A" }, // Ochre/gold
    { token: "comment", foreground: "B0A99F" }, // Muted light bone
    { token: "type", foreground: "C7A14A" }, // Ochre/gold
    { token: "function", foreground: "E6E0D6" }, // Bone/ivory white
    { token: "variable", foreground: "E6E0D6" }, // Bone/ivory white
    { token: "constant", foreground: "C7A14A" }, // Ochre/gold
    { token: "class", foreground: "B80000" }, // Blood red
    { token: "interface", foreground: "C7A14A" }, // Ochre/gold
    { token: "enum", foreground: "B80000" }, // Blood red
    { token: "property", foreground: "E6E0D6" }, // Bone/ivory white
    { token: "method", foreground: "E6E0D6" }, // Bone/ivory white
    { token: "decorator", foreground: "C7A14A" }, // Ochre/gold
    { token: "regexp", foreground: "B80000" }, // Blood red
    { token: "tag", foreground: "B80000" }, // Blood red
    { token: "attribute.name", foreground: "C7A14A" }, // Ochre/gold
    { token: "attribute.value", foreground: "E6E0D6" }, // Bone/ivory white
  ],
  colors: {
    "editor.background": "#0A0A0A",
    "editor.foreground": "#E6E0D6",
    "editor.lineHighlightBackground": "#1A1816",
    "editor.selectionBackground": "#B8000040",
    "editor.inactiveSelectionBackground": "#B8000020",
    "editorCursor.foreground": "#E60000",
    "editorWhitespace.foreground": "#3A2C2C80",
    "editorIndentGuide.background": "#3A2C2C80",
    "editorIndentGuide.activeBackground": "#B8000080",
    "editor.selectionHighlightBackground": "#B8000020",
    "editor.wordHighlightBackground": "#B8000020",
    "editor.wordHighlightStrongBackground": "#B8000020",
    "editorBracketMatch.background": "#B8000020",
    "editorBracketMatch.border": "#E60000",
    "editor.findMatchBackground": "#C7A14A40",
    "editor.findMatchHighlightBackground": "#C7A14A20",
    "editor.findMatchBorder": "#C7A14A",
    "editor.findMatchHighlightBorder": "#C7A14A40",
    "editorOverviewRuler.border": "#1A1816",
    "editorGutter.background": "#0A0A0A",
    "editorError.foreground": "#E60000",
    "editorWarning.foreground": "#C7A14A",
    "editorInfo.foreground": "#B0A99F",
    "editorHint.foreground": "#C7A14A",
  },
};

export const mhTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "E8D5A9" }, // Warm gold text
    { token: "keyword", foreground: "D4B056" }, // Monster scales gold
    { token: "operator", foreground: "66A355" }, // Vibrant grass green
    { token: "string", foreground: "4A7B8C" }, // Steel blue armor
    { token: "number", foreground: "D4B056" }, // Monster scales gold
    { token: "comment", foreground: "7AA364" }, // Forest green
    { token: "type", foreground: "D4B056" }, // Monster scales gold
    { token: "function", foreground: "66A355" }, // Vibrant grass green
    { token: "variable", foreground: "E8D5A9" }, // Warm gold text
    { token: "constant", foreground: "4A7B8C" }, // Steel blue armor
    { token: "class", foreground: "D4B056" }, // Monster scales gold
    { token: "interface", foreground: "66A355" }, // Vibrant grass green
    { token: "enum", foreground: "D4B056" }, // Monster scales gold
    { token: "property", foreground: "4A7B8C" }, // Steel blue armor
    { token: "method", foreground: "66A355" }, // Vibrant grass green
    { token: "decorator", foreground: "D4B056" }, // Monster scales gold
    { token: "regexp", foreground: "4A7B8C" }, // Steel blue armor
    { token: "tag", foreground: "D4B056" }, // Monster scales gold
    { token: "attribute.name", foreground: "66A355" }, // Vibrant grass green
    { token: "attribute.value", foreground: "4A7B8C" }, // Steel blue armor
  ],
  colors: {
    "editor.background": "#1C2320", // Deep forest background
    "editor.foreground": "#E8D5A9", // Warm gold text
    "editor.lineHighlightBackground": "#2A332D", // Misty forest green
    "editor.selectionBackground": "#3D4B41", // Forest shadow
    "editor.inactiveSelectionBackground": "#3D4B4180",
    "editorCursor.foreground": "#D4B056", // Monster scales gold
    "editorWhitespace.foreground": "#3D4B4180",
    "editorIndentGuide.background": "#3D4B4180",
    "editorIndentGuide.activeBackground": "#D4B05680",
    "editor.selectionHighlightBackground": "#3D4B4180",
    "editor.wordHighlightBackground": "#3D4B4180",
    "editor.wordHighlightStrongBackground": "#3D4B4180",
    "editorBracketMatch.background": "#3D4B4180",
    "editorBracketMatch.border": "#D4B056",
    "editor.findMatchBackground": "#66A35540",
    "editor.findMatchHighlightBackground": "#66A35520",
    "editor.findMatchBorder": "#D4B056",
    "editor.findMatchHighlightBorder": "#D4B05680",
    "editorOverviewRuler.border": "#2A332D",
    "editorGutter.background": "#1C2320",
    "editorError.foreground": "#CC3434", // Blood red
    "editorWarning.foreground": "#D4B056", // Monster scales gold
    "editorInfo.foreground": "#4A7B8C", // Steel blue armor
    "editorHint.foreground": "#7AA364", // Forest green
  },
};

export const kingdomHeartsTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "f8f8ff" }, // Soft white
    { token: "comment", foreground: "7c6fa0" }, // Muted purple
    { token: "keyword", foreground: "ffe066" }, // Gold/yellow
    { token: "string", foreground: "b85c6e" }, // Muted red
    { token: "number", foreground: "ffe066" }, // Gold/yellow
    { token: "operator", foreground: "ffe066" }, // Gold/yellow
    { token: "function", foreground: "6ec6f7" }, // Pastel blue
    { token: "variable", foreground: "f8f8ff" }, // Soft white
    { token: "type", foreground: "bfc9d1" }, // Silver/gray
    { token: "class", foreground: "bfc9d1" }, // Silver/gray
    { token: "interface", foreground: "bfc9d1" }, // Silver/gray
    { token: "enum", foreground: "bfc9d1" }, // Silver/gray
    { token: "constant", foreground: "ffe066" }, // Gold/yellow
    { token: "parameter", foreground: "b85c6e" }, // Muted red
    { token: "property", foreground: "6ec6f7" }, // Pastel blue
    { token: "punctuation", foreground: "f8f8ff" }, // Soft white
    { token: "delimiter", foreground: "f8f8ff" }, // Soft white
    { token: "bracket", foreground: "f8f8ff" }, // Soft white
    { token: "tag", foreground: "ffe066" }, // Gold/yellow
    { token: "attribute.name", foreground: "6ec6f7" }, // Pastel blue
    { token: "attribute.value", foreground: "b85c6e" }, // Muted red
  ],
  colors: {
    "editor.background": "#0a1633", // Deep navy blue
    "editor.foreground": "#f8f8ff", // Soft white
    "editor.lineHighlightBackground": "#1a2747", // Midnight blue
    "editor.selectionBackground": "#ffe06633", // Gold/yellow highlight
    "editor.inactiveSelectionBackground": "#ffe06622",
    "editorCursor.foreground": "#ffe066",
    "editorWhitespace.foreground": "#7c6fa080",
    "editorIndentGuide.background": "#7c6fa080",
    "editorIndentGuide.activeBackground": "#ffe06680",
    "editor.selectionHighlightBackground": "#ffe06622",
    "editor.wordHighlightBackground": "#ffe06622",
    "editor.wordHighlightStrongBackground": "#bfc9d122",
    "editorBracketMatch.background": "#ffe06622",
    "editorBracketMatch.border": "#ffe066",
    "editor.findMatchBackground": "#b85c6e40",
    "editor.findMatchHighlightBackground": "#b85c6e20",
    "editor.findMatchBorder": "#ffe066",
    "editor.findMatchHighlightBorder": "#ffe06680",
    "editorOverviewRuler.border": "#1a2747",
    "editorGutter.background": "#0a1633",
    "editorError.foreground": "#b85c6e",
    "editorWarning.foreground": "#ffe066",
    "editorInfo.foreground": "#6ec6f7",
    "editorHint.foreground": "#7c6fa0",
  },
};

export const fortniteTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "ffffff" }, // White
    { token: "comment", foreground: "349a3a" }, // Green
    { token: "keyword", foreground: "4a5afd" }, // Blue
    { token: "string", foreground: "9652b8" }, // Purple
    { token: "number", foreground: "f7b227" }, // Orange
    { token: "operator", foreground: "4a5afd" }, // Blue
    { token: "function", foreground: "349a3a" }, // Green
    { token: "variable", foreground: "ffffff" }, // White
    { token: "type", foreground: "9652b8" }, // Purple
    { token: "class", foreground: "9652b8" }, // Purple
    { token: "interface", foreground: "9652b8" }, // Purple
    { token: "enum", foreground: "9652b8" }, // Purple
    { token: "constant", foreground: "f7b227" }, // Orange
    { token: "parameter", foreground: "4a5afd" }, // Blue
    { token: "property", foreground: "349a3a" }, // Green
    { token: "punctuation", foreground: "ffffff" }, // White
    { token: "delimiter", foreground: "ffffff" }, // White
    { token: "bracket", foreground: "ffffff" }, // White
    { token: "tag", foreground: "4a5afd" }, // Blue
    { token: "attribute.name", foreground: "349a3a" }, // Green
    { token: "attribute.value", foreground: "9652b8" }, // Purple
  ],
  colors: {
    "editor.background": "#1a1a1a", // Dark background
    "editor.foreground": "#ffffff", // White text
    "editor.lineHighlightBackground": "#2a2a2a", // Slightly lighter background
    "editor.selectionBackground": "#4a5afd33", // Blue highlight
    "editor.inactiveSelectionBackground": "#4a5afd22",
    "editorCursor.foreground": "#4a5afd",
    "editorWhitespace.foreground": "#349a3a80",
    "editorIndentGuide.background": "#349a3a80",
    "editorIndentGuide.activeBackground": "#4a5afd80",
    "editor.selectionHighlightBackground": "#4a5afd22",
    "editor.wordHighlightBackground": "#4a5afd22",
    "editor.wordHighlightStrongBackground": "#9652b822",
    "editorBracketMatch.background": "#4a5afd22",
    "editorBracketMatch.border": "#4a5afd",
    "editor.findMatchBackground": "#9652b840",
    "editor.findMatchHighlightBackground": "#9652b820",
    "editor.findMatchBorder": "#4a5afd",
    "editor.findMatchHighlightBorder": "#4a5afd80",
    "editorOverviewRuler.border": "#2a2a2a",
    "editorGutter.background": "#1a1a1a",
    "editorError.foreground": "#f7b227",
    "editorWarning.foreground": "#4a5afd",
    "editorInfo.foreground": "#349a3a",
    "editorHint.foreground": "#9652b8",
  },
};
