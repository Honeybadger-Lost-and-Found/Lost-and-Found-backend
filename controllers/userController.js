const express = require('express');
const router = express.Router();

const user = require('../models/user');

const sendUser = (req, res) => res.json(res.locals.user);
const sendUsers = (req, res) => res.json(res.locals.users);

router.get('/', user.getAll, sendUsers)
router.get('/:username', user.find, sendUser);

router.post('/', user.create, sendUser);


module.exports = router;