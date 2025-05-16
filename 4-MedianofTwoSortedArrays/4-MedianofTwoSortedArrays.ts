// Last updated: 5/16/2025, 12:48:15 PM
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const countNodes = (node: ListNode | null, k: number): boolean => {
        let count = 0;
        while (node !== null && count < k) {
            node = node.next;
            count++;
        }
        return count === k;
    };

    const reverse = (head: ListNode | null, k: number): ListNode | null => {
        let prev: ListNode | null = null;
        let curr: ListNode | null = head;
        while (k > 0 && curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            k--;
        }
        return prev;
    };

    let dummy = new ListNode(0, head);
    let groupPrev: ListNode = dummy;

    while (countNodes(groupPrev.next, k)) {
        let kth: ListNode | null = groupPrev;
        for (let i = 0; i < k; i++) {
            kth = kth!.next;
        }

        let groupNext = kth!.next;
        // Reverse k nodes
        let prev = groupPrev.next;
        let curr = groupPrev.next;
        let next: ListNode | null = null;

        // Actual in-place reversal
        let tail = curr;
        for (let i = 0; i < k; i++) {
            next = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = next;
        }

        let temp = groupPrev.next;
        groupPrev.next!.next = curr;
        groupPrev.next = prev;
        groupPrev = temp!;
    }

    return dummy.next;
}
