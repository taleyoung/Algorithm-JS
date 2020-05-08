/**
 * 出入一个二叉树和一个整数，打印二叉树中节点和为输入整数的所有路径,
 * 从根节点开始一直到叶子节点行成一条路径
 */

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find(node, sum, path, allPath) {
  if (!node) {
    return;
  }
  //典型的前序遍历
  path = [...path, node.val];
  if (!node.left && !node.right && node.val === sum) {
    allPath.push(path);
    return;
  }
  find(node.left, sum - node.val, path, allPath);
  find(node.right, sum - node.val, path, allPath);
}
var findPath = function(root, sum) {
  let allPath = [];
  let path = [];
  find(root, sum, path, allPath);
  return allPath;
};
const root = new Node(1, new Node(2), new Node(3, null, new Node(-1)));

console.log(findPath(root, 3));
