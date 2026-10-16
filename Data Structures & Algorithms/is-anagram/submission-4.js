class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let frequency = {};

  for (let str of s) {
    frequency[str] = (frequency[str] || 0) + 1;
  }

  for (let str of t) {
    if (frequency[str]) {
      frequency[str]--;
    } else {
      return false;
    }
  }

  return true;
    }
}
