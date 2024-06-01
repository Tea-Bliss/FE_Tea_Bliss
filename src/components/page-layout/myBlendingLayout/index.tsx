import TeaCardList from '@/components/page-layout/myBlendingLayout/components/TeaCardList';
import styles from '@/components/page-layout/myBlendingLayout/MyBlendingLayout.module.scss';
import classNames from 'classnames/bind';
import FixedBottomBar from '@/components/page-layout/myBlendingLayout/components/FixedBottomBar';
import SortingMenu from '@/components/page-layout/myBlendingLayout/components/SortingMenu';
import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';

const cn = classNames.bind(styles);

export default function MyBlendingLayout() {
  return (
    <>
      <GlobalNavBar />
      <main className={cn('layout')}>
        <div className={cn('container')}>
          {/** 분류 라벨*/}
          <section>
            <SortingMenu />
          </section>
          {/** 카드리스트 */}
          <section>
            <TeaCardList />
          </section>
        </div>
      </main>

      {/** 차 블렌딩 조합식 */}
      <footer>
        <FixedBottomBar />
      </footer>
    </>
  );
}
