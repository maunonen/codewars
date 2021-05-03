/* 
It's 9 time!
I want to count from 1 to n. How many times will I use a '9'?
9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a positive integer.

number9(8) //should return 0
number9(9) //should return 1
number9(10) //should return 1
number9(98) //should return 18
number9(100) //should return 20 
*/

// return the number of 9's used to count out 1 to n
function number9(n){
    
   /*  let countUnderHundred; 
    let number100 = n / 100;
    let modOfHundred = n % 100; 
    let countsOfTwenty = Math.floor(n / 100) * 20; 
    console.log('mod', modOfHundred); 
    console.log('twenty', number100);  */
  
    
        let strNine = '';
        for (let i=1; i <= n; i++) {    
            let clearOther = i.toString().replace(/[^9]/gi, '')
            if (!!clearOther ){
                strNine = strNine  + clearOther
            }; 
        }   
        return strNine.length

    
   /*  if ( modOfHundred === 0){
         return countsOfTwenty 
    } 

    if ( Math.floor(number100 < 1 )){
        return findNine(modOfHundred)
    } else {
        return countsOfTwenty + findNine(modOfHundred); 
   }  */
}

const n = 100

console.log(number9(n)); 