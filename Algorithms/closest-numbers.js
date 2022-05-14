// Closest Numbers
// https://www.hackerrank.com/challenges/closest-numbers/problem
// PrepareAlgorithms>Sorting>Closest Numbers
// Tags: Sorting
const closestNumbers = (arr)=> {
    const unique = new Set(arr);
    const sorted = [...unique].sort((a, b) => a - b);
    let pairs = [];
    let delta = sorted[1] - sorted[0];
    for (let i = 0; i < sorted.length - 1; i++) {
        if (Math.abs(sorted[i] - sorted[i + 1]) < delta) {
            delta = sorted[i] - sorted[i + 1];
            pairs = [sorted[i], sorted[i + 1]]
        } else if (sorted[i] - sorted[i + 1] === delta) {
            pairs.push(sorted[i], sorted[i + 1]);
        }
    }

    return pairs;
}
