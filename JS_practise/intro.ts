// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Maddison", new Date());




// interface Product {
//     id: number,
//     name: string,
//     price: number,
//     inStock: boolean
// }




// const products: Product[] = [
//     {
//         id: 1, 
//         name: "Laptop",
//         price: 1000,
//         inStock: true
//     },
//     {
//         id: 2, 
//         name: "Iphone",
//         price: 1000,
//         inStock: true
//     },
// ]


// function sayhi(name: string){
//     return 'hello ' + name
// }

// console.log(sayhi(''))



type num = number

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}