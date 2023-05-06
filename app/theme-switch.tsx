"use client";
import { useState, useEffect, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useFocusWithin, useFocusVisible } from "@react-aria/interactions";
import { cx } from "@/lib/classnames";

type Theme = "system" | "dark" | "light";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <fieldset>
      <legend className="sr-only">Toggle theme</legend>
      <motion.div
        className="inline-flex gap-1 rounded-full border p-1"
        layout
        layoutRoot
      >
        <Option
          currentTheme={theme as Theme}
          theme="system"
          handleChange={handleChange}
          icon={<SystemIcon />}
        />

        <Option
          currentTheme={theme as Theme}
          theme="dark"
          handleChange={handleChange}
          icon={<DarkIcon />}
        />

        <Option
          currentTheme={theme as Theme}
          theme="light"
          handleChange={handleChange}
          icon={<LightIcon />}
        />
      </motion.div>
    </fieldset>
  );
}

function Option({
  currentTheme,
  theme,
  handleChange,
  icon,
}: {
  currentTheme: Theme;
  theme: Theme;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
}) {
  const [isFocusWithin, setFocusWithin] = useState(false);
  const { isFocusVisible } = useFocusVisible({ isTextInput: false });
  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });
  return (
    <label
      {...focusWithinProps}
      className="group relative rounded-full px-2.5 py-1"
    >
      <input
        type="radio"
        name="theme"
        value={theme}
        defaultChecked={currentTheme === theme}
        onChange={handleChange}
        className="absolute opacity-0"
      />
      <span className="sr-only">{theme}</span>
      {currentTheme === theme ? (
        <motion.span
          layoutId="highlight"
          className={cx(
            "absolute inset-0 bg-surface-neutral",
            isFocusWithin && isFocusVisible && "ring"
          )}
          style={{ borderRadius: 9999 }}
        />
      ) : null}
      <span className="relative z-10 opacity-50 transition-opacity group-hover:opacity-100">
        {icon}
      </span>
    </label>
  );
}

function SystemIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function LightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function DarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
