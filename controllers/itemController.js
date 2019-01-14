const express = require('express');
const router = express.Router();

const item = require('../models/item');

const sendItems = (req,res) => res.json(res.locals.items);
const sendItem = (req,res) => res.json(res.locals.item);
// const sendSuccess = (req,res) => res.json({message :'success'});



router.get('/', item.getAll, sendItems);
router.get('/:id', item.find, sendItem);
router.post('/', item.create, sendItem);
router.put('/:id', item.update, sendItem);
// router.delete('/:id',item.delete,sendSuccess);

module.exports = router;
