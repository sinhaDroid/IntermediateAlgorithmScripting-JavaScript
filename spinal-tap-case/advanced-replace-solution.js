// Spinal Tap Case
// Advanced Solution Part 2
// This is spinal case string

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
}

console.log(spinalCase('This is spinal case string'));

// Solution
// this-is-spinal-case-string