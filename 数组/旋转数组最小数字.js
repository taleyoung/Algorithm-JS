/**
 * 输入一个递增排序数组的一个旋转，输出旋转数组的最小值
 * 如数组[3,4,5,1,2]是[1,2,3,4,5]的一个旋转，该数组的最小值为1
 */

/**
 * 二分双指针对比移动的思想，很常用
 */
function getMinFromRotateArr(arr) {
  let len = numbers.length;
  let i = 0,
    j = len - 1;
  while (i < j) {
    let mid = (i + j) >> 1;
    if (numbers[j] < numbers[mid]) {
      i = mid + 1;
    } else if (numbers[j] === numbers[mid]) {
      j = j - 1;
    } else {
      j = mid;
    }
  }
  return numbers[i];
}

const res = getMinFromRotateArr([1, 3, 5]);
console.log(res);
