import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";

//?ACTIONS
import { fetchTopRatedOnTvStartAsync } from "../../../redux/tv/tv.actions";

//?COMPONENTS
import CollectionOverview from "../../../components/collection-overview/collection-overview.component";
import Pagination from "../../../components/pagination/pagination.component";

const TopRated = ({ data, loading, totalPages, match }) => {
  const dispatch = useDispatch();
  const {
    params: { page },
    path,
  } = match;
  useEffect(() => {
    dispatch(fetchTopRatedOnTvStartAsync(page));
  }, [dispatch]);

  if (loading) {
    return <div>loading ...</div>;
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

const mapStateToProps = ({ topRatedOnTvReducer }) => ({
  data: topRatedOnTvReducer.data,
  totalPages: topRatedOnTvReducer.totalPages,
  totalResults: topRatedOnTvReducer.totalResults,
  loading: topRatedOnTvReducer.loading,
});

export default connect(mapStateToProps)(TopRated);
