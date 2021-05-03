/* 
At a job interview, you are challenged to write 
an algorithm to check if a given string, s, 
can be formed from two other strings, part1 and part2.

The restriction is that the characters 
in part1 and part2 should be in the same order as in s.

The interviewer gives you the following 
example and tells you to figure out the 
rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
 */


function isMerge(s, part1, part2) {
    
    if (s.length){ 
        return false
    }
    const str1 = part1.trim().split(''); 
    const str2 = part2.trim().split(''); 
    const arrSring = s.trim().split(''); 
    let arrExist = []; 
    stringLoop:
    for(let i = 0; i < s.length ; i++){
        
        if( arrSring[i] === str1[0]){
            arrExist.push(str1.shift()); 
            continue
        }
        if( arrSring[i] === str2[0]){
            arrExist.push(str2.shift());
            continue
        }
        return false
    }
    return true
}



const str1 = 'P(s^>N.X d'; 
const str2 = 'P(s^>N4Xc'; 
const s = 'P(s^>N4P(s^>N.X dXc'; 
console.log(isMerge(s, str1, str2)); 