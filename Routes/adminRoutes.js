const express = require('express');
const Routes = express.Router();
const  {userLogin,createNewUser, verifyisLoggedIn} = require('../Controllers/UserController');
const { verifyAuthToken } = require('../utils/generateAuthToken');

Routes.post('/login' , userLogin);
Routes.post('/createUser' , createNewUser);
Routes.get('/verifyIsLoggedIn', verifyAuthToken , verifyisLoggedIn)

module.exports = Routes;

