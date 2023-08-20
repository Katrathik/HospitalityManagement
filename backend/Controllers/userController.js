const express = require('express');
const router = express.Router();
const User = require('././Models/userModel')

export const createUser = async(req, res)=>{
	const user = await User.create(req.body)
	res.status(201).json({
		status: 'success',
		data:{
			data: user
		}
	})
}
// router.route('/api').get((req, res)=>{res.send("From Server")})
// router.route('/api/loginSign').post( async(req, res) => {
//   const { email, pwd, fName, lName, phno } = req.body;
// 	const User.crea
//   res.json({ message: 'Form data received and processed successfully' });
// });

module.exports = router; 