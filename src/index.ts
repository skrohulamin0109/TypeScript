function greet(name:string):string{
  return `Hellow ${name}, welcome to learning typescript.`
}

const userName:string = 'Caped Baldy'

console.log(greet(userName))

// 43: 00 mins done so far.
    // "dev1": "npx tsc", |||| src/index.ts -> compiled by tsc in to js -> dist/index.js then your run it with "node dist/index.js"
    // "dev2" : "npx ts-node src/index.ts" |||| once you install you don't need dist folder, you can run ts directly in node. src/index.ts -> ts-node ,, run directly and immediately.