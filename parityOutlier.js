/*
* You are given an array (which will have a length of at least 3, but could be very large)
* containing integers. The array is either entirely comprised of odd integers or
* entirely comprised of even integers except for a single integer N.
* Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*
* */

findOutlier([160, 3, 1719, 19, 11, 13, -21]);
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);

function findOutlier(integers){
    let isOddArr = 0;

    for (let i = 0 ; i < 3 ; i++){
        integers[i] % 2 === 0 ? isOddArr++ : isOddArr--;
    }
    // if is odd Array
    if(isOddArr < 0){
        for (let integer of integers ){
            // searching for Even integer
            if (integer % 2 === 0){
                return integer;
            }
        }
        //even Arr searching for Odd value
    } else {
        for (let integer of integers ){
            if (integer % 2 !== 0){
                return integer;
            }
        }
    }
}

//findOutlier([160, 3, 1719, 19, 11, 13, -21]);
//findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);