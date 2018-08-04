// Everything Be True
// Advanced Solution
/*
 [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex":"male"},
 {"user": "Laa-Laa", "sex": "female"}, {"user":"Po", "sex": "female"}]
*/

function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}

console.log(truthCheck([{
        "user": "Tinky-Winky",
        "sex": "male"
    }, {
        "user": "Dipsy",
        "sex": "male"
    },
    {
        "user": "Laa-Laa",
        "sex": "female"
    }, {
        "user": "Po",
        "sex": "female"
    }
], "sex"));

// Solution
// true