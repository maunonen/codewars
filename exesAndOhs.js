/*
    Check to see if a string has the same amount of 'x's and 'o's.
    The method must return a boolean and be case insensitive.
    The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

*/

function XO(str) {
    return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length ? true : false;

    // let xArr = 0;
    // let oArr = 0;
    //
    // str.split('').forEach((item) => {
    //     if (item.toLowerCase() === 'x'){
    //         xArr += 1;
    //     } else if (item.toLowerCase() === 'o'){
    //         oArr += 1;
    //     }
    // })
    // return xArr === oArr ? true : false;
}

console.log(XO("zpzpzpp"));