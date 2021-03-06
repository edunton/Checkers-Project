(*
draw_checkers_vtypes.dats
Author: Eric Dunton
*)

#include
"share/atspre_define.hats"

#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "my_dynload"

staload
"./draw_checkers_vtypes.sats"

#include
"{$LIBATSCC2JS}/staloadall.hats"

(*****)
//  Tokens
(*****)

local
assume token = int
in

implement
token_takeout() = let
    val n = $extval(token, "CKR_TOKENS")
in
if
n > 0
then let
extvar "CKR_TOKENS" = n-1
in Some_vt(0) end
else None_vt()
end

(*****)

implement
token_remove(token) = ()

(*****)

implement
token_hold(token) = let
    val n = $extval(int, "REPO_VAR")
    extvar "REPO_VAR" = n + 1
in
()
end

(*****)

implement
tokens_release() = let
    val n = $extval(int, "CKR_TOKENS")
in
if n = 0 then let 
    val r = $extval(int, "REPO_VAR")
    extvar "CKR_TOKENS" = n + r
    extvar "REPO_VAR" = 0
in () end 
else throw_tokens_not_extausted_error()
end

end

(*****)
//end of Tokens
(*****)

(*****)
//Draw Functions
(*****)

implement
ats_remove_checker (row, col) = let
    val tk = token_takeout()
in
case tk of
| ~Some_vt(t) => token_remove(t)
| ~None_vt() => ()
end

(*****)

implement
ats_draw_checker(tk, ckr) = let
    val () = draw_piece_wrapper(ckr[0],ckr[1],ckr[2],ckr[3],ckr[4])		
in
tk
end

(*****)

implement
ats_draw_board(board) = let
    val lckr = ats_board_to_list(board)
    val dummy = list_cons(12345,list_cons(12345,list_nil()))
    fun loop{n:nat}(lst: list(Checker,n)): void =
        (
        case+ lst of
        | list_cons(x,xs) =>
                    ((
                    case+ token_takeout() of
                    | ~Some_vt(t) => token_hold(ats_draw_checker(t, x))
                    | ~None_vt() => throw_could_not_draw_error()
                    ); loop(xs))
        | _ => ()
        ) 
in
(loop(lckr); tokens_release())
end

(*****)
// end of Draw Functions
(*****)

%{^
var REPO_VAR = 0;

function ats_board_to_list(board)
{
    function construct_ats_list(a)
    {
	if(_.isEmpty(a)) return null;
        var frt = _.first(a)
	return [
            [frt.row,[frt.col,[frt.color == "BLACK"?0:1,[frt.king?1:0,[frt.selected?1:0]]]]],
	    //[x.row,x.col,x.color == "BLACK"?0:1,x.king?1:0,null];}
            construct_ats_list(_.rest(a))
        ]; 
    };
    return construct_ats_list(board.config);
}

function draw_piece_wrapper(row,col,color,king,sel)
{
    drawPiece(row, col, color?"RED":"BLACK", king?true:false,sel?true:false);
}

//error functions
function
throw_tokens_not_extausted_error()
{
    throw "tokens were not exhausted, some pieces unaccounted for";
}

function
throw_could_not_draw_error()
{
    throw "could not draw checker, tokens were exhausted";
}

%}

%{$
my_dynload();

%}














