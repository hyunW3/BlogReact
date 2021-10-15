const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
	name : {
		type : String,
		require : true,
		trim : true
	}
});

module.exports = mongoose.model('collectionList',collectionSchema)
