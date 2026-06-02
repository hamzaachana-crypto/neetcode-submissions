class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = height * width;
    if (heights[left] < heights[right]) {
      max = Math.max(max, area);
      left++;
    } else if (heights[left] > heights[right]) {
      max = Math.max(max, area);
      right--;
    } else {
      max = Math.max(max, area);
      left++;
      right--;
    }
  }
  return max;
    }
}
