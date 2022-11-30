// Components in a graph
// Prepare>Data Structures>Disjoint Set>Components in a graph 38/38 passed
// https://www.hackerrank.com/challenges/components-in-graph/problem - Medium
// Disjoint Set, Graph

function componentsInGraph(gb) {
    let max = null;
    let min = null;
    const used = new Set();

    for (const edge of gb) {
        if (used.has(edge[0]) === true) continue;
        const component = new Set(edge);
        let loop = true;
        while (loop) {
            loop = false;
            const size = component.size;
            for (const edge of gb) {
                if (used.has(edge[0]) === true) continue;
                const [v0, v1] = [edge[0], edge[1]];
                if (component.has(v0) === true || component.has(v1) === true) {
                    component.add(v0);
                    component.add(v1);
                }
            }

            if (component.size > size) loop = true;
        }
    
        for (const v of component) used.add(v);
        const count = component.size;

        if (max === null) {
            max = count;
            min = count;
        } else if (count < min) min = count;
        else if (count > max) max = count;
    }

    return [min, max];
}

const gb = [
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
    [2, 6],
];

componentsInGraph(gb); // [ 2, 4 ]