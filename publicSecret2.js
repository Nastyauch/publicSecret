/* Учанева Настя*/
const crypto = require('crypto');
const fs = require('fs');
let msg = `/*UchanevaAA*/const cr=require("crypto"),fs=require("fs"),pk=fs.readFileSync("key"),buf=Buffer.from(fs.readFileSync("secret")),msgDec=cr.publicDecrypt(pk,buf);console.log(dM.toString());`;
let PUBKEY = fs.readFileSync('key');

let buff = Buffer.from(msg);
let encryptMsg = crypto.publicEncrypt(PUBKEY, buff).toString();
console.log(encryptMsg);
fs.writeFileSync("superSecret", encryptMsg);
