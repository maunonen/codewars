/*
* This time no story, no theory. The examples below show you how to write function accum:

Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
* */

function accum(s) {
        const strArr = s.toLowerCase()
                .split('')
                .map((char, i)=>{
                    let row = char.toUpperCase()
                    for (let j = 0 ; j < i ; j++ ){
                        row += char
                    }
                    return row;
                })
                .join('-');
        return strArr;
}

accum("RqaEzty") ;