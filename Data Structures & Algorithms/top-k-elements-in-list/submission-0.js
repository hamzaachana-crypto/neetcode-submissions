class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = {};

  for (const num of nums) {
    frequencies[num] = (frequencies[num] || 0) + 1;
  }

  const sortedFrequencies = Object.values(frequencies).sort((a, b) => a - b);

  const topFrequencies = sortedFrequencies.slice(-k);

  const result = [];

  for (const [num, frequency] of Object.entries(frequencies)) {
    if (topFrequencies.includes(frequency)) {
      result.push(Number(num));
    }
  }

  return result;
    }
}
