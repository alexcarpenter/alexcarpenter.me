import * as React from "react";
import { useTheme } from "next-themes";
import { Command, useCommandState } from "cmdk";
import * as styles from "./CommandMenu.css";

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className={styles.root}
    >
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Navigation">
          <Command.Item>Home</Command.Item>
          <Command.Item>Posts</Command.Item>
        </Command.Group>
        <Command.Group heading="Theme">
          <Command.Item onSelect={() => setTheme("light")}>Light</Command.Item>
          <Command.Item onSelect={() => setTheme("dark")}>Dark</Command.Item>
          <Command.Item onSelect={() => setTheme("system")}>
            System
          </Command.Item>
        </Command.Group>
        <Command.Group heading="Connect">
          <Command.Item>Github</Command.Item>
          <Command.Item>Twitter</Command.Item>
          <Command.Item>LinkedIn</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export { CommandMenu };
