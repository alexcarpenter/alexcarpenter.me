import { useTheme } from "next-themes";
import { useRouter } from "next/router";

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
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: "theme",
      name: "Change theme",
      keywords: "interface color dark light",
      shortcut: ["t"],
      section: "General",
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "",
      shortcut: ["d"],
      perform: () => setTheme("dark"),
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "",
      shortcut: ["l"],
      perform: () => setTheme("light"),
      parent: "theme",
    },
    {
      id: "systemTheme",
      name: "System",
      keywords: "system theme",
      section: "",
      shortcut: ["s"],
      perform: () => setTheme("system"),
      parent: "theme",
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
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
    },
    {
      id: "posts",
      name: "Posts",
      shortcut: ["g", "p"],
      keywords: "go-posts",
      section: "Go To",
      perform: () => router.push("/posts"),
    },
    {
      id: "timeline",
      name: "Timeline",
      shortcut: ["g", "t"],
      keywords: "go-timeline",
      section: "Go To",
      perform: () => router.push("/timeline"),
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["c", "g"],
      keywords: "go-github",
      section: "Connect",
      perform: () => window.open("https://github.com/alexcarpenter", "_blank"),
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["c", "t"],
      keywords: "go-twitter",
      section: "Connect",
      perform: () => window.open("https://twitter.com/hybrid_alex", "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["c", "l"],
      keywords: "go-linkedin",
      section: "Connect",
      perform: () =>
        window.open("https://www.linkedin.com/in/imalexcarpenter/", "_blank"),
    },
    {
      id: "instagram",
      name: "Instagram",
      shortcut: ["c", "i"],
      keywords: "go-instagram",
      section: "Connect",
      perform: () =>
        window.open("https://www.instagram.com/alexcarp/", "_blank"),
    },
  ];

  return actions;
}
