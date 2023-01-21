import { style } from "@vanilla-extract/css";

export const root = style({
  position: "absolute",
  top: 0,
  display: "flex",
  left: 0,
  right: 0,
  maxWidth: 1200,
  transform: "translate3d(0, -50%, 0)",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const blob = style({
  width: 600,
  height: 150,
  filter: "blur(80px)",
  zIndex: 0,
});

export const left = style({
  transform: "translate3d(150px, 0, 0)",
  background: "linear-gradient(to right, #63d0ff, #844fba)",
  opacity: 0.6,
});

export const right = style({
  transform: "translate3d(-150px, 0, 0)",
  background: "linear-gradient(to right, #ffb2b8, #c74fb8)",
  opacity: 0.3,
});
