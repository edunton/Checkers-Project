/*
 * checkers_frp.js
 * Author: Eric Dunton
 * Utilizes FRP and Bacon JS to generate the board
 */

// Board Object that represents the state of the board
function Board() {
    
    // Creates the initial state of a Board
    var init_board = [];
    for(var i = 0; i < PIECE_ROWS; ++i)
        for(var j = 0; j < COLS; ++j) {
            var r = i;
            var c = j;
            if(i%2 != j%2)
            {
                init_board.push({row: r, col: c,color: "BLACK", king: false, selected: false});
            }
            else 
            {
                init_board.push({row: ROWS - 1 - r, col: c,color: "RED", king: false, selected: false});
            }
        }
    
    //array representing the checkers on the board
    this.config = init_board;
    
    //removes a piece from the board
    this.remove = function(row,col)
    {
        this.config = _.reject(this.config, 
                               function(val){return val.row == row && val.col == col});
        return this;
    }
    
    //adds a checker to the board
    this.add = function(row,col,color,king)
    {
        this.config.push({row: row, col: col,color: color, king: king, selected: false});
        return this;
    }
    
    //makes a piece a king
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
    
    //toggles the select state of a piece
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
    
    //Get the pieces that are selected
    this.get_selected = function()
    {
        return _.select(this.config, function(val){ return val.selected;});
    }
    
    //unselects all the pieces
    this.unselect_all = function()
    {
        this.config = _.map(this.config,
                function(val) {
                    val.selected = false;
                    return val;
                }
            );
        return this;
    }
    
    //returns the piece at the row and column
    this.piece_at = function(row,col)
    {
        return _.find(this.config,
                      function(val){return val.row == row && val.col == col});
    }
}

//decides if a move is legal, returns true if it is, 
//returns a piece that is to be removed
function legal_move(state, event, selected)
{
    var vert = selected.row - event.row;
    var horiz = selected.col - event.col;
    var retval = false;
    
    //king case
    if(selected.king)
    {
        if(Math.abs(vert) == 1 
            && Math.abs(horiz) == 1
            && !state.board.piece_at(event.row,event.col))
            return true;
        
        if(Math.abs(vert) == 2 
            && Math.abs(horiz) == 2
            && !state.board.piece_at(event.row,event.col))
        {
            var inspect = state.board.piece_at(
                    event.row+(vert < 0 ? -1 : 1),
                    event.col+(horiz < 0 ? -1 : 1));
            if(!state.board.piece_at(event.row,event.col) 
                && _.isObject(inspect) 
                && inspect.color != state.turn
                && !_.isObject(state.board.piece_at(event.row,event.col)))
                return inspect;
        }
    }
    //man case
    else
    {
        if(state.turn === 'BLACK' && vert == -1 && Math.abs(horiz) == 1)
        {
            if(!state.board.piece_at(event.row,event.col))
                return true;
        }
        else if(state.turn === 'RED' && vert == 1 && Math.abs(horiz) == 1)
        {
            if(!state.board.piece_at(event.row,event.col))
                return true;
        }
        else if(state.turn === 'BLACK' && vert == -2 && Math.abs(horiz) == 2)
        {
            var inspect = state.board.piece_at(event.row-1,event.col+(horiz < 0 ? -1 : 1));
            if (!state.board.piece_at(event.row,event.col) 
                && _.isObject(inspect) 
                && inspect.color === 'RED'
                && !_.isObject(state.board.piece_at(event.row,event.col)))
                return inspect;
        }
        else if(state.turn === 'RED' && vert == 2 && Math.abs(horiz) == 2)
        {
            var inspect = state.board.piece_at(event.row+1,event.col+(horiz < 0 ? -1 : 1));
            if(!state.board.piece_at(event.row,event.col) 
                && _.isObject(inspect)
                && inspect.color === 'BLACK'
                && !_.isObject(state.board.piece_at(event.row,event.col)))
                return inspect;
        }
    }
    return retval;
}

//checks if a piece needs to be kinged
function is_king(row, color)
{
    if(row == ROWS -1 && color == 'BLACK')
        return true;
    if(row == 0 && color == 'RED')
        return true;
    return false;
}

//transforms the board according to the event
function transform_board(state,event)
{
    state.alert = '';
    
    //End Turn button pressed
    if(event == "end")
    {
        if(state.jumps > 0)
        {
            state.turn = state.turn === 'BLACK' ? 'RED' : 'BLACK';
            state.jumps = 0;
            state.board = state.board.unselect_all();
            return state;
        }
        state.alert = 'Move needs to be made before turn can end';
        return state;
    }
    
    //selection attempt
    var selected = state.board.get_selected();
    if (selected.length == 0)
    {
        var is_piece = state.board.piece_at(event.row,event.col);
        if(is_piece)
        {
            var piece = is_piece;
            if(piece.color === state.turn)
            {
                state.board = state.board.toggle_select(event.row,event.col,true);
            }
            else
            {
                state.board = state.board.unselect_all();
            }
                
        }
        else
        {
            state.board = state.board.unselect_all();
        }
    }
    //move checker attempt
    else if (selected.length == 1)
    {
        if(state.board.piece_at(event.row,event.col))
        {
            if(state.jumps == 0) state.board = state.board.unselect_all();
            else state.alert = 'Must move current piece or end turn';
        }
        else {
            var maybe_piece = legal_move(state, event,selected[0]);
            if(maybe_piece)
            {
                if(_.isObject(maybe_piece))
                {
                    state.board = state.board
                                    .remove(maybe_piece.row,maybe_piece.col)
                                    .add(event.row,event.col,selected[0].color,
                                         selected[0].king || is_king(event.row,selected[0].color))
                                    .remove(selected[0].row,selected[0].col)
                                    .toggle_select(event.row,event.col,true);
                    state.jumps += 1;
                    ats_remove_checker(maybe_piece.row,maybe_piece.col);
                }
                else if(state.jumps == 0)
                {
                    state.board = state.board
                                    .remove(selected[0].row,selected[0].col)
                                    .add(event.row,event.col,selected[0].color,
                                         selected[0].king || is_king(event.row,selected[0].color));
                    state.turn = state.turn === 'BLACK' ? 'RED' : 'BLACK';
                    state.jumps = 0;
                }
                else
                {
                    state.alert = 'Non-valid Move';
                }
            }
            else
            {
                state.alert = 'Non-valid Move';
            }
        }
    }
    else
    {
        if(state.jumps == 0) state.board = state.board.unselect_all();
    }
    
    return state;
}

//FRP with Bacon JS
function init_frp(msgElem, button) {
    
    MAIN_STREAM = $('#'+button).asEventStream('click').map("end").merge(MAIN_STREAM);
    var make_move = MAIN_STREAM.scan(
                    {board: new Board(), turn: 'BLACK', jumps: 0, alert: ''},
                    function(state,event){return transform_board(state,event);}
                );
    make_move.onValue(
        function(prop){
            drawBoard(prop.board);
            document.getElementById(msgElem).innerHTML = "TURN: "+prop.turn;
            if(prop.alert != '') alert(prop.alert);
        });
    
}










