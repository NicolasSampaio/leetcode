// 383. Ransom Note
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  hashMagazine = {};
  for (let i = 0; i < magazine.length; i++) {
    hashMagazine[magazine[i]] = (hashMagazine[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (hashMagazine[ransomNote[i]] > 0) {
      hashMagazine[ransomNote[i]] = hashMagazine[ransomNote[i]] - 1;
    } else {
      return false;
    }
  }

  return true;
};

describe("canConstruct", () => {
  it("should return false if ransomNote is longer than magazine", () => {
    expect(canConstruct("aa", "a")).toBe(false);
  });

  it("should return true if ransomNote can be constructed from magazine", () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  it("should return true if ransomNote can be constructed from magazine with same letters", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
  it("should return false if ransomNote can not be constructed from magazine", () => {
    expect(canConstruct("aab", "baa")).toBe(true);
  });

  it("should return true for empty ransomNote", () => {
    expect(canConstruct("", "abc")).toBe(true);
  });

  it("should return false if magazine is empty and ransomNote is not", () => {
    expect(canConstruct("abc", "")).toBe(false);
  });

  it("should return true if both ransomNote and magazine are empty", () => {
    expect(canConstruct("", "")).toBe(true);
  });
  it("should handle different characters in ransomNote and magazine", () => {
    expect(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbj")).toBe(true);
  });
});
