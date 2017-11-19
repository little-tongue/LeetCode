/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    var diff = target - nums[i];
    if (map[diff] != null) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
};
