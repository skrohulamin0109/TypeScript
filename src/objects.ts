const chai = {
  name: 'Masala Chai',
  price: 20,
  isHot: true
}

// ------------------ TypeScript behind the scene always infers ||| Yes we are using semicolons
// {
//   name: string;
//   price: number;
//   isHot: boolean
// }


// ------------------ Declaring object types
let tea: {
  name: string;
  price: number;
  isHot: boolean
}

tea = {
  name: 'Ginger tea',
  price: 233,
  isHot: true
}

// ------------------ Define an object type
 type Tea= {
  name: string;
  price: number;
  ingredients: string[]
 }

 const adrakChai: Tea = {
  name: 'Adrak Chai',
  price: 25,
  ingredients: ['ginger', 'tea leaves']
 }

 // ------------------ Duck typing // if it looks like a duck and walks like a duck then it might be a duck.
 type Cup = {size: string};
 let smallCup: Cup = {
  size: '233ml'
 }

 let bigCup = {
  size: ' 500ml',
  material: 'steel'
 }

 smallCup = bigCup // No issues as the bare minimum properties are fulfilled

 type Brew = {
  brewTime: number
 }

 const coffee = {brewTime: 4, beans: 'Arabica'}
 const chaiBrew: Brew = coffee // okay, no issue: Type script is prone to be okay with extra value once the bare minimum is full filled.

 type User = {
  userName: string;
  password: string
 }

 const u: User = {
  userName: 'Chaicode',
  password: '123'
 } // zyada se dikkat nei hai, kamm se hai.

 //------------------ Splitting of data types

 type Item =  {name: string, quantity: number}
 type Address = {street: string, pin: number}

 type Order = {
  id: string;
  items: Item[];
  address: Address[];
 }

 // =------------------ data type define ek tarikese and use kayi tarikese, specially objects

 type Chai = {
   name: string;
   price: number;
   isHot: boolean
 }

 // +++++++++ Update with 'Partial' Key word
 const updateChai = (updates: Partial<Chai>) => { //Partial: Make all properties in T optional // T = data type
  console.log('updating chai with ', updates)
 }

 updateChai({price: 23})
 updateChai({isHot: false})
 updateChai({})// while partially updating like this, you can also pass empty objects, and that creates problems.

// +++++++++ Update with 'Required' Key word
 type ChaiOrder = {
   name?: string;
   quantity?: number
 } // though you have made these properties optional, but if you use Required, you will have to pass them.

 const placeOrder = (order: Required<ChaiOrder>) => { // Required : Make all properties in T required
  console.log(order)

 }

 placeOrder({
  name: 'Masala Chai',
  quantity: 23
 })

 // +++++++++ Update with 'Pick' Key word
 type OtherChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[]
 }

 type BasicChaiInfo = Pick<OtherChai, "name" | "price"> // from the data type T, you can pick certain properties and not must require all the properties

 const chaiInfo: BasicChaiInfo = {
  name: 'Lemon Tea',
  price: 32
 }

 // +++++++++ Update with 'Omit' Key word

 type NewChai ={
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
  secretIngredients: string;
 }

 type PublicChai = Omit <NewChai, "secretIngredients">

