import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './LogInPage.css';
import SignUpPage from '../SignUpPage/SignUpPage';
import { Routes, Route, Link } from 'react-router-dom';
import Button from '../Button/Button';
function LogInPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="LogInPage">
			<div className="LogInPage__main">
				<header className="LogInPage__main__header">
					<AccountCircleOutlinedIcon
						sx={{ fontSize: '60px', color: 'rgb(230,230,230)' }}
					></AccountCircleOutlinedIcon>
				</header>
				<form className="LogInPage__main__form">
					<input
						className="username_input"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
					/>
					<input
						className="password_input"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<div>
						<input type="checkbox" />
						<span>remember me ?</span>
					</div>
					<Button type="submit">Log In</Button>
					<Link to="/src/components/SignUpPage/SignUpPage.jsx">
						<Button>Sign Up</Button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default LogInPage;
