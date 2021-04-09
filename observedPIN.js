/*
* Alright, detective, one of our colleagues successfully observed our target person,
* Robby the robber. We followed him to a secret warehouse,
* where we assume to find all the stolen stuff.
* The door to this warehouse is secured by an electronic combination lock.
* Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

* The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

* He noted the PIN 1357, but he also said, it is possible that each of the digits
* he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally).
* E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

* * He also mentioned, he knows this kind of locks.
* You can enter an unlimited amount of wrong PINs,
* they never finally lock the system or sound the alarm.
* That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself
* and all variations considering the adjacent digits

* Can you help us to find all those variations?
* It would be nice to have a function,
* that returns an array (or a list in Java and C#)
* of all variations for an observed PIN with a length of 1 to 8 digits.
* We could name the function getPINs (get_pins in python, GetPINs in C#).
* But please note that all PINs, the observed one and also the results,
* must be strings, because of potentially leading '0's.
* We already prepared some test cases for you.
*  */

function getPINs(observed) {
    // TODO: This is your job, detective!
    /*const cartesian = (a) => a.reduce((a, b) => {
        return  a.flatMap(d => {

            return b.map(e =>  {
                return [d, e].flat()
                }
            )
            }
        )
    }
    );*/

    const findNeighbor = (number) => {
        const neighborArr = [];
        const pinArr = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [ undefined, 0 , undefined]];
        const offsetI = [0,1,0,-1];
        const offsetJ = [-1,0,1,0];

        for (i = 0 ; i < 4; i++){
            for (j = 0 ; j < 3; j++){
                if (number === pinArr[i][j]){
                    neighborArr.push(pinArr[i][j]);
                    for (let off = 0; off < 4 ; off++ ){
                        let ni = i + offsetI[off];
                        let nj = j + offsetJ[off];
                        if (ni < 0 || ni > 3 || nj < 0 || nj > 2 || typeof pinArr[ni][nj] === 'undefined' ){
                            continue
                        }
                        neighborArr.push(pinArr[ni][nj]);
                    }
                    return neighborArr;
                }

            }
        }

    };

    function cartesian(args) {
        var cart = [], max = args.length-1;
        function helper(arr, i) {
            for (let j=0, l=args[i].length; j<l; j++) {
                let a = arr.slice(0); // clone arr
                a.push(args[i][j]);
                if (i==max)
                    cart.push(a);
                else
                    helper(a, i+1);
            }
        }
        helper([], 0);
        return cart;
    }



    const res = observed.split('')
        .map((item) => {
            const index = parseInt(item);
            let neighbor = findNeighbor(index);
            //console.log(neighbor);
            return neighbor;
        })
    return cartesian(res).map(item => item.join(''));
    //console.log('Neighbors array',  res);
    //console.log('Combination', cartesian(res));
    //console.log('Combination', cartesian1(res));
    //console.log(cartesian(res).map(item => item.join('')));

}

//getPINs('0');
console.log(getPINs('369'));
//console.log(getPINs('369'));
// "8": ["5", "7", "8", "9", "0"],
// "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
// "369": [ "339","366","399","658","636",
//          "258",
//          "268","669","668","266","369","398",
//          "256","296","259","368","638","396",
//          "238","356","659","639","666","359",
//          "336","299","338","696","269","358",
//          "656","698","699","298","236","239"]
//   };