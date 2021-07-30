import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 5rem;
	margin-bottom: 5rem;
	margin-left: 2rem;
	/* width: 100%; */

	@media (max-width: 874px) {
		margin-left: 0;
	}

	& > .slick-slider > button::before {
		color: #34495e;
	}

	@media (max-width: 475px) {
		display: none;
	}
`;

export const Title = styled.h2`
	font-size: 1.5rem;
	color: #34495e;
	text-transform: capitalize;
	margin-bottom: 2rem;
`;

export const LinkWrapper = styled.div`
	text-decoration: none;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${props => (props.loaded ? '1' : '0')};
	visibility: ${props => (props.loaded ? 'visible' : 'hidden')};
`;

export const MovieImg = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	object-fit: cover;
	background-color: transparent;
	transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;
