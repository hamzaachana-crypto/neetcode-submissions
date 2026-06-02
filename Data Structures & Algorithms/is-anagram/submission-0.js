class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if (s.length !== t.length) return false;

  let frequencyS = {};
  let frequencyT = {};

  for (let val of s) {
    frequencyS[val] = (frequencyS[val] || 0) + 1;
  }

  for (let val of t) {
    frequencyT[val] = (frequencyT[val] || 0) + 1;
  }

  for (let key in frequencyS) {
    if (!(key in frequencyT)) return false;
    if (frequencyS[key] !== frequencyT[key]) return false;
  }

  return true;
    }
}
