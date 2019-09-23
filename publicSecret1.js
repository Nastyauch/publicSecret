/* Учанева Настя*/
const crypto = require('crypto');
const path = require('path');
let fs = require('fs');

let PUBKEY = fs.readFileSync(path.join('key'));
let msg = fs.readFileSync(path.join('secret'));

let buff = new Buffer(msg);
let  msgDecrypt = crypto.publicDecrypt(PUBKEY, buff);
 console.log(msgDecrypt.toString());



