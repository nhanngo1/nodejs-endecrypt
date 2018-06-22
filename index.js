const rsa = require('./rsa');

// test data
const object = {
    hero: "sniper",
    level: 10,
    kill: 5,
    death: 3,
    lastHit: 50,
    denied: 5,
    alive: true
}

let string = "test: my string";
let boolean = true;
let number = 100;

// app start here
let testData = object;

console.log('testData: ', testData);
console.log("==>", typeof testData);

let encrypted = rsa.encrypt(testData);
console.log('\nencrypted: ', encrypted);
console.log('==>', typeof encrypted);

let decrypted = rsa.decrypt(encrypted);
console.log('\ndecrypted: ', decrypted);
console.log('==>', typeof decrypted);