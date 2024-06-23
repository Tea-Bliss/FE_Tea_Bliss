'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import BackdropModal from '@/components/common/modal/BackdropModal/BackdropModal';
import styles from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard/MyReivewCard.module.scss';
import RateStars from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars';
import ReviewModal from '@/components/page-layout/myPageLayout/myReview/components/common/ReviewModal';
import likesType from '@/components/page-layout/myPageLayout/myReview/types/likesType';

const cn = classNames.bind(styles);

interface MyReivewCardProps {
  status: '작성 전' | '작성 후';
  data: any;
  className?: string;
}

export default function MyReviewCard({ status, className, data }: MyReivewCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cn('card', className)}>
      <Image
        src={'/images/default_product.png'}
        alt={'상품 이미지'}
        width="95"
        height="95"
        className={cn('productImage')}
      />
      <div className={cn('textArea')}>
        <div className={cn('productInfo')}>
          <p className={cn('grayText')}>판매완료</p>
          <h2 className={cn('productTitle')}>{data.title}</h2>
          <div className={cn('dayAndQuantity')}>
            <span className={cn('grayText')}>{data.createDt.split(' ')[0]}</span>
            <span className={cn('grayText')}>{`구매 수량: ${data.purchaseQuantity}`}</span>
          </div>
        </div>
        <div className={cn('reviewArea')}>
          {status === '작성 전' ? (
            <div className={cn('vacantReview')}>
              <Image src="/icons/pencil.svg" alt="리뷰를 작성해주세요" width={12} height={12} />
              <p className={cn('grayText', 'reviewText')}>리뷰를 남겨주세요!</p>
              <button className={cn('writeReviewButton')} onClick={() => setIsModalOpen(true)}>
                리뷰 쓰기
              </button>
            </div>
          ) : (
            <div className={cn('review')}>
              <div className={cn('reviewContents')}>
                <div className={cn('rating')}>
                  <RateStars rate={data.likes as likesType} where="page" />
                  <p className={cn('reviewText')}>{`${data.likes}점`}</p>
                </div>
                <button className={cn('writeReviewButton')} onClick={() => setIsModalOpen(true)}>
                  리뷰 수정
                </button>
              </div>
              <div className={cn('reviewText')}>{data.contents}</div>
            </div>
          )}
        </div>
      </div>
      <BackdropModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ReviewModal role={status === '작성 전' ? '생성' : '수정'} data={data} />
      </BackdropModal>
    </div>
  );
}
