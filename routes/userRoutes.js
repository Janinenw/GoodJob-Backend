const express = require('express')
const router = express.Router()
const {registerUser} = require ('../controllers/userCtrl'
)

router.post('/', registerUser)

module.exports = router