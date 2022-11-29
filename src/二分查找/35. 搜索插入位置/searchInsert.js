/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // [1, 3, 5, 6];
  // 5;
  let left = 0,
    right = nums.length - 1;
  index = nums.length;

  // 1、0 <= 3
  // 2、mid = 1
  // 3、nums[mid] = 3
  // 4、5 > 3, 范围缩小至右半部, left = 2

  // 1、2 <= 3
  // 2、mid = 3
  // 3、nums[mid] = 6
  // 4、5 <= 6, 范围缩小至左半部, index = 3, right = 2

  // 1、2 <= 2
  // 2、mid = 2
  // 3、nums[mid] = 5
  // 4、5 <= 5, 相等，返回 index, index = 2, right = 1
  while (left <= right) {
    const mid = ((right - left) >> 1) + left;

    if (target <= nums[mid]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
};
