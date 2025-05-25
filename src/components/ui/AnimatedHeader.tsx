import { motion } from "framer-motion";

import { cn } from '@algo-trainer/shared/utils/common';

interface AnimatedHeaderProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function AnimatedHeader({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: AnimatedHeaderProps) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent leading-[1.1] tracking-tight",
          "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]",
          titleClassName
        )}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={cn(
          "text-lg sm:text-xl max-w-3xl mx-auto px-4 leading-relaxed",
          "text-muted-foreground",
          subtitleClassName
        )}
      >
        {subtitle}
      </motion.p>
    </>
  );
}
