// Pairs
// Prepare>Algorithms>Search>Pairs - 17/17 passed
// https://www.hackerrank.com/challenges/pairs/problem - Medium

function pairs(k, arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const binarySearch = (arr, key, start, end) => {
        if (start > end) {
            return -1;
        }

        const midInd = start + (end - start) / 2 | 0;

        if (arr[midInd] === key) {
            return midInd;
        }

        if (arr[midInd] > key) {
            return binarySearch(arr, key, start, midInd - 1);
        } else if (arr[midInd] < key) {
            return binarySearch(arr, key, midInd + 1, end);
        }
    }

    let pairCounter = +0;

    sortedArr.forEach((num, i, arr) => {
        const ind = binarySearch(sortedArr, num + k, i + 1, arr.length - 1);
        if (ind > -1) {
            pairCounter += 1;
        }
    });

    return pairCounter;
}