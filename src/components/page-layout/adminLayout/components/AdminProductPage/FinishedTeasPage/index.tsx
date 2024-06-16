'use client';

import { ChangeEvent, KeyboardEventHandler, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/FinishedTeasPage/FinishedTeasPage.module.scss';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import SortBar from '@/components/page-layout/adminLayout/components/common/SortBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';

const cn = classNames.bind(styles);

const mockProduct = {
  ko_name: '후르츠베리 티',
  en_name: 'berries teas',
  image: '/images/my-blending/vanila.png',
  description: '베리류를 좋아하시나요? 상큼하고 달달한 후르츠베리 티 세트로 일 년 내내 여름을 즐겨보세요.',
  flavor: [1, 2],
  price: 14000,
  season: '여름',
  caffeine: true,
  category: '홍차',
  saleStatus: '판매중',
  inventory: 28,
  ingredient: [1, 2, 3],
};

const mockProducts = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i,
    ko_name: mockProduct.ko_name,
    en_name: mockProduct.en_name,
    price: mockProduct.price,
    category: mockProduct.category,
    stock: mockProduct.inventory,
    status: mockProduct.saleStatus,
  })),
];

export default function FinishedTeasPage() {
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
        mockProducts.filter((product) => product.ko_name.includes(searchValue) || product.en_name.includes(searchValue))
      );
    }
  };

  return (
    <>
      <SortBar standards={['전체', '품절', '봄', '여름', '가을', '겨울']} />
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
        path="/admin/product/finished-teas/detail"
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
