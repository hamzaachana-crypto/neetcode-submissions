class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  let targetSum = numbers[pointer1] + numbers[pointer2];

  while (pointer1 < pointer2) {
    let targetSum = numbers[pointer1] + numbers[pointer2];

    if (targetSum === target) {
      return [pointer1 + 1, pointer2 + 1];
    } else if (targetSum > target) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
    }
}
