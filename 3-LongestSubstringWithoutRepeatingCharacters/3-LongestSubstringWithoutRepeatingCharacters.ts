// Last updated: 5/20/2025, 11:01:02 PM
function lengthOfLongestSubstring(s: string): number {
    let longestSubstring = "";
    let currentSubstring = "";
    [...s].forEach((char, index) => {
        const existingCharIndex = currentSubstring.indexOf(char);
        if (existingCharIndex > -1) {
            currentSubstring = currentSubstring.substring(existingCharIndex + 1) + char;
        } else {
            currentSubstring += char;
        }
        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    });
    return longestSubstring.length;
};