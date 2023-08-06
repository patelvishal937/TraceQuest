// Author : Sohil
// Purpose : Define two Authentication routes: signup and register

import express from "express";
//Importing logic functions from controllers
import { createUser, LoginUser } from '../Controllers/AuthController.js'
const AuthRoute = express.Router();

//Define Request For First time register
AuthRoute.post('/register', createUser)
//Define Request For Login
AuthRoute.post('/login', LoginUser)

export default AuthRoute;