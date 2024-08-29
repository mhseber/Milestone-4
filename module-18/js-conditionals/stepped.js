const price = 5000;

if (price >= 5000) {
    // 10% discount
    const disCount = price * 10 / 100;
    const payAmount = price - disCount;
    console.log(payAmount);
}
else {
    console.log(price);
}