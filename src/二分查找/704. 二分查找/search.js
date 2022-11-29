/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    // 折中，获取中间索引，也可以使用 (right - left) / 2 + left
    const mid = (left + right) >> 1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // 升序，目标大于中间值，所以区间缩小到中间值右半部
      left = mid + 1;
    } else {
      // 升序，目标小于中间值，所以区间缩小到中间值左半部
      right = mid - 1;
    }
  }

  return -1;
};
