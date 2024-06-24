import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import SubHeader from '@/components/common/SubHeader/SubHeader';
import MyPageDetailNav from '@/components/page-layout/myPageLayout/myReview/components/common/MyPageDetailNav';
import styles from '@/components/page-layout/myPageLayout/myReview/MyReviewLayout.module.scss';

const cn = classNames.bind(styles);

export default function MyReviewLayout({ children }: { children: ReactNode }) {
  return (
    <main className={cn('layout')}>
      <SubHeader>My page</SubHeader>
      <MyPageNav />
      <div className={cn('container')}>
        <div className={cn('reviewArea')}>
          <MyPageDetailNav
            firstPageData={{ nameEng: 'Review', name: '리뷰', path: '/my-page/my-review' }}
            secondPageData={{ nameEng: 'Text Review', name: '작성한 리뷰', path: '/my-page/my-review/text-review' }}
          />
          {children}
        </div>
      </div>
    </main>
  );
}
