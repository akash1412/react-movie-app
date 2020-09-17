import React from 'react';

import { OverviewContainer } from './collection-overview.styles';

import ErrorBoundary from '../../error-boundary/error-boundary';

import Card from '../card/card.component.jsx';

const CollectionOverview = ({ collection }) => {
  return (
    <ErrorBoundary>
      <OverviewContainer>
        {collection.map(
          ({ id, poster_path, backdrop_path, title, name, vote_average }) => (
            <Card
              key={id}
              id={id}
              src={poster_path}
              title={title || name}
              rating={vote_average}
            />
          )
        )}
      </OverviewContainer>
    </ErrorBoundary>
  );
};

export default CollectionOverview;
