import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

export const options: EmblaOptionsType = { loop: false };

/**
 * Add prev/next buttons
 * @param emblaApi
 * @param prevBtn
 * @param nextBtn
 * @returns
 */

const addTogglePrevNextBtnsActive = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement
) => {
  const togglePrevNextBtnsState = () => {
    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };

  emblaApi
    .on("select", togglePrevNextBtnsState)
    .on("init", togglePrevNextBtnsState)
    .on("reInit", togglePrevNextBtnsState);

  return () => {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  };
};

/**
 * Add prev/next buttons click handlers
 * @param emblaApi
 * @param prevBtn
 * @param nextBtn
 * @returns
 */

export const addPrevNextBtnsClickHandlers = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement
) => {
  const scrollPrev = () => {
    emblaApi.scrollPrev();
  };
  const scrollNext = () => {
    emblaApi.scrollNext();
  };
  prevBtn.addEventListener("click", scrollPrev, false);
  nextBtn.addEventListener("click", scrollNext, false);

  const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
    emblaApi,
    prevBtn,
    nextBtn
  );

  return () => {
    removeTogglePrevNextBtnsActive();
    prevBtn.removeEventListener("click", scrollPrev, false);
    nextBtn.removeEventListener("click", scrollNext, false);
  };
};

/**
 * Add progress bar
 * @param emblaApi
 * @param progressNode
 * @returns
 */

export const setupProgressBar = (
  emblaApi: EmblaCarouselType,
  progressNode: HTMLElement
): {
  applyProgress: () => void;
  removeProgress: () => void;
} => {
  const applyProgress = (): void => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    progressNode.style.transform = `translate3d(${progress * 100}%,0px,0px)`;
  };

  const removeProgress = (): void => {
    progressNode.removeAttribute("style");
  };

  return {
    applyProgress,
    removeProgress,
  };
};
