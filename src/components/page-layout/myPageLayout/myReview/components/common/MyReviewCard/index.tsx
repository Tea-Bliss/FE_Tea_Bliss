import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard/MyReivewCard.module.scss';
import RateStars from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars';

const cn = classNames.bind(styles);

const mockData = {
  id: 10,
  title: 'Review Title 10',
  contents: 'This is the content of review 10.',
  likes: 5,
  member: null,
  tea: null,
  purchaseQuantity: 1,
  teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719045389574.svg',
  createDt: '2023-01-10 19:00:00',
  updateDt: '2024-06-22 12:57:28',
};

interface MyReivewCardProps {
  status: '작성 전' | '작성 후';
  className?: string;
}

export default function MyReviewCard({ status, className }: MyReivewCardProps) {
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
          <h2 className={cn('productTitle')}>{mockData.title}</h2>
          <div className={cn('dayAndQuantity')}>
            <span className={cn('grayText')}>{mockData.createDt.split(' ')[0]}</span>
            <span className={cn('grayText')}>{`구매 수량: ${mockData.purchaseQuantity}`}</span>
          </div>
        </div>
        <div className={cn('reviewArea')}>
          {status === '작성 전' ? (
            <div className={cn('vacantReview')}>
              <Image src="/icons/pencil.svg" alt="리뷰를 작성해주세요" width={12} height={12} />
              <p className={cn('grayText', 'reviewText')}>리뷰를 남겨주세요!</p>
              <button className={cn('writeReviewButton')}>리뷰 쓰기</button>
            </div>
          ) : (
            <div className={cn('review')}>
              <div>
                <RateStars rate={3.5} />
              </div>
              <div>{mockData.contents}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
