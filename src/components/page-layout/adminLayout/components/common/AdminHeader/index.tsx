import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/common/AdminHeader/AdminHeader.module.scss';

const cn = classNames.bind(styles);

export default function AdminHeader() {
  return (
    <header className={cn('header')}>
      <div className={cn('categoryTitle')}>이름</div>
      <button className={cn('quit')}>나가기</button>
    </header>
  );
}
