import styled from 'styled-components';

import { ReactComponent as arrowLeft } from '../../assets/arrow-left/return.svg';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const PosterWrapper = styled(Link)`
	width: 28rem;
	min-height: 45rem;
	border-radius: 0.8rem;
	text-decoration: none;
	text-align: center;
	@media screen and (max-width: 30em) {
		align-self: center;
		width: 90%;
		height: 45rem;
	}
	& > h1 {
		margin: 1.2rem 0;
	}

	.date-text {
		font-size: 1.2rem;
		color: #2c3e50;
	}
`;

export const Poster = styled.img`
	width: 100%;
	height: 85%;
	object-fit: cover;
	border-radius: 0.8rem;
	box-shadow: 0px 20px 40px rgba(0, 38, 81, 0.3);
`;

export const OverViewContainer = styled.div`
	padding: 0.8rem 1.7rem;
	width: 55rem;
	@media screen and (max-width: 55em) {
		padding-top: 2.5rem;
	}

	@media screen and (max-width: 40em) {
		width: 45rem;
	}

	@media screen and (max-width: 30em) {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		padding: 4rem 0;
	}
`;

export const ArrowLeft = styled(arrowLeft)`
	background-color: ${({ theme: { colors } }) => colors.blue['50']};
	width: 5rem;
	height: 3rem;
	fill: #fff;
	padding: 0.4rem 0.8rem;
	border-radius: 2rem;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme: { colors } }) => colors.blue['100']};
	}
	/* 
	@media screen and (max-width: 30em) {
		width: 4.5rem;
		height: 4.5rem;
	} */
`;

export const Synopsis = styled.p`
	padding-top: 1.2rem;
	font-size: 1.4rem;
	font-weight: 500;
	color: ${({ theme: { colors } }) => colors.blue['100']};
	@media screen and (max-width: 30em) {
		font-size: 1.1rem;
	}
`;

export const ImageLoadContainer = styled.div`
	width: 28rem;
	height: 45rem;
	border-radius: 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GenreContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;

	align-items: center;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
	font-size: ${props => props.size}rem;
	color: ${({ theme: { colors } }) => colors.blue['100']};
	font-weight: bold;
	@media screen and (max-width: 30em) {
		font-size: ${props => props.mobSize}rem;
	}
`;

export const Button = styled.div`
	margin-right: 1.5rem;
	padding: 0.8rem 1.2rem;
	cursor: pointer;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	color: #fff;
	background-color: ${({ theme: { colors } }) => colors.blue['50']};
	border-radius: 2rem;
	@media screen and (max-width: 40em) {
		margin-bottom: 1.5rem;
	}

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.blue['100']};
	}
`;
