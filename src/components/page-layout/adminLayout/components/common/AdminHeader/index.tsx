import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/page-layout/adminLayout/components/common/AdminHeader/AdminHeader.module.scss';
import AdminPageName from '@/components/page-layout/adminLayout/components/common/AdminHeader/AdminPageName';

const cn = classNames.bind(styles);

export default function AdminHeader() {
  return (
    <header className={cn('header')}>
      <AdminPageName />
      <Link href={'/'}>
        <button className={cn('quit')}>나가기</button>
      </Link>
    </header>
  );
}
