import { tokens } from "@/styles/tokens.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".prose > * + *", {
  marginTop: tokens.spacing.lg,
});
