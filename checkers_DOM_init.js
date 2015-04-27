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
    
    var boardobj = new Board();
    
    init_frp('tlabel','endturn');
    
    /*drawBoard(boardobj);
    
    setTimeout(function(){
        boardobj = boardobj.toggle_select(0,1,true);
        drawBoard(boardobj)},3000);
    
    
    for(var i = 0; i < 3; ++i)
        for(var j = 0; j < COLS; ++j) {
            if((i%2 == 0 && j%2 == 1) || (i%2 == 1 && j%2 == 0)) 
                drawPiece(i,j,"BLACK",true);
            else drawPiece(ROWS-1-i,j,"RED",true);   
        }*/

});
