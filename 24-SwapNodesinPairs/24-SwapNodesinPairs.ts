// Last updated: 5/19/2025, 11:24:48 PM
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

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
 
    // new head is second node
    const newHead = head.next;

    // set old head.next to rest of list swapped
    head.next = swapPairs(newHead.next);

    // set newHead.next to old head
    newHead.next = head;

    return newHead;
};