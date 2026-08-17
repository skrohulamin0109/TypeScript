interface Chai {// main goal is to shape your object or data
flavor: string;
price: number;
milk?: boolean;
}
// Interfaces define the structure of the object but they do not generate any js code during compilation.
// in nearly 75% of the cases types and interfaces are interchangable.

const masala: Chai ={
  flavor: 'masala',
  price: 40
}

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: 'chaiCodeCamp'
}

// s.id = 3; // not allowed


// main goal is to shape your object or data, they never put data in it.
interface DiscountCalculator {// this is just a defination
  (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5 // this is the use

interface TeaMachine{
  start(): void
  stop(): void
}

// the methods must be there in the usecase, even if the fuctions doesn't do anything, still it must be there.
const firstMachine: TeaMachine = {
  start(){
    console.log('start')
  },
  stop(){
    console.log('stop')
  }
}


// ---------- Index Signature // usually people avoid because it sometimes gets confusing.

interface ChaiRatings {
  [flavor: string]: number
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 3.5,
}


// -------- Interfaces murge automatically.

// let Library
interface User {
  name: string
}

// let your code
interface User{
  age: number
}

const u: User = {
  name: 'Wanda',
  age: 34,
}

 // extension of interfaces

 interface A {
  a: string
 }

 interface B {
  b: string
 }

 interface C extends A, B {}


 

