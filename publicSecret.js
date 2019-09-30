/*UchanevaAA*/
const cr = require('crypto');
const fs = require('fs');
let pk = fs.readFileSync('key');
let msg = fs.readFileSync('secret');
let buff = Buffer.from(msg);
let  msgDec = cr.publicDecrypt(pk, buff);
console.log(msgDec.toString());
