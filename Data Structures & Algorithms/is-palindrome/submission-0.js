class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  let pointer1 = 0;
  let pointer2 = cleaned.length - 1;

  console.log('cleaned', cleaned);

  while (pointer1 < pointer2) {
    if (cleaned[pointer1] !== cleaned[pointer2]) return false;

    pointer1++;
    pointer2--;
  }

  return true;
}
    }

