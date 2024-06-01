import styles from '@/components/page-layout/myBlendingLayout/components/SortingMenu/SortingMenu.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function SortingMenu() {
  return (
    <section className={cn('container')}>
      <h1 className={cn('title')}>나만의 블렌딩 티 만들기</h1>

      <div className={cn('menu')}>
        <div className={cn('buttons')}>
          <p className={cn('criterion')}>종류</p>
        </div>
        <div className={cn('buttons')}>
          <p className={cn('criterion')}>맛</p>
        </div>
      </div>
    </section>
  );
}
