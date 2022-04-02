// Max Min
// Prepare>Algorithms>Greedy>Max Min - 17/17 passed
// https://www.hackerrank.com/challenges/angry-children/problem - Medium
// Two Pointers, Greedy
const maxMin = (k, arr) => {
    arr.sort((a, b) => a - b);
    let unfairness = arr[k - 1] - arr[0];
    for (let i = 0; i < arr.length - k + 1; i++) {
        const diff = arr[i + k - 1] - arr[i];
        unfairness = Math.min(diff, unfairness);
    }

    return unfairness;
};
