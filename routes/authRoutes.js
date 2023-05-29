const express = require('express');
const authCtrls = require('
    ../controllers/authCtrls');

const router = express.Router();

router.post('/google', authCtrls.login)

module.exports = router;

