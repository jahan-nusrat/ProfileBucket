import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/StyleError';

const ErrorPage = () => {
	return (
		<Wrapper>
			<div>
				<h1>404</h1>
				<h3>sorry, the page you tried can not be found</h3>
				<Link to="/">
					<button>back home</button>
				</Link>
			</div>
		</Wrapper>
	);
};

export default ErrorPage;
