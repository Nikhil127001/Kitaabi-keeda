

const bcrypt = require('bcrypt');
const salt = 10;
const hashPassword = password => bcrypt.hashSync(password, salt);

const verifyHashedPassword = (plainPass , hashedPass) => bcrypt.compareSync(plainPass, hashedPass);

module.exports = {hashPassword , verifyHashedPassword }
