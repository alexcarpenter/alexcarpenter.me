import { define } from "nanotags";

const DRAG_FOLLOW = 0.72;
const EDGE_FOLLOW = 0.8;
const GLIDE = 0.28;
const SETTLE = 0.12;
const STRETCH = 0.2;
const FLICK_CARRY = 120;
const DRAG_THRESHOLD = 5;
const VELOCITY_WINDOW = 100;
const FRAME = 1000 / 60;

type Sample = { x: number; time: number };

define("swipe-carousel")
  .withRefs((r) => ({
    slides: r.many<HTMLElement>("[data-ref='slide']"),
  }))
  .setup((ctx) => {
    const host = ctx.host;
    let press: { startX: number; lastX: number } | null = null;
    let dragged = false;
    let samples: Sample[] = [];
    let position = 0;
    let target = 0;
    let landing = 0;
    let pressStart = 0;
    let stretch = 0;
    let maxScroll = 0;
    let snaps: number[] = [];
    let frame = 0;
    let lastTime = 0;

    ctx.onCleanup(stop);

    ctx.on(host, "pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;

      press = { startX: event.clientX, lastX: event.clientX };
      dragged = false;
      samples = [{ x: event.clientX, time: event.timeStamp }];
      maxScroll = host.scrollWidth - host.clientWidth;
      snaps = measureSnaps();

      if (frame) {
        target = position;
      } else {
        position = target = host.scrollLeft;
        host.toggleAttribute("data-free-scroll", true);
        frame = requestAnimationFrame(tick);
      }
      pressStart = target;
    });

    ctx.on(window, "pointermove", (event) => {
      if (!press) return;
      if (!(event.buttons & 1)) return release(event);

      target += press.lastX - event.clientX;
      press.lastX = event.clientX;
      samples.push({ x: event.clientX, time: event.timeStamp });
      samples = samples.filter(
        (sample) => event.timeStamp - sample.time <= VELOCITY_WINDOW,
      );

      if (
        !dragged &&
        Math.abs(event.clientX - press.startX) >= DRAG_THRESHOLD
      ) {
        dragged = true;
        host.toggleAttribute("data-dragging", true);
        getSelection()?.removeAllRanges();
      }
    });

    ctx.on(window, "pointerup", release);
    ctx.on(window, "pointercancel", release);

    ctx.on(
      host,
      "wheel",
      (event) => {
        if (press || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
        stop();
      },
      { passive: true },
    );

    ctx.on(
      host,
      "click",
      (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
      },
      { capture: true },
    );

    ctx.on(host, "dragstart", (event) => event.preventDefault());

    function release(event: PointerEvent) {
      if (!press) return;

      press = null;
      host.toggleAttribute("data-dragging", false);
      landing = landingFor(
        target + scrollVelocity(samples, event.timeStamp) * FLICK_CARRY,
      );
    }

    function tick(time: number) {
      const elapsed = lastTime ? time - lastTime : FRAME;
      lastTime = time;

      if (press) {
        position = damp(position, target, DRAG_FOLLOW, elapsed);
      } else {
        target = damp(target, landing, GLIDE, elapsed);
        position = damp(position, target, SETTLE, elapsed);
      }

      const inRange = clamp(position, 0, maxScroll);
      stretch = press
        ? damp(stretch, (inRange - position) * STRETCH, EDGE_FOLLOW, elapsed)
        : damp(stretch, 0, SETTLE, elapsed);

      if (host.scrollLeft !== inRange) host.scrollLeft = inRange;
      const translate = Math.abs(stretch) < 0.01 ? "" : `${stretch}px 0`;
      if (host.style.translate !== translate) host.style.translate = translate;

      const settled =
        Math.abs(landing - position) < 0.5 && Math.abs(stretch) < 0.5;
      if (!press && settled) {
        host.scrollLeft = landing;
        stop();
        return;
      }
      frame = requestAnimationFrame(tick);
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      host.style.translate = "";
      host.toggleAttribute("data-free-scroll", false);
    }

    function landingFor(projected: number) {
      const from = nearestIndex(snaps, pressStart);
      const reachable = snaps.slice(Math.max(from - 1, 0), from + 2);
      return reachable[nearestIndex(reachable, projected)] ?? host.scrollLeft;
    }

    function measureSnaps() {
      const hostRect = host.getBoundingClientRect();
      const center = hostRect.left + host.clientWidth / 2 - host.scrollLeft;
      return ctx.refs.slides.map((slide) => {
        const rect = slide.getBoundingClientRect();
        return clamp(rect.left + rect.width / 2 - center, 0, maxScroll);
      });
    }
  });

function scrollVelocity(samples: Sample[], releaseTime: number) {
  const recent = samples.filter(
    (sample) => releaseTime - sample.time <= VELOCITY_WINDOW,
  );
  const first = recent[0];
  const last = recent.at(-1);
  if (!first || !last || last.time === first.time) return 0;

  return (first.x - last.x) / (last.time - first.time);
}

function damp(from: number, to: number, factor: number, elapsed: number) {
  return from + (to - from) * (1 - (1 - factor) ** (elapsed / FRAME));
}

function nearestIndex(values: number[], to: number) {
  let nearest = 0;
  values.forEach((value, index) => {
    const best = values[nearest] ?? Infinity;
    if (Math.abs(value - to) < Math.abs(best - to)) nearest = index;
  });
  return nearest;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
