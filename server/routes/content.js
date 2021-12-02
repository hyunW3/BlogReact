const mongoose = require('mongoose');
const express = require('express');
const contents = require('../schemas/contents');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const content = await contents.contentSchema.find({});
    res.json(content);
  } catch (e) {
    res.status(500);
    console.log('fail to fetch DB', e);
  }
});
router.get('/view/:id', async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    try {
      const _id = mongoose.Types.ObjectId(req.params.id);
      const content = await contents.contentSchema.find({ _id });
      res.json({ body: content });
    } catch (e) {
      res.status(500);
      console.log(`Fail to get DB getbyID ${req.params.id}`);
    }
  }
});
router.post('/', async (req, res) => {
  try {
    // for MAX
    contents.contentSchema.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(`saved to db :${data}`);
    });
  } catch (e) {
    res.status(500);
    console.log('fail to insert DB', e);
  }
});

// https://www.geeksforgeeks.org/mongodb-updatemany-method-db-collection-updatemany/?ref=rp
// req.body : must  be array
router.patch('/update', async (req, res) => {
  // 문제 : 식별자(정확한 주소) 명시 안함
  let isSuccess = true;
  req.body.forEach(async (data) => {
    const dataWithoutId = data;
    const updateId = { _id: mongoose.Types.ObjectId(data.id) };
    delete dataWithoutId.id;

    const dbResponse = await contents.contentSchema.updateOne(updateId, {
      $set: dataWithoutId,
    });
    if (dbResponse.n !== dbResponse.nModified) {
      res.status(400).send('wrong request');
      isSuccess = false;
    }
  });
  if (isSuccess === true) {
    res.status(200).send('success request');
  }
});

module.exports = router;
