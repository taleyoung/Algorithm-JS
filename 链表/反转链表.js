/**
 * 题1：输入一个链表的头结点，反转链表，并输出反转后的头结点
 */

/**
 * 方案一，运用链表的头插法
 * 方案二，原地反转，不利用额外空间
 * 1. 三个指针，分别记录当前node，前pre，后一个next结点
 * 2。 结点node的next指向pre，
 * 3. pre和node往后移一位
 */

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function reverseList(head) {
  if (!head) {
    return null;
  }
  let node = head, pre = null;
  while (node) {
    let next = node.next;
    node.next = pre;
    pre = node;
    node = next;
  }
  return pre;
}

let node3 = new Node(3, null), node2 = new Node(2, node3),
    node1 = new Node(1, node2);
let head = new Node(0, node1);

console.log(reverseList(head));

/**
 * 题二 区间反转  lettcode 92
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/submissions/
 */

//循环做法
var reverseBetween = function(head, m, n) {
  if (!head) return null;
  let p = (node = new ListNode());
  let front, tail, cur, pre;
  const count = n - m;
  p.next = head;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  if (!p) {
    return node.next;
  }
  front = p;
  tail = p.next;
  pre = p;
  cur = p.next;
  for (let i = 0; i <= count; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  front.next = pre;
  tail.next = cur;

  return node.next;
};

//递归解法
var reverseBetween2 = function(head, m, n) {
  if (!head) return null;
  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  };
  let front, tail, start, end;
  let count = n - m;
  let p = (node = new ListNode());
  p.next = head;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  front = p;
  start = p.next;
  for (let i = 0; i <= count; i++) {
    p = p.next;
  }
  end = p;
  tail = p.next;
  end.next = null;
  front.next = reverse(null, start);
  start.next = tail;
  return node.next;
};
