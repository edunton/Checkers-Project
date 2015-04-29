/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-29: 10h:47m
**
*/

/* ATSextcode_beg() */
var REPO_VAR = 0;

function ats_board_to_list(board)
{
    function construct_ats_list(a)
    {
	if(_.isEmpty(a)) return null;
        var frt = _.first(a)
	return [
            [frt.row,[frt.col,[frt.color == "BLACK"?0:1,[frt.king?1:0,[frt.selected?1:0]]]]],
	    // COMMENT_line

            construct_ats_list(_.rest(a))
        ]; 
    };
    return construct_ats_list(board.config);
}

function draw_piece_wrapper(row,col,color,king,sel)
{
    drawPiece(row, col, color?"RED":"BLACK", king?true:false,sel?true:false);
}

/* ATSextcode_end() */

// ATSassume(_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token)

function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_takeout()
{
//
// knd = 0
  var tmpret0
  var tmp1
  var tmp2
//
  // __patsflab_token_takeout
  tmp1 = ats2jspre_gt_int0_int0(CKR_TOKENS, 0);
  if(tmp1) {
    tmp2 = ats2jspre_sub_int0_int0(CKR_TOKENS, 1);
    CKR_TOKENS = tmp2;
    tmpret0 = [0];
  } else {
    tmpret0 = null;
  } // endif
  return tmpret0;
} // end-of-function


function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_remove(arg0)
{
//
// knd = 0
//
  // __patsflab_token_remove
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_hold(arg0)
{
//
// knd = 0
  var tmp5
//
  // __patsflab_token_hold
  tmp5 = ats2jspre_add_int0_int0(REPO_VAR, 1);
  REPO_VAR = tmp5;
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__tokens_release()
{
//
// knd = 0
  var tmp7
//
  // __patsflab_tokens_release
  tmp7 = ats2jspre_add_int0_int0(CKR_TOKENS, REPO_VAR);
  CKR_TOKENS = tmp7;
  REPO_VAR = 0;
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
ats_remove_checker(arg0, arg1)
{
//
// knd = 0
  var tmp9
  var tmp10
//
  // __patsflab_ats_remove_checker
  tmp9 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_takeout();
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptrisnull(tmp9)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      tmp10 = tmp9[0];
      // ATSINSfreecon(tmp9);
      _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_remove(tmp10);
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      if(ATSCKptriscons(tmp9)) ATSINScaseof_fail("/home/ugrad/edunton/cs520/checkers_ats/draw_checkers_vtypes.dats: 955(line=79, offs=1) -- 1017(line=81, offs=19)");
      case 4: // __atstmplab3
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__ats_draw_checker(arg0, arg1)
{
//
// knd = 0
  var tmpret11
  var tmp13
  var tmp14
  var tmp15
  var tmp16
  var tmp17
//
  // __patsflab_ats_draw_checker
  tmp13 = ats2jspre_list_get_at(arg1, 0);
  tmp14 = ats2jspre_list_get_at(arg1, 1);
  tmp15 = ats2jspre_list_get_at(arg1, 2);
  tmp16 = ats2jspre_list_get_at(arg1, 3);
  tmp17 = ats2jspre_list_get_at(arg1, 4);
  draw_piece_wrapper(tmp13, tmp14, tmp15, tmp16, tmp17);
  tmpret11 = arg0;
  return tmpret11;
} // end-of-function


function
ats_draw_board(arg0)
{
//
// knd = 0
  var tmp19
  var tmp20
  var tmp21
  var tmp22
//
  // __patsflab_ats_draw_board
  tmp19 = ats_board_to_list(arg0);
  tmp22 = null;
  tmp21 = [12345, tmp22];
  tmp20 = [12345, tmp21];
  loop_7(tmp19);
  _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__tokens_release();
  return/*_void*/;
} // end-of-function


function
loop_7(arg0)
{
//
// knd = 1
  var apy0
  var tmp24
  var tmp25
  var tmp27
  var tmp28
  var tmp29
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop_7
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab4
        if(ATSCKptrisnull(arg0)) { tmplab_js = 3; break; }
        case 2: // __atstmplab5
        tmp24 = arg0[0];
        tmp25 = arg0[1];
        tmp27 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_takeout();
        // ATScaseofseq_beg
        tmplab_js = 1;
        while(true) {
          tmplab = tmplab_js; tmplab_js = 0;
          switch(tmplab) {
            // ATSbranchseq_beg
            case 1: // __atstmplab7
            if(ATSCKptrisnull(tmp27)) { tmplab_js = 4; break; }
            case 2: // __atstmplab8
            tmp28 = tmp27[0];
            // ATSINSfreecon(tmp27);
            tmp29 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__ats_draw_checker(tmp28, tmp24);
            _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_hold(tmp29);
            break;
            // ATSbranchseq_end
            // ATSbranchseq_beg
            case 3: // __atstmplab9
            case 4: // __atstmplab10
            // ATSINSmove_void
            break;
            // ATSbranchseq_end
          } // end-of-switch
          if (tmplab_js === 0) break;
        } // endwhile
        // ATScaseofseq_end
        // ATStailcalseq_beg
        apy0 = tmp25;
        arg0 = apy0;
        funlab_js = 1; // __patsflab_loop_7
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab6
        // ATSINSmove_void
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function

// dynloadflag_init
var _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynloadflag = 0;

function
_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynload()
{
//
// knd = 0
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynloadflag(93))
  if(ATSCKiseqz(_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynloadflag)) {
    _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynloadflag = 1 ; // flag is set
  } // endif
  return/*_void*/;
} // end-of-function


function
my_dynload()
{
//
// knd = 0
//
  _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
my_dynload();

/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */