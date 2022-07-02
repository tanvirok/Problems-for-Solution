// Feet to Mile
function feetToMile(n){
    let calculation = n * 0.000189394;
    return calculation;
}
let result1 = feetToMile(10000);
console.log(result1)

// Wood Calculator
function woodCalculator(chair, table, bed){
    let total = chair * 1 + table * 3 + bed * 5;
    return total;
}
let result2 = woodCalculator(1, 1, 1);
console.log(result2);

// Brick Calculator
function brickCalculator(n){
    if(n <= 10){
        let first10 = (15 * 1000) * n;
        return first10;
    } 
    if(n <= 20){
        let secound10 = (n - 10) * (12 * 1000) + (15 * 1000) * 10;
        return secound10;
    }
    if(n <= 30){
        let third10 = (n - 20) * (10 * 1000) + (12 * 1000) * 10 + (15 * 1000) * 10;
        return third10;
    }
}
let result3 = brickCalculator(25);
console.log(result3);