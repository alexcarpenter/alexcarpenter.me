/* eslint-disable react/no-unknown-property */
import * as React from "react";
import { useRouter } from "next/router";
import { Command } from "cmdk";
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
} from "react-feather";
import "./CommandMenu.css";

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
  };

  return (
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
          <Command.Item
            onSelect={() => {
              router.push("/");
              setOpen(false);
            }}
          >
            <Home />
            <span>Home</span>
          </Command.Item>
          <Command.Item
            onSelect={() => {
              router.push("/posts");
              setOpen(false);
            }}
          >
            <Edit />
            <span>Posts</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Connect">
          <Command.Item
            onSelect={() =>
              window.open("https://twitter.com/hybrid_alex", "_blank")
            }
            value="twitter"
          >
            <Twitter /> <span>Twitter</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              window.open("https://github.com/alexcarpenter", "_blank")
            }
            value="github"
          >
            <GitHub />
            <span>Github</span>
          </Command.Item>
          <Command.Item
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
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Appearance">
          <Command.Item onSelect={handleSetTheme} value="system">
            <Monitor /> <span>System</span>
          </Command.Item>
          <Command.Item onSelect={handleSetTheme} value="light">
            <Sun /> <span>Light</span>
          </Command.Item>
          <Command.Item onSelect={handleSetTheme} value="dark">
            <Moon /> <span>Dark</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export { CommandMenu };
