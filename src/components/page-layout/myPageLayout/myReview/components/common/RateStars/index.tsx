'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars/RateStars.module.scss';
import StarImage from '@/components/page-layout/myPageLayout/myReview/components/common/StarImage';
import likesType from '@/components/page-layout/myPageLayout/myReview/types/likesType';

const cn = classNames.bind(styles);

interface RateStars {
  rate: likesType;
  where: 'modal' | 'page';
  setRate?: Dispatch<SetStateAction<likesType>>;
}

export default function RateStars({ rate, where, setRate }: RateStars) {
  return (
    <div className={cn('stars')}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <div key={index} className={cn('star')}>
            {setRate && index === 0 && (
              <button type="button" className={cn('setZero')} onClick={() => setRate(0)}></button>
            )}
            {setRate && (
              <button type="button" className={cn('left')} onClick={() => setRate((index + 0.5) as likesType)}></button>
            )}
            <StarImage
              status={rate <= index ? 'empty' : rate >= index + 1 ? 'full' : 'half'}
              width={where === 'page' ? 14 : 36}
            />
            {setRate && (
              <button type="button" className={cn('right')} onClick={() => setRate((index + 1) as likesType)}></button>
            )}
          </div>
        );
      })}
    </div>
  );
}
