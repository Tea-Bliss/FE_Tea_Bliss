import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/common/GlobalNavBar/GlobalNavBar.module.scss';
import Logo from '@/icons/logo.svg';

import AuthButton from './component/AuthButton/AuthButton';
import Hamburger from './component/Hamburger/Hamburger';
import MENU_ITEM from './constants/menuItem';

const cn = classNames.bind(styles);

export default function GlobalNavBar() {
  return (
    <header className={cn('container')}>
      <nav className={cn('nav-container')}>
        <div className={cn('left-wrapper')}>
          <Link href={'/'}>
            <Logo width="100%" height="100%" />
          </Link>
          <ul className={cn('menu-box')}>
            {MENU_ITEM.map((item) => (
              <li key={item.id}>
                <Link className={cn('menu-item')} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={cn('right-wrapper')}>
          <AuthButton />
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
