import { Dispatch, SetStateAction } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/common/PageButtons/PageButtons.module.scss';

const cn = classNames.bind(styles);

interface PageButtonsProps {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  size: number;
}

export default function PageButtons({ currentPage, size, setPage }: PageButtonsProps) {
  return (
    <div className={cn('pageButtons')}>
      <button onClick={() => setPage(currentPage - 1)} className={cn(currentPage === 1 ? 'invisible' : '')}>
        <Image src="/icons/arrow.svg" alt="이전" width={16} height={16} />
      </button>
      {Array.from({ length: Math.floor(size / 10) + 1 }, (v, k) => k + 1).map((page) => {
        return (
          <button
            key={page}
            className={cn('pages', currentPage === page ? 'current' : '')}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => setPage(currentPage + 1)}
        className={cn(currentPage === Math.floor(size / 10) + 1 ? 'invisible' : '')}
      >
        <Image src="/icons/arrow.svg" alt="다음" width={16} height={16} className={cn('nextArrow')} />
      </button>
    </div>
  );
}
