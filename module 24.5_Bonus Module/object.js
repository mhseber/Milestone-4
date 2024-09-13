const student = {
    name: 'Seber',
    id: 121,
    address: 'Gandaria shutrapur',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
    movies: [{ name: 'no. 1', year: 2015 }, { name: 'King Khan', year: 2018 }],
    act: function () {
        console.log('acting like sakib Khan')
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(student)
console.log(student.act);
student.act();