const express = require('express');
const router = express.Router();

const items = require('../models/item')

const sendItems = (req,res) => res.json(res.locals.allItem);
const sendItem = (req,res) => res.json(res.locals.item);
// const sendSuccess = (req,res) => res.json({message :'success'});



router.get('/',items.getAll,sendItems);
router.get('/:id',items.find,sendItem);
router.post('/',items.create,sendItem);
router.put('/:id',items.find,sendItem);
// router.delete('/:id',item.delete,sendSuccess);
module.exports = router;