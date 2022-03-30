// Game of Two Stacks
// PracticeData>Structures>Stacks>Game of Two Stacks
// https://www.hackerrank.com/challenges/game-of-two-stacks/problem - medium

// #1
const twoStacks = (x, a, b) => {
    let counter = 0;
    let max = 0;
    let sum = 0;
    let i = 0;
    let j = 0;

    while (sum <= x && i < a.length) {
        sum += a[i];
        counter++;
        i++;
    }

    while (sum + b[j] <= x && j < b.length) {
        sum += b[j];
        counter++;
        j++;
    }

    max = counter;

    while (i--) {
        sum -= a[i];
        counter--;
        while (sum + b[j] <= x && j < b.length) {
            sum += b[j];
            j++;
            counter++;
        }

        if (counter > max) max = counter;
    }

    return max;
};

// twoStacks(10, [4, 2, 4, 6, 1], [2, 1, 8, 5]);
// twoStacks(20, [4, 2, 4, 6, 1], [5, 1, 1, 1]);