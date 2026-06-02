class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let frequency = {};
  for (let val of nums) {
    frequency[val] = (frequency[val] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] > 1) return true;
  }

  return false;
    }
}
