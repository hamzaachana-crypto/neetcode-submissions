class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }


    const key = count.join('#');

    // console.log('key', key);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(str);
  }


   return Object.values(groups);
    }
}
