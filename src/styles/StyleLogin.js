import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	min-height: 100vh;
	justify-content: center;
	background: #15293c;
	div {
		flex-basis: 45%;
		max-width: 45%;
		text-align: center;
	}
	img {
		display: block;
		width: 100%;
		object-fit: cover;
		margin-bottom: 1.5rem;
	}
	h1 {
		font-size: 3rem;
		font-family: Roboto;
		letter-spacing: 2px;
		color: #2caeba;
	}
	button {
		background-color: #278984;
		border: none;
		padding: 0.5rem 0.8rem;
		border-radius: 5px;
		text-transform: uppercase;
		font-family: Roboto;
		font-weight: 500;
		color: #fff;
		letter-spacing: 1.5px;
		cursor: pointer;
		margin-top: 1.5rem;
		font-size: 1rem;
		:focus {
			outline: none;
		}
	}
`;
