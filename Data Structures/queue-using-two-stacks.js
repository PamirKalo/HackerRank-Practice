// Queue using Two Stacks - 30/30 passed
// PracticeData>Structures>Queues>Queue using Two Stacks
// https://www.hackerrank.com/challenges/queue-using-two-stacks/problem - medium
// #1
const queueUsingTwoStacks = (input) => {
    class SomeQueue {
        constructor() {
            this.arrOne = [];
            this.arrTwo = [];
        }

        enqueue(n) {
            while (this.arrTwo.length > 0) {
                this.arrOne.push(this.arrTwo.pop());
            }
            this.arrOne.push(n);
        }

        dequeue() {
            while (this.arrOne.length > 0) {
                this.arrTwo.push(this.arrOne.pop());
            }

            return this.arrTwo.pop();
        }

        print() {
            if (this.arrTwo.length > 0) {
                console.log(this.arrTwo[this.arrTwo.length - 1]);
            } else console.log(this.arrOne[0]);
        }
    }

    const queueStack = new SomeQueue();

    const queries = input.split("\n");
    for (let i = 1; i < queries.length; i++) {
        const [type, num] = queries[i].split(/\s+/).map(Number);
        if (type === 1) {
            queueStack.enqueue(num);
        } else if (type === 2) {
            queueStack.dequeue();
        } else queueStack.print();
    }
};