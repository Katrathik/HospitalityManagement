const Doctor = require('../Models/doctorModel')
const getDoctorDetail = async(req, res)=>{
	const doc = await Doctor(req.body);
	res.status(200).json({
		status:'success',
		data:{
			doc
		}
	})
}