import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import AddMonster from '../addMonster/addMonster'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				{/* adding the addMonster page component to the /addMonster route makes it to where the AddMonster page component is rendered when navigating to the localhost:3000/addMonster url */}
				<Route path='/addMonster' element={<AddMonster />}/>
			</Routes>
		</>
	);
}
 
export default App;