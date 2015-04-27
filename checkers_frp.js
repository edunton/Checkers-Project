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
                    return val;
                }
            );
        return this;
    }
    this.piece_at = function(row,col)
    {
        return _.find(this.config,
                      function(val){return val.row == row && val.col == col});
    }
}

function legal_move(state, event, selected)
{
    var retval = false;
    if(selected.king)
    {
        return true // TODO
    }
    else
    {
        var vert = selected.row - event.row;
        var horiz = selected.col - event.col;
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
            !state.board.piece_at(event.row,event.col) && 
                _.isObject(state.board.piece_at(event.row-1,event.col+(horiz < 0 ? -1 : 1))) 
                && !_.isObject(state.board.piece_at(event.row,event.col)) ? 
                retval = state.board.piece_at(event.row-1,event.col+(horiz < 0 ? -1 : 1)) : null;
        }
        else if(state.turn === 'RED' && vert == 2 && Math.abs(horiz) == 2)
        {
            !state.board.piece_at(event.row,event.col) && 
                _.isObject(state.board.piece_at(event.row+1,event.col+(horiz < 0 ? -1 : 1))) 
                 && !_.isObject(state.board.piece_at(event.row,event.col)) ? 
                retval = state.board.piece_at(event.row+1,event.col+(horiz < 0 ? -1 : 1)) : null;
        }
    }
    return retval;
}

function is_king(row, color)
{
    if(row == ROWS -1 && color == 'BLACK')
        return true;
    if(row == 0 && color == 'RED')
        return true;
    return false;
}

function transform_board(state,event)
{
    state.alert = '';
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










