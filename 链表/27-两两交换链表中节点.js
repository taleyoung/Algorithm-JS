/**
 * leetcode 27
 */

//循环解法
var swapPairs = function(head) {
  if (!head) return null;
  let p = (dummyNode = new ListNode());
  let node1, node2;
  p.next = head;
  while ((node1 = p.next) && (node2 = p.next.next)) {
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;
    p = node1;
  }
  return dummyNode.next;
};

//递归解法
var swapPairs2 = function(head) {
  if (!head || !head.next) return head;
  let node1 = head,
    node2 = head.next;
  node1.next = swapPairs2(node2.next);
  node2.next = node1;
  return node2;
};
