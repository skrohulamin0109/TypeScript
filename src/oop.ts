// // ---------- declare classes
// // class declaration
// class Chai{
//   flavour: string;
//   // price: number;

//   // // recomended constructor
//   // constructor(flavour: string, price: number){
//   //   this.flavour = flavour
//   //   this.price = price
//   // }

//     // recomended constructor
//   constructor(flavour: string){
//     this.flavour = flavour
//     console.log(this) // this refers to the new object that you create using the class and it's constructor.
//   }
// }

// // const masalaChai = new Chai() this'll give error as it expects arguments to construct as youve just added the recomended constructor
// // masalaChai.flavour = 'masala'; // gives options

// // const masalaChai = new Chai('Ginger', 23)
// const masalaChai = new Chai('Ginger')





// ------ Access modifier

class Chai{
  public flavor: string = 'masala'

  private secretIngredients = 'Cardamom' // private only accessable within the class;
  reveal(){ // you give a method to access the private value
    return this.secretIngredients // ok
  }

}


const c = new Chai()
c.reveal()// you won't get direct access to the secret ingredient just with a dot.

class Shop {
  
  protected shopName = 'Chai corner' // access within class or if inherited from class // called staff door entry
}

class Branch extends Shop {
  getName(){
    return this.shopName 
  }
}

new Branch().getName // you get the access of getName with dot


class Walet {
  #balance = 100 // another way to make private
  getBalance() {
    return this.#balance
  }
}

const w = new Walet();
w.getBalance// we prefer the privade modifier

// ----------- READ ONLY PROPERTIES

class Cup {
  readonly capacity: number = 140 // can't change this

  constructor (capacity: number) {
    this.capacity = capacity
  }
}


// --------- Controlled gates

class ModernChai{
  private _sugar = 2

  get sugar() {
    return this._sugar
  }

  set sugar(value: number){
    if(value > 5) throw new Error("Too sweet")
      this._sugar = value
  }
}


const c2 = new ModernChai()
c2.sugar = 3

// ------------- static members

class EkChai {
  static shopName = "chaicode caffee"

  constructor(public flavour: string){ // yeah bhi hota hai
    // value falue add nei kiya aabhi, aisi koi load wali baat nei hai
  }
}

console.log(EkChai.shopName)// static values are access at class itself not the object// you'll know static value fromt he syntax of accessing them

//------------ classes banani hai par un classes se object nei banane, : ABSTRACT CLASSES , a lot of use in mobile app developement.

abstract class Drink {// we just define syntax, not much implementation
  abstract make(): void
}

class MyChai extends Drink{
  // untill you write the make method here , it'll give error
  make(){
    console.log('brewing chai')
  }
}



// ------ Composition // used less, // alternative of inheritance

class Heater {
  heat(){

  }
}

class ChaiMaker {
  constructor(private heater: Heater){}
     make(){
      this.heater.heat
    }
}

// other concepts like polymorphism, abstraction etc of oop are learned in js