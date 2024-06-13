import { FC } from 'react';

import { Button } from '../button';
import './pagination.scss';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  setPage: (arg: number) => void;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({
  pageCount,
  currentPage,
  setPage,
  className,
}) => {
  if (pageCount < 2) {
    return '';
  }

  const pagesArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className={`pagination ${className}`}>
      <ul className="pagination__list">
        {pagesArray.map((number) => (
          <li className={`pagination__item`} key={number}>
            <Button
              className={`pagination__button  ${number === currentPage ? 'pagination__button--selected' : ''}`}
              onClick={() => { setPage(number); }}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
