/*
* Calculate the row sums of this triangle from the row index (starting at index
*
*            1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
*
* */

function rowSumOddNumbers(n) {
    // TODO
    return Math.pow(n, 3);

    /*let sum = 0;
    let odd = 1;
    for ( let i = 0 ; i < n ; i++ ){
        for (let j = 0 ; j <= i; j++){
            if (i === n - 1 ){
                sum += odd;
            }
            odd += 2;
        }
    }
    return sum;*/
}

console.log(rowSumOddNumbers(42));
