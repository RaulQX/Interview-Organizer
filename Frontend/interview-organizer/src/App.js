import { ThemeProvider } from '@emotion/react'
import { Box, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="profile" element={<Profile />} />
					<Route path="login" element={<Login />} />
					<Route path="Register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#692992',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#25082f',
			paper: '#2d073d',
		},
	},
	shape: {
		borderRadius: 4,
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: '#25082f',
				color: '#fff',
			},
		},
	},
	props: {
		MuiAppBar: {
			color: 'inherit',
		},
	},
})
