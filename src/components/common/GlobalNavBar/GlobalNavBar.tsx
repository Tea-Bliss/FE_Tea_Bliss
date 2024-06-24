import { Suspense } from 'react';

import classNames from 'classnames/bind';

import Link from 'next/link';

import AuthButton from '@/components/common/GlobalNavBar/AuthButton/AuthButton';
import MENU_ITEM from '@/components/common/GlobalNavBar/constants/menuItem';
import styles from '@/components/common/GlobalNavBar/GlobalNavBar.module.scss';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

export default function GlobalNavBar() {
  return (
    <header className={cn('container')}>
      <nav className={cn('navContainer')}>
        <div className={cn('logoWrapper')}>
          <h1>
            <Link className={cn('logo')} href={ROUTE.HOME}>
              Tea Bliss
            </Link>
          </h1>
        </div>
        <div className={cn('menuWrapper')}>
          <ul className={cn('menuBox')}>
            {MENU_ITEM.map((item) => (
              <li className={cn('menuItem')} key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Suspense>
            <AuthButton />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
