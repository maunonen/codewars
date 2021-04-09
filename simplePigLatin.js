/*
* Move the first letter of each word to the end of it,
* then add "ay" to the end of the word.
* Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*
*  */

function pigIt(str){
    //Best solution
    //return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
    return str.split(' ')
        .map((word) => /[.,\\/#!$%\\^&\\*;:{}=\\-_`~()]/g.test(word)
            ? word
            : word.slice(1) + word.slice(0, 1).concat('ay') )
        .join(' ')
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
