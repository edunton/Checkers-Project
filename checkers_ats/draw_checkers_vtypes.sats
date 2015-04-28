(*
draw_checkers_vtypes.sats
Author: Eric Dunton
*)


#include
"share/atspre_define.hats"

#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "my_dynload"

#include
"{$LIBATSCC2JS}/staloadall.hats"

#define ROWS 8
#define COLS 8

(*
token linear types
*)

absvt@ype token

abstype Board

typedef Checker = list(natLt(ROWS),4)

// Takes a token to draw a piece
fun
token_takeout(): Option_vt(token)

// Removes token from the system when a piece is removed
fun
token_remove(token): void

// Holds tokens to release
fun
token_hold(token): void

// Releases held tokens 
fun
tokens_release(): void

(*
Draw functions
*)

// removes token when call to remove is called
fun
ats_remove_checker
(row: natLt(ROWS), col: natLt(COLS)) : void = "mac#" // for use in JS

// draws board using tokens
fun
ats_draw_board(Board): void = "mac#" // for use in JS

// draws a checker with token
fun
ats_draw_checker(token | Checker) : token

// converts a JS Board object to a list of checkers to be processed
fun
ats_board_to_list(Board): [n: nat] list(Checker,n)

// a wrapper around the call to drawPiece()
fun
draw_piece_wrapper(row: natLt(ROWS), col: natLt(COLS), int, int): void = "mac#"












