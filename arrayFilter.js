/*
    JavaScript Arrays support a filter function (starting in JavaScript 1.6).
    Use the filter functionality to complete the function given.

    The solution would work like the following:
    getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(num => {
        if ( num === 0) {
            return num
        } else if( num % 2 === 0){
            return num
        } else {
            return false
        }
    })
}

//const  arr = [29,69,11,47,43,51,9,92,38,0,45,5,52,76,6,5,75,37,52,98,0,36,5,76,86,13,61,80,99,85,96,81,13,45,79,65,86,65,93,77,37,77,23,97,83,68,56]
//const  arr = [1, 3, 9]
//const  arr = [33,25,12,68,49,54,79,81,0,32,41,81,25,85,15,28,51,58,20,1,29,68,31,52,68,14,37,73,32,96]
const  arr = [ 30,0,84,57,34,94,91,14,23]
console.log(getEvenNumbers(arr).length)
console.log(getEvenNumbers(arr))