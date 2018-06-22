const rsa = require('./rsa');

// test data
const testData = {
    hero: "sniper",
    level: 10,
    kill: 5,
    death: 3,
    lastHit: 50,
    denied: 5,
    alive: true
}

console.log('testData: ', testData);
console.log("==>", typeof testData);

let encrypted = rsa.encrypt(testData);
console.log('\nencrypted: ', encrypted);
console.log('==>', typeof encrypted);

let decrypted = rsa.decrypt(encrypted);
console.log('\ndecrypted: ', decrypted);
console.log('==>', typeof decrypted);