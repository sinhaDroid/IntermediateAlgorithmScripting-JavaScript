// Smallest Common Multiple
// Intermediate Solution
// 1 and 5, 3, 4

function smallestCommons(arr) {
    var range = [];
    for (let index = Math.max(arr[0], arr[1]); index >= Math.min(arr[0], arr[1]); index--) {
        range.push(index);
    }

    var lcm = range[0];
    for (let index = 0; index < range.length; index++) {
        var GCD = gcd(lcm, range[index]);
        lcm = (lcm * range[index]) / GCD;
    }
    return lcm;

    // Implements the Euclidean Algorithm
    function gcd(x, y) {
        if (y === 0)
            return x;
        else
            return gcd(y, x % y);
    }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 4]));
console.log(smallestCommons([1, 3]));

// Solution
// 60
// 12
// 6