/* Assume "#" is like a backspace in string. 
This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" 

*/

function cleanString(s) {
    
/* const res = []; 
for ( let i = 0; i < s.length ; i++  ){
    if ( s[i] === '#'){
        res.shift(); 
        continue
    }
    res.push(s[i]); 
}

return res */
    const res =[]
    s.split('').forEach(char => char === '#' ? res.pop() : res.push(char)); 
    return res.join('')
};



str = "abc#d##c" ; 
console.log(cleanString(str)); 