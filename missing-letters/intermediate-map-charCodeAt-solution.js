// Missing Letters
// Intermediate Solution Part 1
// abce

function fearNotLetter(str) {
    var compare = str.charCodeAt(0),
        missing;

    str.split('').map(function (letter, index) {
        if (str.charCodeAt(index) == compare)
            ++compare;
        else
            missing = String.fromCharCode(compare);
    });

    return missing;
}

console.log(fearNotLetter("abce"));

// Solution
// d