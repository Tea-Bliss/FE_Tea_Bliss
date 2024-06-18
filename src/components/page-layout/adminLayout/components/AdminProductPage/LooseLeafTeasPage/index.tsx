'use client';

import { ChangeEvent, KeyboardEventHandler, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage/LooseLeafTeasPage.module.scss';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import SortBar from '@/components/page-layout/adminLayout/components/common/SortBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';

const cn = classNames.bind(styles);

const mockProduct = {
  name: '산딸기',
  name_eng: 'wild strawberry',
  explanation: '적당량의 시큼함과 은은한 달콤함. 어린이와 함께 나누기에 완벽한 허브티입니다.',
  flavor: ['단맛', '신맛'],
  category: '허브 티',
  price: 3000,
  status: '판매중',
  stock: 28,
  photo: '/images/my-blending/vanila.png',
};

const mockProducts = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: mockProduct.name,
    name_eng: mockProduct.name_eng,
    price: mockProduct.price,
    category: mockProduct.category,
    stock: mockProduct.stock,
    status: mockProduct.status,
  })),
];

export default function LooseLeafTeasPage() {
  const [products, setProducts] = useState<(typeof mockProducts)[number][]>(mockProducts);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnter: KeyboardEventHandler = (e) => {
    if (e.keyCode === 13) {
      if (!searchValue) {
        setProducts(mockProducts);
        return;
      }

      setProducts(
        mockProducts.filter((product) => product.name.includes(searchValue) || product.name_eng.includes(searchValue))
      );
    }
  };

  return (
    <>
      <SortBar
        standards={[
          '전체',
          '품절',
          '홍차',
          '푸에르 티',
          '차이 티',
          '우롱차',
          '백차',
          '녹차',
          '허브 티',
          '루이보스 티',
          '디카페인',
        ]}
      />
      <SearchBar
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder="한글 이름 또는 영문 이름으로 검색해주세요"
      />
      <Table
        fields={['ID', '이름', '영문 이름', '가격', '종류', '재고', '상태']}
        items={products}
        name="상품"
        unit="개"
        path="/admin/product/loose-leaf-teas/detail"
      />

      <div className={cn('pageButtons')}>
        <Image src="/icons/arrow.svg" alt="이전" width={16} height={16} className={cn('arrow', 'before')} />
        <div className={cn('pages', 'current')}>1</div>
        <div className={cn('pages')}>2</div>
        <div className={cn('pages')}>3</div>
        <div className={cn('pages')}>4</div>
        <div className={cn('pages')}>5</div>
        <Image src="/icons/arrow.svg" alt="다음" width={16} height={16} className={cn('arrow', 'next')} />
      </div>
    </>
  );
}
