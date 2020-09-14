import React from 'react';
import login from '../image/login-img.svg';
import { Wrapper } from '../styles/StyleLogin';

const Login = () => {
	return (
		<Wrapper>
			<div>
				<img src={login} alt="user-login" />
				<h1>Bucket User</h1>
				<button>Login / Sign Up</button>
			</div>
		</Wrapper>
	);
};

export default Login;
