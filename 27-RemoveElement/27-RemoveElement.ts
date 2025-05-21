// Last updated: 5/21/2025, 4:20:00 PM
function removeElement(nums: number[], val: number): number {
    let k = nums.length;
    for (let i = 0, j = nums.length - 1; i < nums.length; i++) {
        if (nums[i] === val && i <= j) {
            while (nums[j] === val && j > 0 && i < j) {
                j--;
                k--;
            }
            nums[i] = nums[j];
            j--;
            k--;
        }
    }
    return k;
};