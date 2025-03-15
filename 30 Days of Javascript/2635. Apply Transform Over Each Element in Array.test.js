// 2635. Apply Transform Over Each Element in Array
// Easy
// Companies
// Hint
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns an integer.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

describe("map", () => {
  test("Aplica a função de transformação corretamente a cada elemento", () => {
    const arr = [1, 2, 3];
    const fn = (n) => n * 2;
    const expected = [2, 4, 6];
    expect(map(arr, fn)).toEqual(expected);
  });

  test("Usa o índice corretamente na função de transformação", () => {
    const arr = [10, 20, 30];
    const fn = (n, i) => n + i;
    const expected = [10, 21, 32];
    expect(map(arr, fn)).toEqual(expected);
  });

  test("Retorna um novo array, sem modificar o original", () => {
    const arr = [1, 2, 3];
    const fn = (n) => n * 2;
    const result = map(arr, fn);
    expect(result).not.toBe(arr); // Verifica se são objetos diferentes (arrays diferentes na memória)
    expect(arr).toEqual([1, 2, 3]); // Verifica se o array original não foi modificado
  });

  test("Funciona com um array vazio", () => {
    const arr = [];
    const fn = (n) => n * 2;
    const expected = [];
    expect(map(arr, fn)).toEqual(expected);
  });

  test("Funciona com uma função que retorna valores de diferentes tipos", () => {
    const arr = [1, 2, 3];
    const fn = (n, i) => (i % 2 === 0 ? n * 2 : String(n)); // Números pares * 2, ímpares viram strings
    const expected = [2, "2", 6];
    expect(map(arr, fn)).toEqual(expected);
  });
  test("Funciona com uma função que retorna null/undefined", () => {
    const arr = [1, 2, 3];
    const fn = (n, i) => (i === 1 ? null : undefined);
    const expected = [undefined, null, undefined];
    expect(map(arr, fn)).toEqual(expected);
  });

  test("Funciona com uma função que modifica valores externos (closure - não recomendado, mas testado)", () => {
    let sum = 0;
    const arr = [1, 2, 3];
    const fn = (n) => {
      sum += n; // Modifica uma variável externa!
      return n * 2;
    };
    const expected = [2, 4, 6];
    const result = map(arr, fn);

    expect(result).toEqual(expected);
    expect(sum).toBe(6); // Verifica o efeito colateral (não recomendado em programação funcional pura)
  });
  test("Funciona com uma função que lanca erro", () => {
    const arr = [1, 2, 3];
    const fn = (n) => {
      if (n === 2) {
        throw new Error("Erro intencional");
      }
      return n;
    };
    expect(() => map(arr, fn)).toThrow("Erro intencional");
  });
});
