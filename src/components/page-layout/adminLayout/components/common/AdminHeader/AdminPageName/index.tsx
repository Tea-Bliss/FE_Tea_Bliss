'use client';

import classNames from 'classnames/bind';

import { usePathname } from 'next/navigation';

import styles from '@/components/page-layout/adminLayout/components/common/AdminHeader/AdminPageName/AdminPageName.module.scss';

const cn = classNames.bind(styles);

export default function AdminPageName() {
  const path = usePathname();

  const pageName =
    path === '/admin'
      ? '홈'
      : path.startsWith('/admin/customer')
      ? '고객 관리'
      : path.startsWith('/admin/product/finished-teas')
      ? '완제품 관리'
      : path.startsWith('/admin/product/loose-leaf-teas')
      ? '개별 티 관리'
      : '잘못된 페이지';

  return <div className={cn('pageName')}>{pageName}</div>;
}
