// const mongoose = require('mongoose');
const express = require('express');
const collectionList = require('../schemas/collection');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const collections = await collectionList.find({});
    res.json(collections);
  } catch (e) {
    res.status(500);
    console.log(e, 'collectionList load failed');
  }
});
module.exports = router;
