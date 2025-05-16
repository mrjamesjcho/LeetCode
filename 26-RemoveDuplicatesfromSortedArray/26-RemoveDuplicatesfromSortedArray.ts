// Last updated: 5/16/2025, 12:47:12 PM
function removeDuplicates(nums: number[]): number {
    let duplicates = 0;
    for (let i = 1, j = 1; j < nums.length; i++, j++) {
        while (nums[i - 1] === nums[j]) {
            j++;
            duplicates++
        }
        nums[i] = nums[j];
    }
    return nums.length - duplicates;
};