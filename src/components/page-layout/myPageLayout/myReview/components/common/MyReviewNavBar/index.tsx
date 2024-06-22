import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewNavBar/MyReviewNavBar.module.scss';

const cn = classNames.bind(styles);

export default function MyReviewNavBar() {
  return (
    <nav className={cn('navBar')}>
      <Link className={cn('reviewLink')} href="/my-page/my-review">
        <h2 className={cn('titleEng')}>Review</h2>
        <p className={cn('title')}>리뷰</p>
      </Link>
      <Link className={cn('textReviewLink')} href="/my-page/my-review/text-review">
        <h2 className={cn('titleEng')}>Text Review</h2>
        <p className={cn('title')}>작성한 리뷰</p>
      </Link>
    </nav>
  );
}
