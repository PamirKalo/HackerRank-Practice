// Super Reduced String - 15/15 passed
// Practice>Algorithms>Strings>Super Reduced String
// https://www.hackerrank.com/challenges/reduced-string/problem - Easy

// #1 Iterative solution:
const superReducedString = (s) => {
    let arr = [];
    let sArr = s;
    let flag = true;

    while (flag) {
        flag = false;
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] === sArr[i + 1]) {
                i++;
                flag = true;
            } else arr.push(sArr[i]);
        }

        if (flag === true) {
            sArr = arr;
            arr = [];
        }
    }

    if (arr.length === 0) return "Empty String";
    return arr.join("");
};

// #2 Recursive solution
const superReducedString2 = (s) => {
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) i++;
        else arr.push(s[i]);
    }

    if (arr.length === s.length) return arr.join("") || "Empty String";

    return superReducedString(arr);
};

// console.log(superReducedString2('aaabccddd'));
// console.log(superReducedString2('baab'));
// console.log(superReducedString2('aa'));