// 2667. Create Hello World Function
// Easy
// Companies
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

// Constraints:

// 0 <= args.length <= 10

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

describe("createHelloWorld", () => {
  it("should return a function", () => {
    expect(typeof createHelloWorld()).toBe("function");
  });

  it('should return "Hello World" when called with no arguments', () => {
    const helloWorld = createHelloWorld();
    expect(helloWorld()).toBe("Hello World");
  });

  it('should return "Hello World" when called with any arguments', () => {
    const helloWorld = createHelloWorld();
    expect(helloWorld(1, 2, 3)).toBe("Hello World");
    expect(helloWorld("a", "b")).toBe("Hello World");
    expect(helloWorld({}, [])).toBe("Hello World");
  });
  it('should return "Hello World" when called multiple arguments', () => {
    const helloWorld = createHelloWorld();
    expect(helloWorld(1, "b", [3, 4])).toBe("Hello World");
  });
});
