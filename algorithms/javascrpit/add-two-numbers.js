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

// test
var num1 = '2432432432432432432432432432432432432432432432432432432432439';
var num2 = '5642432432432432432432432432432432432432432432432432432439999';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(2);
var l2 = new ListNode(5);

var nextNode = l1;
for (var i = 1, len = num1.length; i < len; i++) {
  var node = new ListNode(num1.charAt(i));
  nextNode.next = node;
  nextNode = node;
}

var nextNode = l2;
for (var i = 1, len = num2.length; i < len; i++) {
  var node = new ListNode(num2.charAt(i));
  nextNode.next = node;
  nextNode = node;
}

var node = addTwoNumbers(l1, l2);
var result = [];
while (node) {
  result.push(node.val);
  node = node.next;
}

console.log(result.join('')); // Expect: 70848648648648648648648648648648648648648648648648648648614391
