// 1
//  Practise promises and Api

// 2(
// async ()=>{
// promiseCB().then(result => console.log(result))
// })();

// 3 
// Practise Functions
// const f1 = ()=>{

// }

// const f2 = function(){


// 4



// ######################################################

// 1
// function greet(name){
//     return 'Hello ' + name;
// }; 
// 
// console.log(greet('John'));



// 2
// function square(numebr) {
//     return numebr **2;
// };
// console.log(square(4))


// 3

// const isValidElement = (username, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if (username !== 'admin' || password !== '12345678') {
//                 reject('Invalid username or password');
//                 return;
//             }
//             resolve('Welcome back ' + username)
//             return;
//         }, 3000);
//     });
// };



// async function login(username, password) {
//     console.log('Checkicng...')
//     try {
//         const result = await isValidElement(username, password)
//         console.log(result);

//     }catch(error){
//         console.log(error)
//         console.log('Please try again')
//     }



// };


// const username = prompt('username: ')
// const password = prompt('password: ')

// login(username, password)





// let book = {
//     title: 'The happy life',
//     year: 2000
// } 


// let users = [
//     {
//         name: 'amir',
//         job: 'programmer'
//     },
//     {
//         name: 'mir',
//         job: 'chef'
//     }

// ];


// const user1 = { name: "Milo" };
// const user2 = { name: "Buddy"};

// function sayHi(){
//     console.log(this.name)
// } 

// user1.f = sayHi
// user2.f = sayHi



// user1.f()
// user2.f()




// for (let u of users){   
//     u['name'] = u['first_name']
//     console.log(u)
// }

// console.log(user)
// user['name'] = "Pete"; 
// user['last_name'] = 'Pa'
// console.log(user)







// let fruits = ['Apple', 'Banana', 'Cherr', 'Strawberry', 'Watermelon', { user: "Mir" }]


// let numbers = [23, 12, 7, 32, 5, 2];

// const user = {
//     name: 'alex',
//     age: 23,
//     address: ['street34', 'street23']
// }
// {
//     name: 'Ali',
//     age: 34
// }
// ]

// for (let value of Object.values(user)) {
//     console.log(value);
// }




// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let sum = Object.values(salaries).reduce((acc, sal) => acc+sal, 0)
// console.log(sum)


// let [name='Alex', surname='Watson'] = []
// console.log(name)

// let a = 'Alex';
// let b = 'Ali';

// // [a, b] = [b, a]; 

// let [name, surname] = ['Alex', "Watson"]


// console.log(name)
// console.log(surname)




// let options = {
//   title: "Menu"
// };

// let {width=null, height=null, title=null} = options;

// console.log(title)
// console.log(height)
// console.log(width)



// MAX Salary Finder
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//  let first = Object.entries(salaries)[0]
// console.log(first)

// let[name, maxSalary] =  Object.entries(salaries).reduce((max, sal) => sal[1] > max[1] ? sal : max)
// console.log(name, maxSalary)



// const promise = new Promise((resolve, reject) => {
//     resolve('Working');
//     reject("Error")
// })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error);
//     }); 











// ############


// // 1
// const url = "https://jsonplaceholder.typicode.com/posts"




// async function fetchJson() {
//     console.log('Starting')
//     try {
//         const response = await fetch(url)
//         const result = await response.json()

//         let users = []
//         for (user of Object.values(result)) {
//             users.push(user['userId'])
//         }


//         console.log(users)
//         console.log('Finished')
//     }
//     catch {
//         console.log('error')
//     }
// }


// fetchJson();

// console.log('Getting...')



// let result: {name:string}[] = [
//     {
//         name:'alex',
//         age: 23
//     },
//     {
//         name:'Ali',
//         age: 24
//     }
// ]


// 2
// async function fetchUsers(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/users")    
//     const result = await data.json()


//     let names = Object.values(result).reduce((total, user) => {
//         total.push(user.name);
//         return total;
//     }, [])


//     return names;

// }


// const promiseCB = () => new Promise((res,rej) => {
//     setTimeout(()=>{
//         res('Tick..');
//     },3000)
// });

// (async ()=>{
//     promiseCB().then(result => console.log(result))
// })();



// ########
// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age

//     }
//      sayhi(){
//         return 'hello'
//     }
    

// }
// const Users = [
//     new User('Alex Watson', 23),
//     new User('Andrew White', 25),
//     new User('Ali Jackson', 14),
//     new User('Max Jackson', 16),
//     new User('Amily Jackson', 18),

// ]

// const names = Object.values(Users).reduce((names, user) => {
//     names.push(user.name)
//     return names
// }, [])


// const users = Object.values(Users).filter(user => user.age < 18)



