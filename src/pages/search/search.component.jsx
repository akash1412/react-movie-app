import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';

import { fetchSearchStartAsync } from '../../redux/search/search.action';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Pagination from '../../components/pagination/pagination.component';
import ErrorUI from '../../components/error-ui/error-ui.component';
import Spinner from '../../components/spinner/spinner.component';
import { ReactComponent as empty } from '../../assets/empty/undraw_empty_xct9.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Empty = styled(empty)`
  width: 50rem;
  height: 50rem;
  pointer-events: none;

  @media screen and (max-width: 75em) {
    width: 40rem;
    height: 40rem;
  }

  @media screen and (max-width: 29em) {
    width: 100%;
    height: 40rem;
  }
`;

const SearchPage = ({
  data,
  loading,
  totalPages,
  currentPage,
  history,
  error,
}) => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const query = params.get('q');

  useEffect(() => {
    dispatch(fetchSearchStartAsync(query));
  }, [dispatch, fetchSearchStartAsync, query]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorUI error={error} />;
  }

  if (!data.length) {
    return (
      <Wrapper>
        <Empty />
      </Wrapper>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Seacrch</title>
      </Helmet>
      <CollectionOverview collection={data} />
      <Pagination currentPage={currentPage || null} totalPages={totalPages} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ searchReducer }) => ({
  data: searchReducer.data,
  loading: searchReducer.loading,
  totalPages: searchReducer.totalPages,
  currentPage: searchReducer.page,
  error: searchReducer.errorMessage,
});
export default connect(mapStateToProps)(SearchPage);
