const crypto = require('crypto');
require('dotenv').config();

function generateUniqueId(string) {
    const salt = process.env.SALT_SECRET;
    const hash = crypto.createHash('sha256');
    const data = string + salt;
    const hashedData = hash.update(data).digest('hex');

  return hashedData;
}

const myString = "asu";
const uniqueId = generateUniqueId(myString);
console.log(uniqueId);
