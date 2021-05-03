/* 
Complete the function/method (depending on the language) 
to return true/True when its argument is an array that has 
the same nesting structures and same corresponding length 
of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' 
declared and defined that returns true if its argument is an array, false otherwise. */

Array.prototype.sameStructureAs = function (other) {
    console.log('this', this); 
    console.log('other', other); 
    console.log(this.length); 
    console.log(other.length); 
    let isTheSame = true; 
    if (this.length !== other.length) {
        return false
    }

    for ( let i = 0 ; i < this.length ; i++ ) {
        if ( Array.isArray(this[i]) && Array.isArray(other[i])){
            if (!this[i].sameStructureAs(other[i])) {
                isTheSame = false; 
                break
            }; 
        } else if ( Array.isArray(this[i]) && !Array.isArray(other[i])) {
            isTheSame = false
            break 
        }
    }
    return isTheSame
    
/*     let thisArrStr = JSON.stringify(this)
                            .replace(/[^[,\]]/gi, '');

    let otherArrStr = JSON.stringify(other)
                            .replace(/[^[,\]]/gi, '');

    console.log(this);
    console.log(other);
    console.log(thisArrStr); 
    console.log(otherArrStr);
    return thisArrStr === otherArrStr; 
 */};

const arr = [[[],[]]] ; 
const compArr = [[1,1]]; 

console.log(arr.sameStructureAs(compArr)); 