/* Please write a function that will take a string
 as input and return a hash. The string will be 
 formatted as such. The key will always be a 
 symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4} */


function strToHash(str){
    if ( str.length === 0){
        return {}
    }
    let handleStr = str.split(', '); 
    const hashObj = handleStr.reduce((sum, a) => {
        let arr = a.split('='); 
        Object.assign(sum, { [arr[0]]: parseInt(arr[1])}); 
        return sum; 
    },{}); 
    return hashObj;
}

const val = "a=1, b=2, c=3, d=4"; 
console.log( strToHash(val)); 