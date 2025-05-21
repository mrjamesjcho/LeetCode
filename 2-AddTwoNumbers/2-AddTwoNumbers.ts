// Last updated: 5/20/2025, 10:59:19 PM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    let sum =  val1 + val2;
    let extraListNode = null;
    if (sum >= 10) {
        sum -= 10;
        if (l1?.next) {
            l1.next.val++;
        } else if (l2?.next) {
            l2.next.val++;
        } else {
            extraListNode = new ListNode(1, null);
        }
    }
    if (l1 && l1.next || l2 && l2.next) {
        return new ListNode(sum, addTwoNumbers(l1?.next || null, l2?.next || null))
    }
    return new ListNode(sum, extraListNode);
};