import { add } from "../src/util";

describe("test js", () => {
  const value = 2 + 2;
  const data = { one: 1 } as any;

  beforeAll(() => {
    data["two"] = 3;
  });

  beforeEach(() => {
    console.log("1 - beforeEach");
  });
  afterEach(() => {
    console.log("1 - afterEach");
  });

  test("object assignment", () => {
    expect(data).toEqual({ one: 1, two: 3 });
  });

  test("two plus two", () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

describe("test function", () => {
  test("add 5 + 2 to equal 7", () => {
    expect(add(5, 2)).toBe(7);
  });
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

// test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
//   expect(() => compileAndroidCode()).toThrow(/JDK/);

//   // Or you can match an exact error mesage using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });
