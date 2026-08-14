type chaiOrder = { type: string; sugar: number; strong: boolean };

function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}


// interfaces : are used for classes

type TeaRecipe = {
  water: number
  milk: number
}

// interface TeaRecipe  {
//   water: number
//   milk: number
// } // This will also work just fine.


class MasalaChai implements TeaRecipe {
  water = 100
  milk =  50
}

interface CupSize { 
  size:'small' | 'large'
}

class Chai implements CupSize {
  size: 'small' | 'large' = 'small'
}

// class Chai implements CupSize {
//   size = "small" as "small" | "large";
// }

// class Chai implements CupSize {
//   size: CupSize["size"] = "small";
// }


// Issue with type

// type Response = {ok: true} | {ok: false} // unions also don't go inside classes

// class myRes implements Response{
//   ok: boolean = true;
// }



// ------------ Union Example
type TeaType = 'maasala' | 'ginger' | 'lemon'  // these are called literal types.

function orderChai(t: TeaType){
  console.log(t)
}




//-------------- Intersection Example
type BaseChai = {teaLeaves: number}
type Extras = {maasala: number}

type fullChai = BaseChai & Extras // now full chai will have both the properties.

const chaiCup: fullChai = { // now it'll give suggesitions from both the properties.
  teaLeaves: 2,
  maasala: 2
}

//------------ optional values : values may or may not exist

type User = {
  userName: string
  bio?: string // bio may or may not be present, if present, then it'll be a string
}

const u1: User = {userName: 'Adil234'} // happy without the bio
const u2: User = {userName: 'Rajib234', bio: 'This is happy with the bio as well.'}


//-------------- Read only values

type Config = {
  readonly appName : string
  version: number
}

const cfg : Config ={
  appName: 'masterGi',
  version: 2
}

// cfg.appName = 'anotherName' // can not assign another name as 'appName' was readonly property.


// -2:39:49