/**
 * 请判断一个链表是否为回文链表。
 */

var isPalindrome = function(head) {
  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  };
  let fast = (low = new ListNode());
  fast.next = head;
  while (fast && fast.next) {
    low = low.next;
    fast = fast.next.next;
  }
  let p = low.next;
  low.next = null;
  let node2 = reverse(null, p);
  let node1 = head;
  while (node1 && node2) {
    if (node1.val !== node2.val) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;
};
