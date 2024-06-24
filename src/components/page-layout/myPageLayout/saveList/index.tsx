import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import SubHeader from '@/components/common/SubHeader/SubHeader';
import MyPageDetailNav from '@/components/page-layout/myPageLayout/myReview/components/common/MyPageDetailNav';
import styles from '@/components/page-layout/myPageLayout/saveList/SaveListLayout.module.scss';

const cn = classNames.bind(styles);

export default function SaveListLayout({ children }: { children: ReactNode }) {
  return (
    <main className={cn('layout')}>
      <SubHeader>My page</SubHeader>
      <MyPageNav />
      <div className={cn('container')}>
        <div className={cn('reviewArea')}>
          <MyPageDetailNav
            firstPageData={{ nameEng: 'Goods', name: '완제품', path: '/my-page/save-list' }}
            secondPageData={{ nameEng: 'Blending', name: '블렌딩 티', path: '/my-page/save-list/blending-save' }}
          />
          {children}
        </div>
      </div>
    </main>
  );
}
