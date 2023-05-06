"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

const routes = [
  {
    label: "index",
    href: "/",
  },
  {
    label: "posts",
    href: "/posts",
  },
  {
    label: "activity",
    href: "/activity",
  },
  {
    label: "bookmarks",
    href: "/bookmarks",
  },
  // {
  //   label: "colophon",
  //   href: "/colophon",
  // },
];

const accounts = [
  {
    label: "Twitter",
    href: "https://twitter.com/hybrid_alex",
  },
  {
    label: "GitHub",
    href: "https://github.com/alexcarpenter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imalexcarpenter",
  },
];

export function Header() {
  const pathname = usePathname();
  const [panelOpen, setPanelOpen] = useState(false);
  useEffect(() => {
    setPanelOpen(false);
  }, [pathname]);
  return (
    <header className="grid grid-cols-2 items-start gap-x-16 gap-y-4 md:grid-cols-4">
      <div className="col-span-2 flex items-center justify-between md:col-span-1">
        <div>
          <p className="font-variable-semibold text-foreground">
            <Link href="/">Alex Carpenter</Link>
          </p>
          <p className="text-foreground-neutral">Design Engineer</p>
        </div>

        <Dialog.Root open={panelOpen} onOpenChange={setPanelOpen}>
          <Dialog.Trigger asChild>
            <button className="grid h-10 w-10 place-items-center items-center rounded-full border bg-surface-neutral md:hidden">
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-page/70 backdrop-blur-sm" />
            <Dialog.Content className="absolute bottom-0 right-0 top-0 w-11/12 border-l bg-page px-4 py-16">
              <Dialog.Close asChild>
                <button className="float-right mb-2 ml-2 grid h-10 w-10 place-items-center items-center rounded-full border bg-surface-neutral md:hidden">
                  <span className="sr-only">Close menu</span>
                  <CloseIcon />
                </button>
              </Dialog.Close>

              <div>
                <p className="font-variable-semibold">Routes</p>
                <nav>
                  <ul>
                    {routes.map(({ href, label }) => {
                      return (
                        <li key={href}>
                          <Link href={href} className="text-foreground-neutral">
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <p className="font-variable-semibold mt-8">Connect</p>
                <ul>
                  {accounts.map(({ href, label }) => {
                    return (
                      <li key={href}>
                        <a href={href} className="text-foreground-neutral">
                          {label} <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="hidden md:col-span-2 md:block">
        <p className="font-variable-semibold text-foreground">Routes</p>
        <nav>
          <ul>
            {routes.map(({ href, label }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="block w-max text-foreground-neutral"
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    <span aria-hidden="true">/</span>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="hidden md:block">
        <p className="font-variable-semibold text-foreground">Connect</p>
        {accounts.map(({ href, label }) => {
          return (
            <a
              key={href}
              href={href}
              className="block w-max text-foreground-neutral"
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          );
        })}
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
