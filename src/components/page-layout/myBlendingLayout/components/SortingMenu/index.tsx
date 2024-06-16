import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/SortingMenu.module.scss';
import TasetSortingList from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TasteSortingList';
import TypeSortingList from '@/components/page-layout/myBlendingLayout/components/SortingMenu/TypeSortingList';

const cn = classNames.bind(styles);

export default function SortingMenu() {
  return (
    <section className={cn('container')}>
      <h1 className={cn('title')}>나만의 블렌딩 티 만들기</h1>

      <div className={cn('menu')}>
        <div className={cn('buttons')}>
          <p className={cn('criterion')}>종류</p>
          <TypeSortingList />
        </div>
        <div className={cn('buttons')}>
          <p className={cn('criterion')}>맛</p>
          <TasetSortingList />
        </div>
      </div>
    </section>
  );
}
