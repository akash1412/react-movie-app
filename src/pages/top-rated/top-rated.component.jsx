import React from 'react';
import { Helmet } from 'react-helmet';
import useDispatch from '../../custom-hooks/usedispatch';
import { connect } from 'react-redux';

import { fetchMovieStartAsync } from '../../redux/movies/movie.action';

import Heading from '../../components/heading/heading.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Pagination from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorUI from '../../components/error-ui/error-ui.component';

const TopRated = ({
  match,
  data,
  loading,
  errorMessage,
  totalPages,
  currentPage,
  history,
}) => {
  const queryName = match.url.split('/')[1];

  const params = new URLSearchParams(history.location.search);
  const queryPage = params.get('page');

  useDispatch(fetchMovieStartAsync, queryName, queryPage);

  console.log(errorMessage);

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <ErrorUI error={errorMessage} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>top rated </title>
      </Helmet>
      <Heading title={queryName} />
      <CollectionOverview collection={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ movieReducer }) => ({
  data: movieReducer.data,
  loading: movieReducer.loading,
  errorMessage: movieReducer.errorMessage,
  totalPages: movieReducer.totalPages,
  currentPage: movieReducer.currentPage,
});

export default connect(mapStateToProps)(TopRated);
