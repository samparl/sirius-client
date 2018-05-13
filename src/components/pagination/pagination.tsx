import * as React from 'react';
import * as ReactPaginate from 'react-paginate';
require('./pagination.css');

interface PaginationProps {
  pageCount: number;
  onPageChange: () => {};
}

export const Pagination: React.SFC<PaginationProps> = (props) => (
  <ReactPaginate onPageChange={ props.onPageChange }
    containerClassName={ "Pagination" }
    activeClassName={ "active" }
    previousLabel={ "<" }
    nextLabel={ ">" }
    pageCount={ props.pageCount }
    marginPagesDisplayed={ 2 }
    pageRangeDisplayed={ 5 } />
);
