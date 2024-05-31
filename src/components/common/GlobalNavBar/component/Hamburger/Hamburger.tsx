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

      <div className={cn('hamburgerMenu', { showNav: showNavMenu })}>
        <div className={cn('myInfo')}>
          <PopupHeader toggle={toggleNavMenu} />
          <MyInfoContent />
        </div>

        <ul className={cn('menuBox')}>
          {MENU_ITEM.map((item) => (
            <li className={cn('menuItem')} key={item.id}>
              <Link className={cn('menuLink')} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
