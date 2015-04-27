var ROWS = 8;
var COLS = 8;
var PIECE_ROWS = 3;
var SQUARE_PARAM = 70;
var BOARD_GRID;
var MAIN_STREAM = 0;

function Board() {
    var init_board = [];
    for(var i = 0; i < 3; ++i)
        for(var j = 0; j < COLS; ++j) {
            var r = i;
            var c = j;
            if((i%2 == 0 && j%2 == 1) || (i%2 == 1 && j%2 == 0))
            {
                init_board.push({row: r, col: c,color: "BLACK", king: false, selected: false});
            }
            else 
            {
                init_board.push({row: ROWS - 1 - r, col: c,color: "RED", king: false, selected: false});
            }
        }
    this.config = init_board;
    this.remove = function(row,col)
    {
        this.config = _.reject(this.config, 
                               function(val){return val.row == row && val.col == col});
        return this;
    }
    this.add = function(row,col,color,king)
    {
        this.config.push({row: row, col: col,color: color, king: king, selected: false});
        return this;
    }
    this.king = function(row,col)
    {
        this.config = _.map(this.config,
            function(val){
                if(val.row == row && val.col == col)
                    val.king = true;
                return val;
            });
        return this;
    }
    this.toggle_select = function(row,col,selected)
    {
        this.config = _.map(this.config,
            function(val){
                if(val.row == row && val.col == col)
                    val.selected = selected;
                return val;
            });
        return this;
    }
    this.get_selected = function()
    {
        return _.select(this.config, function(val){ return val.selected;});
    }
    this.unselect_all = function()
    {
        this.config = _.map(this.config,
                function(val) {
                    val.selected = false;   
                }
            );
        return this;
    }
}

window.addEvent("domready", function()
{
    var board = document.getElementById("checkerboard");
    var board_grid = []

	for (var row = 0; row < ROWS; row ++)
	{
        var newRow = document.createElement("div");
        var row_arr = [];
        board.appendChild(newRow);
        newRow.id = "row" + parseInt(row);
		for (var column = 0; column < COLS; column ++)
		{
            var newCol = document.createElement("canvas");
            newRow.appendChild(newCol);
            newCol.height = SQUARE_PARAM;
            newCol.width = SQUARE_PARAM;
            var colID = "row" + parseInt(row) + "col" + parseInt(column);
            newCol.id = colID;
            newCol.piece = "NONE";
            newCol.king = false;
            newCol.selected = false;
            
            var context2D = newCol.getContext("2d");
            
            if (row%2 == column%2)
                context2D.fillStyle = "black";
            else
                context2D.fillStyle = "red";
            
			context2D.fillRect(0, 0, SQUARE_PARAM, SQUARE_PARAM);
            row_arr.push(newCol);
            
            var r = row;
            var c = column;
            //newCol.onclick = function(){spaceCallback(r, c)};
            var bjsstream = $('#'+colID).asEventStream('click');
            if(MAIN_STREAM != 0) 
                MAIN_STREAM = MAIN_STREAM.merge(bjsstream.map({row:r,col:c}));
            else 
                MAIN_STREAM = bjsstream;
		}
        board_grid.push(row_arr);
	}
    console.log(board_grid);
    BOARD_GRID = board_grid;
    
    //drawBoard(new Board());
    init_frp();
    
    /*
    for(var i = 0; i < 3; ++i)
        for(var j = 0; j < COLS; ++j) {
            if((i%2 == 0 && j%2 == 1) || (i%2 == 1 && j%2 == 0)) 
                drawPiece(i,j,"BLACK",true);
            else drawPiece(ROWS-1-i,j,"RED",true);   
        }*/

});

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
    for(var i in boardObj.config)
    {
        var piece = boardObj.config[i];
        drawPiece(piece.row, piece.col, piece.color, piece.king);
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