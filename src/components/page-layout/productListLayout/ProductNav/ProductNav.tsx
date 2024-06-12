'use client';

import { useContext, useState } from 'react';

import classNames from 'classnames/bind';

import { NAV } from '@/components/page-layout/productListLayout/constants/index';
import styles from '@/components/page-layout/productListLayout/ProductNav/ProductNav.module.scss';

import { Category } from '../productListLayout';

const cn = classNames.bind(styles);

export default function ProductNav() {
  const { category, setCategory } = useContext(Category);

  return (
    <nav className={cn('navBox')}>
      <p className={cn('categoryTitle')}>제품</p>
      <div className={cn('categoryBox')}>
        {NAV.map((Category) => (
          <button
            onClick={() => setCategory(Category.name)}
            key={Category.name}
            className={cn({ button: Category.name === category })}
          >
            {Category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
