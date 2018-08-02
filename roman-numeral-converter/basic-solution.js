// Roman Numeral Converter
// Basic Solution
// 36 & 97

function convertToRoman(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanized = '';

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

console.log(convertToRoman(36));
console.log(convertToRoman(97));

// Solution
// XXXVI
// XCVII