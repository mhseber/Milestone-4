/// task 1 //// ____________________________

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
// const values = Object.values(colors);
// console.log(colors["golden rod"]);    ///ans
// console.log(colors);


/// task 2 //// ____________________________

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    passengerCapacity: 5
};
// console.log(car)

/// task 3 //// ____________________________

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student.physics.marks)

/// task 4 //// ____________________________


let Student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let propertyCount = Object.keys(Student).length;
// console.log(propertyCount);


/// task 5 //// ____________________________

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (let key in myObject) {
    // console.log(`key: ${key} | type: ${typeof myObject[key]}`);
}



//-------------EXTRA PRACTICE-------------------

var iPhone = 22
var realmi = 22
var xiomi = 22
var poco = 22
var total = iPhone + realmi + xiomi + poco;
// console.log(total);

if (total > 300) {
    // console.log('ame nibo');
}
else {
    // console.log('taka nai')
}


const school = "K L Jubilee School And College";
// console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


