// Last updated: 5/20/2025, 10:49:36 PM
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const length = nums1.length + nums2.length;
    const isOdd = length % 2;
    const medianIndex = isOdd ? (length - 1) / 2 : length / 2;
    let current: number;
    let prev: number;
    for (let nums1Index = 0, nums2Index = 0; ;) {
        if (nums1[nums1Index] < nums2[nums2Index] || nums2[nums2Index] === undefined) {
            current = nums1[nums1Index];
            nums1Index++;
        } else {
            current = nums2[nums2Index];
            nums2Index++;
        }
        if (nums1Index + nums2Index - 1 === medianIndex) {
            return isOdd ? current : (current + prev) / 2
        }
        prev = current;
    }
};