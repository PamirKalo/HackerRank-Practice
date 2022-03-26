// Funny String - 9/9 passed
// Practice>Algorithms>Strings>Funny String
// https://www.hackerrank.com/challenges/funny-string/problem - Easy

// #1 Iterative solution:
const funnyString1 = (s) => {
    const len = s.length;
    if (len < 3) return "Funny";
    const middle = len % 2 === 0 ? len / 2 - 1 : (len / 2) | 0;

    for (let i = 0; i < middle; i++) {
        const diff = s[i].charCodeAt(0) - s[i + 1].charCodeAt(0);
        const diffMirror =
            s[len - 1 - i].charCodeAt(0) - s[len - i - 2].charCodeAt(0);
        if (Math.abs(diff) !== Math.abs(diffMirror)) return "Not Funny";
    }

    return "Funny";
};

// console.log(funnyString1('aaaaaaaaa'));
// console.log(funnyString1('acxz'));
// console.log(funnyString1('bcxz'));

// #2 Recursive solution:
const funnyString3 = (s) => {
    const len = s.length;
    if (len < 3) return "Funny";
    const diff = s[0].charCodeAt(0) - s[1].charCodeAt(0);
    const diffMirror = s[len - 1].charCodeAt(0) - s[len - 2].charCodeAt(0);
    if (Math.abs(diff) !== Math.abs(diffMirror)) return "Not Funny";

    return funnyString3(s.slice(1, len - 1));
};

// console.log(funnyString3('a'));
// console.log(funnyString3('acxz'));
// console.log(funnyString3('bcxz'));