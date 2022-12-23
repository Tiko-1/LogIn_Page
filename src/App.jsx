import React, { useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './App.css';
import LogInPage from './components/LogInPage /LogInPage';
import { Routes, Route, Link } from 'react-router-dom';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Button from './components/Button/Button.jsx';
function App() {
	return (
		<>
			<div className="App">
				<header>
					<Link to="/src/App.jsx">
						<h3 style={{ textDecoration: 'none', color: 'white' }}>
							Home Page
						</h3>
					</Link>
					<div>
						<Link to="/src/components/SignUpPage/SignUpPage.jsx">
							<Button> Sign Up</Button>
						</Link>
						<Link to="/src/components/LogInPage /LogInPage.jsx">
							<Button> Log In </Button>
						</Link>
					</div>
				</header>
			</div>
			<Routes>
				<Route path="/" element={<App />} />
				<Route
					path="/src/components/SignUpPage/SignUpPage.jsx"
					element={<SignUpPage />}
				/>
				<Route
					path="/src/components/LogInPage /LogInPage.jsx"
					element={<LogInPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
