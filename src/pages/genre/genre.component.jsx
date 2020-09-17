import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import { connect, useDispatch } from 'react-redux';

import { fetchGenreStartAsync } from '../../redux/genre/genre.action';

import Heading from '../../components/heading/heading.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Pagination from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorUI from '../../components/error-ui/error-ui.component';

const Genre = ({
  match,
  history,
  data,
  loading,
  error,
  currentPage,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const { genre } = match.params;

  const params = new URLSearchParams(history.location.search);
  const queryPage = params.get('page');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGenreStartAsync(genre, queryPage));
  }, [dispatch, genre, queryPage]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorUI error={error} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{genre}</title>
      </Helmet>
      <Heading title={genre} />
      <CollectionOverview collection={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ genreReducer }) => ({
  data: genreReducer.data,
  loading: genreReducer.loading,
  currentPage: genreReducer.page,
  totalPages: genreReducer.totalPages,
  error: genreReducer.errorMessage,
});

export default connect(mapStateToProps)(Genre);
