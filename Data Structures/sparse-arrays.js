// Sparse Arrays  - 12/12 passed
// https://www.hackerrank.com/challenges/sparse-arrays/problem
// Prepare>Data Structures>Arrays>Sparse Arrays
// Tags: Array
const matchingStrings = (strings, queries) => {
    const strMap = new Map();
    strings.forEach((s) => {
        if (strMap.has(s) === false) {
            strMap.set(s, 0);
        }

        const val = strMap.get(s) + 1;
        strMap.set(s, val);
    });

    const resArr = queries.map((q) => {
        if (strMap.has(q) === true) return strMap.get(q);
        return 0;
    });

    return resArr;
};
