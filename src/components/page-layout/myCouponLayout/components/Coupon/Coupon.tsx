import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myCouponLayout/components/Coupon/Coupon.module.scss';
import Used from '@/images/used.svg';

const cn = classNames.bind(styles);

interface CouponProps {
  data: {
    startDate: string;
    discountRate: number;
    used: number;
    type: 'welcome' | 'review';
  };
}

export default function Coupon({ data }: CouponProps) {
  const type = data.type === 'review' ? '리뷰' : '웰컴';
  const blurText = data.used && 'blurText';

  return (
    <div className={cn('container')}>
      {data.used && <div className={cn('blur')}></div>}
      <div className={cn('contentContainer')}>
        <p className={cn('type', blurText)}>{type} 쿠폰</p>
        <div className={cn('discountRateBox', blurText)}>
          <p className={cn('discount')}>{data.discountRate}%</p>
          <p>OFF</p>
        </div>
        <div className={cn('detailBox', blurText)}>
          <p>ㆍID당 1회 사용가능</p>
          <p>ㆍ유효기간 : {data.startDate}</p>
        </div>
        <div className={cn('topCircle')}></div>
        <div className={cn('bottomCircle')}></div>
        {data.used && <Used className={cn('used')} />}
      </div>
      <div className={cn('coupon')}>
        <p className={cn('couponText')}>C o u p o n</p>
      </div>
    </div>
  );
}
