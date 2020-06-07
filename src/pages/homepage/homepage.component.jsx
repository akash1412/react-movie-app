import React, { useEffect, useState } from "react";
import "./homepage.style.scss";

import { connect, useDispatch } from "react-redux";

//?COMPONENTS
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Pagination from "../../components/pagination/pagination.component";

const HomePage = ({
  popularOnTv,
  total_Pages,
  current_Page,
  total_Results,
  match,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(match.params.pageno);

  const [totalResults, setTotalResults] = useState(total_Results);
  const [totalPages, setTotalPages] = useState(total_Pages);

  // useEffect(() => {
  //   dispatch(fetchPopularOnTvStartAsync(match.params.pageno));
  // }, [dispatch]);

  const handlePaginationClick = (e) => {
    console.log(e.target.value);

    // dispatch(fetchPopularOnTvStartAsync(e.target.value.toString()));
  };

  return (
    <div className="homepage">
      <CollectionOverview moviesCollection={popularOnTv} />
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        totalPages={totalPages}
        handlePaginationClick={handlePaginationClick}
      />
    </div>
  );
};

const mapStateToProps = ({ TvReducer }) => ({
  popularOnTv: TvReducer.popular.data,
  current_Page: TvReducer.popular.page,
  total_Results: TvReducer.popular.totalResults,
  total_Pages: TvReducer.popular.totalPages,
});

export default connect(mapStateToProps)(HomePage);
