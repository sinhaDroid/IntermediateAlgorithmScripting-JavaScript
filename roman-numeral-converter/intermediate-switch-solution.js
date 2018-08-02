// Roman Numeral Converter
// Intermediate Solution Part 1
// 36 & 97

function convertToRoman(num) {
    var romans = ["I", "V", "X", "L", "C", "D", "M"],
        ints = [],
        romanNumber = [],
        numeral = "";

    while (num) {
        ints.push(num % 10);
        num = Math.floor(num / 10);
    }

    for (let index = 0; index < ints.length; index++) {
        units(index);
    }

    function units(index) {
        numeral = romans[index * 2];
        switch (ints[index]) {
            case 1:
                romanNumber.push(numeral);
                break;
            case 2:
                romanNumber.push(numeral.concat(numeral));
                break;
            case 3:
                romanNumber.push(numeral.concat(numeral).concat(numeral));
                break;
            case 4:
                romanNumber.push(numeral.concat(romans[index * 2 + 1]));
                break;
            case 5:
                romanNumber.push(romans[index * 2 + 1]);
                break;
            case 6:
                romanNumber.push(romans[index * 2 + 1].concat(numeral));
                break;
            case 7:
                romanNumber.push(romans[index * 2 + 1].concat(numeral).concat(numeral));
                break;
            case 8:
                romanNumber.push(romans[index * 2 + 1].concat(numeral).concat(numeral).concat(numeral));
                break;
            case 9:
                romanNumber.push(romans[(index * 2)].concat(romans[(index * 2) + 2]))
                break;
        }
    }
    return romanNumber.reverse().join("").toString();
}

console.log(convertToRoman(36));
console.log(convertToRoman(97));

// Solution
// XXXVI
// XCVII