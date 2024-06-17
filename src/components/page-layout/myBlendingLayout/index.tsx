import classNames from 'classnames/bind';

import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';
import FixedBottomBar from '@/components/page-layout/myBlendingLayout/components/FixedBottomBar';
import SortingMenu from '@/components/page-layout/myBlendingLayout/components/SortingMenu';
import TeaCardList from '@/components/page-layout/myBlendingLayout/components/TeaCardList';
import styles from '@/components/page-layout/myBlendingLayout/MyBlendingLayout.module.scss';

import { MyBlendingProvider } from './contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function MyBlendingLayout() {
  return (
    <MyBlendingProvider>
      <main className={cn('layout')}>
        <div className={cn('container')}>
          <section>
            <SortingMenu />
          </section>
          <section>
            <TeaCardList />
          </section>
        </div>
      </main>
      <FixedBottomBar />
    </MyBlendingProvider>
  );
}
