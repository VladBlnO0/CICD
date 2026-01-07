import { test } from "node:test";
import { strict as assert } from "node:assert";
import { add } from "../app/main.js";

test('3 + 2', () => {
  const result = add(3, 2);
  assert.strictEqual(result, 5);
});
