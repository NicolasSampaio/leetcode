// 1480. Running Sum of 1d Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  numsSum = [];
  sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    numsSum.push(sum);
  }
  return numsSum;
};

describe("runningSum", () => {
  it("should return the running sum of the array", () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  it("should return the running sum of an array with all same numbers", () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the running sum of a different array", () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
  it("should return the original array if there is only one element", () => {
    expect(runningSum([5])).toEqual([5]);
  });

  it("should return an empty array if the input is empty", () => {
    expect(runningSum([])).toEqual([]);
  });
});
