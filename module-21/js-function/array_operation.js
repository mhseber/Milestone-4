function sumOfNumbers(Numbers) {
    let sum = 0;
    for (const number of Numbers) {
        console.log(number)
        sum = sum + number;

    }
    return sum;
}
const nums = [22, 33, 44, 55, 66];
const sum = sumOfNumbers(nums);
console.log('sum of number is', sum);