/* 
I will give you an integer (N) and a string. Break the string 
up into as many substrings of N as you can without spaces. 
If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g' */


function stringBreakers(n, string){
    //
    return string
        .replace(/\s/gi, '')
        .split('')
        .map((char, index) => (index + 1) % n === 0 && index + 1 !== string.length ? char + '\n' : char)
        .join('')
}

const string = "This is an example strin";
const n = 5; 

console.log(stringBreakers(n, string)); 