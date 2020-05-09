/**
 * leetcode 25
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 */
//递归
var reverseKGroup = function(head, k) {
  let p = head;
  for (let i = 0; i < k; i++) {
    if (!p) return head;
    p = p.next;
  }

  let pre = null,
    cur = head;
  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  return pre;
};

//循环
var reverseKGroup = function(head, k) {
  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }
  if (count < k) {
    return head;
  }
  let p = (dummyNode = new ListNode());
  p.next = head;
  let round = Math.floor(count / k);
  for (let i = 0; i < round; i++) {
    let pre = null,
      cur = p.next;
    for (let j = 0; j < k; j++) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    let start = p.next;
    start.next = cur;
    p.next = pre;
    p = start;
  }
  return dummyNode.next;
};
