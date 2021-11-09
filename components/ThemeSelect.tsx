import * as React from 'react';
import { useTheme } from 'next-themes';
import { Command, Sun, Moon, Code } from 'react-feather';
import { cx, textSecondary } from '@/lib/utils';

const THEME_MAP = {
  system: {
    label: 'System',
    icon: <Command width=".9em" />,
  },
  light: {
    label: 'Light',
    icon: <Sun width=".9em" />,
  },
  dark: {
    label: 'Dark',
    icon: <Moon width=".9em" />,
  },
};

export default function ThemeSelect() {
  const [mounted, setMounted] = React.useState(false);
  const { theme: activeTheme, themes, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = (e) => setTheme(e.target.value);

  return (
    <div className="relative inline-block">
      <label htmlFor="theme-menu" className="sr-only">
        Toggle theme
      </label>
      <span
        aria-hidden={true}
        className={cx(
          'absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none',
          textSecondary,
          'opacity-50',
        )}
      >
        {THEME_MAP[activeTheme].icon}
      </span>
      <span
        aria-hidden={true}
        className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
      >
        <Code
          width=".9em"
          className={cx('rotate-90', textSecondary, 'opacity-50')}
        />
      </span>
      <select
        id="theme-menu"
        className={cx(
          'appearance-none rounded-md border sm:w-full pl-8 pr-12',
          'bg-gray-50 border-gray-200',
          'dark:bg-gray-800 dark:border-gray-700',
        )}
        onChange={handleChange}
        value={activeTheme}
      >
        {themes.map((theme) => {
          return (
            <option key={theme} value={theme}>
              {THEME_MAP[theme].label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
