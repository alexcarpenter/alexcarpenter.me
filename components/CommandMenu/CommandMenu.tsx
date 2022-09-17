import * as React from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import "./CommandMenu.css";

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme } = useTheme();

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: { key: string; metaKey: any }) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSetTheme = (val: string) => {
    setTheme(val);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <Command.Input placeholder="Type a command..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        {/* <Command.Group heading="Navigation">
          <Command.Item>Home</Command.Item>
          <Command.Item>Posts</Command.Item>
        </Command.Group> */}

        <Command.Group heading="Theme">
          <Command.Item onSelect={handleSetTheme}>System</Command.Item>
          <Command.Item onSelect={handleSetTheme}>Light</Command.Item>
          <Command.Item onSelect={handleSetTheme}>Dark</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export { CommandMenu };
