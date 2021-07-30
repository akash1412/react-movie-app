import React, { Fragment } from 'react';

import { withRouter } from 'react-router-dom';

import {
	Wrapper,
	PosterWrapper,
	Poster,
	OverViewContainer,
	Synopsis,
	Button,
	GenreContainer,
	TitleWrapper,
	Title,
	ArrowLeft,
} from './detail.style';

import LazyLoad from 'react-lazyload';

import Cast from './../cast/cast.component';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const Detail = ({ detail, cast, history }) => {
	const {
		homepage,
		title,
		poster_path: poster,
		overview,
		release_date,
		status,
		genres,
	} = detail;

	const genreRoutes = genres
		? genres.map(({ name, id }) => (
				<Button
					key={id}
					onClick={() => {
						history.push(`/genre/${name}`);
					}}>
					{name}
				</Button>
		  ))
		: '';

	const getDate = () => {
		const dateConstruct = new Date(release_date);
		const month = months[dateConstruct.getMonth()];
		const day = dateConstruct.getDate();
		const year = dateConstruct.getFullYear();

		return `${day} ${month} ${year}`;
	};

	return (
		<Fragment>
			<LazyLoad>
				<Wrapper>
					<PosterWrapper
						to={{
							pathname:
								`https://www.imdb.com/title/${detail?.imdb_id}` || homepage,
						}}
						target='_blank'>
						<Poster
							src={`${process.env.REACT_APP_IMAGE_URL}${poster} `}
							alt={title}
						/>
						<Title size={1.4} mobSize={1.2}>
							{detail.tagline}
						</Title>
						<span className='date-text'>release date: {getDate()}</span>
					</PosterWrapper>

					<OverViewContainer>
						<TitleWrapper>
							<Title size={2}>{title}</Title>

							<ArrowLeft onClick={() => history.goBack()} />
						</TitleWrapper>

						<Title size={1.4} mobSize={1.2}>
							Synopsis
						</Title>
						<Synopsis>{overview}</Synopsis>

						<GenreContainer>{genreRoutes}</GenreContainer>

						<Cast cast={cast || []} />
					</OverViewContainer>
				</Wrapper>
			</LazyLoad>
		</Fragment>
	);
};

export default withRouter(Detail);
