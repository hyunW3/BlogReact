// const mongoose = require('mongoose');
const express = require('express');
const categorySchema = require('../schemas/category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await categorySchema.find({});
    res.json(categories);
  } catch (e) {
    res.status(500);
    console.log(e, 'categories load failed');
  }
});
module.exports = router;
