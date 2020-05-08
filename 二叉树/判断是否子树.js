/**
 * 判断二叉树p1是否包含二叉树p2
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function doesTree1HasTree2(p1, p2) {
  if (!p2) {
    return true;
  }
  if (!p1) {
    return false;
  }
  if (p1.val !== p2.val) {
    return false;
  }
  return (
    doesTree1HasTree2(p1.left, p2.left) && doesTree1HasTree2(p1.right, p2.right)
  );
}

function doesTree1HasTree2(p1, p2) {
  if (!A || !B) {
    return false;
  }
  return (
    doesTree1HasTree2(A, B) ||
    isSubStructure(A.left, B) ||
    isSubStructure(A.right, B)
  );
}
