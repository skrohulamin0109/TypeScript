// INFERENCE: Typescript understands the type of this variable on its own.
let drink = "Chai"; 
let cups = Math.random() > 0.5 ? 10 : '5';

// ANNOTATION: We anotate typescript about the type of the variable.

let flavour: string = "caromel";
flavour = 'chocolate'

let isFlavourGood: boolean = false;

// * While re-assigning a variable you must no change the type of the variable from when it was first declared.

