'use client';
import { useState } from 'react';

import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/common/GlobalNavBar/component/Hamburger/Hamburger.module.scss';
import HamburgerIcon from '@/icons/hamburger.svg';

import MENU_ITEM from '../../constants/menuItem';
import MyInfoContent from '../MyInfo/MyInfoContent';
import PopupHeader from '../MyInfo/PopupHeader';

const cn = classNames.bind(styles);

export default function Hamburger() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <>
      <div className={cn('container')}>
        <button onClick={toggleNavMenu}>
          <HamburgerIcon />
        </button>
      </div>

      <div className={cn('hamburger-menu', { 'show-nav': showNavMenu })}>
        <div className={cn('my-info')}>
          <PopupHeader toggle={toggleNavMenu} />
          <MyInfoContent />
        </div>

        <ul className={cn('menu-box')}>
          {MENU_ITEM.map((item) => (
            <li className={cn('menu-item')} key={item.id}>
              <Link className={cn('menu-link')} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
