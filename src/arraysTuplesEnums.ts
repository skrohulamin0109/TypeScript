// ---------- Declaration of arrays

 const chaiFlavours : string[] = ['Masala', "Adrak"]
 const chaiPrice: number[] = [2, 3, 53, 234]
 const rating: Array<number> = [4.4, 23] // the data type inside the <> can be any data type including your own custom data types.

 type Chai = {
  name: string;
  price: number
 }

 const menu: Chai[] = [
  {name: "Masala", price: 20}, 
  {name: 'Ginger', price: 25}
 ]

 // ---------- Read only array
 const cities: readonly string[] = ["Delhi", "jaipur"] // now you can't modify it.
// cities.push("pune") // won't work


// ------- Multi dimentional arrays
const table: number[][] = [
  [1,2,3],
  [4,5,6]
]


// ---------- Tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 23]
// chaiTuple = [32, "Ginger"] the order must be same as the definition

let userInfo: [string, number, boolean?]

userInfo = ["Mahesh", 33, false]
userInfo= ["Chona", 34] // boolean is optional

const location: readonly [number, number] = [23.44, 43.22]


// ---------- Named Tuples
const chaiItems: [name: string, price: number] = ["Masala", 34]


// ---------- Enums
enum CupSize {
  SMALL, 
  MEDIUM, 
  LARGE
}

const size = CupSize.LARGE

enum Status {
  PENDING = 100,
  SERVED, // if you don't give explecit value now, it'll autmatically be 101
  CANCELLED // 102
}

// given enum values in strings

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType){
  console.log( `Making: ${type}`)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") // fixed values only.

// Heterogenous values in enums: Not good practice
enum RandomEnum{
  ID = 1,
  NAME = "chai"
} // though okay, but not a good practice, Enums should be homogenous.

// Making Constant Enums

const enum Sugar{
  LOW=1,
  MEDIUM =2,
  HIGH = 3 
}

const s = Sugar.MEDIUM;


// BE AWARE
let t: [string, number] = ["Chai", 10]

t.push('Extra') // you can push tuples inside a tuple wich is end of the day is an array: This is not good practice, unexpected behaviour.

// - 1: 50 : 23