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
          toast.success("Copied URL to clipboard");
        }, 200);
      },
      icon: <Copy className="w-4 h-4" />,
    },
    {
      id: "theme",
      name: "Change theme",
      keywords: "interface color dark light",
      shortcut: ["t"],
      section: "General",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "",
      shortcut: ["d"],
      perform: () => {
        setTheme("dark");
        setTimeout(() => {
          toast.success("Dark theme enabled");
        }, 200);
      },
      parent: "theme",
      icon: <Sunset className="w-4 h-4" />,
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "",
      shortcut: ["l"],
      perform: () => {
        setTheme("light");
        setTimeout(() => {
          toast.success("Light theme enabled");
        }, 200);
      },
      parent: "theme",
      icon: <Sunrise className="w-4 h-4" />,
    },
    {
      id: "systemTheme",
      name: "System",
      keywords: "system theme",
      section: "",
      shortcut: ["s"],
      perform: () => {
        setTheme("system");
        setTimeout(() => {
          toast.success("System theme enabled");
        }, 200);
      },
      parent: "theme",
      icon: <Monitor className="w-4 h-4" />,
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
      icon: <GitHub className="w-4 h-4" />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: "posts",
      name: "Posts",
      shortcut: ["g", "p"],
      keywords: "go-posts",
      section: "Go To",
      perform: () => router.push("/posts"),
      icon: <Edit className="w-4 h-4" />,
    },
    {
      id: "timeline",
      name: "Timeline",
      shortcut: ["g", "t"],
      keywords: "go-timeline",
      section: "Go To",
      perform: () => router.push("/timeline"),
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["c", "g"],
      keywords: "go-github",
      section: "Connect",
      perform: () => window.open("https://github.com/alexcarpenter", "_blank"),
      icon: <GitHub className="w-4 h-4" />,
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["c", "t"],
      keywords: "go-twitter",
      section: "Connect",
      perform: () => window.open("https://twitter.com/hybrid_alex", "_blank"),
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["c", "l"],
      keywords: "go-linkedin",
      section: "Connect",
      perform: () =>
        window.open("https://www.linkedin.com/in/imalexcarpenter/", "_blank"),
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      id: "instagram",
      name: "Instagram",
      shortcut: ["c", "i"],
      keywords: "go-instagram",
      section: "Connect",
      perform: () =>
        window.open("https://www.instagram.com/alexcarp/", "_blank"),
      icon: <Instagram className="w-4 h-4" />,
    },
  ];

  return actions;
}
