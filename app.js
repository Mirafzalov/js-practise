// console.log("JavaScript is working!");



// TESTING FOR AND IF

// const fruits = ['apple', 'banana', 'strawberry'];
// fruits.push('grapes')
// 
// const user = [
//     {
//         id: 1,
//         first_name: 'Doni',
//         last_name: 'Doniev',
//         job: true
//     },
//     {
//         id: 2,
//         first_name: 'John',
//         last_name: 'Watson',
//         job: true
//     },
//     {
//         id: 3,
//         first_name: 'Jade',
//         last_name: 'Lina',
//         job: false
//     },
//     {
//         id: 4,
//         first_name: 'Hanna',
//         last_name: 'Mackey',
//         job: true
//     },
//     {
//         id: 5,
//         first_name: 'Arthur',
//         last_name: 'Morgan',
//         job: false
//     }
// ]
// 
// const hasJob = []
// const hasNoJob= []
// for (let i = 0; i < user.length; i++){
//     if (user[i].job == true){
//         hasJob.push(user[i].first_name)
//         console.log(`${user[i].first_name} has job`)

//     }else{
//         hasNoJob.push(user[i].first_name)
//         console.log(`${user[i].first_name} has no job`)
//     }
    
// }

// console.log(hasJob);

// console.log(hasNoJob);



//NUMBER

// let number = Number(prompt('Enter Number'));

// if (number % 2 == 0){
//     console.log('even numebr')

// }else if (number % 2 != 0) {
//     console.log('Odd numebr')
// }


// let points = 100;
// for (let roll = 1; roll <= 10; roll++){
//     let dice = Math.floor(Math.random() * 6) + 1;
    
//     if (dice == 6){
//         console.log(`Roll: ${roll}, Got ${dice}`);
//         points += 20

//     }else if (dice == 1){
//         console.log(`Roll: ${roll}, Got ${dice}`);
//         points -= 10;

//     }else{
//         console.log(`Roll: ${roll}, Got ${dice}`);
//     }
// }

// console.log(`Your final point ${points}`);




// const scores = [58, 45, 80, 70, 65]
// let total = 0

// for (let i = 0; i < scores.length; i++){
//     total += scores[i];
// }

// const average = total / (scores.length);

// if (average >= 80){
//     console.log('exelent A')
// }else if (average >= 70 && average <80){
//     console.log('Good B')

// }else if (average >= 60 && average <70){
//     console.log('Norm C')

// }else if (average < 60){
//     console.log('Fail D')

// }


// FUNCTIONS

// function add(a, b){
//     return a+b;
// }

// const result = add(12, 34);
// console.log(result);



//forEach, map, filter

// const todos = [
//     {
//         id: 1, 
//         task: "Chorces",
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         task: "HomeWork",
//         isCompleted: true,
//     },
//     {
//         id: 3,
//         task: "Programming",
//         isCompleted: true,
//     }   
    
// ]

// 1
// const todoText = todos.map(function(todo){
//     return todo.task 
// });

// console.log(todoText)


// 2
// const todoText = todos.filter(function(todo){
//     return todo.isCompleted == true && todo.id == 1; 
// });

// console.log(todoText)


// 3
// todos.forEach(function(todo) {
//     console.log(todo.task)
// })

// const color = 'blue';

// switch(color){
//     case 'red':
//     console.log('It is red');
//         break;

//     case 'blue':
//         console.log('This is blue');
//         break

//     default:
//         console.log('Both colorss are not available');
//         break
//     }   





// const isPasswordValid = (inputPassword, Password) =>{
    
//     return inputPassword === Password;
// }

// const isUsernameValid = (inputUsernmae, Username) =>{
//     return inputUsernmae === Username;
// }


// const loginUser = (username, password) =>{
//     if (isUsernameValid(username, 'admin') && isPasswordValid(password, 'admin12345678')){
//         alert(`Welcome ${username}`);
        
//     }else{
//         alert('Wrong usernaem or password, try again')
//     }
// }




// let username = prompt('Enter username: ')
// let password = prompt('Enter password: ')

// loginUser(username, password)




// let age = prompt('Enter age: ');

// (age >=18) ? alert('Acces Granted') : alert('Access Denied');





// ##########################################
// const products = [
//     {
//         id: 1,
//         title: 'iphone 17',
//         price: 1100,
//         quantity: 25,
    
//     },
//     {
//         id: 2,
//         title: 'samsung 25 ultra',
//         price: 1200,
//         quantity: 30,

//     },
//     {
//         id: 3,
//         title: 'redmi 10',
//         price: 800,
//         quantity: 60
//     },
//     {
//         id: 4,
//         title: 'tesla phone',
//         price: 1000,
//         quantity: 15,
//     },
// ]  


// const priceFilter = products.filter(function(product){
//     return product.price >= 1000;
// });



// console.log(priceFilter);



// ############################### Callback function

// const isProductValid = (product, callback) => {
//     if (product.title == ''  || product.title == null){
//         callback('Erorr, the product does not have title');
//         return;

//     }
//     if (product.quantity < 1){
//         callback('Error, the product is not available at the stock rigth now');
//         return;
//     }

//     callback('Product is available');

// }

// isProductValid({title: 'iphone 17', quantity: 0}, (message) => {
//     console.log(message);
// });











// ###################### Order proceess with callback

// const processOrder = (userId, products, successOrder, errorOrder) => {
//     if (!products || products.length === 0) {
//         errorOrder('The is no product in your cart or at the stock');
//         return;
//     };
//     let total = 0;
//     for (i = 0; i < products.length; i++){
//         total += products[i].quantity
//     }

//     if (total === 0) {
//         errorOrder("All products are out of stock.");
//         return;
//     }


//     successOrder({
//         orderId: Math.floor(Math.random() * 10000),
//         userId: userId,
//         total: total,
//         status: 'confirmed',
//     })

// }

// processOrder(1, [{title: 'iphone 17', quantity: 2}, {title: 'iphone 16' ,quantity: 1}], (order) => {
//     console.log('Order is confirmed');
//     console.log('#' + order.orderId)
//     console.log('id:' + order.userId)
//     console.log('proudcts:' +order.total)
//     console.log(order.status)}, 
//     (error) => {
//     console.log( 'Error' + error)it

// })
