import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePress } from '@react-aria/interactions';
import { Sun, Moon } from 'react-feather';
import { cx } from '@/lib/utils';
import * as style from './style.css';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  let { pressProps, isPressed } = usePress({});

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <button
      {...pressProps}
      onClick={handleClick}
      className={[style.toggle, isPressed && style.pressed].join(' ')}
      aria-label="Toggle theme"
    >
      <Sun
        aria-hidden={true}
        className={cx(style.icon, {
          [style.visible]: resolvedTheme === 'light',
        })}
      />
      <Moon
        aria-hidden={true}
        className={cx(style.icon, {
          [style.visible]: resolvedTheme === 'dark',
        })}
      />
    </button>
  );
};

export default ThemeToggle;
