'use client';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import SubHeader from '@/components/common/SubHeader/SubHeader';
import styles from '@/components/page-layout/reviewLayout/components/ReviewLayout.module.scss';

import Card from './Card/Card';
import getReview from '../apis';
import { CardData } from '../types';

const cn = classNames.bind(styles);

export default function ReviewLayout() {
  const { data } = useQuery({
    queryKey: ['review'],
    queryFn: () => getReview(8),
  });

  return (
    <>
      <SubHeader>Review</SubHeader>
      <div className={cn('container')}>
        <div className={cn('box')}>
          <p className={cn('title')}>블렌딩 리뷰 추천순 top 8</p>
          <div className={cn('gridbox')}>
            {data?.data.map((card: CardData, idx: number) => (
              <Card data={card} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
