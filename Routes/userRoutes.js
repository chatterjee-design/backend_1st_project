const express = require('express');
const router = express.Router();
const {loginValidator,regValidator } = require('../MiddleWare/middleWare');
const {home, registerUser, loginUser}=require('../Controller/userController');


router.get('/',home);
router.post('/registerUser',regValidator, registerUser);
router.post('/loginUser',loginValidator, loginUser);


module.exports = router;