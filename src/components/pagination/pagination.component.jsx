import React from "react";
import { withRouter } from "react-router-dom";

const Pagination = ({ totalResults, totalPages, handlePaginationClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <li value={number} onClick={(e) => handlePaginationClick(e)}>
          <a href={`/${number}`}>{number}</a>
        </li>
      ))}
    </div>
  );
};

export default withRouter(Pagination);
