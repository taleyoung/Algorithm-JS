/**
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 */
var kthLargest = function(root, k) {
  if (!root) return null;
  let arr = [];
  const find = root => {
    if (root.left) find(root.left);
    arr.push(root.val);
    if (root.right) find(root.right);
  };
  find(root);
  return arr.reverse()[k - 1];
};
