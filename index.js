const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 1024 });

const object = {
    hero: "sniper",
    level: 10,
    lastHit: 30,
    denied: 5
}

console.log('object: ', object);
console.log("==>", typeof object)

const encrypted = key.encrypt(object, 'base64');
console.log('\nencrypted: ', encrypted);
console.log("==>", typeof encrypted)

const decrypted = JSON.parse(key.decrypt(encrypted, 'utf8'));
console.log('\ndecrypted: ', decrypted);
console.log("==>", typeof decrypted)