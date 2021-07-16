// https://electricburglar.tistory.com/114
//import contents from "../schemas/contents"
const contents = require('../schemas/contents')
var express = require('express')
var router = express.Router();

router.get('/', async(req, res,next) => {

	try{
		const content = await contents.contentSchema.find({});
		//console.log(content);
		res.json(content);
	} catch (e) {
		res.status(500)
		console.log("fail to fetch DB");
	}
	
})

module.exports = router;