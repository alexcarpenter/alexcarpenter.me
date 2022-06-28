import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {
  Copy,
  Monitor,
  GitHub,
  Home,
  Edit,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Sunrise,
  Sunset,
} from "react-feather";
import toast from "react-hot-toast";

export function useActions() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "General",
      perform: () => {
        navigator.clipboard.writeText(window.location.href);
        setTimeout(() => {
          toast.success("Copied URL to clipboard", {
            id: "copy-clipboard",
          });
        }, 200);
      },
      icon: <Copy width="1rem" height="1rem" />,
    },
    {
      id: "theme",
      name: "Change theme",
      keywords: "interface color dark light",
      shortcut: ["t"],
      section: "General",
      icon: <Monitor width="1rem" height="1rem" />,
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "Theme",
      shortcut: ["d"],
      perform: () => {
        setTheme("dark");
        setTimeout(() => {
          toast.success("Dark theme enabled", {
            id: "theme-switch",
          });
        }, 200);
      },
      parent: "theme",
      icon: <Sunset width="1rem" height="1rem" />,
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "Theme",
      shortcut: ["l"],
      perform: () => {
        setTheme("light");
        setTimeout(() => {
          toast.success("Light theme enabled", {
            id: "theme-switch",
          });
        }, 200);
      },
      parent: "theme",
      icon: <Sunrise width="1rem" height="1rem" />,
    },
    {
      id: "systemTheme",
      name: "System",
      keywords: "system theme",
      section: "Theme",
      shortcut: ["s"],
      perform: () => {
        setTheme("system");
        setTimeout(() => {
          toast.success("System theme enabled", {
            id: "theme-switch",
          });
        }, 200);
      },
      parent: "theme",
      icon: <Monitor width="1rem" height="1rem" />,
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open(
          "https://github.com/alexcarpenter/alexcarpenter-next",
          "_blank"
        ),
      icon: <GitHub width="1rem" height="1rem" />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
      icon: <Home width="1rem" height="1rem" />,
    },
    {
      id: "posts",
      name: "Posts",
      shortcut: ["g", "p"],
      keywords: "go-posts",
      section: "Go To",
      perform: () => router.push("/posts"),
      icon: <Edit width="1rem" height="1rem" />,
    },
    {
      id: "timeline",
      name: "Timeline",
      shortcut: ["g", "t"],
      keywords: "go-timeline",
      section: "Go To",
      perform: () => router.push("/timeline"),
      icon: <Clock width="1rem" height="1rem" />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["c", "g"],
      keywords: "go-github",
      section: "Connect",
      perform: () => window.open("https://github.com/alexcarpenter", "_blank"),
      icon: <GitHub width="1rem" height="1rem" />,
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["c", "t"],
      keywords: "go-twitter",
      section: "Connect",
      perform: () => window.open("https://twitter.com/hybrid_alex", "_blank"),
      icon: <Twitter width="1rem" height="1rem" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["c", "l"],
      keywords: "go-linkedin",
      section: "Connect",
      perform: () =>
        window.open("https://www.linkedin.com/in/imalexcarpenter/", "_blank"),
      icon: <Linkedin width="1rem" height="1rem" />,
    },
    {
      id: "instagram",
      name: "Instagram",
      shortcut: ["c", "i"],
      keywords: "go-instagram",
      section: "Connect",
      perform: () =>
        window.open("https://www.instagram.com/alexcarp/", "_blank"),
      icon: <Instagram width="1rem" height="1rem" />,
    },
  ];

  return actions;
}
