/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-29: 19h:31m
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

// COMMENT_line

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
  var tmp8
//
  // __patsflab_tokens_release
  tmp7 = ats2jspre_eq_int0_int0(CKR_TOKENS, 0);
  if(tmp7) {
    tmp8 = ats2jspre_add_int0_int0(CKR_TOKENS, REPO_VAR);
    CKR_TOKENS = tmp8;
    REPO_VAR = 0;
    // ATSINSmove_void
  } else {
    throw_tokens_not_extausted_error();
  } // endif
  return/*_void*/;
} // end-of-function


function
ats_remove_checker(arg0, arg1)
{
//
// knd = 0
  var tmp10
  var tmp11
//
  // __patsflab_ats_remove_checker
  tmp10 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_takeout();
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptrisnull(tmp10)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      tmp11 = tmp10[0];
      // ATSINSfreecon(tmp10);
      _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_remove(tmp11);
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      if(ATSCKptriscons(tmp10)) ATSINScaseof_fail("/home/ugrad/edunton/cs520/checkers_ats/draw_checkers_vtypes.dats: 1022(line=81, offs=1) -- 1084(line=83, offs=19)");
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
  var tmpret12
  var tmp14
  var tmp15
  var tmp16
  var tmp17
  var tmp18
//
  // __patsflab_ats_draw_checker
  tmp14 = ats2jspre_list_get_at(arg1, 0);
  tmp15 = ats2jspre_list_get_at(arg1, 1);
  tmp16 = ats2jspre_list_get_at(arg1, 2);
  tmp17 = ats2jspre_list_get_at(arg1, 3);
  tmp18 = ats2jspre_list_get_at(arg1, 4);
  draw_piece_wrapper(tmp14, tmp15, tmp16, tmp17, tmp18);
  tmpret12 = arg0;
  return tmpret12;
} // end-of-function


function
ats_draw_board(arg0)
{
//
// knd = 0
  var tmp20
  var tmp21
  var tmp22
  var tmp23
//
  // __patsflab_ats_draw_board
  tmp20 = ats_board_to_list(arg0);
  tmp23 = null;
  tmp22 = [12345, tmp23];
  tmp21 = [12345, tmp22];
  loop_7(tmp20);
  _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__tokens_release();
  return/*_void*/;
} // end-of-function


function
loop_7(arg0)
{
//
// knd = 1
  var apy0
  var tmp25
  var tmp26
  var tmp28
  var tmp29
  var tmp30
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
        tmp25 = arg0[0];
        tmp26 = arg0[1];
        tmp28 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_takeout();
        // ATScaseofseq_beg
        tmplab_js = 1;
        while(true) {
          tmplab = tmplab_js; tmplab_js = 0;
          switch(tmplab) {
            // ATSbranchseq_beg
            case 1: // __atstmplab7
            if(ATSCKptrisnull(tmp28)) { tmplab_js = 4; break; }
            case 2: // __atstmplab8
            tmp29 = tmp28[0];
            // ATSINSfreecon(tmp28);
            tmp30 = _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__ats_draw_checker(tmp29, tmp25);
            _057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_sats__token_hold(tmp30);
            break;
            // ATSbranchseq_end
            // ATSbranchseq_beg
            case 3: // __atstmplab9
            case 4: // __atstmplab10
            throw_could_not_draw_error();
            break;
            // ATSbranchseq_end
          } // end-of-switch
          if (tmplab_js === 0) break;
        } // endwhile
        // ATScaseofseq_end
        // ATStailcalseq_beg
        apy0 = tmp26;
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
  // ATSdynloadflag_sta(_057_home_057_ugrad_057_edunton_057_cs520_057_checkers_ats_057_draw_checkers_vtypes_056_dats__dynloadflag(97))
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
