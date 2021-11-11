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
  console.log(req.body);
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
router.post('/update', async(req, res) => {
	const updateIdList = req.body.map((data) => ( {_id : data._id} ))
	const updateThumbList = req.body.map((data) => ( {thumbs : data.thumbs}))
	
	for (var i =0; i<updateIdList.length; ++i){
		const returnVal = await contents.contentSchema.updateOne(updateIdList[i],{$set : updateThumbList[i]})
	}
	await res.status(200);
});

module.exports = router;
