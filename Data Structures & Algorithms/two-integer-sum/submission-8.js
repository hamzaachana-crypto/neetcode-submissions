class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    let candidate = target - nums[j];

    if (hash[candidate] && (j !== hash[candidate] )) {
      return [j, hash[candidate]];
    }
  }
    }
}
