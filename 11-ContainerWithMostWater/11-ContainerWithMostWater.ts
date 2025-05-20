// Last updated: 5/19/2025, 11:23:30 PM
function maxArea(height: number[]): number {
    let maxA = 0;
    let i = 0;
    let j = height.length - 1;
    do {
        let area;
        if (height[i] > height[j]) {
            area = height[j] * (j - i);
        } else {
            area = height[i] * (j - i);
        }

        if (area > maxA) {
            maxA = area;
        }
        if (height[i] >= height[j]) {
            j--;
        } else {
            i++;
        }
    } while (i < j);
    return maxA;
};