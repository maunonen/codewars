/*
* You will be given a string (x) featuring a cat 'C' and a mouse 'm'.
* The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position.
* The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
* */

function catMouse(x){

    return /C.{0,3}m/.test(x) ? 'Caught!' : 'Escaped!'
    /*let run = false
    for ( let step of x ){
        let countStep = 0
        if ( step === 'C'){
            run = true
            continue
        } else if (step === '.') {
            countStep++
            continue
        } else if ( step === 'm' && countStep < 3 ){

        }
    }*/
}

const str = 'C...m'
console.log(catMouse('C..m'))