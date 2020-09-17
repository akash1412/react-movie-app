import React, { useEffect } from 'react';

import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

import { fetchRecommendStartAsync } from '../../redux/recommendation/recommend.action';

import Heading from '../../components/heading/heading.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Pagination from '../../components/pagination/pagination.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorUI from '../../components/error-ui/error-ui.component';
import { ReactComponent as empty } from '../../assets/empty/undraw_empty_xct9.svg';

const Wrapper=styled.div`
 margin-top: 5rem;
`

const UIWrapper = styled.div`
 
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


const Recommended = ({
  movieID,
  queryPage,
  loading,
  data,
  error,
  currentPage,
  totalPages,
}) => {
  const dispatch = useDispatch();

  console.log(queryPage);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchRecommendStartAsync(movieID, queryPage));
  }, [dispatch, movieID, queryPage]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorUI error={error} />;
  }

 if (!data.length) {
    return (
      <UIWrapper>
        <Empty />
      </UIWrapper>
    );
  }

  return (
    <Wrapper>
      <Heading title="Recommended" />
      <CollectionOverview collection={data} />
      <Pagination currentPage={currentPage || null} totalPages={totalPages} />
    </Wrapper>
  );
};

const mapStateToProps = ({ recommendReducer }) => ({
  data: recommendReducer.data,
  loading: recommendReducer.loading,
  error: recommendReducer.errorMessage,
  currentPage: recommendReducer.page,
  totalPages: recommendReducer.totalPages,
});

export default connect(mapStateToProps)(Recommended);
