import { cn } from "@algo-trainer/shared/utils/common";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: BackgroundProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Animated background gradient - subtle */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/98 to-background/95 z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] z-0 pointer-events-none" />

      {/* Animated grid overlay - lighter */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] z-0 pointer-events-none" />

      {/* Floating particles - subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-50" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-accent2/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-50" />
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent3/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
