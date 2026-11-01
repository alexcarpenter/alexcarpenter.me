import assert from "node:assert/strict";
import { test } from "node:test";
import { at, FRAME, isSettled, step, type Motion } from "./physics.ts";

const released: Motion = { ...at(0), overshoot: 300 };

function settle(from: Motion) {
  const path = [from];
  let motion = from;
  while (!isSettled(motion) && path.length < 300) {
    motion = step(motion, null, 1000, FRAME);
    path.push(motion);
  }
  return path;
}

test("a released pull springs slightly past rest, then settles at rest", () => {
  const path = settle(released);
  const deepest = Math.min(...path.map((motion) => motion.overshoot));

  assert.ok(deepest < -1, `never crossed rest: ${deepest}`);
  assert.ok(deepest > -300 * 0.05, `bounced too far: ${deepest}`);
  assert.ok(path.length < 300, "never settled");
  assert.ok(Math.abs(path.at(-1)?.overshoot ?? Infinity) < 0.5);
});

test("a long frame stall does not blow up the spring", () => {
  const motion = step(released, null, 1000, 1000);
  assert.ok(Math.abs(motion.overshoot) <= 300);
});

test("holding the carousel leaves no spring velocity behind", () => {
  const moving = step(released, null, 1000, FRAME);
  const grip = { scale: -1, reach: 1, carry: 0 };
  const held = step({ ...moving, overshootVelocity: -5 }, grip, 1000, FRAME);
  assert.equal(held.overshootVelocity, 0);
});
