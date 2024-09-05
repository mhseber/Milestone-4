function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(6, 90);
// console.log(bill, bill2)


function doMath(x1, x2) {
    const sum = x1 + x2;
    const diff = x1 - x2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);


