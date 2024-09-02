const address = 'andorkilla';
const part = address.slice(2, 5);
// console.log(part);

const sentence = 'I am a good and bad Boy';
// console.log(sentence.split(' '))
// console.log(sentence.split('a'))

const friendsStr = 'sabbir,kabbir,rabbie,dabbi,loobi';
const friends = friendsStr.split(',');
console.log(friends);
const realFriends = ['sabbir', 'kabbir', 'rabbie', 'dabbi', 'loobi'];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('_'));