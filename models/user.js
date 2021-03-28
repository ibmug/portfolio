const mongoose = require("mongoose");
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: {type: String, required: true},
  password: { type: String, get: decrypt, set:encrypt, required: true },
  joined: { type: Date, default: Date.now, required: true }
});


function encrypt(text){
    var cipher = crypto.createCipher('aes-256-cbc', process.env.SERVER_SECRET);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
  } 
  
  function decrypt(text){
    if (text === null || typeof text === 'undefined') {return text;};
    var decipher = crypto.createDecipher('aes-256-cbc', process.env.SERVER_SECRET);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
  }


const User = mongoose.model("User", userSchema);

module.exports = User;
