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
  Activity,
  Info,
} from "react-feather";
import { motion } from "framer-motion";
import "./CommandPalette.css";
import * as styles from "./CommandPalette.css";

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

const CommandPalette = () => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, toggleOpen] = React.useReducer((s) => !s, false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+KeyK": () => {
        toggleOpen();
      },
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetTheme = (val: string) => {
    setTheme(val);
    toggleOpen();
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    toggleOpen();
  };

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={toggleOpen}
        label="Global Command Palette"
      >
        <div cmdk-header="">
          <Command.Input placeholder="Type a command or search..." />
          <button
            aria-label="Close command palette"
            cmdk-header-esc=""
            onClick={() => toggleOpen()}
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
                toggleOpen();
              }}
              value="home"
            >
              <Home />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/posts");
                toggleOpen();
              }}
              value="posts"
            >
              <Edit />
              <span>Posts</span>
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/activity");
                toggleOpen();
              }}
              value="activity"
            >
              <Activity />
              <span>Activity</span>
            </CommandItem>

            <CommandItem
              onSelect={() => {
                router.push("/colophon");
                toggleOpen();
              }}
              value="colophon"
            >
              <Info />
              <span>Colophon</span>
            </CommandItem>
          </Command.Group>

          <Command.Group heading="Connect">
            <CommandItem
              onSelect={() =>
                window.open("https://twitter.com/hybrid_alex", "_blank")
              }
              value="twitter"
            >
              <Twitter />
              <span>Twitter</span>
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
              <Monitor />
              <span>System</span>
            </CommandItem>
            <CommandItem onSelect={handleSetTheme} value="light">
              <Sun />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={handleSetTheme} value="dark">
              <Moon />
              <span>Dark</span>
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

export { CommandPalette };
