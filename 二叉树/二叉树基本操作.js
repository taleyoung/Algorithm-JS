/**
 * 求二叉树的深度
 */

//递归
var maxDepth = function(root) {
  return root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
//循环
var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let level = 0;
  while (queue.length) {
    let levelSum = queue.length;
    while (levelSum--) {
      let top = queue.shift();
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
    level++;
  }
  return level;
};
