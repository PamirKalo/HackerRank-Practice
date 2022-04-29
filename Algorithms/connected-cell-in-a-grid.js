// Connected Cells in a Grid
// Prepare>Algorithms>Search>Connected Cells in a Grid
// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem
// Medium, Depth First Search
const connectedCell = (matrix) => {
    const R = matrix.length;
    const C = matrix[0].length;
    const USED = 2;
    const deltas = [0, 1, 0, -1, -1, 0, 1, 0, 1, 1, -1, 1, 1, -1, -1, -1];
    const usedMtr = [];

    matrix.forEach((row) => {
        usedMtr.push([...row]);
    });

    const dfsTry = (arr, mtr, counter) => {
        if (arr.length === 0) return counter;

        counter++;
        const [x, y] = arr.pop();
        for (let i = 0; i < deltas.length; i = i + 2) {
            const xd = x + deltas[i];
            const yd = y + deltas[i + 1];
            if (xd >= 0 && xd < R && mtr[xd][yd] === 1) {
                arr.push([xd, yd]);
                mtr[xd][yd] = USED;
            }
        }

        return dfsTry(arr, mtr, counter);
    };

    let max = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (usedMtr[r][c] === 1) {
                usedMtr[r][c] = USED;
                const count = dfsTry([[r, c]], usedMtr, 0);
                if (count > max) max = count;
                if (max > (R * C) / 2) return max;
            }
        }
    }

    return max;
};
