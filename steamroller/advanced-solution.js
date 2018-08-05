// Steam Roller
// Advanced Solution
// [1, [2], [3, [4]]]

function steamrollArray(arr) {
    return arr.toString()
        .replace(',,', ',') // "1,2,,3 => "1,2,3"
        .split(',') // ['1', '2', '3']
        .map(function (v) { 
            if (v == '[object Object]') // bring back empty objects
                return {};
            else if (isNaN(v)) // if not a number
                return v;
            else // if a number convert it to a string
                return parseInt(v);
        });
}

console.log(steamrollArray([1, [2],
    [3, [4]]
]));

// Solution
// [ 1, 2, 3, 4 ]