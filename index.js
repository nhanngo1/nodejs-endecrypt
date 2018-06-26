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

function test(obj) {
    console.log('testData: ', testData);
    let en = rsa.encrypt(testData)
    console.log('\nencrypted: ', en);
    console.log('==>', typeof en);

    let de = rsa.decrypt(en);
    console.log('\ndecrypted: ', de);
    console.log('==>', typeof de);
}

test()