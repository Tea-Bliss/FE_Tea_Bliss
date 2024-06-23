import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/RateStars/RateStars.module.scss';

const cn = classNames.bind(styles);

interface RateStars {
  rate: number;
}

export default function RateStars({ rate }: RateStars) {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => {
        return <div key={index}></div>;
      })}
    </div>
  );
}
