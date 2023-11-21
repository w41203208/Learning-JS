import { expect, should } from "chai";
import { describe, it } from "node:test";

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      expect([1, 2, 3].indexOf(5)).to.equal(-1);
      expect([1, 2, 3].indexOf(0)).should.equal(-1);
    });
  });
});
