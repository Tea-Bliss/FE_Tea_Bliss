'use client';

import { useReducer } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/page-layout/adminLayout/components/common/AdminSideBar/AdminSideBar.module.scss';

const cn = classNames.bind(styles);

export default function AdminSideBar() {
  const [isVisibleSubMenu, toggleIsVisibleSubMenu] = useReducer((state) => {
    return !state;
  }, false);

  const path = usePathname();

  return (
    <aside className={cn('sideBar')}>
      <Link href={'/'}>
        <Image src="/icons/logo.svg" alt="logo" width={100} height={50} className={cn('logo')} />
      </Link>
      <nav className={cn('navBar')}>
        <Link href={'/admin'}>
          <button className={cn('category', path === '/admin' && 'current')}>
            <Image src="/icons/home.svg" alt="home" width={20} height={20} />홈
          </button>
        </Link>
        <Link href={'/admin/customer'}>
          <button className={cn('category', path.startsWith('/admin/customer') && 'current')}>
            <Image src="/icons/person.svg" alt="customer" width={20} height={20} />
            고객
          </button>
        </Link>
        <button className={cn('category')} onClick={toggleIsVisibleSubMenu}>
          <Image src="/icons/cup.svg" alt="product" width={20} height={20} />
          상품
          <Image
            src="/icons/arrow.svg"
            alt="sub-menu"
            width={16}
            height={16}
            className={cn('subMenuArrow', isVisibleSubMenu && 'visibleSubMenu')}
          />
        </button>
        {isVisibleSubMenu && (
          <div className={cn('subMenu')}>
            <Link href={'/admin/product/finished-teas'}>
              <button className={cn('category', 'sub', path.startsWith('/admin/product/finished-teas') && 'current')}>
                완제품
              </button>
            </Link>
            <Link href={'/admin/product/loose-leaf-teas'}>
              <button className={cn('category', 'sub', path.startsWith('/admin/product/loose-leaf-teas') && 'current')}>
                개별 티
              </button>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
}
