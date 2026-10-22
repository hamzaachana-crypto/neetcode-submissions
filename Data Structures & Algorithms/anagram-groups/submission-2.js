class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const frequency = {};
  for (let str of strs) {
    const result = new Array(27).fill(0);

    for (let char of str) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);

      result[index]++;
    }

    const key = result.join(",");

    if (!frequency[key]) {
      frequency[key] = [];
    }

    frequency[key].push(str);
  }
  return Object.values(frequency);
    }
}
