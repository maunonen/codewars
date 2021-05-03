/* 
Complete the solution so that it strips all text that 
follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]) */


function solution(input, markers) {
    
    const stripSymbols = markers.join('')
    const regExpSym = new RegExp(`([${stripSymbols}])|(\s$)`, "gi");
    const res = input.split('\n').map((part, index ) => {
        let foundMatch = regExpSym.exec(part); 
        if (foundMatch) {
            return part.slice(0, foundMatch.index).trim()
        }
        return part.trim();   
    })
    return res.join('\n')
};

const string = "apples, plums % and bananas\npears\noranges !applesauce"; 
const arrEl = ["%", "!"]


console.log(solution(string, arrEl)); 