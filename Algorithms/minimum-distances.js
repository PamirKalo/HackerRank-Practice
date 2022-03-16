// Minimum Distances - 9/9 passed
// Practice>Algorithms>Implementation>Minimum Distances - 13-Dec-2021
// https://www.hackerrank.com/challenges/minimum-distances/problem - Easy

const minimumDistances = (a) => {
    const valuesMap = new Map();
    let minDistance = 0;
    for (let i = 0; i < a.length; i++) {
        const v = a[i];
        if (valuesMap.has(v) === true) {
            const dist = i - valuesMap.get(v);
            minDistance = minDistance || dist;
            minDistance = Math.min(minDistance, dist);
        } else valuesMap.set(v, i);

        if (minDistance === 1) break;
    }

    return minDistance || -1;
};

// console.log(minimumDistances([7, 1, 3, 4, 1, 7])); // 3