/**
 * 29. 数组中有一个数字出现的次数超过数组长度的一半，找出这个数字
 * 如[1,2,3,2,2,2,5,4,2],长度为9，而2出现5次
 */

let moreThanHalfTime = function(nums) {
  let times = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (times === 0) {
      times = 1;
      res = nums[i];
    } else if (nums[i] === res) {
      times++;
    } else {
      times--;
    }
  }
  return res;
};

console.log(moreThanHalfTime([3, 1, 3, 2, 2]));
console.log(moreThanHalfTime([1, 2, 3, 2, 2, 2, 5, 4, 2]));
