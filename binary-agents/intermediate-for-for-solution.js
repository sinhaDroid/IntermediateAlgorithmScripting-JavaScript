// Binary Agents
// Intermediate Solution
/*
"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
*/

function binaryAgents(str) {
    // Separate the binary code by space
    str = str.split(' ');
    var power, decValue = 0,
        sentence = '';

    // Check each binary number from the array
    for (let index = 0; index < str.length; index++) {
        // Check each bit from binary number
        for (let bit = 0; bit < str[index].length; bit++) {
            // This only takes the consideration the active one
            if (str[index][bit] == 1) {
                // This is equivalent to 2 * * position
                power = Math.pow(2, +str[index].length - bit - 1);
                decValue += power;
                // Record the decimal value by adding the number to previous one
            }
        }
        // After the binary number is converted to decimal, convert it to string and store
        sentence += (String.fromCharCode(decValue));

        // Reset decimal value for next binary number
        decValue = 0;
    }

    return sentence;
}

console.log(binaryAgents("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Solution
// Aren't bonfires fun!?