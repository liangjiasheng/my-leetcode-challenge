/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  // 遍历数组，如果他当前元素在该数组中第一次出现的 index 跟最后一次出现的 index 一样，证明只出现过一次
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === i && nums.lastIndexOf(nums[i]) === i) {
      sum += nums[i];
    }
  }
  return sum;
};
