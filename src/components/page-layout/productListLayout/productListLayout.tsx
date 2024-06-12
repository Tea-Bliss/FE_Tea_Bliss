'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import ProductList from '@/components/page-layout/productListLayout/ProductList/ProductList';
import styles from '@/components/page-layout/productListLayout/productListLayout.module.scss';
import ProductNav from '@/components/page-layout/productListLayout/ProductNav/ProductNav';
import ProductBanner from '@/images/product_banner.jpg';

const cn = classNames.bind(styles);

interface CategoryContextType {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const defaultValue: CategoryContextType = {
  category: '',
  setCategory: () => {},
};

export const Category = createContext(defaultValue);

export default function ProductListLayout() {
  const [category, setCategory] = useState('');

  return (
    <main className={cn('main')}>
      <div className={cn('imgBox')}>
        <Image src={ProductBanner} alt="배너" fill />
      </div>
      <div className={cn('container')}>
        <Category.Provider value={{ category, setCategory }}>
          <ProductNav />
          <ProductList />
        </Category.Provider>
      </div>
    </main>
  );
}
