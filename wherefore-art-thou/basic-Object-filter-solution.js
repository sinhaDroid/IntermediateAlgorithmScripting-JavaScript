// Wherefore Art Thou
// Basic Solution
/*
1st Argument
[{first: "Romeo", last: "Montague"},
{first: "Mercutio", last: null},
{first: "Tybalt", last: "Capulet"}]

2nd Argument
{last: "Capulet"}
*/

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        for (let index = 0; index < srcKeys.length; index++) {
            if (!obj.hasOwnProperty(srcKeys[index]) || obj[srcKeys[index]] !== source[srcKeys[index]])
                return false;
        }
        return true;
    });
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