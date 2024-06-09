import classNames from 'classnames/bind';

import styles from '@/components/common/Pagenation/Pagenation.module.scss';
import Arrow from '@/icons/arrow.svg';
import DoubleArrow from '@/icons/doubleArrow.svg';

const cn = classNames.bind(styles);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, setPage }: PaginationProps) {
  const maxPagesToShow = 5;
  const currentGroup = Math.ceil(currentPage / maxPagesToShow);
  const startPage = (currentGroup - 1) * maxPagesToShow + 1;
  const endPage = Math.min(currentGroup * maxPagesToShow, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const goToFirstPage = () => setPage(1);

  const goToPreviousGroup = () => {
    const previousGroupFirstPage = startPage - maxPagesToShow;
    if (previousGroupFirstPage >= 1) setPage(previousGroupFirstPage);
  };

  const goToNextGroup = () => {
    const nextGroupFirstPage = endPage + 1;
    if (nextGroupFirstPage <= totalPages) setPage(nextGroupFirstPage);
  };

  const goToLastPage = () => setPage(totalPages);

  return (
    <div className={cn('pagination')}>
      {totalPages > maxPagesToShow && (
        <>
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            <DoubleArrow className={cn('leftArrow')} />
          </button>
          <button onClick={goToPreviousGroup} disabled={currentPage <= maxPagesToShow}>
            <Arrow className={cn('leftArrow')} />
          </button>
        </>
      )}
      {pages.map((page) => (
        <button key={page} onClick={() => setPage(page)} className={cn({ active: currentPage === page })}>
          {page}
        </button>
      ))}
      {totalPages > maxPagesToShow && (
        <>
          <button onClick={goToNextGroup} disabled={endPage >= totalPages}>
            <Arrow className={cn('rightArrow')} />
          </button>
          <button onClick={goToLastPage} disabled={endPage === totalPages}>
            <DoubleArrow className={cn('rightArrow')} />
          </button>
        </>
      )}
    </div>
  );
}
