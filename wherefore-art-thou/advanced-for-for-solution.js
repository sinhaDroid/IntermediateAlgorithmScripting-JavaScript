// Wherefore Art Thou
// Advanced Solution Part 2
/*
1st Argument
[{first: "Romeo", last: "Montague"},
{first: "Mercutio", last: null},
{first: "Tybalt", last: "Capulet"}]

2nd Argument
{last: "Capulet"}
*/

function whatIsInAName(collection, source) {
    var arr = [];

    var name,
        key, soVal, coVal;

    for (name in source) {
        soVal = source[name];
    }

    for (let index = 0; index < collection.length; index++) {
        var obj = collection[index];
        for (key in obj) {
            coVal = obj[key];
            if (coVal == soVal && name == key) {
                arr.push(obj);
            }
        }
    }

    // we return the array
    return arr;
}

console.log(whatIsInAName([{
        first: "Romeo",
        last: "Montague"
    },
    {
        first: "Mercutio",
        last: null
    },
    {
        first: "Tybalt",
        last: "Capulet"
    }
], {
    last: "Capulet"
}));

// Solution
// [ { first: 'Tybalt', last: 'Capulet' } ]