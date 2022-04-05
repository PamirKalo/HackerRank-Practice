// Weighted Uniform Strings - Easy 31/31 passed
// https://www.hackerrank.com/challenges/weighted-uniform-string/copy-from/164181404
// String, Dictionary
function weightedUniformStrings(s, queries) {
    const weightsArr = [];
    s.split('').forEach((el, i, arr) => {
        const num = el.charCodeAt(0) - 96;
        if (el === s[i - 1]) weightsArr[i] = weightsArr[i - 1] + num;
        else weightsArr[i] = num;
    });

    const resultArr = queries.map((q) => {
        if (weightsArr.includes(q)) {
            return 'Yes';
        }
        return 'No';
    })

    return (resultArr);
}