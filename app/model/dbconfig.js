var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	clinet_id: {type: String, required: true},
	app_name: {type: String, required: true},
	app_key: {type: String, required: true},
	password: {type: String, required: true},
	otp: {type: String, required: true, default: 00000},

}, {timestamps: true});



module.exports = mongoose.model("userdetalis", UserSchema);