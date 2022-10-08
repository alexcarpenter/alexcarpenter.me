/* eslint-disable react/no-unknown-property */
import * as React from "react";
import { useRouter } from "next/router";
import { Command, useCommandState } from "cmdk";
import { useTheme } from "next-themes";
import tinykeys from "tinykeys";
import {
  Twitter,
  Linkedin,
  GitHub,
  Sun,
  Moon,
  Monitor,
  Home,
  Edit,
  Copy,
} from "react-feather";
import { toast } from "components/Toast";
import { motion } from "framer-motion";
import "./CommandMenu.css";

const THEMES = {
  system: "System",
  dark: "Dark",
  light: "Light",
};

const CommandItem = ({
  onSelect,
  value,
  children,
}: {
  onSelect?: (value: string) => void;
  value: string;
  children: React.ReactNode;
}) => {
  const currentValue = useCommandState((state) => state.value);
  return (
    <Command.Item onSelect={onSelect} value={value}>
      <span className="content">{children}</span>
      {currentValue === value ? (
        <motion.span
          layoutId="highlight"
          className="highlight"
          transition={{
            duration: 0.2,
          }}
        />
      ) : null}
    </Command.Item>
  );
};

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+KeyK": () => {
        setOpen((open) => !open);
      },
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (val: string) => {
    setTheme(val);
    setOpen(false);
    toast({
      content: `${THEMES[val as keyof typeof THEMES]} theme enabled`,
    });
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
    toast({ content: "Copied URL to clipboard" });
  };

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <div cmdk-header="">
          <Command.Input placeholder="Type a command or search..." />
          <button
            aria-label="Close command menu"
            cmdk-header-esc=""
            onClick={() => setOpen(false)}
            tabIndex={-1}
          >
            ESC
          </button>
        </div>
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Navigation">
            <CommandItem
              onSelect={() => {
                router.push("/");
                setOpen(false);
              }}
              value="home"
            >
              <Home />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/posts");
                setOpen(false);
              }}
              value="posts"
            >
              <Edit />
              <span>Posts</span>
            </CommandItem>
          </Command.Group>

          <Command.Group heading="Connect">
            <CommandItem
              onSelect={() =>
                window.open("https://twitter.com/hybrid_alex", "_blank")
              }
              value="twitter"
            >
              <Twitter /> <span>Twitter</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open("https://github.com/alexcarpenter", "_blank")
              }
              value="github"
            >
              <GitHub />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open(
                  "https://www.linkedin.com/in/imalexcarpenter/",
                  "_blank"
                )
              }
              value="linkedin"
            >
              <Linkedin />
              <span>LinkedIn</span>
            </CommandItem>
          </Command.Group>

          <Command.Group heading="Appearance">
            <CommandItem onSelect={handleSetTheme} value="system">
              <Monitor /> <span>System</span>
            </CommandItem>
            <CommandItem onSelect={handleSetTheme} value="light">
              <Sun /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={handleSetTheme} value="dark">
              <Moon /> <span>Dark</span>
            </CommandItem>
          </Command.Group>
          <Command.Group heading="Commands">
            <CommandItem onSelect={handleCopyUrl} value="copy">
              <Copy />
              <span>Copy current URL</span>
            </CommandItem>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};

export { CommandMenu };
