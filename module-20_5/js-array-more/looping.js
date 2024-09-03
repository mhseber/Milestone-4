/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while---> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

const friends = ['A', 'B', 'C', 'D'];
for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(friends[i]);
}

