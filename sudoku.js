/* 
Write a function that will solve a 9x9 Sudoku puzzle. 
The function will take one argument consisting of the 
2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" 
(i.e. determinable; there will be no need to assume 
and test possibilities on unknowns) and can be 
solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.




var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]]; */

function sudoku(puzzle) {
    console.log(puzzle)
    console.log('--------------------------')
    
    const newArr = [];
    
    // loop throuht out column i - value of row
    for ( i = 0 ; i < 9 ; i++){
        // loop throuht out row j - value of column 
        //console.log('new row', i); 
        columnLoop:
        for ( j = 0 ; j < 9 ; j++){
            console.log('new column', j); 
            let zeroPuzzle = puzzle[i][j];
            if (zeroPuzzle === 0) {
                // brute force numbers
                //console.log('Zero puzzle', i , j);  
                numberLoop:
                for ( let number = 1 ; number  < 10 ; number++){
                    //let isInRow = checkRow(number, i, j)
                    let isInvalid; 
                    // check for line
                    //console.log(puzzle); 
                    for ( let line = 0 ; line < 9 ; line++){
                        //console.log('row number', number)
                        //console.log('elemen', puzzle[i][line])
                        if ( line === j || puzzle[i][line] === 0){
                            continue
                        }
                        let rowNumber =  puzzle[i][line]; 
                        if ( number === rowNumber ){
                            continue numberLoop
                        }
                    }
                    
                    for (let column = 0 ; column < 9 ; column++ )  {
                        
                        if (column === i || puzzle[column][j] === 0 ){
                            continue
                        }
                        let columnNumber = puzzle[column][j]; 
                        if (number === columnNumber ){
                            continue numberLoop
                        } 
                    }
                    // check square 
                    // start point 
                    let startI = Math.floor(i/3) * 3; 
                    let startJ = Math.floor(j/3) * 3; 
                    let endSquareI = startI + 3; 
                    let endSquareJ = startJ + 3; 


                    for (startI ; startI < endSquareI ; startI++ ){
                        for (startJ ; startJ < endSquareJ ; startJ++ ){
                            if (
                                puzzle[startI][startJ] === puzzle[i][j] || 
                                puzzle[startI][startJ] === 0
                                ){
                                continue
                            }
                            let squareNumber = puzzle[startI][startJ]
                            if (number === squareNumber ){
                                continue numberLoop
                            } 
                        }
                    }
                    
                    puzzle[i][j] = number                 
                    continue columnLoop
                }
            }        
        }
    }
    return puzzle; 
}

let puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]; 

console.log(sudoku(puzzle)); 