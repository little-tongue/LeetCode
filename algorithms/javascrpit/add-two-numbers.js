/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var head = tempNode = new ListNode();
  var carry = 0; // 进位
  while (l1 || l2) {
    var a = l1 && l1.val || 0;
    var b = l2 && l2.val || 0;
    var sum = carry + parseInt(a) + parseInt(b);
    carry = parseInt(sum / 10);
    tempNode.next = new ListNode(sum % 10);
    tempNode = tempNode.next
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  if (carry > 0) {
    tempNode.next = new ListNode(carry);
  }
  return head.next;
}
