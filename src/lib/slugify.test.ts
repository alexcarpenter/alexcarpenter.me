import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "./slugify.ts";

test("lowercases and joins words with dashes", () => {
  assert.equal(slugify("Everyday Carry"), "everyday-carry");
  assert.equal(slugify("Mighty in the Midwest"), "mighty-in-the-midwest");
});

test("keeps camel-cased names as one word", () => {
  assert.equal(slugify("HashiCorp"), "hashicorp");
  assert.equal(slugify("NationBuilder"), "nationbuilder");
});

test("strips diacritics", () => {
  assert.equal(slugify("Café Crème"), "cafe-creme");
});

test("collapses punctuation and trims dashes", () => {
  assert.equal(slugify("  Tools & Gear!  "), "tools-gear");
  assert.equal(slugify("a--b__c"), "a-b-c");
});
