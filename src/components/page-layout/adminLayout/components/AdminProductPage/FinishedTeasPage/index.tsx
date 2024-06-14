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
  flavor: ['단맛', '신맛'],
  price: 14000,
  season: '여름',
  caffeine: true,
  category: '홍차',
  status: '판매중',
  stock: 28,
  ingredient: [
    {
      name: '라즈베리',
      description: '산뜻한 라즈베리 풍미의 깔끔한 홍차로, 캔디 같은 향, 톡 쏘면서 드라이한 마무리가 돋보입니다.',
    },
    {
      name: '딸기',
      description: '상큼한 딸기 맛이 섞인 실론 블랙티입니다. 달달한 꽃과 딸기 향, 부드러운 목넘김이 특징입니다.',
    },
    {
      name: '블루베리',
      description:
        '상큼한 블루베리 맛이 섞인 실론 블랙티입니다. 향이 강하고 약간 달콤하며, 뜨겁게 또는 차갑게 마셔도 좋습니다!',
    },
    {
      name: '블랙베리',
      description:
        '달콤하고 상큼한 베리가 가미된 실론 블랙티입니다. 꽃향기와 과일향, 그리고 빵처럼 고소한 향이 어우러집니다.',
    },
  ],
};

const mockProducts = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i,
    ko_name: mockProduct.ko_name,
    en_name: mockProduct.en_name,
    price: mockProduct.price,
    category: mockProduct.category,
    stock: mockProduct.stock,
    status: mockProduct.status,
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
