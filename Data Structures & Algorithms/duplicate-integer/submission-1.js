class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] > 1) return true;
  }

  return false;
    }
}
