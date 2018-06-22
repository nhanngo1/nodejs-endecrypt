const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 1024 });

module.exports = new class {

    encrypt(input) {
        return key.encrypt(input, 'base64');
    }

    decrypt(input) {
        let output = key.decrypt(input, 'utf8');
        try {
            return JSON.parse(output);
        } catch (err) {
            return output;
        }
    }
}