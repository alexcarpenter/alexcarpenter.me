import * as React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { cx } from '@/lib/utils';
import type { Action } from 'kbar';
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarResults,
  KBarSearch,
  useMatches,
  KBarProvider,
} from 'kbar';

export default function CommandBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { setTheme } = useTheme();

  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: 'theme',
      name: 'Change theme',
      keywords: 'interface color dark light',
      shortcut: ['t'],
      section: 'General',
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      keywords: 'dark theme',
      section: '',
      shortcut: ['d'],
      perform: () => setTheme('dark'),
      parent: 'theme',
    },
    {
      id: 'lightTheme',
      name: 'Light',
      keywords: 'light theme',
      section: '',
      shortcut: ['l'],
      perform: () => setTheme('light'),
      parent: 'theme',
    },
    {
      id: 'systemTheme',
      name: 'System',
      keywords: 'system theme',
      section: '',
      shortcut: ['s'],
      perform: () => setTheme('system'),
      parent: 'theme',
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () =>
        window.open(
          'https://github.com/alexcarpenter/alexcarpenter-next',
          '_blank',
        ),
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
    },
    {
      id: 'work',
      name: 'Work',
      shortcut: ['g', 'w'],
      keywords: 'go-work',
      section: 'Go To',
      perform: () => router.push('/work'),
    },
    {
      id: 'posts',
      name: 'Posts',
      shortcut: ['g', 'p'],
      keywords: 'go-posts',
      section: 'Go To',
      perform: () => router.push('/posts'),
    },
    {
      id: 'videos',
      name: 'Videos',
      shortcut: ['g', 'v'],
      keywords: 'go-videos',
      section: 'Go To',
      perform: () => router.push('/videos'),
    },
    {
      id: 'feed',
      name: 'Feed',
      shortcut: ['g', 'f'],
      keywords: 'go-feed',
      section: 'Go To',
      perform: () => router.push('/feed'),
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['c', 'g'],
      keywords: 'go-github',
      section: 'Connect',
      perform: () => window.open('https://github.com/alexcarpenter', '_blank'),
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['c', 't'],
      keywords: 'go-twitter',
      section: 'Connect',
      perform: () => window.open('https://twitter.com/hybrid_alex', '_blank'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['c', 'l'],
      keywords: 'go-linkedin',
      section: 'Connect',
      perform: () =>
        window.open('https://www.linkedin.com/in/imalexcarpenter/', '_blank'),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['c', 'i'],
      keywords: 'go-instagram',
      section: 'Connect',
      perform: () =>
        window.open('https://www.instagram.com/alexcarp/', '_blank'),
    },
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner
          className={cx(
            'fixed inset-0 z-50 backdrop-blur-sm',
            'bg-gray-100 bg-opacity-75',
            'dark:bg-black dark:bg-opacity-60',
          )}
        >
          <KBarAnimator
            className={cx(
              'max-w-[600px] mx-auto w-full border rounded-md overflow-hidden',
              'bg-gray-50 border-gray-200',
              'dark:bg-black dark:border-gray-700',
            )}
          >
            <KBarSearch
              className={cx(
                ' p-4 font-mono w-full border-b outline-none',
                'bg-white border-gray-200',
                'dark:bg-gray-800 dark:border-gray-700',
              )}
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <h2
            className={cx(
              'border-l-2 px-4 pt-4 pb-2 text-sm font-mono uppercase tracking-wider text-opacity-75',
              'text-gray-600',
              'dark:text-gray-300',
            )}
            style={{
              borderColor: 'transparent',
            }}
          >
            {item}
          </h2>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef<
  HTMLDivElement,
  {
    action: Action;
    active: boolean;
  }
>(({ action, active }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(
        'px-4 py-2 flex items-center justify-between border-l-2 border-transparent textSecondary cursor-pointer',
        active &&
          cx(
            'border-violet-600 bg-violet-200',
            'dark:border-violet-800 dark:bg-violet-600 dark:text-white',
          ),
      )}
      style={
        {
          borderColor: active ? null : 'transparent',
        } as React.CSSProperties
      }
    >
      <div className="flex gap-4 items-center">
        <div className="flex flex-col">
          <span className="font-mono">{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className="grid grid-flow-col gap-2">
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut}>{shortcut}</kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
});
