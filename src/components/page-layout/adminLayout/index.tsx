import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/AdminLayout.module.scss';
import AdminHeader from '@/components/page-layout/adminLayout/components/common/AdminHeader';
import AdminSideBar from '@/components/page-layout/adminLayout/components/common/AdminSideBar';

const cn = classNames.bind(styles);

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminSideBar />
      <AdminHeader />
      <main className={cn('main')}>{children}</main>
    </>
  );
}
