import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #deffff;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	color: #15293c;
	h1 {
		font-size: 10rem;
	}
	h3 {
		text-transform: capitalize;
		line-height: 1.6;
		letter-spacing: 1.2px;
		word-spacing: 1.1.px;
	}
	button {
		padding: 0.7rem 0.8rem;
		text-transform: uppercase;
		border: none;
		background-color: #2ea39e;
		color: #deffff;
		border-radius: 5px;
		letter-spacing: 2px;
		margin: 2rem 0;
		cursor: pointer;
		transition: all 0.3s linear;

		:focus {
			outline: none;
		}
		&:hover {
			background-color: #278984;
		}
	}
`;
