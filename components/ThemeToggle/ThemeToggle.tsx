import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "react-feather";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import { VisuallyHidden } from "components/VisuallyHidden";
import * as styles from "./ThemeToggle.css";

type theme = "system" | "light" | "dark";

const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (t: theme) => {
    setTheme(t);
  };

  return (
    <div className={styles.root}>
      <button
        className={
          styles.toggleVariant[theme === "system" ? "active" : "initial"]
        }
        onClick={() => handleClick("system")}
      >
        <VisuallyHidden>System</VisuallyHidden>
        <Monitor width=".9em" />
        {theme === "system" ? (
          <motion.span
            className={styles.shadow}
            layoutId="theme-toggle-shadow"
          />
        ) : null}
      </button>
      <button
        className={
          styles.toggleVariant[theme === "light" ? "active" : "initial"]
        }
        onClick={() => handleClick("light")}
      >
        <VisuallyHidden>Light</VisuallyHidden>
        <Sun width=".9em" />
        {theme === "light" ? (
          <motion.span
            className={styles.shadow}
            layoutId="theme-toggle-shadow"
          />
        ) : null}
      </button>
      <button
        className={
          styles.toggleVariant[theme === "dark" ? "active" : "initial"]
        }
        onClick={() => handleClick("dark")}
      >
        <VisuallyHidden>Dark</VisuallyHidden>
        <Moon width=".9em" />
        {theme === "dark" ? (
          <motion.span
            className={styles.shadow}
            layoutId="theme-toggle-shadow"
          />
        ) : null}
      </button>
    </div>
  );
};

export { ThemeToggle };
