// Steam Roller
// Intermediate Solution
// [1, [2], [3, [4]]]

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2],
    [3, [4]]
]));

// Solution
// [ 1, 2, 3, 4 ]