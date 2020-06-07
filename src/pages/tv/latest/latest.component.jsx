import React, { useEffect } from "react";

import { useDispatch, connect } from "react-redux";

//?ACTION
import { fetchLatestOnTvStartAsync } from "../../../redux/tv/tv.actions";

const Latest = ({ data, loading }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchLatestOnTvStartAsync());
  }, [dispatch]);

  console.log({ data, loading });
  return <div>Latest</div>;
};

const mapSateToProps = ({ latestOnTvReducer }) => ({
  data: latestOnTvReducer.latest,
  loading: latestOnTvReducer.loading,
});

export default connect(mapSateToProps)(Latest);
