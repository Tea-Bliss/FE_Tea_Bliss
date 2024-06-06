import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/page-layout/adminLayout/components/AdminSideBar/AdminSideBar.module.scss';

const cn = classNames.bind(styles);

export default function AdminSideBar() {
  return (
    <aside className={cn('sideBar')}>
      <Link href={'/'}>
        <Image src="/icons/logo.svg" alt="logo" width={100} height={50} className={cn('logo')} />
      </Link>
      <nav className={cn('navBar')}>
        <button className={cn('category')}>
          <Image src="/icons/home.svg" alt="home" width={20} height={20} />홈
        </button>
        <button className={cn('category')}>
          <Image src="/icons/person.svg" alt="customer" width={20} height={20} />
          고객
        </button>
        <button className={cn('category')}>
          <Image src="/icons/cup.svg" alt="product" width={20} height={20} />
          상품
        </button>
      </nav>
    </aside>
  );
}
