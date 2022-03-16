// Counter game - 18/18 passed
// Practice>Algorithms>Bit Manipulation>Counter game - 26-Dec-2020
// https://www.hackerrank.com/challenges/counter-game/problem - Medium
// Short and clean solution with regex and binary representation:

const counterGame = (n) => {
    const binary = n.toString(2);
    const reducedBinary = binary.replace(/0+1/g, "1");

    if (reducedBinary.length % 2 === 0) return "Louise";
    return "Richard";
};

// counterGame(104); // Louise