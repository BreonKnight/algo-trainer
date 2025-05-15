# UI Pattern Guide

A living style guide for consistent, beautiful UI across the project. Update this as you add or change patterns!

---

## Buttons

| Variant  | Example Usage            | Class/Prop                     |
| -------- | ------------------------ | ------------------------------ |
| Primary  | Main actions             | `<Button />`                   |
| Outline  | Secondary/less important | `<Button variant="outline" />` |
| Standard | All major buttons        | `<Button size="standard" />`   |
| Icon     | Icon-only                | `<Button size="icon" />`       |

**Standard Button Example:**

```tsx
<Button size="standard">Label</Button>
<Button asChild size="standard"><Link to="/page">Go</Link></Button>
```

---

## Cards

- Use for grouping related content, info, or actions.
- **Classes:** `rounded-xl border p-6 shadow bg-[theme]`
- **Props:** Use theme helpers for background and border color.
- **Example:**

```tsx
<div className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

---

## Forms

- Use for user input, authentication, search, etc.
- **Inputs:** `rounded-md border px-4 py-2 text-base w-full`
- **Labels:** `block mb-1 font-medium`
- **Form Layout:** Use `space-y-4` for vertical spacing between fields.
- **Example:**

```tsx
<form className="space-y-4">
  <div>
    <label htmlFor="email" className="block mb-1 font-medium">
      Email
    </label>
    <input id="email" type="email" className="rounded-md border px-4 py-2 text-base w-full" />
  </div>
  <Button type="submit" size="standard">
    Submit
  </Button>
</form>
```

---

## Dropdowns

- Use for menus, selects, or actions.
- **Component:** `<DropdownMenu />` or `<Select />` from `ui/`
- **Trigger:** Use a Button or IconButton as the dropdown trigger.
- **Menu:** `rounded-md shadow bg-[theme] p-2 min-w-[160px]`
- **Example:**

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button size="standard">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="rounded-md shadow bg-[#3B4252] text-[#ECEFF4] p-2 min-w-[160px]">
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

---

## Typography

- **Headings:**
  - h1: `text-4xl font-bold`
  - h2: `text-2xl font-bold`
  - h3: `text-lg font-semibold`
- **Body:** `text-base text-main`
- **Accent:** Use GameCube palette for Nord theme headings

---

## Color Palette

- **Accent:** `#81A1C1` (Nord blue), `#FFD700` (GameCube yellow), `#78C850` (GameCube green), `#E06C75` (GameCube red), `#58A6FF` (GameCube blue), `#6A4BB6` (GameCube purple)
- **Background:** `#2E3440` (Nord), `#fffbe6` (SNES)
- **Text:** `#ECEFF4` (Nord), `#1a237e` (SNES)

---

## Cards & Panels

- Use `rounded-xl`, `border`, `p-6`, `shadow` for all cards
- Example: `className="p-6 rounded-xl border shadow"`

---

## Form Elements

- Inputs: `rounded-md border px-4 py-2 text-base`
- Selects, checkboxes, etc. follow similar sizing and border rules

---

## Spacing & Layout

- Standard grid gap: `gap-6`
- Standard padding: `px-4 py-2`
- Use `container mx-auto` for main content wrappers

---

## Theme Rules

- **Nord:** Dark backgrounds, GameCube accent text, light text
- **SNES:** Light backgrounds, blue/purple accents, dark text
- **Dracula:** Dark backgrounds, pastel accents, light text

---

## Component Usage

- Use `<Button />` for all clickable actions
- Use `<Link />` inside `<Button asChild>` for navigation
- Use Card/Panel styles for all content blocks

---

## Do's and Don'ts

- ✅ Use `<Button size="standard" />` for all major actions
- ✅ Use theme helpers for card and text colors
- ❌ Don't use custom padding/margin on buttons unless necessary
- ❌ Don't mix light and dark backgrounds in the same section

---

_Keep this file up to date as your design system evolves!_
