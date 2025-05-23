// Last updated: 5/22/2025, 10:27:29 PM
function convert(s: string, numRows: number): string {
    if (s.length <= numRows || numRows === 1) {
        return s;
    }
    const zzMatrix = new Array(numRows).fill('');

    let row = 1;
    let direction = 1;
    for (let i = 0; i < s.length; i++) {
        zzMatrix[row - 1] += s[i];

        if (row === numRows) {
            direction = -1;
        } else if (row === 1) {
            direction = 1;
        }
        row += direction;
    }
    return zzMatrix.join('');
};