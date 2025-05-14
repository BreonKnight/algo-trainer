// Theme-aware class utility functions for global use

export function getCardClass(theme: string) {
  return [
    "rounded-xl",
    "shadow-lg",
    "border",
    "transition-all",
    "duration-200",
    theme === "snes"
      ? "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)] shadow-[var(--card-shadow)]"
      : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)] shadow-[var(--card-shadow)]",
  ].join(" ");
}

export function getButtonClass(theme: string, active = false) {
  return [
    "rounded-lg",
    "font-bold",
    "transition-all",
    "duration-200",
    "border",
    "px-4",
    "py-2",
    active ? "ring-2 ring-[var(--accent)]" : "",
    theme === "snes"
      ? "bg-[var(--button-bg)] text-[var(--button-text)] border-[var(--button-border)] shadow-[var(--button-shadow)]"
      : "bg-[var(--button-bg)] text-[var(--button-text)] border-[var(--button-border)] shadow-[var(--button-shadow)]",
  ].join(" ");
}

export function getTooltipClass(theme: string) {
  return [
    "rounded-md",
    "px-3",
    "py-2",
    "border",
    theme === "snes"
      ? "bg-[var(--tooltip-bg)] text-[var(--tooltip-text)] border-[var(--tooltip-border)]"
      : "bg-[var(--tooltip-bg)] text-[var(--tooltip-text)] border-[var(--tooltip-border)]",
  ].join(" ");
}

export function getCodeBlockClass(theme: string) {
  return [
    "rounded-lg",
    "overflow-x-auto",
    "border",
    "px-4",
    "py-3",
    theme === "snes"
      ? "bg-[var(--code-bg)] text-[var(--code-text)] border-[var(--card-border)]"
      : "bg-[var(--code-bg)] text-[var(--code-text)] border-[var(--card-border)]",
  ].join(" ");
}

export function getIconClass(theme: string) {
  switch (theme) {
    case "snes":
      return "text-[var(--icon-color)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]";
    case "ps2":
      return "text-[var(--icon-color)] drop-shadow-[0_0_8px_rgba(75,117,255,0.4)]";
    case "re2":
      return "text-[var(--icon-color)] drop-shadow-[0_0_8px_rgba(184,0,0,0.4)]";
    case "nord":
      return "text-[var(--icon-color)] drop-shadow-[0_1px_2px_rgba(236,239,244,0.3)]";
    case "dracula":
      return "text-[var(--icon-color)] drop-shadow-[0_0_8px_rgba(189,147,249,0.3)]";
    default:
      return "text-[var(--icon-color)]";
  }
}
