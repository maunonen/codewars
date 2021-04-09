/*
You might know some pretty large perfect squares.
But what about the NEXT one?
Complete the findNextSquare method that finds the next integral
perfect square after the one passed as a parameter.
Recall that an integral perfect square is an
integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1
should be returned.
    You may assume the parameter is positive.
Exam    ples:
    findNextSquare(121) --> returns 144
    findNextSquare(625) --> returns 676
    findNextSquare(114) */


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    // Check that n is integer
    let perfectSquaer = Math.sqrt(sq);
    if (Number.isInteger(perfectSquaer)) {
        return Math.pow(perfectSquaer+1, 2);
    } else {
        return -1;
    }
}

findNextSquare(169);

