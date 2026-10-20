import { atom } from "nanostores";
import { define } from "nanotags";
import { swipeCarouselContext } from "./context";
import {
  at,
  clamp,
  CONTENT_GRIP,
  DRAG_THRESHOLD,
  FRAME,
  isSettled,
  land,
  nearestIndex,
  rubberBand,
  sampled,
  step,
  type Grip,
  type Hold,
  type Motion,
} from "./physics";

type Press = Hold & { pointerId: number; startX: number; lastX: number };
type Bounds = { maxScroll: number; maxStretch: number; snaps: number[] };

define("swipe-carousel")
  .withRefs((r) => ({
    viewport: r.one<HTMLElement>(),
    slides: r.many<HTMLElement>("[data-ref='slides'] > *"),
  }))
  .setup((ctx) => {
    const { viewport, slides } = ctx.refs;
    const $stretch = atom(0);
    let press: Press | null = null;
    let dragged = false;
    let motion: Motion = at(0);
    let bounds: Bounds = { maxScroll: 0, maxStretch: 0, snaps: [] };
    let frame = 0;
    let lastTime = 0;

    swipeCarouselContext.provide(ctx, { viewport, $stretch, grab });
    ctx.onCleanup(stop);

    ctx.on(viewport, "pointerdown", (event) => {
      dragged = false;
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      grab(event, CONTENT_GRIP);
    });

    ctx.on(window, "pointermove", (event) => {
      if (!press || event.pointerId !== press.pointerId) return;
      if (!(event.buttons & 1)) return release(event);

      const target =
        motion.target + (event.clientX - press.lastX) * press.grip.scale;
      motion = { ...motion, target };
      press.lastX = event.clientX;
      press.samples = sampled(press.samples, {
        position: target,
        time: event.timeStamp,
      });

      if (
        !dragged &&
        Math.abs(event.clientX - press.startX) >= DRAG_THRESHOLD
      ) {
        dragged = true;
        viewport.toggleAttribute("data-dragging", true);
        getSelection()?.removeAllRanges();
      }
    });

    ctx.on(window, "pointerup", release);
    ctx.on(window, "pointercancel", release);

    ctx.on(
      viewport,
      "wheel",
      (event) => {
        if (press || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
        stop();
      },
      { passive: true },
    );

    ctx.on(
      viewport,
      "click",
      (event) => {
        if (!dragged) return;
        dragged = false;
        event.preventDefault();
        event.stopPropagation();
      },
      { capture: true },
    );

    ctx.on(viewport, "dragstart", (event) => event.preventDefault());

    function grab(event: PointerEvent, grip: Grip, target?: number) {
      if (press) return;
      bounds = measureBounds();

      if (frame) {
        motion = { ...motion, target: motion.position };
      } else {
        motion = at(viewport.scrollLeft);
        viewport.toggleAttribute("data-free-scroll", true);
        frame = requestAnimationFrame(tick);
      }

      press = {
        pointerId: event.pointerId,
        startX: event.clientX,
        lastX: event.clientX,
        grip,
        from: nearestIndex(bounds.snaps, motion.target),
        samples: [{ position: motion.target, time: event.timeStamp }],
      };
      dragged = false;
      if (target !== undefined) motion = { ...motion, target };
    }

    function release(event: PointerEvent) {
      if (!press || event.pointerId !== press.pointerId) return;

      motion = land(
        motion,
        press,
        bounds.snaps,
        bounds.maxScroll,
        event.timeStamp,
      );
      press = null;
      viewport.toggleAttribute("data-dragging", false);
    }

    function tick(time: number) {
      const elapsed = lastTime ? time - lastTime : FRAME;
      lastTime = time;
      motion = step(motion, press?.grip ?? null, bounds.maxScroll, elapsed);

      if (!press && isSettled(motion)) {
        viewport.scrollLeft = motion.landing;
        stop();
        return;
      }

      render();
      frame = requestAnimationFrame(tick);
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      motion = { ...motion, overshoot: 0 };
      renderStretch();
      viewport.toggleAttribute("data-free-scroll", false);
    }

    function render() {
      const inRange = clamp(motion.position, 0, bounds.maxScroll);
      if (viewport.scrollLeft !== inRange) viewport.scrollLeft = inRange;
      renderStretch();
    }

    function renderStretch() {
      const { overshoot } = motion;
      const stretch = rubberBand(overshoot, bounds.maxStretch);
      const translate = Math.abs(stretch) < 0.01 ? "" : `${stretch}px 0`;
      if (viewport.style.translate === translate) return;

      viewport.style.translate = translate;
      $stretch.set(translate ? stretch / bounds.maxStretch : 0);
    }

    function measureBounds(): Bounds {
      const maxScroll = maxScrollOf(viewport);
      const viewportRect = viewport.getBoundingClientRect();
      const center =
        viewportRect.left + viewport.clientWidth / 2 - viewport.scrollLeft;
      const snaps = slides.map((slide) => {
        const rect = slide.getBoundingClientRect();
        return clamp(rect.left + rect.width / 2 - center, 0, maxScroll);
      });
      return { maxScroll, maxStretch: viewport.clientWidth / 2, snaps };
    }
  });

function maxScrollOf(element: HTMLElement) {
  return element.scrollWidth - element.clientWidth;
}
