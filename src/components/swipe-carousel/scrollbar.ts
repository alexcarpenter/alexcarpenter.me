import { clamp, thumbGrip, type Grip } from "./physics";

type Grab = (event: PointerEvent, grip: Grip, target?: number) => void;

export function createScrollbar(
  host: HTMLElement,
  viewport: HTMLElement,
  grab: Grab,
  signal: AbortSignal,
) {
  const thumb = host.querySelector<HTMLElement>("[data-ref='thumb']");
  if (!thumb) return;

  const resizes = new ResizeObserver(measureThumb);
  resizes.observe(viewport);
  signal.addEventListener("abort", () => resizes.disconnect());

  host.addEventListener(
    "pointerdown",
    (event) => {
      if (event.button !== 0) return;
      event.preventDefault();

      const track = host.getBoundingClientRect();
      const handle = thumb.getBoundingClientRect();
      const travel = track.width - thumb.offsetWidth;
      if (travel <= 0) return;

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const onHandle =
        event.clientX >= handle.left && event.clientX <= handle.right;
      const offset = event.clientX - track.left - thumb.offsetWidth / 2;
      grab(
        event,
        thumbGrip(maxScroll, travel),
        onHandle ? undefined : clamp(offset / travel, 0, 1) * maxScroll,
      );
    },
    { signal },
  );

  return { stretch };

  function stretch(value: number) {
    host.style.setProperty("--squish", value ? String(1 - Math.abs(value)) : "");
    host.style.setProperty("--squish-origin", value > 0 ? "left" : "right");
  }

  function measureThumb() {
    const visible = viewport.clientWidth / viewport.scrollWidth;
    host.style.setProperty("--thumb", String(visible));
  }
}
