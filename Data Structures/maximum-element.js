// Maximum Element
// Prepare>Data Structures>Stacks>Maximum Element
// https://www.hackerrank.com/challenges/maximum-element/problem - Easy
// Tags: Stack
function processData(input) {
    const arr = input.split("\n");
    const stack = [];
    for (let i = 1; i < arr.length; i++) {
        const [q, el] = arr[i].split(" ").map(Number);
        if (q === 1) stack.push(el);
        else if (q === 2) stack.pop();
        else console.log(Math.max(...stack));
    }
}
