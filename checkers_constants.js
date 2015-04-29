/*
 * checkers_constants.js
 * Author: Eric Dunton
 * Constants used for the program
 */

var ROWS = 8;
var COLS = 8;
var PIECE_ROWS = 3;
var SQUARE_PARAM = 600/(COLS < ROWS ? ROWS: COLS);
var BOARD_GRID;
var MAIN_STREAM = 0;

var CKR_TOKENS = PIECE_ROWS*COLS