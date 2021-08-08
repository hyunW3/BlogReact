// https://electricburglar.tistory.com/114
//import contents from "../schemas/contents"
const contents = require('../schemas/contents');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get('/', async(req, res,next) => {
	try{
		const content = await contents.contentSchema.find({});
		//console.log(content);
		res.json(content);
	} catch (e) {
		res.status(500);
		console.log("fail to fetch DB",e);
	}
})
router.get('/view/:id', async(req,res,next) => {
	//console.log(req.params.id);
	if(mongoose.Types.ObjectId.isValid(req.params.id)){
	try {
		//const _id = req.params.id;
		//console.log(req.params.id)
		//console.log(req.params.id.valueType)
		const _id = mongoose.Types.ObjectId(req.params.id);
		//console.log(_id)
		const content = await contents.contentSchema.find({_id : _id});
		res.json({body :content});
		//console.log(res);
	} catch (e){
		res.status(500);
		console.log("Fail to get DB getbyID "+req.params.id);
	}
		
	}
})
router.post('/', async(req,res,next) => {
	console.log(req.body);
	try { // for MAX
		contents.contentSchema.create(req.body, (err,data) => {
			if(err) return console.log(err);
			res.send(('saved to db :' + data))
		})
	} catch (e){
		res.status(500);
		console.log("fail to insert DB",e);
	}
	/*
	contents.contentSchema.insertOne(req.body, (err,data) => {
		if(err) return console.log(err);
		res.send(('saved to db :' + data))
	})
	*/
});

module.exports = router;