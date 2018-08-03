// Spinal Tap Case
// Basic Solution
// This is spinal case string

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Replace space and underscores and join with dash
    return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This is spinal case string'));

// Solution
// this-is-spinal-case-string