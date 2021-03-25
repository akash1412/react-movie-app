import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";

import {
	Wrapper,
	PosterWrapper,
	Poster,
	OverViewContainer,
	Synopsis,
	Button,
	ImageLoadContainer,
	GenreContainer,
	TitleWrapper,
	Title,
	ArrowLeft,
} from "./detail.style";

import LazyLoad from "react-lazyload";

import CollectionOverview from "../collection-overview/collection-overview.component";
import { Loader } from "../spinner/spinner.component";

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
		: "";

	return (
		<Fragment>
			<LazyLoad>
				<Wrapper>
					<PosterWrapper to={{ pathname: homepage }} target='_blank'>
						<Poster
							src={`${process.env.REACT_APP_IMAGE_URL}${poster} `}
							alt={title}
						/>
						<Title size={1.4} mobSize={1}>
							{detail.tagline}
						</Title>
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
					</OverViewContainer>
				</Wrapper>
			</LazyLoad>
		</Fragment>
	);
};

export default withRouter(Detail);
