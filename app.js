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