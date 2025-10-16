"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className={cn("relative", className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="w-5 h-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
      <Moon className="absolute w-5 h-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
