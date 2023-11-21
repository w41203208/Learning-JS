import { describe, it } from "node:test";
import { expect } from "chai";

it("my test", (done) => {
  // should set the timeout of this test to 1000 ms; instead will fail
  setImmediate(done);
});
