export const FRAME = 1000 / 60;
export const DRAG_THRESHOLD = 5;

const DRAG_FOLLOW = 0.72;
const EDGE_FOLLOW = 0.8;
const GLIDE = 0.28;
const SETTLE = 0.12;
const STRETCH = 0.55;
const FLICK_CARRY = 120;
const VELOCITY_WINDOW = 100;

export type Grip = { scale: number; reach: number; carry: number };
export type Sample = { position: number; time: number };
export type Hold = { grip: Grip; from: number; samples: Sample[] };
export type Motion = {
  position: number;
  target: number;
  landing: number;
  overshoot: number;
};

export const CONTENT_GRIP: Grip = { scale: -1, reach: 1, carry: FLICK_CARRY };

export function thumbGrip(maxScroll: number, travel: number): Grip {
  return { scale: maxScroll / travel, reach: Infinity, carry: 0 };
}

export function at(position: number): Motion {
  return { position, target: position, landing: position, overshoot: 0 };
}

export function step(
  motion: Motion,
  grip: Grip | null,
  maxScroll: number,
  elapsed: number,
): Motion {
  if (grip) {
    const position = damp(motion.position, motion.target, DRAG_FOLLOW, elapsed);
    const edge =
      (clamp(position, 0, maxScroll) - position) / Math.abs(grip.scale);
    const overshoot = damp(motion.overshoot, edge, EDGE_FOLLOW, elapsed);
    return { ...motion, position, overshoot };
  }

  const target = damp(motion.target, motion.landing, GLIDE, elapsed);
  const position = damp(motion.position, target, SETTLE, elapsed);
  const overshoot = damp(motion.overshoot, 0, SETTLE, elapsed);
  return { ...motion, target, position, overshoot };
}

export function land(
  motion: Motion,
  hold: Hold,
  snaps: number[],
  maxScroll: number,
  releaseTime: number,
): Motion {
  const target = clamp(motion.target, 0, maxScroll);
  const flick = scrollVelocity(hold.samples, releaseTime) * hold.grip.carry;
  const reachable = snaps.slice(
    Math.max(hold.from - hold.grip.reach, 0),
    hold.from + hold.grip.reach + 1,
  );
  const landing = reachable[nearestIndex(reachable, target + flick)] ?? target;
  return {
    ...motion,
    position: clamp(motion.position, 0, maxScroll),
    target,
    landing,
  };
}

export function isSettled(motion: Motion) {
  return (
    Math.abs(motion.landing - motion.position) < 0.5 &&
    Math.abs(motion.overshoot) < 0.5
  );
}

export function sampled(samples: Sample[], sample: Sample) {
  return [...samples, sample].filter(
    (recent) => sample.time - recent.time <= VELOCITY_WINDOW,
  );
}

export function rubberBand(overshoot: number, limit: number) {
  const give = 1 - 1 / ((Math.abs(overshoot) * STRETCH) / limit + 1);
  return Math.sign(overshoot) * give * limit;
}

export function nearestIndex(values: number[], to: number) {
  let nearest = 0;
  values.forEach((value, index) => {
    const best = values[nearest] ?? Infinity;
    if (Math.abs(value - to) < Math.abs(best - to)) nearest = index;
  });
  return nearest;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function scrollVelocity(samples: Sample[], releaseTime: number) {
  const recent = samples.filter(
    (sample) => releaseTime - sample.time <= VELOCITY_WINDOW,
  );
  const first = recent[0];
  const last = recent.at(-1);
  if (!first || !last || last.time === first.time) return 0;

  return (last.position - first.position) / (last.time - first.time);
}

function damp(from: number, to: number, factor: number, elapsed: number) {
  return from + (to - from) * (1 - (1 - factor) ** (elapsed / FRAME));
}
