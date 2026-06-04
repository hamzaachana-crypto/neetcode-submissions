class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
         const hash = {};
  for (let j = 0; j < nums.length; j++) {
    hash[nums[j]] = j;
  }
  console.log('hash', hash);

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (difference in hash && i !== hash[difference]) {
      return [i, hash[difference]];
    }
  }
  return false;
    }
}
