const sentence = 'I am learning Web Dev.'


let reverse = ''
for (const letter of sentence) {
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
