import { define } from "nanotags";
import { swipeCarouselContext } from "./context";
import { clamp, thumbGrip } from "./physics";

define("swipe-carousel-scrollbar")
  .withRefs((r) => ({ thumb: r.one<HTMLElement>() }))
  .withContexts({ carousel: swipeCarouselContext })
  .setup((ctx) => {
    const { host, refs, contexts } = ctx;
    const { viewport, $stretch, grab } = contexts.carousel;

    const resizes = new ResizeObserver(measureThumb);
    resizes.observe(viewport);
    ctx.onCleanup(() => resizes.disconnect());

    ctx.on(host, "pointerdown", (event) => {
      if (event.button !== 0) return;
      event.preventDefault();

      const track = host.getBoundingClientRect();
      const handle = refs.thumb.getBoundingClientRect();
      const travel = track.width - refs.thumb.offsetWidth;
      if (travel <= 0) return;

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const onHandle =
        event.clientX >= handle.left && event.clientX <= handle.right;
      const offset = event.clientX - track.left - refs.thumb.offsetWidth / 2;
      grab(
        event,
        thumbGrip(maxScroll, travel),
        onHandle ? undefined : clamp(offset / travel, 0, 1) * maxScroll,
      );
    });

    ctx.effect($stretch, (stretch) => {
      host.style.setProperty(
        "--squish",
        stretch ? String(1 - Math.abs(stretch)) : "",
      );
      host.style.setProperty("--squish-origin", stretch > 0 ? "left" : "right");
    });

    function measureThumb() {
      const visible = viewport.clientWidth / viewport.scrollWidth;
      host.style.setProperty("--thumb", String(visible));
    }
  });
