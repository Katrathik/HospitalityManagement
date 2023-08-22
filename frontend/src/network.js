import {Routes, Route } from 'react-router-dom';
import Login from './login'
import Food from './FoodCounter/Food';
function Network(){
	return<div>
	<Routes>
		<Route path='/loginSignUp' element={<Login/>}></Route>
		<Route path='/FoodCourt' element={<Food/>}></Route>
</Routes>

</div>
}
export default Network;