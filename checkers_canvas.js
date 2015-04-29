function drawPiece(row,col,color,king)
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
    
    canvasElem.piece = color;
}

function removePiece(row,col)
{
    var canvasElem = BOARD_GRID[row][col];
    var context = canvasElem.getContext('2d');
    context.fillStyle = (row%2 != col%2) ? "red" : "black";
    context.fillRect(0,0, SQUARE_PARAM, SQUARE_PARAM);
    canvasElem.piece = "NONE";
}

function clearAll()
{
    for(var i = 0; i < ROWS; ++i)
        for(var j = 0; j < COLS; ++j)
            removePiece(i,j);
}

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

function drawBoard(boardObj)
{
    clearAll();
    ats_draw_board(boardObj );
    for(var i = 0; i < boardObj.config.length; ++i)
    {
        var piece = boardObj.config[i];
        //drawPiece(piece.row, piece.col, piece.color, piece.king);
        if(piece.selected) selectPiece(piece.row, piece.col);
        else unselectPiece(piece.row, piece.col);
    }
}

function spaceCallback(row,col)
{

    var canvasElem = BOARD_GRID[row][col];
    if(canvasElem.piece != "NONE")
        if(canvasElem.selected) unselectPiece(row,col);
        else selectPiece(row,col)
}