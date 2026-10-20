import type { ReadableAtom } from "nanostores";
import { createContext } from "nanotags/context";
import type { Grip } from "./physics";

export type SwipeCarousel = {
  viewport: HTMLElement;
  $stretch: ReadableAtom<number>;
  grab(event: PointerEvent, grip: Grip, target?: number): void;
};

export const swipeCarouselContext =
  createContext<SwipeCarousel>("swipe-carousel");
