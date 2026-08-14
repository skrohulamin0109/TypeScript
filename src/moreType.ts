// Forceful type assertion
let response: any = '42'
let numaricLength: number = (response as string).length // trust me bro, this is a string

// another example of forceful assertion

type Book = {
  name: string;
};

let bookString = '{"name": "Paranoid"}'
let bookObject = JSON.parse(bookString) as Book // : trust me bro, this is Book obj, now after appling dot, it'll give you correct suggestions.

// example another

const inputElement = document.getElementById('userName') as HTMLInputElement // to get suggestions of the html methods

// any vs unknown

let value:any;
 value = 'apple'
 value = [1, 2, 3]
 value = 2.35
 value.toUpperCase() // will give error when you run it but not now.

 let newValue : unknown;
  newValue="apple"
  newValue = [1,2,3]
  newValue = 3.324
  // newValue.toUpperCase()// now it'll throw me errors
  if(typeof newValue === 'string'){
    newValue.toUpperCase(); // now it won't throw me an error.
  }


  // Handling the type of error
  try{}catch(e){
    if(e instanceof Error){
      console.log(e.message)
    }
    console.log('Error', e)
  }


  // more examples

  const data: unknown = "Chai Aur Code"
  const strData: string = data as string // force assertion
  
  
  // NEVER data type
  type Role = 'admin' | 'user'

  function redirectBasedOnRole(role: Role):void{
// void => I am not returning anything or I don't care about what I return.
    if(role === 'admin'){
      console.log('Redirecting to admin Dashboard')
      return
    }
    if(role === 'user'){
      console.log('Redirecting to user Dashboard')
      return
    }

    role; // now if you hover on this role, it'll say the type is 'never', meanig this part shouldn't have been in here in the first place as you have already handled all the cases. Now if you add additional types to the role type like 'superAdmin' and don't use it in the code, then the type of the last role becomes 'superAdmin' or any number of other cases that might have been added to that.
  }



  // never returning functions

  function neverReturn(): never{
    while(true){} // web-servers are constantly running infinte loops
  }