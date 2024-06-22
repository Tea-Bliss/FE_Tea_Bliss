import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/common/PageButtons/PageButtons.module.scss';

const cn = classNames.bind(styles);

interface PageButtonsProps {
  path: string;
  currentPage: number;
  season?: string;
}

export default function PageButtons({ path, currentPage, season }: PageButtonsProps) {
  return (
    <div className={cn('pageButtons')}>
      <Image src="/icons/arrow.svg" alt="이전" width={16} height={16} className={cn('arrow', 'before')} />
      <div className={cn('pages', 'current')}>1</div>
      <div className={cn('pages')}>2</div>
      <div className={cn('pages')}>3</div>
      <div className={cn('pages')}>4</div>
      <div className={cn('pages')}>5</div>
      <Image src="/icons/arrow.svg" alt="다음" width={16} height={16} className={cn('arrow', 'next')} />
    </div>
  );
}
