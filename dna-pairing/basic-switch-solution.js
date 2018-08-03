// DNA Pairing
// Basic Solution
// GCG returns [['G', 'C'], ['C', 'G'], ['G', 'C']]

function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var res = [];

    // Function to check with strand to pair.
    var getPaired = function (str) {
        switch (str) {
            case 'A':
                res.push(["A", "T"]);
                break;
            case 'T':
                res.push(["T", "A"]);
                break;
            case 'G':
                res.push(["G", "C"]);
                break;
            case 'C':
                res.push(["C", "G"]);
                break;
        }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        getPaired(str[i]);
    }

    return res;
}

console.log(pairElement("GCG"));

// Solution
//  [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]