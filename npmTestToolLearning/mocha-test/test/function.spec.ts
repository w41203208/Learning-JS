import { add } from "../src/util";
import { describe, it } from "node:test";
import { expect } from "chai";

describe("To test add method in utils.ts", () => {
  it("add numbers by chai", (done) => {
    expect(add(5, 2)).to.equal(7);
    done();
  });
});
