/* 
 * checker_DOM_init.js
 * Author: Eric Dunton
 * Initiates the state of the canvas when the program loads
 */

//helper function to parse url args
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? false : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//initiate events
window.addEvent("domready", function()
{
    //checks for change from default 8x8 board
    var chgrows = parseInt(getParameterByName('row'));
    var chgcols = parseInt(getParameterByName('col'));
    var chgplrs = parseInt(getParameterByName('plr'));
    
    if(chgrows && chgcols && chgplrs)
    {
        ROWS = chgrows > 3 ? chgrows: ROWS;
        COLS = chgcols > 3 ? chgcols: COLS;
        PIECE_ROWS = chgplrs < ROWS/2 ? chgplrs: PIECE_ROWS;
        CKR_TOKENS = COLS*PIECE_ROWS;
        SQUARE_PARAM = 600/(COLS < ROWS ? ROWS: COLS);
    }
    
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

});
