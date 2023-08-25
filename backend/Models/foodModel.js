const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: ['true', 'PLease enter you name'],
		trim: true,
	},
	loc:{
		type: String,
		trim: true,
	},
	cost: {
		type:Number,
		required: ['true', 'PLease enter the cost'],
	}, 
	rating:{
		type: Number,
		required: ['true', 'PLease enter the rating'],
		default: 4.5
	},
	noRating: {
		type: Number,
		required: ['true', 'PLease enter the rating'],
	},
	photo: {
		type: String,
		required: ['true', 'Please enter the photo']
	},
	isAvailable: {
		type: Boolean,
		default: true
	},
	overview:{
		type: String,
		required: ['true', 'Please enter the overview']
	}
}, {
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
})
const Food = mongoose.model('Food', foodSchema);
module.exports = Food;

