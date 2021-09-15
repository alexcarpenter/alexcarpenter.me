import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0px',
    xxsmall: '2px',
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    xlarge: '64px',
  },
});
