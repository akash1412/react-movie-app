import React from 'react';
import styled from 'styled-components';
import Spinner from '../../components/spinner/spinner.component';
import { useBookMarkContext } from './../../context/bookmarks.context';
import Link from '../../assets/open-link/open-link-icon.svg';
import { textTrimFunc } from './../../components/card/card.component';

import trashIcon from '../../assets/trash/trash.svg';

const BookMarks = () => {
	const { bookmarkedMovies, removeMovieFromBookMarks } = useBookMarkContext();

	const handleDeleteAction = id => {
		if (window.confirm('Are you sure you want to delete this item')) {
			removeMovieFromBookMarks(id);
		}
	};

	return (
		<Container>
			{bookmarkedMovies.map(({ src, title, id, docID }) => (
				<CardWrapper key={id}>
					<img src={`${process.env.REACT_APP_IMAGE_URL}${src}`} />
					<div className='content'>
						<h1>{textTrimFunc(title)}</h1>

						<a href={`/movie/${id}`} target='_blank'>
							<img className='icon' alt='open-link-icon' src={Link} />
						</a>
					</div>
					<button
						className='delete-btn'
						onClick={() => handleDeleteAction(docID)}>
						<img src={trashIcon} alt='delete-icon' />
					</button>
				</CardWrapper>
			))}
		</Container>
	);
};

export default BookMarks;

const Container = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column: 2rem;
	grid-row-gap: 2rem;
	justify-items: center;
	max-width: 1200px;

	@media (max-width: 875px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 575px) {
		grid-template-columns: 1fr;
	}
`;

const CardWrapper = styled.div`
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 0.5rem;
	max-width: 25rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	& > img {
		max-width: 25rem;
	}

	.content {
		padding: 0.6rem;
		display: flex;
		align-items: center;
		background-color: #2c3e50;
		color: #fff;
		& > h1 {
			font-size: 1.5rem;
			margin-right: auto;
		}

		.icon {
			width: 1.5rem;
			height: 1.5rem;
			color: #fff;
			fill: #fff;
		}
	}

	.delete-btn {
		position: absolute;
		cursor: pointer;
		background-color: #fff;
		padding: 0.5rem;
		border: none;
		border-bottom-right-radius: 0.4rem;

		& > img {
			width: 2rem;
			height: 2rem;
		}
	}
`;
