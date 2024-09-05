function chak(str) {
    const size = str.length;
    // console.log(str, size);
    if (size % 2 === 0) {
        // console.log('even size')
    }
    else {
        // console.log('odd size')
    }
}
chak('Dhaka');
chak('faka');

function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function code(number) {
    const cc = number.length;
    console.log(cc)
    return cc;

}
code([10, 20, 30, 40, 50]);

