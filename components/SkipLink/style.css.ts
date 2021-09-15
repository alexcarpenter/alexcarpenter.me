import { style } from '@vanilla-extract/css';

export const skipLink = style({
  position: 'fixed',
  top: 0,
  left: 0,
  transform: 'translateY(-100%)',
  ':focus': {
    transform: 'translateY(0)',
  },
});
