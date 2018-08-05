// Steam Roller
// Advanced Solution Part 2
// [1, [2], [3, [4]]]

function steamrollArray(arr) {
    // Recursion is the breakfast for the champions
    var streamrolled = [];
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            var subArray = steamrollArray(arr[index]);
            streamrolled = streamrolled.concat(subArray);
        } else
            streamrolled.push(arr[index]);
    }

    return streamrolled;
}

console.log(steamrollArray([1, [2],
    [3, [4]]
]));

// Solution
// [ 1, 2, 3, 4 ]