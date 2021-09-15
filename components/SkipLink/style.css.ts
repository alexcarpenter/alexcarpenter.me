import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const skipLink = style({
  position: 'fixed',
  top: 0,
  left: 0,
  padding: vars.space.small,
  transform: 'translateY(-100%)',
  ':focus': {
    transform: 'translateY(0)',
  },
});
