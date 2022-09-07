// Picking Numbers - 9/9 passed
// Prepare>Algorithms>Implementation>Picking Numbers
// https://www.hackerrank.com/challenges/picking-numbers/problem - Easy
function pickingNumbers(a) {
    a.sort((n1, n2) => n1 - n2);
    let count = 0;
    let maxCount = 0;
    let first = a[0];
    for (let i = 0; i < a.length; i++) {
        if (Math.abs(a[i] - first) > 1) {
            first = a[i];
            maxCount = Math.max(count, maxCount);
            count = 1;
        } else count++;
    }

    return Math.max(count, maxCount);
}
