import React from 'react';
import ReactPaginate from 'react-paginate';
require('./pagination.css');

export const Pagination = (props) => (
  <ReactPaginate onPageChange={props.onPageChange}
    containerClassName={"Pagination"}
    subContainerClassName={"pages pagination"}
    activeClassName={"active"}
    previousLabel={"<"}
    nextLabel={">"}
    pageCount={props.pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5} />
);
