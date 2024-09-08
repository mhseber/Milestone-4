const Mahamud = 56;
const Hasan = 95;

if (Mahamud > Hasan) {
    console.log('Mahamud win')
}
else {
    console.log('hasan win')
}

// inside a function

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(56, 79);
console.log('max of two is', max)
