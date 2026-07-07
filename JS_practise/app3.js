//  7kyu
// function findAB(numbers,c){ /// numbers = [1, 2, 3, 4, 5, 6] c = 6
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             let a = numbers[i];
//             let b = numbers[j];
//             if (a * b == c){
//                 return [a, b];
//             }
//         }
//     }
//     return null
// }


// console.log(findAB([-3,-2,-1,0,1,2,3,4], 4))





// 7 kyu  lining up his student
// function lineupStudents(students) {
//     let lst = students.split(' ');
//     let res = []
//     let max = lst[0];

//     let similar = []
//     // console.log(lst)
//     let i = 0

//     while (i < lst.length) {
//         for (let j = i+1; j < lst.length; j++) {
//             if (max.length < lst[j].length) {
//                 max = lst[j];

//             }
//             else if (max.length == lst[j].length) {
//                 // console.log('2 - '+max + ' ' + lst[j], ' = ',max < lst[j] ? lst[j] : max)
//                 max = max < lst[j] ? lst[j] : max
//             }

//         }
//             res.push(max)
//             lst.splice(lst.indexOf(max), 1)
//             max = lst[0];

//     }

// console.log(res);

// }



// lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi')
// lineupStudents('Mirmuhammad L Ali Azim Aziz Doniyor')
// ['Takehiko','Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao']

// ########################################################

//  (7 kyu)


// function calcType(a, b, res) {
//     types = {
//         'addition': '+',
//         'multyplication': '*',
//         'subtraction': '-',
//         'division': '/',
//     }

//     for (let type in types) {
//         if (eval(`${a}${types[type]}${b}`) == res)  {
//             return type
//         }     
//     }
// }

// console.log(calcType(6, 3, 2))



//  (7 kyu)

// function hydrate(s) {
//     let res = 0;
//     for (let num of s) {
//         if (Number(num)) {
//             res += Number(num)      
//         }
//     }
//     return res === 1 ? `${res} glass of water` : `${res} glasses of water`
// }



// console.log(hydrate('2'))


//  (7 kyu)

// function mostFrequentItemCount(collection) {
//     if (collection.length === 0) {
//         return 0
//     };

//     let seen = new Set();
//     let dict = {};
//     for (let n of collection) {
//         if (seen.has(n)) {
//             dict[n] += 1

//         }else{
//             dict[n] = 1
//             seen.add(n)
//         }

//     }
//     console.log(dict)
//     let max = Object.values(dict)[0];
//     let res;
//     for (let m of Object.values(dict)) {
//         if (max < m){
//             max = m;
//         }
//     }
//     return max

// }


// console.log(mostFrequentItemCount([1, 2, 3, 4, 5, 5]))



// #1 (6kyu) Single Word Pig Latin


// function pigLatin(string) {
//     const nums = '0123456789'
//     for (n of nums) {
//         if (string.includes(n)){
//             return null
//         }
//     }

//     if (string.length === 0 ) {
//         return null;

//     };

//     string = string.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u']


//     if (vowels.includes(string[0])) {
//         return string + 'way'
//     }

//     let i = 0;
//     let s = '';
//     while (i < string.length) {
//         if (!vowels.includes(string[i])) {
//             s += string[i]

//         }else{
//             break
//         }

//         i++;
//     }
//     if (s.length == string.length){
//         return string + 'ay'
//     }

//     string = string.substring(s.length)
//     string += s
//     return string + 'ay'



// }


// console.log(pigLatin('disJOf0jeJO'))




// #2 (6kyu)

// function toWeirdCase(string) {
//     let words = string.split(' ')
//     let res = '';
//     console.log(words)
//     for (let j = 0; j < words.length; j++) {
//         for (let i = 0; i < words[j].length; i++) {
//             if (i % 2 == 0) {
//                 res += words[j][i].toUpperCase()


//             } else if (i % 2 != 0) {
//                 res += words[j][i].toLowerCase()
//             }
//         }
//         if (j != words.length - 1) {
//             res += ' '
//         }

//     }
//     return res
// }




// console.log(toWeirdCase('string dS fdk'))



// #3 (6kyu) PALINDROME




// function palindrome(num) {
//   console.log(num)
//     if (isNaN(num) || num < 0 || num === String(num)) {
//         return "Not valid"
//     }
//     num = String(num);
//     let res = [];
//     let seen = new Set();

//     for (let i = 1; i < num.length; i++) {       //[1 2 2 1]
//         for (let j = 0; j < num.length - i; j++) {
//             n = num.slice(j, i + j + 1)
//             if (Number(n).toString() === n.split('').reverse().join('') && n !== '00' && n != 20 && n!= 200) {
 
//                 if (!seen.has(n)) {
//                     res.push(n)
//                     seen.add(n)
//                 }
//             }
//         }

//     }
//     if (res.length === 0) {
//         return "No palindromes found"
//     }



//     function compareNumbers(a, b) {
//         return a - b;
//     }
//     res = res.sort(compareNumbers)
//     return res
// }


// console.log(palindrome(880880));



// function solution(number){
//     if (number < 0){
//         return 0
//     }
//     let res = 0;
//     for (let i = 1; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0){
//             console.log(i)
//             res += i;
//         }
//     }
//     return res
// }


// console.log(solution(10))





// sdfonsdnfjdsnfjs