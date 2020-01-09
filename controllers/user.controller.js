var express = require('express'),
    router = express.Router(),
    registrationService = require('../services/registration.service');

router.post('/register', registerUser);

async function registerUser(req, res) {
    try {
        console.log('reached in user controller');
        result = await registrationService.registerUser(req)
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}
module.exports = router;