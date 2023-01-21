import { style } from "@vanilla-extract/css";

export const root = style({
  position: "absolute",
  top: 0,
  display: "flex",
  left: 0,
  right: 0,
  margin: "0 auto",
  maxWidth: 1200,
  transform: "translate3d(0, -50%, 0)",
  transformOrigin: "top center",
});

export const blob = style({
  width: "50%",
  height: 200,
  filter: "blur(80px)",
  zIndex: 0,
  "@media": {
    "screen and (min-width: 768px)": {
      width: 600,
    },
  },
});

export const left = style({
  transform: "translate3d(50px, 0, 0)",
  background: "linear-gradient(to right, #63d0ff, #844fba)",
  opacity: 0.6,
  "@media": {
    "screen and (min-width: 768px)": {
      transform: "translate3d(150px, 0, 0)",
    },
  },
});

export const right = style({
  transform: "translate3d(-50px, 0, 0)",
  background: "linear-gradient(to right, #ffb2b8, #c74fb8)",
  opacity: 0.3,
  "@media": {
    "screen and (min-width: 768px)": {
      transform: "translate3d(-150px, 0, 0)",
    },
  },
});
