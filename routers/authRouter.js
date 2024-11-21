const express = require('express')
const router = express.Router()

const {login} = require('../controllers/authController');
const { validarAuth } = require('../middlewares/validarAuth');



router.get('/', validarAuth,login)


module.exports = router;