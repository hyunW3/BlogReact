const mongoose = require('mongoose')
// https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
const contentSchema = new mongoose.Schema({
	id : Number,
	title : {
		type : String,
		require : true,
		trim : true,
	},
	date : {
		type : Date,
		default : Date.now,
	},
	thumbs : {
		type : Number,
		validate(value) {
			if(value <0) {
				value = 0;
			}
		}
	}
})
//CRUD

module.exports = {
	contentSchema : mongoose.model("contents",contentSchema),
}