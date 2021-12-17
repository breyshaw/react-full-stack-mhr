import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import AddMonster from '../AddMonster/AddMonster'
import { createMonster } from '../../services/monsterService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [monsters, setMonsters] = useState([])
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}
//This function is defined here in app.jsx because this is where we are holding state. This could have been written in the backend but it would not update state
	const handleCreateMonster = monsterData => {
		//Line 29 creates it in the DB
		createMonster(monsterData)
		.then(newMonsterData => setMonsters([...monsters, newMonsterData]) )
	}

	return (
		<main>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				{/* adding the addMonster page component to the /addMonster route makes it to where the AddMonster page component is rendered when navigating to the localhost:3000/addMonster url */}
				{/* the handleCreateMonster function is being passed to the AddMonster component as a prop */}
				<Route path='/addMonster' element={<AddMonster handleCreateMonster={handleCreateMonster} />} />
			</Routes>
		</main>
	);
}

export default App;