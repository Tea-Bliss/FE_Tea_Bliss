import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/AdminLayout.module.scss';
import AdminHeader from '@/components/page-layout/adminLayout/components/AdminHeader';
import AdminSideBar from '@/components/page-layout/adminLayout/components/AdminSideBar';

const cn = classNames.bind(styles);

export default function AdminLayout() {
  return (
    <>
      <AdminSideBar />
      <div className={cn('layout')}>
        <AdminHeader />
        <main className={cn('container')}></main>
      </div>
    </>
  );
}
