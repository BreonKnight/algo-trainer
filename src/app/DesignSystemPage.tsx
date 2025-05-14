import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sections = [
  { id: "buttons", label: "Buttons" },
  { id: "cards", label: "Cards" },
  { id: "forms", label: "Forms" },
  { id: "dropdowns", label: "Dropdowns" },
  { id: "typography", label: "Typography" },
  { id: "legacy", label: "Legacy vs. Streamlined UI" },
];

const DesignSystemPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [legacyView, setLegacyView] = useState<"legacy" | "streamlined">("streamlined");

  const renderSection = (id: string) => {
    switch (id) {
      case "buttons":
        return (
          <section id="buttons" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button size="standard">Standard</Button>
              <Button size="icon" aria-label="icon button">
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </Button>
              <Button asChild size="standard">
                <Link to="/about">As Link</Link>
              </Button>
            </div>
            <pre className="bg-gray-900 text-white rounded p-4 text-xs overflow-x-auto">
              {`<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button size="standard">Standard</Button>
<Button size="icon">...</Button>
<Button asChild size="standard"><Link to="/about">As Link</Link></Button>`}
            </pre>
          </section>
        );
      case "cards":
        return (
          <section id="cards" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Cards</h2>
            <div className="mb-4">
              <Card className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
                <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                <p>Card content goes here.</p>
              </Card>
            </div>
            <pre className="bg-gray-900 text-white rounded p-4 text-xs overflow-x-auto">
              {`<Card className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
            </pre>
          </section>
        );
      case "forms":
        return (
          <section id="forms" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Forms</h2>
            <form className="space-y-4 mb-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <Button type="submit" size="standard">
                Submit
              </Button>
            </form>
            <pre className="bg-gray-900 text-white rounded p-4 text-xs overflow-x-auto">
              {`<form className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
  <Button type="submit" size="standard">Submit</Button>
</form>`}
            </pre>
          </section>
        );
      case "dropdowns":
        return (
          <section id="dropdowns" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Dropdowns</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="standard">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-md shadow bg-[#3B4252] text-[#ECEFF4] p-2 min-w-[160px]">
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <pre className="bg-gray-900 text-white rounded p-4 text-xs overflow-x-auto mt-4">
              {`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button size="standard">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="rounded-md shadow bg-[#3B4252] text-[#ECEFF4] p-2 min-w-[160px]">
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            </pre>
          </section>
        );
      case "typography":
        return (
          <section id="typography" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Typography</h2>
            <div className="space-y-2 mb-4">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-2xl font-bold">Heading 2</h2>
              <h3 className="text-lg font-semibold">Heading 3</h3>
              <p className="text-base">Body text example</p>
              <span className="text-[#FFD700] font-bold">Accent text (GameCube Yellow)</span>
            </div>
            <pre className="bg-gray-900 text-white rounded p-4 text-xs overflow-x-auto">
              {`<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-2xl font-bold">Heading 2</h2>
<h3 className="text-lg font-semibold">Heading 3</h3>
<p className="text-base">Body text example</p>
<span className="text-[#FFD700] font-bold">Accent text (GameCube Yellow)</span>`}
            </pre>
          </section>
        );
      case "legacy":
        return (
          <section id="legacy" className="scroll-mt-24">
            <div className="mb-8 pb-6 border-b">
              <h2 className="text-2xl font-bold mb-4">Legacy vs. Streamlined UI</h2>
              <p className="text-muted-foreground mb-6">
                Compare the old and new component implementations side by side.
              </p>
              <div className="inline-flex items-center rounded-lg border p-1 bg-muted/30">
                <button
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    legacyView === "legacy"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setLegacyView("legacy")}
                >
                  Legacy
                </button>
                <button
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    legacyView === "streamlined"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setLegacyView("streamlined")}
                >
                  Streamlined
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {/* Input Example */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Input</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Legacy input"
                        />
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <Input type="text" placeholder="Streamlined input" />
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<Input type="text" />`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Label Example */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Label</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<label className="block text-sm font-medium text-gray-700">Name</label>`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <Label>Name</Label>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<Label>Name</Label>`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Select/Dropdown Example */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Select / Dropdown</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
  <option>Option 1</option>
  <option>Option 2</option>
</select>`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="standard">Open Menu</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="rounded-md shadow bg-[#3B4252] text-[#ECEFF4] p-2 min-w-[160px]">
                            <DropdownMenuItem>Option 1</DropdownMenuItem>
                            <DropdownMenuItem>Option 2</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button size="standard">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Option 1</DropdownMenuItem>
    <DropdownMenuItem>Option 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Example */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Card</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <div className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
                          <h3>Card Title</h3>
                          <p>Card content goes here.</p>
                        </div>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<div className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <Card className="p-6">
                          <h3>Card Title</h3>
                          <p>Card content goes here.</p>
                        </Card>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<Card className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Example */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Form</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <form className="space-y-4">
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email"
                          />
                          <button className="px-4 py-2 rounded-md font-medium transition-colors bg-accent text-white border border-accent hover:bg-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
                            Submit
                          </button>
                        </form>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<form className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">Email</label>
  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
  <button className="px-4 py-2 rounded-md font-medium transition-colors bg-accent text-white border border-accent hover:bg-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">Submit</button>
</form>`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        <form className="space-y-4">
                          <Label>Email</Label>
                          <Input type="email" placeholder="Email" />
                          <Button type="submit" size="standard">
                            Submit
                          </Button>
                        </form>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`<form className="space-y-4">
  <Label>Email</Label>
  <Input type="email" />
  <Button type="submit" size="standard">Submit</Button>
</form>`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Algorithm Trainer Cards */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Algorithm Trainer Cards</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  {legacyView === "legacy" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Legacy</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        {/* Panel Layout Card */}
                        <div className="w-full flex-1 rounded-lg border bg-card shadow-sm">
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/* Empty for structure demo */}
                            </div>
                          </div>
                        </div>

                        {/* REPL Card */}
                        <div className="mt-4 w-full rounded-lg border bg-card shadow-sm">
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/* Empty for structure demo */}
                            </div>
                          </div>
                        </div>

                        {/* Pattern Controls Card */}
                        <div className="mt-4 w-full rounded-lg border bg-card shadow-sm">
                          <div className="p-4 flex justify-between items-center">
                            {/* Empty for structure demo */}
                          </div>
                        </div>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`// Panel Layout Card
<div className="w-full flex-1 rounded-lg border bg-card shadow-sm">
  <div className="p-6">
    <div className="flex flex-col space-y-4">
      {/* Content */}
    </div>
  </div>
</div>

// REPL Card
<div className="mt-4 w-full rounded-lg border bg-card shadow-sm">
  <div className="p-6">
    <div className="flex flex-col space-y-4">
      {/* Content */}
    </div>
  </div>
</div>

// Pattern Controls Card
<div className="mt-4 w-full rounded-lg border bg-card shadow-sm">
  <div className="p-4 flex justify-between items-center">
    {/* Content */}
  </div>
</div>`}
                      </pre>
                    </div>
                  )}
                  {legacyView === "streamlined" && (
                    <div className="flex-1">
                      <div className="mb-3 font-medium text-muted-foreground">Streamlined</div>
                      <div className="p-4 rounded-md bg-muted/30">
                        {/* Panel Layout Card */}
                        <Card className="w-full flex-1">
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/* Empty for structure demo */}
                            </div>
                          </div>
                        </Card>

                        {/* REPL Card */}
                        <Card className="mt-4 w-full">
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/* Empty for structure demo */}
                            </div>
                          </div>
                        </Card>

                        {/* Pattern Controls Card */}
                        <Card className="mt-4 w-full">
                          <div className="p-4 flex justify-between items-center">
                            {/* Empty for structure demo */}
                          </div>
                        </Card>
                      </div>
                      <pre className="mt-4 bg-muted rounded-md p-4 text-xs overflow-x-auto">
                        {`// Panel Layout Card
<Card className="w-full flex-1">
  <div className="p-6">
    <div className="flex flex-col space-y-4">
      {/* Content */}
    </div>
  </div>
</Card>

// REPL Card
<Card className="mt-4 w-full">
  <div className="p-6">
    <div className="flex flex-col space-y-4">
      {/* Content */}
    </div>
  </div>
</Card>

// Pattern Controls Card
<Card className="mt-4 w-full">
  <div className="p-4 flex justify-between items-center">
    {/* Content */}
  </div>
</Card>`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-background">
      {/* Sidebar for desktop, horizontal nav for mobile */}
      <aside className="md:w-56 flex-shrink-0 border-b md:border-b-0 md:border-r bg-main/80 sticky top-0 z-10">
        {/* Mobile: horizontal scrollable nav */}
        <nav className="flex md:hidden overflow-x-auto gap-2 px-2 py-3 bg-main/80">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-shrink-0 px-3 py-2 rounded transition-colors font-medium text-base whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground shadow"
                  : "hover:bg-accent/20 text-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
        {/* Desktop: vertical sidebar */}
        <nav className="hidden md:flex flex-col gap-2 py-12 px-4 h-full">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-left px-3 py-2 rounded transition-colors font-medium text-base ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground shadow"
                  : "hover:bg-accent/20 text-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 px-2 sm:px-4 md:px-12 py-6 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Design System</h1>
        <div>
          {/* Responsive: stack columns on mobile for legacy/streamlined comparisons */}
          <style>{`
            @media (max-width: 768px) {
              .ds-comparison { flex-direction: column !important; }
            }
          `}</style>
          {renderSection(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default DesignSystemPage;
