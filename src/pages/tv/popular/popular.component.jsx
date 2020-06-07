import React, { useEffect } from "react";

import { useDispatch, connect } from "react-redux";

//?ACTIONS
import { fetchPopularOnTvStartAsync } from "../../../redux/tv/tv.actions";

//?COMPONENTS
import CollectionOverview from "../../../components/collection-overview/collection-overview.component";
import Pagination from "../../../components/pagination/pagination.component";

const Popular = ({ match, data, loading, totalPages }) => {
  const {
    params: { page },
    path,
  } = match;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularOnTvStartAsync(page));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CollectionOverview collection={data} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        linkUrl={path.split(":page")[0]}
      />
    </div>
  );
};

const mapStateToProps = ({ popularOnTvReducer }) => ({
  data: popularOnTvReducer.data,
  loading: popularOnTvReducer.loading,
  totalResults: popularOnTvReducer.totalResults,
  totalPages: popularOnTvReducer.totalPages,
});

export default connect(mapStateToProps)(Popular);
