import React from "react";

import { PaginationContainer, PaginatonButton } from "./pagination.style";

import { animateScroll } from "react-scroll";
import { withRouter } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, history, match }) => {
  const handlePaginationClick = (e) => {
    animateScroll.scrollToTop({
      smooth: true,
    });
    const value = e.target.value;
    setTimeout(() => {
      history.push(`${history.location.pathname}?page=${value}`);
    }, 1000);
  };

  if (currentPage === null) {
    return <></>;
  }

  return (
    <PaginationContainer currentPage={currentPage}>
      {currentPage === 1 ? null : (
        <PaginatonButton
          value={currentPage - 1}
          onClick={handlePaginationClick}
        >
          Page {currentPage - 1}
        </PaginatonButton>
      )}

      {currentPage < totalPages ? (
        <PaginatonButton
          value={currentPage + 1}
          onClick={handlePaginationClick}
        >
          Page {currentPage + 1}
        </PaginatonButton>
      ) : (
        ""
      )}
    </PaginationContainer>
  );
};

export default withRouter(Pagination);
