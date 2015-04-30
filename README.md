# MxN Checkers
######Final Project for cs520: Principles of Programming Languages

The project aims to create a simple two-player checker game. The game uses functional reactive programming to implement the game and linear types via ATS to enforce the correctness of the game's rendering.

###Project Structure

The code behind the project demonstrates organization into three destinct catogories:

* Canvas Utilities: HTML5 Canvas, MooTools
* Game Logic: BaconJS, FRP
* Resource Management: ATS (Utilizing Linear Types)

Each piece serves uses different programming paradigms that best fit the smaller problem they are trying to solve. Four different source code files solve contribute to these pieces:
* checkers_canvas.js (Canvas Utilities)
* checkers_frp.js (Game Logic)
* draw_checkers_vtypes.sats/draw_checkers_vtypes.dats (Resource Management)

###Canvas Utilities: A Paradigm of State
The graphical display is a stateful resource. To properly display the game, there needs to be a sense of where every polygon needs to go. To reflect this, the canvas utilites are set up in a very procdural manner. Each function corresponds to changing a bit of the display according to the given arguments. This matched up with the libraries that effect the canvas i.e. MooTools. When trying to morph the nature of a state, the procedural paradigm gives you the tools to fine tune the state. To implement this, DOM elements where stored for use in arrays. Since everything in JavaScript is a closure, leaving this state to be procedurally manipulated globally is an acceptable performance hit.

###Game Logic: An Abstraction of Functional Purity
The arguments to the canvas utilies however do not need to derive themselves from state directly. In programming the game rules and logic, FRP helps to abstract the state of the machine into a stream of events. This abstraction benefits the programmer by releaving the concerns of fine tuning objects and states. It becomes difficult to keep track of what variables were wrongly calculated at what time. 

A stateful representation of the logic was my first attempt at programming the game logic. However run time errors of the form "object.field is undefined" would occur throughout the debugging process. So the game logic favored a purer functional approach. Instead of caring about the state of the entire system, the game logic concerned itself with the functional transistions between one event to the other. So a functionally pure representation only needs a well written transition functions. The transition function for the project takes two datatypes:

```javascript
function Board(){/*...*/} //the object or datatype

function transform_board(state,event){/*...*/}
```

