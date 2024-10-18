function fibonacciGenerator(n) {
    let ls = [0, 1];

    if (n === 1) {
        return [0];
    } else if (n === 0) {
        return [];
    }

    for (var i = 2; i < n; i++) {
        let nxtNum = ls[i - 1] + ls[i - 2];
        ls.push(nxtNum);
    }

    return ls;
}

let fibSequence_6 = fibonacciGenerator(6); // Output: [0, 1, 1, 2, 3, 5]
let fibSequence_10 = fibonacciGenerator(10); // Output: [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]


console.log(fibSequence_6)
console.log(fibSequence_10)