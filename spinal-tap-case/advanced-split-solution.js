// Spinal Tap Case
// Advanced Solution Part 1
// This is spinal case string

function spinalCase(str) {
    // Split on whitespace and underscores and join with dash
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase('This is spinal case string'));

// Solution
// this-is-spinal-case-string