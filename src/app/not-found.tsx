import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/app/not-found.module.scss';
import ROUTE from '@/constants/route';
import Arrow from '@/icons/pageMovementArrow.svg';
import Tea from '@/icons/tea.svg';

const cn = classNames.bind(styles);

export default function NotFound() {
  return (
    <div className={cn('container')}>
      <header className={cn('header')}></header>
      <div className={cn('circle')}>
        <p className={cn('notFound')}>404 페이지</p>
        <Tea className={cn('tea')} />
      </div>
      <div className={cn('buttonContainer')}>
        <Link href={ROUTE.HOME} className={cn('link')}>
          메인 페이지로 이동
          <Arrow />
        </Link>
        <Link href={ROUTE.PRODUCT_LIST} className={cn('link')}>
          제품 목록 페이지로 이동 <Arrow />
        </Link>
      </div>
    </div>
  );
}
