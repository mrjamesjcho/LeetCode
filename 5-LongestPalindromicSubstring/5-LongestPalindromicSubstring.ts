// Last updated: 5/22/2025, 10:26:26 PM
function longestPalindrome(s: string): string {
    if (s.length === 1) {
        return s;
    }
    let longestPal = s[0];
    for (let p = 1; p < s.length * 2; p++) {
        if (Math.floor(p / 2) > Math.floor(s.length / 2)) {
            const longestPossiblePal = s.length - Math.floor(p / 2);
            if (longestPal.length > longestPossiblePal) {
                break;
            }
        }
        const positionPal = positionPalindrome(p, s);
        if (positionPal.length > longestPal.length) {
            longestPal = positionPal;
        }
    }
    return longestPal;
};

const positionPalindrome = (position: number, s: string) => {
    const isOddPosition = position % 2;
    const oddPositionIndex = isOddPosition ? Math.floor(position / 2) : null;
    let leftIndex = isOddPosition ? oddPositionIndex - 1 : (position - 2) / 2;
    let rightIndex = isOddPosition ? oddPositionIndex + 1 : leftIndex + 1;
    let pal = isOddPosition ? s[oddPositionIndex] : '';
    for (; leftIndex >= 0 && rightIndex < s.length; leftIndex--, rightIndex++) {
        if (s[leftIndex] === s[rightIndex]) {
            pal = s[leftIndex] + pal + s[rightIndex]
        } else {
            break;
        }
    }
    return pal
}
