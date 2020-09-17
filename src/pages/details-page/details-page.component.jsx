import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import { useDispatch, connect } from 'react-redux';

import { fetchDetailStartAsync } from '../../redux/detail/detail.action';

import Recommended from '../recommend/recommend.component';

import Heading from '../../components/heading/heading.component';
import Detail from '../../components/detail/detail.component';
import Spinner from '../../components/spinner/spinner.component';
import ErrorUI from '../../components/error-ui/error-ui.component';

const DetailsPage = ({ match, detail, loading, error, history }) => {
  const params = new URLSearchParams(history.location.search);
  const queryPage = params.get('page');

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchDetailStartAsync(match.params.id));
  }, [dispatch, fetchDetailStartAsync, match.params.id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorUI error={error} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{detail ? detail.title : 'loading..'}</title>
      </Helmet>
      <Detail detail={detail || []} />

      <Recommended movieID={match.params.id} queryPage={queryPage || 1} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ detailReducer }) => ({
  detail: detailReducer.detail,

  loading: detailReducer.loading,
  error: detailReducer.errorMessage,
});

export default connect(mapStateToProps)(DetailsPage);
