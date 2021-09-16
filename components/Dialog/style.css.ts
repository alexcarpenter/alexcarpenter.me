import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const underlay = style({
  display: 'grid',
  placeItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: 'rgb(var(--background)/ 75%)',
});

export const dialog = style({
  backgroundColor: 'rgb(var(--foreground) / 6%)',
  maxWidth: '600px',
  borderRadius: vars.radii.large,
  border: '1px solid var(--border-color)',
  outline: '0',
});
