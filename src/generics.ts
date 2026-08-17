// generics make the code reuable // More used while designing libraries and frameworks

function wrapInArray <T>(item: T): T[] { // <T> is any type of data type// means what ever datatype you put inside the argument the whole code will run according to that perticular data type. It can be any data type you want.
  return [item]
}

wrapInArray("masala");
wrapInArray(43);
wrapInArray({flavor: 'ginger'})

function pair<A,B>(a: A, b:B): [A, B]{
// return [b,a]
return [a, b]
}

pair ('masala', 'test')
pair ('masala', 43)
pair ('masala', {})

// generic interface

interface Box <T> {
  content: T
}

const numberBox: Box<number> = {
  content: 23
}
const CupBox: Box<string> = {
  content: 'alu'
}

// ++++ partial, omit, pick etc are also available

interface ApiPromise <T> {
  status: number, 
  data: T
}

const res: ApiPromise <{flavor: string}> = {
  status: 200,
  data: {flavor: 'lemon'}
}

