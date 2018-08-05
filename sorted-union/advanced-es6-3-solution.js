// Sorted Union
// Advanced Solution using es6 Part 2
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique(...arr) {
    return arr.reduce((a, c) => a.concat(c.filter(v => a.indexOf(v) == -1)), []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]