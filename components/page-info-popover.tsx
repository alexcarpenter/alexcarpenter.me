"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { parseDateToString } from "@/app/utils";
import { TouchTarget } from "@/components/touch-target";

export const PageInfoPopover = ({
  slug,
  published,
  updated,
}: {
  slug: string;
  published: string;
  updated?: string;
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="absolute bottom-2.5 right-0 ml-auto grid h-6 w-6 place-content-center rounded-full border bg-neutral-100 dark:bg-neutral-800">
          <span className="sr-only">View page info</span>
          <TouchTarget>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </TouchTarget>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={2}
          className="grid gap-y-1 rounded-sm border bg-page p-4 dark:bg-neutral-800"
        >
          <p className="flex items-center justify-between gap-3 text-sm">
            <span className="text-secondary">Published:</span>
            <time dateTime={published}>{parseDateToString(published)}</time>
          </p>
          {updated ? (
            <p className="flex items-center justify-between gap-3 text-sm">
              <span className="text-secondary">Last updated:</span>
              <time dateTime={updated}>{parseDateToString(updated)}</time>
            </p>
          ) : null}
          <hr className="my-2" />
          <p className="flex items-center gap-1 text-sm">
            <span>View</span>
            <a
              href={`https://github.com/alexcarpenter/alexcarpenter.me/commits/main/content/${slug}.mdx`}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              changelog
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39.24 32.26"
              height=".65em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="-rotate-45"
            >
              <path d="m29.1 18.43-6.19.44H0v-5.48h23.91l6.26.44L15.84 0h7.63l15.77 15.84v.58L23.47 32.26h-7.63Z" />
            </svg>
          </p>
          <Popover.Arrow className="fill-[rgb(var(--border))]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
