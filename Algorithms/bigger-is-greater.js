// Bigger is Greater
// Practice>Algorithms>Implementation>Bigger is Greater - 19-Feb-2022
// https://www.hackerrank.com/challenges/bigger-is-greater/problem - Medium
const biggerIsGreater = (w) => {
    const wArr = w.split("");
    let firstLessInd = null;
    for (let i = wArr.length - 1; i >= 0; i--) {
        if (w.charCodeAt(i) < w.charCodeAt(i + 1)) {
            firstLessInd = i;
            break;
        }
    }

    if (firstLessInd === null) return "no answer";

    for (let i = wArr.length - 1; i >= firstLessInd + 1; i--) {
        if (w.charCodeAt(i) > w.charCodeAt(firstLessInd)) {
            [wArr[firstLessInd], wArr[i]] = [wArr[i], wArr[firstLessInd]];
            break;
        }
    }

    const leftPart = wArr.slice(0, firstLessInd + 1);
    const rightPart = wArr.slice(firstLessInd + 1).reverse();
    const resArr = [...leftPart, ...rightPart];

    return resArr.join("");
};
