export const THEMES = [
  "dracula",
  "solarized",
  "light",
  "nord",
  "snes",
  "ps2",
  "re2",
  "mh",
  "kingdom-hearts",
] as const;

export type Theme = (typeof THEMES)[number];
