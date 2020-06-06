import React from "react";
import "./pagination.style.scss";

import { withRouter } from "react-router-dom";

const Pagination = ({ totalResults, totalPages, handlePaginationClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <li
          className="pagination__item"
          value={number}
          onClick={(e) => handlePaginationClick(e)}
        >
          <a className="pagination__link" href={`/${number}`}>
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default withRouter(Pagination);
