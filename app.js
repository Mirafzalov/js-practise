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
// 

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



// ################################ Callback functions



// const isInputValid = (email, password) => {
//     if (!email.includes('@')){
//         return false;
//     };

//     if (password.length < 8){
//         return false;
//     };
//     return true;
// };




// const registerUser = (email, password, onSuccess ,onError) => {
//     if (!isInputValid(email, password)){
//         onError('Invalid email or password');
//         return;
//     };

//     const newUser = {
//         id: 1,
//         email: email,
//         createdAt: new Date().toISOString()
//     } 
//     onSuccess(newUser);       
// }


// registerUser('@mirafzalov416', '12345678', (user) =>{
//     console.log('User is created');
//     console.log('Id: ' + user.id);
//     console.log('email: ' + user.email)

// }, (error) => {
//     console.log('Error ' + error)
// })



// ######################################## try and catch



// let json = '{"name": "Max"}';

// try{
//     let user = JSON.parse(json);
//     alert(user.name);

// }catch(e){
//     alert(e.name);
//     alert(e.message)
// }



// ########################## Promise
// #1
// const myPromise = new Promise((resolve, reject) =>{

//     setTimeout(() => {
//         resolve('Here is your data!')
//     }, 3000);
// });


// myPromise
//     .then(data => {
//     console.log(data);

// })
//     .catch(error => {
//         console.log('Error', error);
//     });

// console.log('I am requesting data...');




// #2
// const fetchUser = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     userId: userId,
//                     name: 'Max',
//                     email: '@Max416'
//                 });
//             }else{
//                 reject('Invalid user');
//             }
//         }, 300);
//     });



// };


// fetchUser(1)
//     .then(user => {
//         console.log('Found user');
//         console.log(user.userId);
//         console.log(user.name);
//         console.log(user.email);
//     })
//     .catch(error => {
//         console.log(error)
//     })

// console.log('Looking for user...')




// ################################### async and Pomises



// function foodCook(food) {
//     return new Promise((resolve, reject) => {

//         console.log('Accepted the order and started cooking ' + food);

//         setTimeout(() => {
//             resolve(food + ' is ready');
//         }, 3000);
//     });
// } 




// async function orderFood(food) {
//     console.log('Place your order')
//     try {
//         food = await foodCook(food)
//         console.log(food + ' and soon to be served')

//     } catch (e) {
//         console.error("Error -> ", e);

//     }
// }

// orderFood('Burger')

// console.log('The food is being cooked...')



// #################### async




// const users = [
//     {
//         id: 1,
//         first_name: 'Max',
//         last_name: 'Maximov',
//         job: 'Bsuiness Manager'
//     },
//     {
//         id: 2,
//         first_name: 'Aex',
//         last_name: 'Alexiev',
//         job: 'Accountant'
//     },
//     {
//         id: 3,
//         first_name: 'John',
//         last_name: 'Shelby',
//         job: 'Enterpreneur'
//     },




// ############################################################## Mini weather getter

// async function getWeather() {
//     const city = prompt('Enter your city: ')

//     const getLocation = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
//     );
//     const getData = await getLocation.json();

//     if (!getData.results) {
//         console.log('City not found');
//         return;
//     };

//     const { latitude, longitude, name } = getData.results[0];

//     const weatherResponse = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
//     );

//     const weatherData = await weatherResponse.json();
//     console.log("City:", name);
//     console.log("Temperature:", weatherData.current.temperature_2m + "°C");
//     console.log("Humidity:", weatherData.current.relative_humidity_2m + "%");
//     console.log("Timezone:", weatherData.timezone);
//     console.log("Time:", weatherData.current.time);
// }


// getWeather();