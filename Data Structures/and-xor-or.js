// AND xor OR - 32/32 passed
// Practice>Data Structures>Stacks>AND xor OR
// https://www.hackerrank.com/challenges/and-xor-or/problem - Hard
// Given an array of distinct elements. Let M1 and M2 be the smallest and the
// next smallest element in the interval [L, R] where 1<=L<R<=N
// Si = (((M1 & M2) ^ (M1 | M2)) & (M1 ^ M2));
// Your task is to find the maximum possible value of Si.

const andXorOr1 = (a) => {
    let maxS = 0;
    for (let i = 0; i < a.length - 1; i++) {
        const m1 = a[i];
        const m2 = a[i + 1];
        const s = m1 ^ m2;
        if (s > maxS) maxS = s;
        if (a[i - 1] < m1 && m1 > m2) {
            const s1 = a[i - 1] ^ m2;
            if (s1 > maxS) maxS = s1;
        }
    }

    console.log(maxS);
    return maxS;
};

// andXorOr1([9, 6, 3, 5, 2]);