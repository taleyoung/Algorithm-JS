/**
 * 输入两个整数序列，第一个表示压入序列，判断第二个是否为弹出序列
 * 且压入的数字都不相同
 */

function checkIsPopOrder(pushed, poped) {
  if (!pushed.length || !poped.length || pushed.length != poped.length) {
    return false;
  }
  let len = pushed.length;
  let stack = [];
  let i = 0,
    j = 0;
  while (i < len) {
    while (j < len && stack[stack.length - 1] !== popped[i]) {
      stack.push(pushed[j]);
      j++;
    }
    if (stack[stack.length - 1] !== popped[i]) {
      return false;
    }
    stack.pop();
    i++;
  }
  return true;
}
console.log(checkIsPopOrder([1, 2, 3, 4], [4, 3, 2, 1]));

console.log(checkIsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

console.log(checkIsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
