# Encrypt and decrypt
Encrypt a object to a token string and decrypt token string to object

## Installation
> npm install endecrypt-nngo

## Example
Encrypt an object then decrypt it.

```javascript
const rsa = require('.endecrypt-nngo');

// test data
const testData = {
    hero: "sniper",
    level: 10
}

let encrypted = rsa.encrypt(testData);
console.log('encrypted: ', encrypted);

let decrypted = rsa.decrypt(encrypted);
console.log('decrypted: ', decrypted);
```



