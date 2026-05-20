class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let tempMax = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const width = j - i;
      const height = Math.min(heights[i], heights[j]);
      const area = width * height;

      if (area > tempMax) {
        tempMax = area;
      }
    }
  }

  return tempMax;
    }
}
