import { style } from '@vanilla-extract/css';

export const toggle = style({
  position: 'relative',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 0,
  width: '48px',
  height: '48px',
  display: 'grid',
  placeContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '9999px',
      backgroundColor: 'var(--foreground)',
      opacity: 0.1,
      transform: 'scale(0)',
      transition: 'ease-in-out 0.2s',
      zIndex: -1,
    },
    '&:hover::after': {
      transform: 'scale(1)',
    },
  },
});

export const pressed = style({
  selectors: {
    '&:hover::after': {
      transform: 'scale(0)',
    },
  },
});

export const icon = style({
  gridArea: '1/1',
  opacity: 0,
  transition: 'ease-in-out 0.2s',
  transform: 'scale(0)',
});

export const visible = style({
  opacity: 1,
  transform: 'scale(1)',
});
