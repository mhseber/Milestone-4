// problem 1

function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid number'
    }
    return ticketSale * 120 - (500 + 8 * 50)
}

// Test problem 1 
// console.log(calculateMoney(10))
// console.log(calculateMoney(1055))
// console.log(calculateMoney(93))
// console.log(calculateMoney(-130))

// Problem 2 
function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid'
    }
    let lastLetter = name.slice(-1).toLowerCase()
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
    // let result = false;
    // for (let char of checkArray) {
    //     if (char === lastLetter) {
    //         result = true
    //     }
    // }

    let result = checkArray.includes(lastLetter); // KISU CODE LIKAY KORA JAI

    return result ? 'Good Name' : 'Bad Name';
}

// test problem 2
// console.log(checkName('Salman'))
// console.log(checkName('RAFEE'))
// console.log(checkName('JhanKar'))
// console.log(checkName(199))
// console.log(checkName(['Rashed']))



//problem 3 
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let numberArray = []
    for (let element of array) {

        if (typeof element === 'number' && isNaN(element) === false) {
            numberArray.push(element)
        }
    }
    return numberArray
}

// Test problem 3
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }]));
// console.log(deleteInvalids(['1', { num: 2 }, NaN]))
// console.log(deleteInvalids([1, 2, -3]))
// console.log(deleteInvalids({ num: [1, 2, 3] }))

//problem 4
function password(obj) {
    if (
        obj.name === undefined ||
        obj.birthYear === undefined ||
        obj.siteName === undefined ||
        obj.birthYear.toString().length !== 4
    ) {
        return 'invalid'
    }



    let capitalSiteName
        = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear
    return passwordString
}
//test problem 4
// console.log(password({ name: 'mhseber', birthYear: 2001, siteName: 'google' }))
// console.log(password({ name: 'love', birthYear: 2007, siteName: 'Facebook' }))
// console.log(password({ name: 'jojo', birthYear: 200, siteName: 'twetter' }))
// console.log(password({ name: 'toto', birthYear: 200, }))




//problem 5
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input'
    }
    //Calculate Total income
    let totalIncome = 0;
    for (let payment of arr) {
        if (payment >= 3000) {
            let tax = payment * 0.2
            totalIncome += payment - tax
        } else {
            totalIncome += payment
        }

    }
    let savings = totalIncome - livingCost
    // if (savings >= 0) {
    //     return savings
    // } else {
    //     return 'earn more'
    // }
    return savings >= 0 ? savings : 'earn more'
}



//test problem 5
console.log(monthlySavings([1000, 2000, 3000], 5400))
console.log(monthlySavings([1000, 2000, 2500], 5000))
console.log(monthlySavings([900, 2700, 3400], 10000))
console.log(monthlySavings(100, [900, 2700, 3400]))