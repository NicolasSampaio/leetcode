//2235. Add Two Integers
// Given two integers num1 and num2, return the sum of the two integers.

// Example 1:

// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// Example 2:

// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.

// Constraints:

// -100 <= num1, num2 <= 100
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function (num1, num2) {
  return num1 + num2;
};

describe("sum", () => {
  it("should return the sum of two positive integers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and a negative integer", () => {
    expect(sum(5, -2)).toBe(3);
  });

  it("should return the sum of two negative integers", () => {
    expect(sum(-5, -2)).toBe(-7);
  });

  it("should return the same number if adding 0", () => {
    expect(sum(10, 0)).toBe(10);
    expect(sum(0, 5)).toBe(5);
  });
  it("should return 0 if adding two oposite numbers", () => {
    expect(sum(10, -10)).toBe(0);
  });
});
