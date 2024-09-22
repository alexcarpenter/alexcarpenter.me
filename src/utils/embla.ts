import type { EmblaCarouselType } from "embla-carousel";

const addTogglePrevNextBtnsActive = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement,
): (() => void) => {
  const togglePrevNextBtnsState = (): void => {
    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };

  emblaApi
    .on("select", togglePrevNextBtnsState)
    .on("init", togglePrevNextBtnsState)
    .on("reInit", togglePrevNextBtnsState);

  return (): void => {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  };
};

export const addPrevNextBtnsClickHandlers = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement,
): (() => void) => {
  const scrollPrev = (): void => {
    emblaApi.scrollPrev();
  };
  const scrollNext = (): void => {
    emblaApi.scrollNext();
  };
  prevBtn.addEventListener("click", scrollPrev, false);
  nextBtn.addEventListener("click", scrollNext, false);

  const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
    emblaApi,
    prevBtn,
    nextBtn,
  );

  return (): void => {
    removeTogglePrevNextBtnsActive();
    prevBtn.removeEventListener("click", scrollPrev, false);
    nextBtn.removeEventListener("click", scrollNext, false);
  };
};

export const addDotBtnsAndClickHandlers = (
  emblaApi: EmblaCarouselType,
  dotsNode: HTMLElement,
): (() => void) => {
  let dotNodes: HTMLElement[] = [];

  const addDotBtnsWithClickHandlers = (): void => {
    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(() => '<button class="embla__dot" type="button"></button>')
      .join("");

    const scrollTo = (index: number): void => {
      emblaApi.scrollTo(index);
    };

    dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener("click", () => scrollTo(index), false);
    });
  };

  const toggleDotBtnsActive = (): void => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].dataset.active = "false";
    dotNodes[selected].classList.remove("active");
    dotNodes[selected].dataset.active = "true";
    dotNodes[selected].classList.add("active");
  };

  emblaApi
    .on("init", addDotBtnsWithClickHandlers)
    .on("reInit", addDotBtnsWithClickHandlers)
    .on("init", toggleDotBtnsActive)
    .on("reInit", toggleDotBtnsActive)
    .on("select", toggleDotBtnsActive);

  return (): void => {
    dotsNode.innerHTML = "";
  };
};
