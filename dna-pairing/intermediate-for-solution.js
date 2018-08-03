// DNA Pairing
// Intermediate Solution
// GCG returns [['G', 'C'], ['C', 'G'], ['G', 'C']]

function pairElement(str) {
    // Define the map object with all pair possibilities
    var map = {
        T: 'A',
        A: 'T',
        G: 'C',
        C: 'G'
    };
    // Split str into a char array
    var strArr = str.split('');
    // Replace each array item with a 2d Array using map
    for (let index = 0; index < strArr.length; index++) {
        strArr[index] = [strArr[index], map[strArr[index]]];
    }

    return strArr;
}

console.log(pairElement("GCG"));

// Solution
//  [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]