"use client";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <MotionConfig
        reducedMotion="user"
        transition={{ ease: [0.32, 0.72, 0, 1] }}
      >
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
