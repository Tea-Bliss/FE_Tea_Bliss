'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import RateStars from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars';
import styles from '@/components/page-layout/myPageLayout/myReview/components/common/ReviewModal/ReviewModal.module.scss';
import likesType from '@/components/page-layout/myPageLayout/myReview/types/likesType';

const cn = classNames.bind(styles);

interface ReviewModalProps {
  role: '생성' | '수정';
  data: any;
}

export default function ReviewModal({ role, data }: ReviewModalProps) {
  const [rating, setRating] = useState<likesType>(3.5);

  return (
    <div className={cn('modal')}>
      <h1 className={cn('modalTitle')}>{`리뷰 ${role}하기`}</h1>

      <div className={cn('contents')}>
        <div className={cn('productInfo')}>
          <p className={cn('grayText')}>판매완료</p>
          <h2 className={cn('productTitle')}>{data.title}</h2>
          <div className={cn('dayAndQuantity')}>
            <span className={cn('grayText')}>{data.createDt.split(' ')[0]}</span>
            <span className={cn('grayText')}>{`구매 수량: ${data.purchaseQuantity}`}</span>
          </div>
        </div>

        <div className={cn('ratingArea')}>
          <div className={cn('rating')}>
            <RateStars rate={rating} where="modal" setRate={setRating} />
            <p className={cn('ratingText')}>{`${rating}점`}</p>
          </div>
          <p className={cn('grayText')}>별점을 클릭 해보세요!</p>
        </div>

        <div className={cn('inputArea')}>
          <input className={cn('titleInput')} />
          <textarea className={cn('textarea')} />
        </div>
      </div>

      <div className={cn('buttonContainer')}>
        <Button shape="square" color="white" className={cn('button')}>
          {`리뷰 ${role}하기`}
        </Button>
      </div>
    </div>
  );
}
