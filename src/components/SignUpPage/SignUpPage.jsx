import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './SignUpPage.css';
import Button from '../Button/Button';

function SignUpPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="signUp">
			<div className="signUp__main">
				<header className="signUp__main__header">
					<AccountCircleOutlinedIcon
						sx={{ fontSize: '60px', color: 'rgb(230,230,230)' }}
					></AccountCircleOutlinedIcon>
				</header>
				<form className="signUp__main__form">
					<div>
						<input
							className="signUp__email_input"
							type="email"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Email"
						/>
						<input
							className="signUp__password_input"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>
					<Button>Sign Up</Button>
					<Button>Log In</Button>
				</form>
			</div>
		</div>
	);
}

export default SignUpPage;
