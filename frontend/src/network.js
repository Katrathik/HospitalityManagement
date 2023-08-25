import {Routes, Route } from 'react-router-dom';
import Login from './login'
import Food from './FoodCounter/Food';
import HomePage from './Homepage/homePage'
function Network(){
	return<div>
	<Routes>
		<Route path='/loginSignUp' element={<Login/>}></Route>
		<Route path='/FoodCourt' element={<Food/>}></Route>
		<Route exact path='/home' element={<HomePage/>}></Route>
</Routes>

</div>
}
export default Network;