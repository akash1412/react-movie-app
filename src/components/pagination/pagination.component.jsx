import React from "react";
import "./pagination.style.scss";

import { withRouter } from "react-router-dom";

const Pagination = ({
  totalResults,
  totalPages,
  handlePaginationClick,
  currentPage,
  linkUrl,
}) => {
  const pageNumbers = [];
  // Math.ceil(totalResults / totalPages)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage === "1" ? null : (
        <li value={currentPage * 1 - 1}>
          <a href={`${linkUrl}${currentPage * 1 - 1}`}> previous</a>
        </li>
      )}

      {pageNumbers.map((number) => (
        <li
          value={number}
          // onClick={(e) => handlePaginationClick(e)}
          className="pagination__item"
        >
          <a className="pagination__link" href={`${linkUrl}${number}`}>
            {number}
          </a>
        </li>
      ))}

      {currentPage * 1 < pageNumbers.length ? (
        <li value={currentPage + 1}>
          <a href={`${linkUrl}${currentPage * 1 + 1}`}> Next</a>
        </li>
      ) : null}
    </div>
  );
};

export default withRouter(Pagination);
