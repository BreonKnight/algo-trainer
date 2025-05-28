import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useState } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { AnimatedHeader } from "@/components/ui/AnimatedHeader";
import { Background } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MediaCard } from "@/components/ui/media-card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ThemedButton } from "@/components/ui/themed-button";
import { ThemedCard } from "@/components/ui/themed-card";
import { ThemedDialog } from "@/components/ui/themed-dialog";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { cn } from "@algo-trainer/shared/utils/common";

const DesignSystemPage = () => {
  const { theme } = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const components = [
    {
      name: "AnimatedHeader",
      description: "A header component with animated title and subtitle",
      example: (
        <AnimatedHeader
          title="Animated Header Example"
          subtitle="This is a subtitle that demonstrates the component"
          titleClassName="text-2xl font-bold"
          subtitleClassName="text-lg"
        />
      ),
      code: `<AnimatedHeader
  title="Your Title"
  subtitle="Your subtitle"
  titleClassName="text-2xl font-bold"
  subtitleClassName="text-lg"
/>`,
    },
    {
      name: "Background",
      description: "A themed background component with animated gradients and grid",
      example: (
        <div className="h-32 relative">
          <Background>
            <div className="p-4">Background content</div>
          </Background>
        </div>
      ),
      code: `<Background>
  <div>Your content here</div>
</Background>`,
    },
    {
      name: "Button",
      description: "Base button component with variants",
      example: (
        <div className="flex gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      ),
      code: `<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`,
    },
    {
      name: "Card",
      description: "Card component with header, content, and footer sections",
      example: (
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      ),
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>Card Content</CardContent>
  <CardFooter>Card Footer</CardFooter>
</Card>`,
    },
    {
      name: "Dialog",
      description: "Modal dialog component",
      example: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogHeader>
            <div>Dialog Content</div>
            <DialogFooter>
              <Button>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <div>Dialog Content</div>
    <DialogFooter>
      <Button>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      name: "DropdownMenu",
      description: "Dropdown menu component",
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      name: "HamburgerMenu",
      description: "Animated hamburger menu component",
      example: <HamburgerMenu />,
      code: `<HamburgerMenu />`,
    },
    {
      name: "Input",
      description: "Input field component",
      example: (
        <div className="flex flex-col gap-4">
          <Input placeholder="Default input" />
          <Input type="password" placeholder="Password input" />
        </div>
      ),
      code: `<Input placeholder="Default input" />
<Input type="password" placeholder="Password input" />`,
    },
    {
      name: "Label",
      description: "Label component for form elements",
      example: (
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
      ),
      code: `<Label htmlFor="name">Name</Label>
<Input id="name" placeholder="Enter your name" />`,
    },
    {
      name: "MediaCard",
      description: "Card component optimized for media content",
      example: (
        <MediaCard>
          <h3 className="font-bold mb-2">Media Card</h3>
          <p>Media content goes here</p>
        </MediaCard>
      ),
      code: `<MediaCard>
  <h3 className="font-bold mb-2">Media Card</h3>
  <p>Media content goes here</p>
</MediaCard>`,
    },
    {
      name: "Progress",
      description: "Progress bar component",
      example: <Progress value={33} className="w-[200px]" />,
      code: `<Progress value={33} className="w-[200px]" />`,
    },
    {
      name: "Select",
      description: "Select dropdown component",
      example: (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      ),
      code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      name: "Separator",
      description: "Horizontal separator component",
      example: (
        <div className="space-y-4">
          <div>Content above</div>
          <Separator />
          <div>Content below</div>
        </div>
      ),
      code: `<div>
  <div>Content above</div>
  <Separator />
  <div>Content below</div>
</div>`,
    },
    {
      name: "Slider",
      description: "Slider input component",
      example: <Slider defaultValue={[50]} max={100} step={1} className="w-[200px]" />,
      code: `<Slider defaultValue={[50]} max={100} step={1} className="w-[200px]" />`,
    },
    {
      name: "Tabs",
      description: "Tabbed interface component",
      example: (
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Tab 1 content</TabsContent>
          <TabsContent value="tab2">Tab 2 content</TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Tab 1 content</TabsContent>
  <TabsContent value="tab2">Tab 2 content</TabsContent>
</Tabs>`,
    },
    {
      name: "ThemedButton",
      description: "Theme-aware button with hover effects",
      example: (
        <div className="flex gap-4">
          <ThemedButton>Default</ThemedButton>
          <ThemedButton variant="outline">Outline</ThemedButton>
          <ThemedButton variant="ghost">Ghost</ThemedButton>
        </div>
      ),
      code: `<ThemedButton>Default</ThemedButton>
<ThemedButton variant="outline">Outline</ThemedButton>
<ThemedButton variant="ghost">Ghost</ThemedButton>`,
    },
    {
      name: "ThemedCard",
      description: "Theme-aware card component",
      example: (
        <ThemedCard className="p-4">
          <h3 className="font-bold mb-2">Card Title</h3>
          <p>This is a themed card example</p>
        </ThemedCard>
      ),
      code: `<ThemedCard className="p-4">
  <h3 className="font-bold mb-2">Card Title</h3>
  <p>Card content</p>
</ThemedCard>`,
    },
    {
      name: "ThemedDialog",
      description: "Theme-aware dialog component",
      example: (
        <>
          <ThemedButton onClick={() => setShowDialog(true)}>Open Dialog</ThemedButton>
          <ThemedDialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
            <h2 className="text-xl font-bold mb-2">Dialog Title</h2>
            <p>This is a themed dialog example</p>
          </ThemedDialog>
        </>
      ),
      code: `<ThemedDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2 className="text-xl font-bold mb-2">Dialog Title</h2>
  <p>Dialog content</p>
</ThemedDialog>`,
    },
    {
      name: "Textarea",
      description: "Textarea input component",
      example: <Textarea placeholder="Type your message here..." className="w-[300px]" />,
      code: `<Textarea
  placeholder="Type your message here..."
  className="w-[300px]"
/>`,
    },
    {
      name: "Tooltip",
      description: "Tooltip component for additional information",
      example: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
  ];

  return (
    <Background>
      <div className="container mx-auto px-4 py-12">
        <AnimatedHeader
          title="Design System"
          subtitle="Explore our UI components and learn how to use them"
          titleClassName={cn(
            "text-4xl md:text-5xl font-bold mb-6 leading-[1.3] pb-2 text-transparent bg-clip-text gradient-text",
            theme === "nord"
              ? "bg-gradient-to-r from-[#6A4BB6] via-[#58A6FF] to-[#FFD700] text-transparent bg-clip-text"
              : `gradient-text-${theme}`
          )}
          subtitleClassName={cn(
            "text-xl md:text-2xl max-w-3xl mx-auto mb-2",
            theme === "nord" ? "text-[#ECEFF4] drop-shadow" : "text-foreground/80"
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {components.map((component) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer",
                theme === "nord"
                  ? "border border-[#4C566A] text-[#ECEFF4] hover:bg-[#434C5E]"
                  : theme === "snes"
                    ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] hover:border-[#3498db] snes-glow"
                    : "bg-main/60 border-accent/40"
              )}
              onClick={() => setSelectedComponent(component.name)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{component.name}</h3>
                <Code2 className="h-5 w-5" />
              </div>
              <p className="text-sm mb-4 opacity-80">{component.description}</p>
              <div className="p-4 rounded-lg bg-background/50">{component.example}</div>
            </motion.div>
          ))}
        </div>

        <ThemedDialog isOpen={!!selectedComponent} onClose={() => setSelectedComponent(null)}>
          {selectedComponent && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedComponent}</h2>
              <div className="bg-background/50 p-4 rounded-lg mb-4">
                {components.find((c) => c.name === selectedComponent)?.example}
              </div>
              <div className="bg-background/80 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{components.find((c) => c.name === selectedComponent)?.code}</code>
                </pre>
              </div>
            </div>
          )}
        </ThemedDialog>
      </div>
    </Background>
  );
};

export default DesignSystemPage;
