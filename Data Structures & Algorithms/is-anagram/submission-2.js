class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length) return false;

  let frequency = {};

  for (let val of s) {
    frequency[val] = (frequency[val] || 0) + 1;
  }
  for (let val of t) {
    if (!frequency[val]) {
      return false;
    }

    frequency[val]--;
  }

  return true;
    }
}
