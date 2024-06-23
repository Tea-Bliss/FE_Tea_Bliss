import classNames from 'classnames/bind';

import MyReviewCard from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard';
import styles from '@/components/page-layout/myPageLayout/myReview/components/MyReviewPage/MyReviewPage.module.scss';

const cn = classNames.bind(styles);

export default function MyReviewPage() {
  return (
    <div>
      <div>
        <MyReviewCard status="작성 후" />
      </div>
    </div>
  );
}
