# MxN Checkers
######Final Project for cs520: Principles of Programming Languages

The project aims to create a simple two-player checkers game. The game uses functional reactive programming to implement the game and linear types via ATS to enforce the correctness of the game's rendering.

##Project Structure

The code behind the project demonstrates organization into three destinct catogories:

* Canvas Utilities: HTML5 Canvas, MooTools
* Game Logic: BaconJS, FRP
* Resource Management: ATS (Utilizing Linear Types)

Each piece serves uses different programming paradigms that best fit the smaller problem they are trying to solve. Four different source code files solve contribute to these pieces:
* checkers_canvas.js (Canvas Utilities)
* checkers_frp.js (Game Logic)
* draw_checkers_vtypes.sats/draw_checkers_vtypes.dats (Resource Management)

###Canvas Utilities: A Paradigm of State
The graphical display is a stateful resource. To properly display the game, there needs to be a sense of where every polygon needs to go. To reflect this, the canvas utilites are set up in a very procdural manner. Each function corresponds to changing a bit of the display according to the given arguments. This matched up with the libraries that effect the canvas i.e. MooTools. When trying to morph the nature of a state, the procedural paradigm gives you the tools to fine tune the state. To implement this, DOM elements where stored for use in arrays. Since everything in JavaScript is a closure, leaving this state global to be procedurally manipulated is an acceptable performance hit.

###Game Logic: An Abstraction of Functional Purity
The arguments to the canvas utilies however do not need to derive themselves from state directly. In programming the game rules and logic, FRP helps to abstract the state of the machine into a stream of events. This abstraction benefits the programmer by releaving the concerns of fine tuning objects and states. It becomes difficult to keep track of what variables were wrongly calculated at what time. 

A stateful representation of the logic was my first attempt at programming the game logic. However run time errors of the form "object.field is undefined" would occur throughout the debugging process. So the game logic favored a purer functional approach. Instead of caring about the state of the entire system, the game logic concerned itself with the functional transistions between one event to the other. So a functionally pure representation only needs a well written transition functions. The transition function for the project takes two datatypes:

```javascript
function Board(){/*...*/} //the object or datatype
function Event(row,col){this.row;this.col;} //simpler datatype just to contain info
function transform_board(state,event){/*...*/} //returns state
```

Rather than consern itself with the state of the entire system, the _transform_board_ function concerns itself only with a datatype abstraction of the momementary configuration during the given event. A click on a square with some coordinates at a row and column produces this event. After it figures out what the next configuration should be, Bacon JS takes care of the rest.

Bacon JS abstracts away the state of the system. It does this by transforming a stateful resource, the canvas, into an input of a stream of _events_. These events can be responded with functions that are semanically pure. Once these functions return their _value_, Bacon JS can inform and manipulate the canvas. This library allows for a very _Haskell_-esque style of programming, where one seperates "dirty" states from the purely functional. 

###Resource Management: Linear Types to Enforce Correctness
ATS wrapper methods help verify correctness of the draw methods manipulating the canvas. In whatever version of checkers one should play, the number of pieces should always stay the same until a "jump" move occurs. this means pieces can only be removed, never added. So to enforce this, a Linear-typed "tokens" where added to the game's drawing mechanism. The springboard function that Bacon JS calls to draw the board object is this:

```ats
fun ats_draw_board(Board): void = "mac#" // for use in JS
```

And then to call back into the JavaScript to draw individual pieces this function is called:
```ats
absvt@ype token
// ...
fun ats_draw_checker(token, Checker) : token 
```
From linearly typing _token_ the draw function cannot generate its own token's, it needs to extract them from a precalculated pool. The back end to this is a global variable initialiazed to the specified number of columns times the number of starting player rows (e.g. _8x3=24_ in regular checkers). To draw, a token needs to be extracted. There are four main functions interacting with the tokens to take care of the verification:

```ats
// Takes a token to draw a piece
fun token_takeout(): Option_vt(token)
// Removes token from the system when a piece is removed
fun token_remove(token): void
// Holds tokens to release
fun token_hold(token): void
// Releases all held tokens 
fun tokens_release(): void
```
If all the tokens are not exhausted upon _release_ a JavaScript error will be thrown informing the programmer. Conversely, if all the tokens are exhausted while the board is still being drawn, another error is thrown. This enforces an important aspect of checkers where the number of pieces always goes down, but only when a "jump" occurs.

##Further Verification and Additions: Dependent Types, Linear Resources, and AI
One of the disadvantages of JavaScript is its loose typing system. There are only seven to ten avalible types depending how you count them. This leaves very little room for static verification and analysis. However, the functionally pure game logic section can be easily verified with static analysis. Dependent types can be configured to ensure a piece can never be moved outside the restrictions of the game. Since moves are simply _natXnat_ coordinates from previous _natXnat_ coordinates, dependent types can ensure moves are done in accordance to the rules of the game. For example, a checker will never move more than once without jumping or a checker will never move to the side. 

Not only can the allowance to draw a checker be linearly typed, but the checker datatypes can be as well. Linear types can ensure checkers in the game logic stage does not get lost and does not increase. This would be especially useful do to the extensible nature of MxN Checkers. Given some paremeters that define the particularies of a game instance, one can confirm that no pieces will go missing unless jumped.

Once a proposed transition function is written and verified in ATS, a verifiable AI player can be written for the game. With dependent types we can ensure the AI player does not consiter illegal transitions of the board under any parameters of a game instance. A purely functional transition function would ensure evaluating it would not affect the of the state of the system. Also with the help of FRP, the AI play can be written and inserted easily as another stream.

##Closing Remarks
The projects implementation shows three principles of programing:
* Use of different programming paradigms that lend themselves better to a different problems
* Program verification through the use of strongly typed systems such as ATS
* Application extensiblity through logical separation of tasks
