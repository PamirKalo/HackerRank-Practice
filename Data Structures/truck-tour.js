// Truck Tour
// PracticeData>Structures>Queues>Truck Tour - 12/12 passed
// https://www.hackerrank.com/challenges/truck-tour/problem - hard

const truckTour = (petrolpumps) => {
    let start = null;
    let tank = -1;
    let doLoop = true;

    while (doLoop === true) {
        for (let i = 0; i < petrolpumps.length; i++) {
            if (start === i) {
                doLoop = false;
                break;
            }
            const [amount, distance] = petrolpumps[i];
            if (tank >= 0) {
                tank = tank + amount - distance;
            } else if (amount >= distance) {
                start = i;
                tank = amount - distance;
            }
        }
    }

    return start;
};

// truckTour([[1, 5], [10, 3], [3, 4]]); // 1