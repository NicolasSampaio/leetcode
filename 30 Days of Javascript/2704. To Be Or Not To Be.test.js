// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

/**
 * @param {string} val
 * @return {Object}
 */
var customExpect = function (val) {
  return {
    toBe: (anotherVal) => {
      if (val === anotherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (anotherVal) => {
      if (val !== anotherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

describe("expect", () => {
  const errorMessageToBe = "Not Equal";
  const errorMessageNotToBe = "Equal";

  it("toBe deve lançar um erro se os valores não forem iguais", () => {
    const obj = customExpect(5);
    expect(obj.toBe(5)).toBe(true);

    expect(() => obj.toBe(10)).toThrow(errorMessageToBe);
    expect(() => obj.toBe("5")).toThrow(errorMessageToBe);
    expect(() => obj.toBe(null)).toThrow(errorMessageToBe);
  });

  it("notToBe deve lançar um erro se os valores forem iguais", () => {
    const obj = customExpect(5);
    expect(obj.notToBe(10)).toBe(true);
    expect(obj.notToBe("5")).toBe(true);
    expect(obj.notToBe(null)).toBe(true);

    expect(() => obj.notToBe(5)).toThrow(errorMessageNotToBe);
  });

  it("deve lidar com diferentes tipos de dados corretamente", () => {
    const obj1 = customExpect("hello");
    expect(obj1.toBe("hello")).toBe(true);
    expect(() => obj1.toBe("world")).toThrow(errorMessageToBe);
    expect(obj1.notToBe("world")).toBe(true);
    expect(() => obj1.notToBe("hello")).toThrow(errorMessageNotToBe);

    const obj2 = customExpect(null);
    expect(obj2.toBe(null)).toBe(true);
    expect(() => obj2.toBe(undefined)).toThrow(errorMessageToBe);
    expect(obj2.notToBe(undefined)).toBe(true);
    expect(() => obj2.notToBe(null)).toThrow(errorMessageNotToBe);

    const obj3 = customExpect(undefined);
    expect(obj3.toBe(undefined)).toBe(true);
    expect(() => obj3.toBe(null)).toThrow(errorMessageToBe);
    expect(obj3.notToBe(null)).toBe(true);
    expect(() => obj3.notToBe(undefined)).toThrow(errorMessageNotToBe);

    const obj4 = customExpect(true);
    expect(obj4.toBe(true)).toBe(true);
    expect(() => obj4.toBe(false)).toThrow(errorMessageToBe);
    expect(obj4.notToBe(false)).toBe(true);
    expect(() => obj4.notToBe(true)).toThrow(errorMessageNotToBe);

    const obj5 = customExpect(0);
    expect(obj5.toBe(0)).toBe(true);
    expect(() => obj5.toBe(1)).toThrow(errorMessageToBe);
    expect(obj5.notToBe(1)).toBe(true);
    expect(() => obj5.notToBe(0)).toThrow(errorMessageNotToBe);
  });
});
