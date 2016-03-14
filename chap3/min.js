// jerrysypkens.com 
//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    if (a > b)
        return b;
    else 
        return a;
}

console.log(min(2, 10));
console.log(min(200, 1000));

// console logs = 2 
// console logs = 200 