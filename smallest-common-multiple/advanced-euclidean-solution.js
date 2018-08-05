// Smallest Common Multiple
// Advanced Solution
// 1 and 5, 3, 4

function smallestCommons(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var grandLCM;

    for (let index = min; index < max; index++) {
        if (index === min)
            grandLCM = (index * (index + 1) / gcd(index, index + 1));
        else
            grandLCM = (grandLCM * (index + 1)) / gcd(grandLCM, index + 1);
    }
    return grandLCM;

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