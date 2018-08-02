// Roman Numeral Converter
// Intermediate Solution Part 2
// 36 & 97

function convertToRoman(num) {
    var romans = [
            // 10ˆi 10ˆi*5
            ["I", "V"], // 10ˆ0
            ["X", "L"], // 10ˆ1
            ["C", "D"], // 10ˆ2
            ["M"] // 10ˆ3
        ],
        digits = num.toString()
        .split('')
        .reverse()
        .map(function (item, index) {
            return parseInt(item);
        }),
        numeral = "";

    // Loop through each digit, staring with the ones place
    for (let index = 0; index < digits.length; index++) {
        // Make a Roman numeral that ignores 5-multiples and shortening rules
        numeral = romans[index][0].repeat(digits[index]) + numeral;
        // Check for a Roman numeral 5-multiple version
        if (romans[index][1]) {
            numeral = numeral
                // Change occurences of 5 * 10ˆindex to the corresponding 5-multiple Roman numeral
                .replace(romans[index][1] + romans[index][0].repeat(4), romans[index][0], romans[index + 1][0])
                // Shorten occurences of 4 * 10ˆindex
                .replace(romans[index][0].repeat(4), romans[index][0] + romans[index][1]);
        }
    }
    return numeral;
}

console.log(convertToRoman(36));
console.log(convertToRoman(97));

// Solution
// XXXIVII
// XLXXXXXIVIII