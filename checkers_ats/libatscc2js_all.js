/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [basics_cats.js]
******
*/
function
ats2jspre_list_get_at(list,index)
{
    if(index == 0) return list[0];
    return ats2jspre_list_get_at(list[1],index-1);
}

/* ****** ****** */

function
ATSCKiseqz(x) { return (x === 0); }
function
ATSCKisneqz(x) { return (x !== 0); }

/* ****** ****** */

function
ATSCKptrisnull(xs) { return (xs === null); }
function
ATSCKptriscons(xs) { return (xs !== null); }

/* ****** ****** */

function
ATSCKpat_int(tmp, given) { return (tmp === given); }
function
ATSCKpat_bool(tmp, given) { return (tmp === given); }
function
ATSCKpat_char(tmp, given) { return (tmp === given); }
function
ATSCKpat_float(tmp, given) { return (tmp === given); }
function
ATSCKpat_string(tmp, given) { return (tmp === given); }

/* ****** ****** */

function
ATSCKpat_con0 (con, tag) { return (con === tag); }
function
ATSCKpat_con1 (con, tag) { return (con[0] === tag); }

/* ****** ****** */
//
function
ATSINScaseof_fail(errmsg)
{
  throw new Error("ATSINScaseof_fail:"+errmsg);
  return;
}
//
function
ATSINSdeadcode_fail()
  { throw new Error("ATSINSdeadcode_fail"); return; }
//
/* ****** ****** */

function
ATSPMVempty() { return; }

/* ****** ****** */

/*
function
ATSPMVlazyval_make (thunk) { return [0, thunk]; }
*/

/* ****** ****** */

function
ATSPMVlazyval_eval(lazyval)
{
//
  var
  flag, thunk;
//
  flag = lazyval[0];
//
  if(flag===0)
  {
    lazyval[0] = 1;
    thunk = lazyval[1];
    lazyval[1] = thunk[0](thunk);
  } else {
    lazyval[0] = flag + 1;
  } // end of [if]
//
  return;
//
} // end of [ATSPMVlazyval_eval]

/* ****** ****** */

function
ats2jspre_alert(msg) { alert(msg); return; }

/* ****** ****** */

function
ats2jspre_confirm(msg) { return confirm(msg); }

/* ****** ****** */
//
function
ats2jspre_prompt_none
  (msg) { return prompt(msg); }
//
function
ats2jspre_prompt_some
  (msg, dflt) { return prompt(msg, dflt); }
//
/* ****** ****** */

function
ats2jspre_typeof(obj) { return typeof(obj); }

/* ****** ****** */

function
ats2jspre_toString(obj) { return obj.toString(); }

/* ****** ****** */

function
ats2jspre_lazy2cloref(lazyval) { return lazyval[1]; }

/* ****** ****** */
//
function
ats2jspre_assert_bool0(tfv)
  { if (!tfv) throw new Error("Assert"); return; }
function
ats2jspre_assert_bool1(tfv)
  { if (!tfv) throw new Error("Assert"); return; }
//
/* ****** ****** */
//
function
ats2jspre_assert_errmsg_bool0
  (tfv, errmsg) { if (!tfv) throw new Error(errmsg); return; }
function
ats2jspre_assert_errmsg_bool1
  (tfv, errmsg) { if (!tfv) throw new Error(errmsg); return; }
//
/* ****** ****** */

/* end of [basics_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [integer_cats.js]
******
*/

/* ****** ****** */
//
// HX: for signed integers
//
/* ****** ****** */

function
ats2jspre_neg_int0(x) { return ( -x ); }

/* ****** ****** */

function
ats2jspre_abs_int0(x) { return Math.abs(x); }

/* ****** ****** */

function
ats2jspre_succ_int0(x) { return (x + 1); }
function
ats2jspre_pred_int0(x) { return (x - 1); }

/* ****** ****** */

function
ats2jspre_half_int0(x)
{
  return (x >= 0) ? Math.floor(x/2) : Math.ceil(x/2);
}

/* ****** ****** */

function
ats2jspre_succ_int1(x) { return (x + 1); }
function
ats2jspre_pred_int1(x) { return (x - 1); }

/* ****** ****** */

function
ats2jspre_half_int1(x) { return ats2jspre_half_int0(x); }

/* ****** ****** */

function
ats2jspre_add_int0_int0(x, y) { return (x + y); }
function
ats2jspre_sub_int0_int0(x, y) { return (x - y); }
function
ats2jspre_mul_int0_int0(x, y) { return (x * y); }
function
ats2jspre_div_int0_int0(x, y)
{ 
  var q = x / y; return (q >= 0 ? Math.floor(q) : Math.ceil(q));
}
function
ats2jspre_mod_int0_int0(x, y) { return (x % y); }

/* ****** ****** */

function
ats2jspre_add_int1_int1(x, y) { return (x + y); }
function
ats2jspre_sub_int1_int1(x, y) { return (x - y); }
function
ats2jspre_mul_int1_int1(x, y) { return (x * y); }
function
ats2jspre_div_int1_int1(x, y) { return ats2jspre_div_int0_int0(x, y); }

/* ****** ****** */

function
ats2jspre_asl_int0_int1(x, y) { return (x << y); }
function
ats2jspre_asr_int0_int1(x, y) { return (x >> y); }

/* ****** ****** */

function
ats2jspre_lt_int0_int0(x, y) { return (x < y); }
function
ats2jspre_lte_int0_int0(x, y) { return (x <= y); }
function
ats2jspre_gt_int0_int0(x, y) { return (x > y); }
function
ats2jspre_gte_int0_int0(x, y) { return (x >= y); }
function
ats2jspre_eq_int0_int0(x, y) { return (x === y); }
function
ats2jspre_neq_int0_int0(x, y) { return (x !== y); }

/* ****** ****** */

function
ats2jspre_compare_int0_int0(x, y)
{
  if (x < y) return -1; else if (x > y) return 1; else return 0;
}

/* ****** ****** */

function
ats2jspre_lt_int1_int1(x, y) { return (x < y); }
function
ats2jspre_lte_int1_int1(x, y) { return (x <= y); }
function
ats2jspre_gt_int1_int1(x, y) { return (x > y); }
function
ats2jspre_gte_int1_int1(x, y) { return (x >= y); }
function
ats2jspre_eq_int1_int1(x, y) { return (x === y); }
function
ats2jspre_neq_int1_int1(x, y) { return (x !== y); }

/* ****** ****** */
//
// HX: for unsigned integers
//
/* ****** ****** */

function
ats2jspre_add_uint0_uint0(x, y) { return (x + y); }
function
ats2jspre_sub_uint0_uint0(x, y) { return (x - y); }
function
ats2jspre_mul_uint0_uint0(x, y) { return (x * y); }
function
ats2jspre_div_uint0_uint0(x, y)
{ 
  var q = x / y; return (q >= 0 ? Math.floor(q) : Math.ceil(q));
}
function
ats2jspre_mod_uint0_uint0(x, y) { return (x % y); }

/* ****** ****** */

function
ats2jspre_lt_uint0_uint0(x, y) { return (x < y); }
function
ats2jspre_lte_uint0_uint0(x, y) { return (x <= y); }
function
ats2jspre_gt_uint0_uint0(x, y) { return (x > y); }
function
ats2jspre_gte_uint0_uint0(x, y) { return (x >= y); }
function
ats2jspre_eq_uint0_uint0(x, y) { return (x === y); }
function
ats2jspre_neq_uint0_uint0(x, y) { return (x !== y); }

/* ****** ****** */

function
ats2jspre_compare_uint0_uint0(x, y)
{
  if (x < y) return -1; else if (x > y) return 1; else return 0;
}

/* ****** ****** */

/* end of [integer_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [float_cats.js]
******
*/

/* ****** ****** */
//
function
ats2jspre_int2double(x) { return x; }
function
ats2jspre_double_of_int(x) { return x; }
//
function
ats2jspre_double2int(x)
{
  return (x >= 0 ? Math.floor(x) : Math.ceil(x));
}
function
ats2jspre_int_of_double(x)
{
  return (x >= 0 ? Math.floor(x) : Math.ceil(x));
}
//
/* ****** ****** */

function
ats2jspre_neg_double(x) { return ( -x ); }

/* ****** ****** */

function
ats2jspre_abs_double(x) { return Math.abs(x); }

/* ****** ****** */
//
function
ats2jspre_add_int_double(x, y) { return (x + y); }
function
ats2jspre_add_double_int(x, y) { return (x + y); }
//
function
ats2jspre_sub_int_double(x, y) { return (x - y); }
function
ats2jspre_sub_double_int(x, y) { return (x - y); }
//
function
ats2jspre_mul_int_double(x, y) { return (x * y); }
function
ats2jspre_mul_double_int(x, y) { return (x * y); }
//
function
ats2jspre_div_int_double(x, y) { return (x / y); }
function
ats2jspre_div_double_int(x, y) { return (x / y); }
//
/* ****** ****** */

function
ats2jspre_add_double_double(x, y) { return (x + y); }
function
ats2jspre_sub_double_double(x, y) { return (x - y); }
function
ats2jspre_mul_double_double(x, y) { return (x * y); }
function
ats2jspre_div_double_double(x, y) { return (x / y); }

/* ****** ****** */
//
function
ats2jspre_lt_int_double(x, y) { return (x < y); }
function
ats2jspre_lt_double_int(x, y) { return (x < y); }
//
function
ats2jspre_lte_int_double(x, y) { return (x <= y); }
function
ats2jspre_lte_double_int(x, y) { return (x <= y); }
//
function
ats2jspre_gt_int_double(x, y) { return (x > y); }
function
ats2jspre_gt_double_int(x, y) { return (x > y); }
//
function
ats2jspre_gte_int_double(x, y) { return (x >= y); }
function
ats2jspre_gte_double_int(x, y) { return (x >= y); }
//
/* ****** ****** */

function
ats2jspre_lt_double_double(x, y) { return (x < y); }
function
ats2jspre_lte_double_double(x, y) { return (x <= y); }
function
ats2jspre_gt_double_double(x, y) { return (x > y); }
function
ats2jspre_gte_double_double(x, y) { return (x >= y); }
function
ats2jspre_eq_double_double(x, y) { return (x === y); }
function
ats2jspre_neq_double_double(x, y) { return (x !== y); }

/* ****** ****** */

/* end of [float_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [string_cats.js]
******
*/

/* ****** ****** */
//
function
ats2jspre_lt_string_string(x, y) { return (x < y); }
function
ats2jspre_lte_string_string(x, y) { return (x <= y); }
function
ats2jspre_gt_string_string(x, y) { return (x > y); }
function
ats2jspre_gte_string_string(x, y) { return (x >= y); }
//
function
ats2jspre_eq_string_string(x, y) { return (x === y); }
function
ats2jspre_neq_string_string(x, y) { return (x !== y); }
//
/* ****** ****** */

function
ats2jspre_compare_string_string(x, y)
{
  if (x < y) return -1; else if (x > y) return 1; else return 0;
}

/* ****** ****** */

function
ats2jspre_string_length(str) { return str.length ; }

/* ****** ****** */

function
ats2jspre_string_charAt(str, i) { return str.charAt(i) ; }
function
ats2jspre_string_charCodeAt(str, i) { return str.charCodeAt(i) ; }

/* ****** ****** */
//
function
ats2jspre_string_fromCharCode_1
  (c1) { return String.fromCharCode(c1) ; }
function
ats2jspre_string_fromCharCode_2
  (c1,c2) { return String.fromCharCode(c1,c2) ; }
function
ats2jspre_string_fromCharCode_3
  (c1,c2,c3) { return String.fromCharCode(c1,c2,c3) ; }
function
ats2jspre_string_fromCharCode_4
  (c1,c2,c3,c4) { return String.fromCharCode(c1,c2,c3,c4) ; }
function
ats2jspre_string_fromCharCode_5
  (c1,c2,c3,c4,c5) { return String.fromCharCode(c1,c2,c3,c4,c5) ; }
function
ats2jspre_string_fromCharCode_6
  (c1,c2,c3,c4,c5,c6) { return String.fromCharCode(c1,c2,c3,c4,c5,c6) ; }
//
/* ****** ****** */

function
ats2jspre_string_indexOf_2(str, key) { return str.indexOf(key) ; }
function
ats2jspre_string_indexOf_3(str, key, start) { return str.indexOf(key, start) ; }

/* ****** ****** */

function
ats2jspre_string_lastIndexOf_2(str, key) { return str.lastIndexOf(key) ; }
function
ats2jspre_string_lastIndexOf_3(str, key, start) { return str.lastIndexOf(key, start) ; }

/* ****** ****** */

function
ats2jspre_string_append(str1, str2) { return str1.concat(str2) ; }

/* ****** ****** */
//
function
ats2jspre_string_concat_2(str1, str2) { return str1.concat(str2) ; }
function
ats2jspre_string_concat_3(str1, str2, str3) { return str1.concat(str2, str3) ; }
//
/* ****** ****** */

/* end of [string_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [JSmath_cats.js]
******
*/

/* ****** ****** */
//
var
ats2jspre_JSmath_E = Math.E
var
ats2jspre_JSmath_PI = Math.PI
var
ats2jspre_JSmath_SQRT2 = Math.SQRT2
var
ats2jspre_JSmath_SQRT1_2 = Math.SQRT1_2
var
ats2jspre_JSmath_LN2 = Math.LN2
var
ats2jspre_JSmath_LN10 = Math.LN10
var
ats2jspre_JSmath_LOG2E = Math.LOG2E
var
ats2jspre_JSmath_LOG10E = Math.LOG10E
//
/* ****** ****** */
//
function
ats2jspre_JSmath_abs(x) { return Math.abs(x); }
//
function
ats2jspre_JSmath_max(x, y) { return Math.max(x, y); }
//
function
ats2jspre_JSmath_min(x, y) { return Math.min(x, y); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_sqrt(x) { return Math.sqrt(x); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_exp(x) { return Math.exp(x); }
//
function
ats2jspre_JSmath_pow(x, y) { return Math.pow(x, y); }
//
function
ats2jspre_JSmath_log(x) { return Math.log(x); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_ceil(x) { return Math.ceil(x); }
function
ats2jspre_JSmath_floor(x) { return Math.floor(x); }
function
ats2jspre_JSmath_round(x) { return Math.round(x); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_sin(x) { return Math.sin(x); }
function
ats2jspre_JSmath_cos(x) { return Math.cos(x); }
function
ats2jspre_JSmath_tan(x) { return Math.tan(x); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_asin(x) { return Math.asin(x); }
function
ats2jspre_JSmath_acos(x) { return Math.acos(x); }
function
ats2jspre_JSmath_atan(x) { return Math.atan(x); }
function
ats2jspre_JSmath_atan2(y, x) { return Math.atan2(y, x); }
//
/* ****** ****** */
//
function
ats2jspre_JSmath_random() { return Math.random(); }
//
/* ****** ****** */

/* end of [JSmath_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [JSdate_cats.js]
******
*/

/* ****** ****** */
//
function
ats2jspre_Date_new_0
  () { return new Date(); }
function
ats2jspre_Date_new_1_int
  (msec) { return new Date(msec); }
function
ats2jspre_Date_new_1_string
  (date) { return new Date(date); }
function
ats2jspre_Date_new_7
  (year, mon, day, hour, min, sec, ms)
{
  return new Date(year, mon, day, hour, min, sec, ms);
}
//
/* ****** ****** */
//
function
ats2jspre_getTime
  (date) { return date.getTime(); }
function
ats2jspre_getTimezoneOffset
  (date) { return date.getTimezoneOffset(); }
//
/* ****** ****** */
//
function
ats2jspre_getDay(date) { return date.getDay(); }
function
ats2jspre_getDate(date) { return date.getDate(); }
function
ats2jspre_getMonth(date) { return date.getMonth(); }
function
ats2jspre_getFullYear(date) { return date.getFullYear(); }
//
function
ats2jspre_getHours(date) { return date.getHours(); }
function
ats2jspre_getMinutes(date) { return date.getMinutes(); }
function
ats2jspre_getSeconds(date) { return date.getSeconds(); }
function
ats2jspre_getMilliseconds(date) { return date.getMilliseconds(); }
//
/* ****** ****** */
//
function
ats2jspre_getUTCDay(date) { return date.getUTCDay(); }
function
ats2jspre_getUTCDate(date) { return date.getUTCDate(); }
function
ats2jspre_getUTCMonth(date) { return date.getUTCMonth(); }
function
ats2jspre_getUTCFullYear(date) { return date.getUTCFullYear(); }
//
function
ats2jspre_getUTCHours(date) { return date.getUTCHours(); }
function
ats2jspre_getUTCMinutes(date) { return date.getUTCMinutes(); }
function
ats2jspre_getUTCSeconds(date) { return date.getUTCSeconds(); }
function
ats2jspre_getUTCMilliseconds(date) { return date.getUTCMilliseconds(); }
//
/* ****** ****** */

/* end of [JSdate_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [JSarray_cats.js]
******
*/

/* ****** ****** */

function
ats2jspre_JSarray_nil() { return []; }
function
ats2jspre_JSarray_sing(x) { return [x]; }
function
ats2jspre_JSarray_pair(x1, x2) { return [x1, x2]; }

/* ****** ****** */

function
ats2jspre_JSarray_copy_arrayref(A, n)
{
//
  var A2 = new Array(n);
  for (var i = 0; i < n; i += 1) A2[i] = A[i]; return A2;
//
} // end of [ats2jspre_JSarray_copy_arrayref]

/* ****** ****** */

function
ats2jspre_JSarray_get_at(A, i) { return A[i]; }
function
ats2jspre_JSarray_set_at(A, i, x) { A[i] = x; return; }

/* ****** ****** */
//
function
ats2jspre_JSarray_length(A) { return A.length; }
//
/* ****** ****** */

function
ats2jspre_JSarray_pop(A) { return A.pop(); }
function
ats2jspre_JSarray_push(A, x) { return A.push(x); }

/* ****** ****** */

function
ats2jspre_JSarray_shift(A) { return A.shift(); }
function
ats2jspre_JSarray_unshift(A, x) { return A.unshift(x); }

/* ****** ****** */

function
ats2jspre_JSarray_reverse(A) { return A.reverse(); }

/* ****** ****** */

function
ats2jspre_JSarray_copy(A) { return A.slice(0); }

/* ****** ****** */

function
ats2jspre_JSarray_concat(A1, A2) { return A1.concat(A2); }

/* ****** ****** */
//
function
ats2jspre_JSarray_insert_at
  (A, i, x) { A.splice(i, 0, x); return; }
//
function
ats2jspre_JSarray_takeout_at
  (A, i) { var res = A.splice(i, 1); return res[0]; }
//
function
ats2jspre_JSarray_remove_at(A, i) { A.splice(i, 1); return; }
//
/* ****** ****** */
//
function
ats2jspre_JSarray_join(A) { return A.join(""); }
function
ats2jspre_JSarray_join_sep(A, sep) { return A.join(sep); }
//
/* ****** ****** */

/* end of [JSarray_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [JSglobal_cats.js]
******
*/

/* ****** ****** */

function
ats2jspre_eval(code) { return eval(code); }

/* ****** ****** */

function
ats2jspre_Number(obj) { return Number(obj); }
function
ats2jspre_String(obj) { return String(obj); }

/* ****** ****** */

function
ats2jspre_isFinite_int(x) { return isFinite(x); }
function
ats2jspre_isFinite_double(x) { return isFinite(x); }

/* ****** ****** */

function
ats2jspre_isNaN_int(x) { return isNaN(x); }
function
ats2jspre_isNaN_double(x) { return isNaN(x); }

/* ****** ****** */

function
ats2jspre_parseInt_1(rep) { return parseInt(rep); }
function
ats2jspre_parseInt_2(rep, base) { return parseInt(rep, base); }

/* ****** ****** */

function
ats2jspre_parseFloat(rep) { return parseFloat(rep); }

/* ****** ****** */

function
ats2jspre_encodeURI(uri) { return encodeURI(uri); }
function
ats2jspre_decodeURI(uri) { return decodeURI(uri); }

/* ****** ****** */

function
ats2jspre_encodeURIComponent(uri) { return encodeURIComponent(uri); }
function
ats2jspre_decodeURIComponent(uri) { return decodeURIComponent(uri); }

/* ****** ****** */

/* end of [JSglobal_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [Ajax_cats.js]
******
*/

/* ****** ****** */

function
ats2js_Ajax_XMLHttpRequest_new
(
  // argumentless
)
{ 
  var res = new XMLHttpRequest(); return res;
}

/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_open
  (xmlhttp, method, URL, async)
  { xmlhttp.open(method, URL, async); return; }
//
/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_send_0
  (xmlhttp) { xmlhttp.send(); return; }
function
ats2js_Ajax_XMLHttpRequest_send_1
  (xmlhttp, msg) { xmlhttp.send(msg); return; }
//
/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_setRequestHeader
  (xmlhttp, header, value)
  { xmlhttp.setRequestHeader(header, value); return; }
//
/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_get_responseXML
  (xmlhttp) { return xmlhttp.responseXML; }
function
ats2js_Ajax_XMLHttpRequest_get_responseText
  (xmlhttp) { return xmlhttp.responseText; }
//
/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_get_status
  (xmlhttp) { return xmlhttp.status; }
//
function
ats2js_Ajax_XMLHttpRequest_get_readyState
  (xmlhttp) { return xmlhttp.readyState; }
//
function
ats2js_Ajax_XMLHttpRequest_set_onreadystatechange
  (xmlhttp, f_action)
{
  xmlhttp.onreadystatechange = function() { f_action[0](f_action); };
}
//
/* ****** ****** */
//
// HX-2014-09: Convenience functions
//
/* ****** ****** */
//
function
ats2js_Ajax_XMLHttpRequest_is_ready_okay
  (xmlhttp) { return xmlhttp.readyState===4 && xmlhttp.status===200; }
//
/* ****** ****** */

/* end of [Ajax_cats.js] */
/*
******
*
* HX-2014-08:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [canvas2d_cats.js]
******
*/

/* ****** ****** */

function
ats2js_HTML5_canvas_getById
  (id)
{
  var
  canvas =
  document.getElementById(id);
  if(!canvas)
  {
    throw "ats2js_HTML5_canvas_getById: canvas is not found";
  }
  return canvas;
}

/* ****** ****** */

function
ats2js_HTML5_canvas2d_getById
  (id)
{
  var
  canvas =
  document.getElementById(id);
  if(!canvas)
  {
    throw "ats2js_HTML5_canvas_getById: canvas is not found";
  }
  if(!canvas.getContext)
  {
    throw "ats2js_HTML5_canvas2d_getById: canvas-2d is not supported";
  }
  return canvas.getContext("2d");
}

/* ****** ****** */

function
ats2js_HTML5_canvas2d_beginPath
  (ctx) { ctx.beginPath(); return; }
function
ats2js_HTML5_canvas2d_closePath
  (ctx) { ctx.closePath(); return; }

/* ****** ****** */

function
ats2js_HTML5_canvas2d_moveTo
  (ctx, x, y) { ctx.moveTo(x, y); return; }
function
ats2js_HTML5_canvas2d_lineTo
  (ctx, x, y) { ctx.lineTo(x, y); return; }

/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_translate
  (ctx, x, y) { ctx.translate(x, y); return; }
//
function
ats2js_HTML5_canvas2d_scale
  (ctx, sx, sy) { ctx.scale(sx, sy); return; }
//
function
ats2js_HTML5_canvas2d_rotate
  (ctx, rangle) { ctx.rotate(rangle); return; }
//
/* ****** ****** */

function
ats2js_HTML5_canvas2d_rect
  (ctx, xul, yul, width, height)
{
  ctx.rect(xul, yul, width, height); return;
} /* end of [ats2js_HTML5_canvas2d_rect] */

function
ats2js_HTML5_canvas2d_arc
  (ctx, xc, yc, rad, angle_beg, angle_end, CCW)
{
  ctx.arc(xc, yc, rad, angle_beg, angle_end, CCW); return;
} /* end of [ats2js_HTML5_canvas2d_arc] */

/* ****** ****** */

function
ats2js_HTML5_canvas2d_clearRect
  (ctx, xul, yul, width, height)
{
  ctx.clearRect(xul, yul, width, height); return;
} /* end of [ats2js_HTML5_canvas2d_clearRect] */

/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_fill(ctx) { ctx.fill(); return; }
function
ats2js_HTML5_canvas2d_stroke(ctx) { ctx.stroke(); return; }
//
/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_fillRect
  (ctx, xul, yul, width, height)
{
  ctx.fillRect(xul, yul, width, height); return;
} /* end of [ats2js_HTML5_canvas2d_fillRect] */
//
function
ats2js_HTML5_canvas2d_strokeRect
  (ctx, xul, yul, width, height)
{
  ctx.strokeRect(xul, yul, width, height); return;
} /* end of [ats2js_HTML5_canvas2d_strokeRect] */
//
/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_fillText
  (ctx, text, xstart, ystart)
{
  ctx.fillText(text, xstart, ystart); return;
}
function
ats2js_HTML5_canvas2d_fillText2
  (ctx, text, xstart, ystart, maxWidth)
{ 
  ctx.fillText2(text, xstart, ystart, maxWidth); return;
}
//
/* ****** ****** */

function
ats2js_HTML5_canvas2d_save(ctx) { ctx.save(); return; }
function
ats2js_HTML5_canvas2d_restore(ctx) { ctx.restore(); return; }

/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_get_lineWidth
  (ctx) { return ctx.lineWidth; }
function
ats2js_HTML5_canvas2d_set_lineWidth_int
  (ctx, lineWidth) { ctx.lineWidth = lineWidth; return; }
function
ats2js_HTML5_canvas2d_set_lineWidth_double
  (ctx, lineWidth) { ctx.lineWidth = lineWidth; return; }
//
/* ****** ****** */

function
ats2js_HTML5_canvas2d_set_font_string
  (ctx, font) { ctx.font = font; return; }
function
ats2js_HTML5_canvas2d_set_textAlign_string
  (ctx, textAlign) { ctx.textAlign = textAlign; return; }
function
ats2js_HTML5_canvas2d_set_textBaseline_string
  (ctx, textBaseline) { ctx.textBaseline = textBaseline; return; }

/* ****** ****** */

function
ats2js_HTML5_canvas2d_set_fillStyle_string
  (ctx, fillStyle) { ctx.fillStyle = fillStyle; return; }
function
ats2js_HTML5_canvas2d_set_strokeStyle_string
  (ctx, strokeStyle) { ctx.strokeStyle = strokeStyle; return; }

/* ****** ****** */

function
ats2js_HTML5_canvas2d_set_shadowColor_string
  (ctx, shadowColor) { ctx.shadowColor = shadowColor; return; }

/* ****** ****** */

function
ats2js_HTML5_canvas2d_set_shadowBlur_int
  (ctx, shadowBlur) { ctx.shadowBlur = shadowBlur; return; }
function
ats2js_HTML5_canvas2d_set_shadowBlur_string
  (ctx, shadowBlur) { ctx.shadowBlur = shadowBlur; return; }

/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_set_shadowOffsetX_int
  (ctx, X) { ctx.shadowOffsetX = X; return; }
function
ats2js_HTML5_canvas2d_set_shadowOffsetX_double
  (ctx, X) { ctx.shadowOffsetX = X; return; }
//
function
ats2js_HTML5_canvas2d_set_shadowOffsetY_int
  (ctx, Y) { ctx.shadowOffsetY = Y; return; }
function
ats2js_HTML5_canvas2d_set_shadowOffsetY_double
  (ctx, Y) { ctx.shadowOffsetY = Y; return; }
//
/* ****** ****** */

function
ats2js_HTML5_canvas2d_createLinearGradient
  (ctx, x0, y0, x1, y1)
{
  return ctx.createLinearGradient(x0, y0, x1, y1);
}

/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_gradient_addColorStop
  (grad, stop, color) { grad.addColorStop(stop, color); return; }
//
/* ****** ****** */
//
function
ats2js_HTML5_canvas2d_set_fillStyle_gradient
  (ctx, gradient) { ctx.fillStyle = gradient; return; }
function
ats2js_HTML5_canvas2d_set_strokeStyle_gradient
  (ctx, gradient) { ctx.strokeStyle = gradient; return; }
//
/* ****** ****** */

/* end of [canvas2d_cats.js] */
/*
******
*
* HX-2015-04:
* for JavaScript code
* translated from ATS
*
******
*/

/*
******
* beg of [baconjs_cats.js]
******
*/

/* ****** ****** */
//
function
ats2js_bacon_Bacon_once(x) { return Bacon.once(x); }
function
ats2js_bacon_Bacon_never() { return Bacon.never(); }
//
function
ats2js_bacon_Bacon_interval
  (int, x) { return Bacon.interval(int, x); }
//
function
ats2js_bacon_Bacon_repeatedly
  (int, xs) { return Bacon.repeatedly(int, xs); }
//
function
ats2js_bacon_Bacon_sequentially
  (int, xs) { return Bacon.sequentially(int, xs); }
//
function
ats2js_bacon_Bacon_repeat(fopr)
{
  return Bacon.repeat(function(){return ats2jspre_cloref0_app(fopr);});
}
//
/* ****** ****** */
//
function
ats2js_bacon_EStream_map(xs, f)
{
  return ats2js_bacon_Observable_map(xs, f);
}
function
ats2js_bacon_Property_map(xs, f)
{
  return ats2js_bacon_Observable_map(xs, f);
}
function
ats2js_bacon_Observable_map(xs, f)
{
  return xs.map(
    function(x){return ats2jspre_cloref1_app(f, x);}
  ); // end of [return]
}
//
/* ****** ****** */
//
function
ats2js_bacon_EStream_filter(xs, f)
{
  return ats2js_bacon_Observable_filter(xs, f);
}
function
ats2js_bacon_Property_filter(xs, f)
{
  return ats2js_bacon_Observable_filter(xs, f);
}
function
ats2js_bacon_Observable_filter(xs, f)
{
  return xs.filter(
    function(x){return ats2jspre_cloref1_app(f, x);}
  ); // end of [return]
}
//
/* ****** ****** */
//
function
ats2js_bacon_EStream_map_property(xs, ys) { return xs.map(ys); }
function
ats2js_bacon_EStream_filter_property(xs, bs) { return xs.filter(bs); }
//
/* ****** ****** */

function
ats2js_bacon_EStream_scan(xs, ini, f)
{
  return xs.scan(
    ini, function(y, x){return ats2jspre_cloref2_app(f, y, x);}
  ); // end of [return]
}

/* ****** ****** */
//
function
ats2js_bacon_EStream_merge2
  (xs1, xs2) { return Bacon.mergeAll(xs1, xs2); }
//
function
ats2js_bacon_EStream_merge3
  (xs1, xs2, xs3) { return Bacon.mergeAll(xs1, xs2, xs3); }
//
/* ****** ****** */

function
ats2js_bacon_Bacon_combineWith2(xs1, xs2, f)
{
  var
  theCombined =
  Bacon.combineWith(
    function(x1,x2){ return ats2jspre_cloref2_app(f, x1, x2); },
    xs1, xs2
  ) // end of [var]
  return theCombined;
}

function
ats2js_bacon_Bacon_combineWith3(xs1, xs2, xs3, f)
{
  var
  theCombined =
  Bacon.combineWith(
    function(x1,x2,x3){ return ats2jspre_cloref3_app(f, x1, x2, x3); },
    xs1, xs2, xs3
  ) // end of [var]
  return theCombined;
}

/* ****** ****** */
//
function
ats2js_bacon_EStream_toProperty(xs) { return xs.toProperty(); }
function
ats2js_bacon_EStream_toProperty_init(xs, x0) { return xs.toProperty(x0); }
//
function
ats2js_bacon_Property_toEventStream(xs) { return xs.toEventStream(); }
//
/* ****** ****** */

function
ats2js_bacon_EStream_onValue(xs, f)
{
  return ats2js_bacon_Observable_onValue(xs, f);
}
function
ats2js_bacon_Property_onValue(xs, f)
{
  return ats2js_bacon_Observable_onValue(xs, f);
}
function
ats2js_bacon_Observable_onValue(xs, f)
{
  return xs.onValue(function(x){return ats2jspre_cloref1_app(f, x);});
}

/* ****** ****** */

function
ats2js_bacon_EStream_subscribe(xs, f)
{
  return ats2js_bacon_Observable_subscribe(xs, f);
}
function
ats2js_bacon_Property_subscribe(xs, f)
{
  return ats2js_bacon_Observable_subscribe(xs, f);
}
function
ats2js_bacon_Observable_subscribe(xs, f)
{
  return xs.subscribe(function(x){return ats2jspre_cloref1_app(f, x);});
}

/* ****** ****** */
//
function
ats2js_bacon_Property_startWith
  (xs, x0) { return xs.startWith(x0); }
//
/* ****** ****** */

function
ats2js_bacon_EStream_doAction(xs, f0)
{
  return ats2js_bacon_Observable_doAction(xs, f0);
}
function
ats2js_bacon_Property_doAction(xs, f0)
{
  return ats2js_bacon_Observable_doAction(xs, f0);
}
function
ats2js_bacon_Observable_doAction(xs, f0)
{
  return xs.doAction(function(x){ats2jspre_cloref1_app(f0, x); return;});
}

/* ****** ****** */
//
function
ats2js_bacon_Property_sampledBy_estream
  (xs, ys) { return xs.sampledBy(ys); }
function
ats2js_bacon_Property_sampledBy_estream_cfun(xs, ys, f)
{
  return xs.sampledBy(
    ys,function(x,y){return ats2jspre_cloref2_app(f,x,y);}
  ); // end of [return]
}
//
function
ats2js_bacon_Property_sampledBy_property
  (xs, ys) { return xs.sampledBy(ys); }
function
ats2js_bacon_Property_sampledBy_property_cfun(xs, ys, f)
{
  return xs.sampledBy(
    ys,function(x,y){return ats2jspre_cloref2_app(f,x,y);}
  ); // end of [return]
}
//
/* ****** ****** */
//
function
ats2js_bacon_EStream_zip_estream_cfun(xs, ys, f) 
{
  return xs.zip(ys,function(x,y){return ats2jspre_cloref2_app(f,x,y);});
}
//
/* ****** ****** */

/* end of [baconjs_cats.js] */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
ats2jspre_cloref0_app(arg0)
{
//
// knd = 0
  var tmpret0
//
  // __patsflab_cloref0_app
  tmpret0 = arg0[0](arg0);
  return tmpret0;
} // end-of-function


function
ats2jspre_cloref1_app(arg0, arg1)
{
//
// knd = 0
  var tmpret1
//
  // __patsflab_cloref1_app
  tmpret1 = arg0[0](arg0, arg1);
  return tmpret1;
} // end-of-function


function
ats2jspre_cloref2_app(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret2
//
  // __patsflab_cloref2_app
  tmpret2 = arg0[0](arg0, arg1, arg2);
  return tmpret2;
} // end-of-function


function
ats2jspre_cloref3_app(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmpret3
//
  // __patsflab_cloref3_app
  tmpret3 = arg0[0](arg0, arg1, arg2, arg3);
  return tmpret3;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
ats2jspre_list_make_intrange_2(arg0, arg1)
{
//
// knd = 0
  var tmpret0
//
  // __patsflab_list_make_intrange_2
  tmpret0 = ats2jspre_list_make_intrange_3(arg0, arg1, 1);
  return tmpret0;
} // end-of-function


function
ats2jspre_list_make_intrange_3(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret1
  var tmp12
  var tmp13
  var tmp14
  var tmp15
  var tmp16
  var tmp17
  var tmp18
  var tmp19
  var tmp20
  var tmp21
  var tmp22
  var tmp23
  var tmp24
  var tmp25
  var tmp26
  var tmp27
  var tmp28
  var tmp29
  var tmp30
  var tmp31
  var tmp32
//
  // __patsflab_list_make_intrange_3
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      tmp12 = ats2jspre_gt_int0_int0(arg2, 0);
      if(!ATSCKpat_bool(tmp12, true)) { tmplab_js = 2; break; }
      tmp13 = ats2jspre_lt_int0_int0(arg0, arg1);
      if(tmp13) {
        tmp17 = ats2jspre_sub_int0_int0(arg1, arg0);
        tmp16 = ats2jspre_add_int0_int0(tmp17, arg2);
        tmp15 = ats2jspre_sub_int0_int0(tmp16, 1);
        tmp14 = ats2jspre_div_int0_int0(tmp15, arg2);
        tmp20 = ats2jspre_sub_int0_int0(tmp14, 1);
        tmp19 = ats2jspre_mul_int0_int0(tmp20, arg2);
        tmp18 = ats2jspre_add_int0_int0(arg0, tmp19);
        tmp21 = null;
        tmpret1 = _ats2jspre_list_loop1_2(tmp14, tmp18, arg2, tmp21);
      } else {
        tmpret1 = null;
      } // endif
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 2: // __atstmplab1
      tmp22 = ats2jspre_lt_int0_int0(arg2, 0);
      if(!ATSCKpat_bool(tmp22, true)) { tmplab_js = 3; break; }
      tmp23 = ats2jspre_gt_int0_int0(arg0, arg1);
      if(tmp23) {
        tmp24 = ats2jspre_neg_int0(arg2);
        tmp28 = ats2jspre_sub_int0_int0(arg0, arg1);
        tmp27 = ats2jspre_add_int0_int0(tmp28, tmp24);
        tmp26 = ats2jspre_sub_int0_int0(tmp27, 1);
        tmp25 = ats2jspre_div_int0_int0(tmp26, tmp24);
        tmp31 = ats2jspre_sub_int0_int0(tmp25, 1);
        tmp30 = ats2jspre_mul_int0_int0(tmp31, tmp24);
        tmp29 = ats2jspre_sub_int0_int0(arg0, tmp30);
        tmp32 = null;
        tmpret1 = _ats2jspre_list_loop2_3(tmp25, tmp29, tmp24, tmp32);
      } else {
        tmpret1 = null;
      } // endif
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      tmpret1 = null;
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret1;
} // end-of-function


function
_ats2jspre_list_loop1_2(arg0, arg1, arg2, arg3)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var tmpret2
  var tmp3
  var tmp4
  var tmp5
  var tmp6
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_list_loop1_2
    tmp3 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp3) {
      tmp4 = ats2jspre_sub_int0_int0(arg0, 1);
      tmp5 = ats2jspre_sub_int0_int0(arg1, arg2);
      tmp6 = [arg1, arg3];
      // ATStailcalseq_beg
      apy0 = tmp4;
      apy1 = tmp5;
      apy2 = arg2;
      apy3 = tmp6;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      funlab_js = 1; // __patsflab__ats2jspre_list_loop1_2
      // ATStailcalseq_end
    } else {
      tmpret2 = arg3;
    } // endif
    if (funlab_js > 0) continue; else return tmpret2;
  } // endwhile-fun
} // end-of-function


function
_ats2jspre_list_loop2_3(arg0, arg1, arg2, arg3)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var tmpret7
  var tmp8
  var tmp9
  var tmp10
  var tmp11
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_list_loop2_3
    tmp8 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp8) {
      tmp9 = ats2jspre_sub_int0_int0(arg0, 1);
      tmp10 = ats2jspre_add_int0_int0(arg1, arg2);
      tmp11 = [arg1, arg3];
      // ATStailcalseq_beg
      apy0 = tmp9;
      apy1 = tmp10;
      apy2 = arg2;
      apy3 = tmp11;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      funlab_js = 1; // __patsflab__ats2jspre_list_loop2_3
      // ATStailcalseq_end
    } else {
      tmpret7 = arg3;
    } // endif
    if (funlab_js > 0) continue; else return tmpret7;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_list_length(arg0)
{
//
// knd = 0
  var tmpret44
//
  // __patsflab_list_length
  tmpret44 = _ats2jspre_list_loop_10(arg0, 0);
  return tmpret44;
} // end-of-function


function
_ats2jspre_list_loop_10(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret45
  var tmp47
  var tmp48
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_list_loop_10
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab7
        if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
        case 2: // __atstmplab8
        tmpret45 = arg1;
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab9
        case 4: // __atstmplab10
        tmp47 = arg0[1];
        tmp48 = ats2jspre_add_int1_int1(arg1, 1);
        // ATStailcalseq_beg
        apy0 = tmp47;
        apy1 = tmp48;
        arg0 = apy0;
        arg1 = apy1;
        funlab_js = 1; // __patsflab__ats2jspre_list_loop_10
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return tmpret45;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_list_append(arg0, arg1)
{
//
// knd = 0
  var tmpret49
  var tmp50
  var tmp51
  var tmp52
//
  // __patsflab_list_append
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab11
      if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab12
      tmpret49 = arg1;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab13
      case 4: // __atstmplab14
      tmp50 = arg0[0];
      tmp51 = arg0[1];
      tmp52 = ats2jspre_list_append(tmp51, arg1);
      tmpret49 = [tmp50, tmp52];
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret49;
} // end-of-function


function
ats2jspre_list_reverse(arg0)
{
//
// knd = 0
  var tmpret53
  var tmp54
//
  // __patsflab_list_reverse
  tmp54 = null;
  tmpret53 = ats2jspre_list_reverse_append(arg0, tmp54);
  return tmpret53;
} // end-of-function


function
ats2jspre_list_reverse_append(arg0, arg1)
{
//
// knd = 0
  var tmpret55
//
  // __patsflab_list_reverse_append
  tmpret55 = _ats2jspre_list_loop_14(arg0, arg1);
  return tmpret55;
} // end-of-function


function
_ats2jspre_list_loop_14(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret56
  var tmp57
  var tmp58
  var tmp59
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_list_loop_14
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab15
        if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
        case 2: // __atstmplab16
        tmpret56 = arg1;
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab17
        case 4: // __atstmplab18
        tmp57 = arg0[0];
        tmp58 = arg0[1];
        tmp59 = [tmp57, arg1];
        // ATStailcalseq_beg
        apy0 = tmp58;
        apy1 = tmp59;
        arg0 = apy0;
        arg1 = apy1;
        funlab_js = 1; // __patsflab__ats2jspre_list_loop_14
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return tmpret56;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_list_take(arg0, arg1)
{
//
// knd = 0
  var tmpret60
  var tmp61
  var tmp62
  var tmp63
  var tmp64
  var tmp65
//
  // __patsflab_list_take
  tmp61 = ats2jspre_gt_int1_int1(arg1, 0);
  if(tmp61) {
    tmp62 = arg0[0];
    tmp63 = arg0[1];
    tmp65 = ats2jspre_sub_int1_int1(arg1, 1);
    tmp64 = ats2jspre_list_take(tmp63, tmp65);
    tmpret60 = [tmp62, tmp64];
  } else {
    tmpret60 = null;
  } // endif
  return tmpret60;
} // end-of-function


function
ats2jspre_list_drop(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret66
  var tmp67
  var tmp68
  var tmp69
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_list_drop
    tmp67 = ats2jspre_gt_int1_int1(arg1, 0);
    if(tmp67) {
      tmp68 = arg0[1];
      tmp69 = ats2jspre_sub_int1_int1(arg1, 1);
      // ATStailcalseq_beg
      apy0 = tmp68;
      apy1 = tmp69;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab_list_drop
      // ATStailcalseq_end
    } else {
      tmpret66 = arg0;
    } // endif
    if (funlab_js > 0) continue; else return tmpret66;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_list_split_at(arg0, arg1)
{
//
// knd = 0
  var tmpret70
  var tmp71
  var tmp72
//
  // __patsflab_list_split_at
  tmp71 = ats2jspre_list_take(arg0, arg1);
  tmp72 = ats2jspre_list_drop(arg0, arg1);
  tmpret70 = [tmp71, tmp72];
  return tmpret70;
} // end-of-function


function
ats2jspre_list_insert_at(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret73
  var tmp74
  var tmp75
  var tmp76
  var tmp77
  var tmp78
//
  // __patsflab_list_insert_at
  tmp74 = ats2jspre_gt_int1_int1(arg1, 0);
  if(tmp74) {
    tmp75 = arg0[0];
    tmp76 = arg0[1];
    tmp78 = ats2jspre_sub_int1_int1(arg1, 1);
    tmp77 = ats2jspre_list_insert_at(tmp76, tmp78, arg2);
    tmpret73 = [tmp75, tmp77];
  } else {
    tmpret73 = [arg2, arg0];
  } // endif
  return tmpret73;
} // end-of-function


function
ats2jspre_list_remove_at(arg0, arg1)
{
//
// knd = 0
  var tmpret79
  var tmp80
  var tmp81
  var tmp82
  var tmp83
  var tmp84
  var tmp85
  var tmp86
  var tmp87
//
  // __patsflab_list_remove_at
  tmp80 = arg0[0];
  tmp81 = arg0[1];
  tmp82 = ats2jspre_gt_int1_int1(arg1, 0);
  if(tmp82) {
    tmp84 = ats2jspre_sub_int1_int1(arg1, 1);
    tmp83 = ats2jspre_list_remove_at(tmp81, tmp84);
    tmp85 = tmp83[0];
    tmp86 = tmp83[1];
    tmp87 = [tmp80, tmp86];
    tmpret79 = [tmp85, tmp87];
  } else {
    tmpret79 = [tmp80, tmp81];
  } // endif
  return tmpret79;
} // end-of-function


function
ats2jspre_list_app(arg0, arg1)
{
//
// knd = 0
//
  // __patsflab_list_app
  ats2jspre_list_foreach(arg0, arg1);
  return/*_void*/;
} // end-of-function


function
ats2jspre_list_foreach(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmp90
  var tmp91
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_list_foreach
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab19
        if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
        case 2: // __atstmplab20
        // ATSINSmove_void
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab21
        case 4: // __atstmplab22
        tmp90 = arg0[0];
        tmp91 = arg0[1];
        arg1[0](arg1, tmp90);
        // ATStailcalseq_beg
        apy0 = tmp91;
        apy1 = arg1;
        arg0 = apy0;
        arg1 = apy1;
        funlab_js = 1; // __patsflab_list_foreach
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_list_map(arg0, arg1)
{
//
// knd = 0
  var tmpret93
  var tmp94
  var tmp95
  var tmp96
  var tmp97
//
  // __patsflab_list_map
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab23
      if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab24
      tmpret93 = null;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab25
      case 4: // __atstmplab26
      tmp94 = arg0[0];
      tmp95 = arg0[1];
      tmp96 = arg1[0](arg1, tmp94);
      tmp97 = ats2jspre_list_map(tmp95, arg1);
      tmpret93 = [tmp96, tmp97];
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret93;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
ats2jspre_option_is_some(arg0)
{
//
// knd = 0
  var tmpret0
//
  // __patsflab_option_is_some
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptrisnull(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      tmpret0 = true;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      case 4: // __atstmplab3
      tmpret0 = false;
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret0;
} // end-of-function


function
ats2jspre_option_is_none(arg0)
{
//
// knd = 0
  var tmpret1
//
  // __patsflab_option_is_none
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab5
      tmpret1 = true;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      case 4: // __atstmplab7
      tmpret1 = false;
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret1;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
_ats2jspre_stream_patsfun_1__closurerize(env0, env1)
{
  return [function(cenv) { return _ats2jspre_stream_patsfun_1(cenv[1], cenv[2]); }, env0, env1];
}


function
_ats2jspre_stream_patsfun_3__closurerize(env0, env1)
{
  return [function(cenv) { return _ats2jspre_stream_patsfun_3(cenv[1], cenv[2]); }, env0, env1];
}


function
_ats2jspre_stream_patsfun_6__closurerize(env0, env1)
{
  return [function(cenv) { return _ats2jspre_stream_patsfun_6(cenv[1], cenv[2]); }, env0, env1];
}


function
ats2jspre_stream_map_cloref(arg0, arg1)
{
//
// knd = 0
  var tmpret0
//
  // __patsflab_stream_map_cloref
  tmpret0 = [0, _ats2jspre_stream_patsfun_1__closurerize(arg0, arg1)]
  return tmpret0;
} // end-of-function


function
_ats2jspre_stream_patsfun_1(env0, env1)
{
//
// knd = 0
  var tmpret1
  var tmp2
  var tmp3
  var tmp4
  var tmp5
  var tmp6
//
  // __patsflab__ats2jspre_stream_patsfun_1
  ATSPMVlazyval_eval(env0); tmp2 = env0[1];
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptriscons(tmp2)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      tmpret1 = null;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      case 4: // __atstmplab3
      tmp3 = tmp2[0];
      tmp4 = tmp2[1];
      tmp5 = env1[0](env1, tmp3);
      tmp6 = ats2jspre_stream_map_cloref(tmp4, env1);
      tmpret1 = [tmp5, tmp6];
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret1;
} // end-of-function


function
ats2jspre_stream_filter_cloref(arg0, arg1)
{
//
// knd = 0
  var tmpret7
//
  // __patsflab_stream_filter_cloref
  tmpret7 = [0, _ats2jspre_stream_patsfun_3__closurerize(arg0, arg1)]
  return tmpret7;
} // end-of-function


function
_ats2jspre_stream_patsfun_3(env0, env1)
{
//
// knd = 0
  var tmpret8
  var tmp9
  var tmp10
  var tmp11
  var tmp12
  var tmp13
  var tmp14
//
  // __patsflab__ats2jspre_stream_patsfun_3
  ATSPMVlazyval_eval(env0); tmp9 = env0[1];
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(tmp9)) { tmplab_js = 4; break; }
      case 2: // __atstmplab5
      tmpret8 = null;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      case 4: // __atstmplab7
      tmp10 = tmp9[0];
      tmp11 = tmp9[1];
      tmp12 = env1[0](env1, tmp10);
      if(tmp12) {
        tmp13 = ats2jspre_stream_filter_cloref(tmp11, env1);
        tmpret8 = [tmp10, tmp13];
      } else {
        tmp14 = ats2jspre_stream_filter_cloref(tmp11, env1);
        ATSPMVlazyval_eval(tmp14); tmpret8 = tmp14[1];
      } // endif
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret8;
} // end-of-function


function
ats2jspre_stream_tabulate_cloref(arg0)
{
//
// knd = 0
  var tmpret15
//
  // __patsflab_stream_tabulate_cloref
  tmpret15 = _ats2jspre_stream_aux_5(arg0, 0);
  return tmpret15;
} // end-of-function


function
_ats2jspre_stream_aux_5(env0, arg0)
{
//
// knd = 0
  var tmpret16
//
  // __patsflab__ats2jspre_stream_aux_5
  tmpret16 = [0, _ats2jspre_stream_patsfun_6__closurerize(env0, arg0)]
  return tmpret16;
} // end-of-function


function
_ats2jspre_stream_patsfun_6(env0, env1)
{
//
// knd = 0
  var tmpret17
  var tmp18
  var tmp19
  var tmp20
//
  // __patsflab__ats2jspre_stream_patsfun_6
  tmp18 = env0[0](env0, env1);
  tmp20 = ats2jspre_add_int1_int1(env1, 1);
  tmp19 = _ats2jspre_stream_aux_5(env0, tmp20);
  tmpret17 = [tmp18, tmp19];
  return tmpret17;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
ats2jspre_int_repeat_lazy(arg0, arg1)
{
//
// knd = 0
  var tmp1
//
  // __patsflab_int_repeat_lazy
  tmp1 = ats2jspre_lazy2cloref(arg1);
  ats2jspre_int_repeat_cloref(arg0, tmp1);
  return/*_void*/;
} // end-of-function


function
ats2jspre_int_repeat_cloref(arg0, arg1)
{
//
// knd = 0
//
  // __patsflab_int_repeat_cloref
  _ats2jspre_intrange_loop_2(arg0, arg1);
  return/*_void*/;
} // end-of-function


function
_ats2jspre_intrange_loop_2(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmp4
  var tmp6
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_intrange_loop_2
    tmp4 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp4) {
      arg1[0](arg1);
      tmp6 = ats2jspre_sub_int0_int0(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp6;
      apy1 = arg1;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab__ats2jspre_intrange_loop_2
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_int_foreach_cloref(arg0, arg1)
{
//
// knd = 0
//
  // __patsflab_int_foreach_cloref
  ats2jspre_intrange_foreach_cloref(0, arg0, arg1);
  return/*_void*/;
} // end-of-function


function
ats2jspre_intrange_foreach_cloref(arg0, arg1, arg2)
{
//
// knd = 0
//
  // __patsflab_intrange_foreach_cloref
  _ats2jspre_intrange_loop_5(arg0, arg1, arg2);
  return/*_void*/;
} // end-of-function


function
_ats2jspre_intrange_loop_5(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp10
  var tmp12
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_intrange_loop_5
    tmp10 = ats2jspre_lt_int0_int0(arg0, arg1);
    if(tmp10) {
      arg2[0](arg2, arg0);
      tmp12 = ats2jspre_add_int0_int0(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp12;
      apy1 = arg1;
      apy2 = arg2;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      funlab_js = 1; // __patsflab__ats2jspre_intrange_loop_5
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

/* ATSextcode_beg() */
// COMMENT_line

function
ats2jspre_arrayref_make_elt
  (n, x)
{
  var A, i;
  A = new Array(n);
  for (i = 0; i < n; i += 1) A[i] = x;
  return A;
}
// COMMENT_line

/* ATSextcode_end() */

function
ats2jspre_arrayref_foreach_cloref(arg0, arg1, arg2)
{
//
// knd = 0
//
  // __patsflab_arrayref_foreach_cloref
  _ats2jspre_arrayref_loop_1(arg1, arg2, 0);
  return/*_void*/;
} // end-of-function


function
_ats2jspre_arrayref_loop_1(env0, env1, arg0)
{
//
// knd = 1
  var apy0
  var tmp2
  var tmp4
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_arrayref_loop_1
    tmp2 = ats2jspre_lt_int1_int1(arg0, env0);
    if(tmp2) {
      env1[0](env1, arg0);
      tmp4 = ats2jspre_add_int1_int1(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp4;
      arg0 = apy0;
      funlab_js = 1; // __patsflab__ats2jspre_arrayref_loop_1
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_arrszref_foreach_cloref(arg0, arg1)
{
//
// knd = 0
  var tmp6
//
  // __patsflab_arrszref_foreach_cloref
  tmp6 = ats2jspre_arrszref_size(arg0);
  _ats2jspre_arrayref_loop_3(arg1, tmp6, 0);
  return/*_void*/;
} // end-of-function


function
_ats2jspre_arrayref_loop_3(env0, env1, arg0)
{
//
// knd = 1
  var apy0
  var tmp8
  var tmp10
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab__ats2jspre_arrayref_loop_3
    tmp8 = ats2jspre_lt_int1_int1(arg0, env1);
    if(tmp8) {
      env0[0](env0, arg0);
      tmp10 = ats2jspre_add_int1_int1(arg0, 1);
      // ATStailcalseq_beg
      apy0 = tmp10;
      arg0 = apy0;
      funlab_js = 1; // __patsflab__ats2jspre_arrayref_loop_3
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
ats2jspre_arrayref_get_at(arg0, arg1)
{
//
// knd = 0
  var tmpret11
//
  // __patsflab_arrayref_get_at
  tmpret11 = ats2jspre_JSarray_get_at(arg0, arg1);
  return tmpret11;
} // end-of-function


function
ats2jspre_arrayref_set_at(arg0, arg1, arg2)
{
//
// knd = 0
//
  // __patsflab_arrayref_set_at
  ats2jspre_JSarray_set_at(arg0, arg1, arg2);
  return/*_void*/;
} // end-of-function


function
ats2jspre_arrszref_make_arrayref(arg0, arg1)
{
//
// knd = 0
  var tmpret13
//
  // __patsflab_arrszref_make_arrayref
  tmpret13 = arg0;
  return tmpret13;
} // end-of-function


function
ats2jspre_arrszref_size(arg0)
{
//
// knd = 0
  var tmpret14
  var tmp15
//
  // __patsflab_arrszref_size
  tmp15 = ats2jspre_JSarray_length(arg0);
  tmpret14 = tmp15;
  return tmpret14;
} // end-of-function


function
ats2jspre_arrszref_get_at(arg0, arg1)
{
//
// knd = 0
  var tmpret16
//
  // __patsflab_arrszref_get_at
  tmpret16 = ats2jspre_JSarray_get_at(arg0, arg1);
  return tmpret16;
} // end-of-function


function
ats2jspre_arrszref_set_at(arg0, arg1, arg2)
{
//
// knd = 0
//
  // __patsflab_arrszref_set_at
  ats2jspre_JSarray_set_at(arg0, arg1, arg2);
  return/*_void*/;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

/* ATSextcode_beg() */
// COMMENT_line

function
ats2jspre_matrixref_make_elt
  (m, n, x)
{
  var A, i, j;
  A = new Array(m*n);
  for (i = 0; i < m; i += 1)
  {
    for (j = 0; j < n; j += 1) A[i*n+j] = x;
  }
  return A;
}
// COMMENT_line

/* ATSextcode_end() */

function
ats2jspre_matrixref_get_at(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmpret0
  var tmp1
  var tmp2
//
  // __patsflab_matrixref_get_at
  tmp2 = ats2jspre_mul_int1_int1(arg1, arg2);
  tmp1 = ats2jspre_add_int1_int1(tmp2, arg3);
  tmpret0 = ats2jspre_JSarray_get_at(arg0, tmp1);
  return tmpret0;
} // end-of-function


function
ats2jspre_matrixref_set_at(arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 0
  var tmp4
  var tmp5
//
  // __patsflab_matrixref_set_at
  tmp5 = ats2jspre_mul_int1_int1(arg1, arg2);
  tmp4 = ats2jspre_add_int1_int1(tmp5, arg3);
  ats2jspre_JSarray_set_at(arg0, tmp4, arg4);
  return/*_void*/;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-26:  1h:52m
**
*/

function
ats2jspre_ref(arg0)
{
//
// knd = 0
  var tmpret0
//
  // __patsflab_ref
  tmpret0 = ats2jspre_ref_make_elt(arg0);
  return tmpret0;
} // end-of-function


function
ats2jspre_ref_make_elt(arg0)
{
//
// knd = 0
  var tmpret1
  var tmp2
//
  // __patsflab_ref_make_elt
  tmp2 = ats2jspre_JSarray_sing(arg0);
  tmpret1 = tmp2;
  return tmpret1;
} // end-of-function


function
ats2jspre_ref_get_elt(arg0)
{
//
// knd = 0
  var tmpret3
//
  // __patsflab_ref_get_elt
  tmpret3 = ats2jspre_JSarray_get_at(arg0, 0);
  return tmpret3;
} // end-of-function


function
ats2jspre_ref_set_elt(arg0, arg1)
{
//
// knd = 0
//
  // __patsflab_ref_set_elt
  ats2jspre_JSarray_set_at(arg0, 0, arg1);
  return/*_void*/;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
