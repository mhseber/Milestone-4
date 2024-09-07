const boyes = ['seber', 'hasan', 'midul', 'seber', 'mahamudul', 'hasan', 'seber'];
const code = [10, 20, 30, 20, 10, 40, 50, 20, 10, 30];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(boyes);
console.log(uniqueArray);