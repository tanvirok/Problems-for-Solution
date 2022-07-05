// // ========== Feet to Mile
// function feetToMile(n){
//     let calculation = n * 0.000189394;
//     return calculation;
// }
// let result1 = feetToMile(10000);
// console.log(result1)

// // ========== Wood Calculator
// function woodCalculator(chair, table, bed){
//     let total = chair * 1 + table * 3 + bed * 5;
//     return total;
// }
// let result2 = woodCalculator(1, 1, 1);
// console.log(result2);

// // ========== Brick Calculator
// function brickCalculator(n){
//     if(n <= 10){
//         let first10 = (15 * 1000) * n;
//         return first10;
//     } 
//     if(n <= 20){
//         let secound10 = (n - 10) * (12 * 1000) + (15 * 1000) * 10;
//         return secound10;
//     }
//     if(n <= 30){
//         let third10 = (n - 20) * (10 * 1000) + (12 * 1000) * 10 + (15 * 1000) * 10;
//         return third10;
//     }
// }
// let result3 = brickCalculator(25);
// console.log(result3);

// // ========== Hightest number from the Array
// let numbers = [15, 11, 50, 14, 35, 26, 24, 65]
// let max = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//     let elements = numbers[i];
//     if(elements > max){
//         max = elements;
//     }
// }
// console.log("Highest value is", max);

// // ========== Lowest number from the Array
// let numbers = [20, 13, 42, 16, 54, 11, 32, 52]
// let min = numbers[0]
// for(let i = 0; i < numbers.length; i++){
//     let elements =  numbers[i];
//     if(elements < min){
//         min = elements;
//     }
// }
// console.log("Lowest value is", min);

// // ========== Smallest name from the Array
// let names = ["MD. Shohag", "Mohibul Islam Masum", "Mehedi Hasan journalist", "Akib", "Mr. Rakib"]
// function smallestName(arr){
//     let smallest = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         let elements = arr[i]; 
//         if(smallest.length > elements.length){
//             smallest = elements;
//         }
//     }
//     return smallest;
// }
// let result = smallestName(names);
// console.log("Smallest name is : ", result);

// // ========== Biggest name from the Array
// let names = ["MD. Shohag", "Mohibul Islam Masum", "Mehedi Hasan journalist", "Akib", "Mr. Rakib"]
// function biggestName(arr){
//     let biggest = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         let elements = arr[i];
//         if(biggest.length < elements.length){
//             biggest = elements;
//         }
//     }
//     return biggest;
// }
// let result = biggestName(names);
// console.log("Biggest name is : ", result);

