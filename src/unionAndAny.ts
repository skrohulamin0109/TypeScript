// UNION
let subs: number | string = '1M' // now the variable can store number or a string.

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

// apiRequestStatus = 'randaom' won't work, must be one of the three modes defined earlier at the time of declaration. You will aslo get suggesitions. 


let arilineSeat: 'aisle' | 'window'|'middle' = 'middle';

arilineSeat = 'aisle'

const orders = ['12', '20', '28', '42']
// Always AVOID ANY!!!!!!! unless you must use it.
// let currentOrder; // type becomes ANY, not good. 
let currentOrder: string | undefined; 

for(let order of orders){
  if(order === '28'){
    currentOrder = order;
    break;
  }
  currentOrder = '11'
}

// currentOrder = 42 // if the type of any typescript would not have cared about the type of this value.

console.log(currentOrder)


// 'unknown' is a safer alternative for 'any'; any doesn't care about the type at all, but with unknown you'll have to specify the type when you are using it, though when you're not sure as to what the type is going to be initially, you can leave it as unknown.