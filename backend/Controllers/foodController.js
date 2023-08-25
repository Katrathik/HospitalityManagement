const Food = require('../Models/foodModel');
export const createFood = async (req, res) => {
  const food = await Food.create(req.body);
  res.status(200).json({
    status: 'success',
    message: 'food created successfully',
  });
};
export const getFoods = async(req, res)=>{
	const food = await Food.find(req.body);
	if(!food){
		return res.status(404).json({
			status:'fail',
			message: 'Food not found',
		})
	}
	res.status(201).json({
		status:'success',
		data:{
			food
		},
	})

}
