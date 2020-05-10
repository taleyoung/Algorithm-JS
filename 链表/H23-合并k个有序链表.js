/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */

//递归
var mergeKLists = function(lists) {
  if (lists.length === 0) return [];
  let mergeTwoLists = (l1, l2) => {
    const merge = (l1, l2) => {
      if (!l1) return l2;
      if (!l2) return l1;
      if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
      } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
      }
    };
    return merge(l1, l2);
  };
  const _mergeKLists = (lists, start, end) => {
    if (end - start < 0) return null;
    if (start === end) return lists[end];
    let mid = Math.floor((end - start) / 2);
    return mergeTwoLists(
      _mergeKLists(lists, start, mid),
      _mergeKLists(lists, mid + 1, end)
    );
  };
  return _mergeKLists(lists, 0, lists.length - 1);
};

//循环
var mergeKLists2 = function(lists) {
  let mergeTwoLists = (l1, l2) => {
    const merge = (l1, l2) => {
      if (!l1) return l2;
      if (!l2) return l1;
      if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
      } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
      }
    };
    return merge(l1, l2);
  };
  if (!lists || !lists.length) return null;
  let dummyHeads = [];
  for (let i = 0; i < lists.length; i++) {
    let node = new ListNode();
    node.next = lists[i];
    dummyHeads[i] = node;
  }
  for (let size = 1; size < lists.length; size += size) {
    for (let i = 0; i + size < lists.length; i += 2 * size) {
      dummyHeads[i].next = mergeTwoLists(
        dummyHeads[i].next,
        dummyHeads[i + size].next
      );
    }
  }
  return dummyHeads[0].next;
};
