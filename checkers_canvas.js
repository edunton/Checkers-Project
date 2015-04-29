/* 
 * checker_canvas.js
 * Author: Eric Dunton
 * Draws the checkers onto the JS Canvas
 */

//draws checker onto the board
function drawPiece(row,col,color,king,sel)
{ 
    var canvasElem = BOARD_GRID[row][col];
    var context = canvasElem.getContext('2d');
    var centerX = canvasElem.width / 2;
    var centerY = canvasElem.height / 2;
    var radius = canvasElem.height / 2 -2;
    
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color === 'RED' ? '#aa0000' : '#000000';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#226600';
    context.stroke();
    
    if(king){
        context.font="20px Georgia";
        context.fillStyle = '#00eeff';
        context.fillText("K!",centerX,centerX);
        canvasElem.king = true;
    }
    if(sel){
        selectPiece(row, col);
    }
    else
    {
        unselectPiece(row, col);
    }
}

//calls ATS function 
function removePiece(row,col,clearall)
{
    if(clearall != 'CLEAR') 
        ats_remove_checker(row,col);
    
    var canvasElem = BOARD_GRID[row][col];
    var context = canvasElem.getContext('2d');
    context.fillStyle = (row%2 != col%2) ? "red" : "black";
    context.fillRect(0,0, SQUARE_PARAM, SQUARE_PARAM);
    //canvasElem.piece = "NONE";
}

//clears the board
function clearAll()
{
    for(var i = 0; i < ROWS; ++i)
        for(var j = 0; j < COLS; ++j)
            removePiece(i,j,'CLEAR');
}

//Draws cyan circle to denote seleced
function selectPiece(row,col)
{
    var canvasElem = BOARD_GRID[row][col];
    canvasElem.selected = true;
    var context = canvasElem.getContext('2d');
    var centerX = canvasElem.width / 2;
    var centerY = canvasElem.height / 2;
    var radius = canvasElem.height / 2 -2;
    
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.strokeStyle = '#00ffff';
    context.stroke();
}

//Draws green unselected circle around checker
function unselectPiece(row,col)
{
    var canvasElem = BOARD_GRID[row][col];
    canvasElem.selected = false;
    var context = canvasElem.getContext('2d');
    var centerX = canvasElem.width / 2;
    var centerY = canvasElem.height / 2;
    var radius = canvasElem.height / 2 -2;
    
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
}

// call to ATS to draw board
function drawBoard(boardObj)
{
    clearAll();
    ats_draw_board(boardObj);
}
