/* 
jerrysypkens.com

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. */ 

var theSize = Number(prompt("Pick the size of the chessboard:", ""));
var board = "";
for (var n = 0; n < theSize; n++ ) {
    for (var y = 0; y < theSize; y++) {
        if ((n + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
 
console.log(board);

   