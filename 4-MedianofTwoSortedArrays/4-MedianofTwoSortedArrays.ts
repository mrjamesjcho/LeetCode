// Last updated: 5/16/2025, 12:50:16 PM
function twoSum(nums: number[], target: number): number[] {
    const diffObj = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (diffObj[diff] !== undefined) {
            return [diffObj[diff], i];
        }
        diffObj[num] = i;
    }
};