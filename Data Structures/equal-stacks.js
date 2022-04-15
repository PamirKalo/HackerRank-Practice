// Equal Stacks
// https://www.hackerrank.com/challenges/equal-stacks/problem
// Prepare>Data Structures>Stacks>Equal Stacks
function equalStacks(h1, h2, h3) {
    let height1 = h1.reduce((a, b) => a + b);
    let height2 = h2.reduce((a, b) => a + b);
    let height3 = h3.reduce((a, b) => a + b);

    let i = 0;
    let j = 0;
    let k = 0;

    while (height1 !== height2 || height1 !== height3) {
        if (height1 > height2 || height1 > height3) {
            height1 -= h1[i];
            i++;
        }
        if (height1 < height2) {
            height2 -= h2[j];
            j++;
        }
        if (height1 < height3) {
            height3 -= h3[k];
            k++;
        }
        if (i > h1.length - 1 || j > h2.length - 1 || k > h3.length - 1) {
            return 0;
        }
    }

    return height1;
}