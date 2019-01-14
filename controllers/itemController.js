const express = require('express');
const router = express.Router();

const items = require('../models/items');

const sendItems = (req,res) => res.json(res.locals.allItem);
const sendItem = (req,res) => res.json(res.locals.item);
// const sendSuccess = (req,res) => res.json({message :'success'});



router.get('/',items.getAll,sendItems);
router.get('/:id',item.find,sendItem);
router.post('/',item.create,sendItem);
router.put('/:id',item.find,sendItem);
// router.delete('/:id',item.delete,sendSuccess);
module.exports = router;