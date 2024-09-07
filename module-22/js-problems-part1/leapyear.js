/**
 * Year will be a leap Year if the year is divisible by 4
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const islipi = isLeapYear(2043);
// console.log(islipi);

function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }

}

const isLeap = isLearYear2(2100);
const isLeap2 = isLearYear2(2400);
const isLeap3 = isLearYear2(1900);
const isLeap4 = isLearYear2(2052);
console.log(isLeap, isLeap2, isLeap3, isLeap4)