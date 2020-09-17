import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

import Heading from '../heading/heading.component';

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
} from './detail.style';

import Cast from '../cast/cast.component';

import LazyLoad from 'react-lazyload';

import CollectionOverview from '../collection-overview/collection-overview.component';
import { Loader } from '../spinner/spinner.component';

const Detail = ({ detail, history }) => {
  const {
    homepage,
    title,
    poster_path: poster,
    overview,
    release_date,
    status,
    genres,
  } = detail;

  const genreRoutes = genres ? (
    genres.map(({ name, id }) => (
      <Button
        key={id}
        onClick={() => {
          history.push(`/genre/${name}`);
        }}
      >
        {name}
      </Button>
    ))
  ) : (
    <Loader />
  );

  return (
    <React.Fragment>
      <LazyLoad>
        <Wrapper>
          <a href={homepage}>
            <PosterWrapper>
              <Poster
                src={`${process.env.REACT_APP_IMAGE_URL}${poster} `}
                alt={title}
              />
            </PosterWrapper>
          </a>
          <OverViewContainer>
            <TitleWrapper>
              <Title size={2.2}>{title}</Title>

              <ArrowLeft onClick={() => history.goBack()} />
            </TitleWrapper>
            <Title size={1.5}>Synopsis</Title>
            <Synopsis>{overview}</Synopsis>

            <GenreContainer>{genreRoutes}</GenreContainer>
          </OverViewContainer>
        </Wrapper>
      </LazyLoad>
    </React.Fragment>
  );
};

export default withRouter(Detail);
