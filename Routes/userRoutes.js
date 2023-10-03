const express = require('express');
const router = express.Router();
const {home, registerUser, loginUser}=require('../Controller/userController');


router.get('/',home);
router.post('/registerUser',registerUser);
router.post('/loginUser',loginUser);


module.exports = router;