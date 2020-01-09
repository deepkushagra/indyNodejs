const express = require('express')

let router = express.Router();

router.use('/register', require('../controllers/user.controller'));

router.use((_,res) => {
    console.log('reached in routejs');
    res.status(404).send("Sorry can't find the route")
})

module.exports = router;