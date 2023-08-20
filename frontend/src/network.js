import {Routes, Route } from 'react-router-dom';
import Login from './login'
function Network(){
	return<div>
	<Routes>
		<Route path='/loginSignUp' element={<Login/>}></Route>
</Routes>

</div>
}
export default Network;