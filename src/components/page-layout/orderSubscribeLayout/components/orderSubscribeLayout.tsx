'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import MyPageSubNav from '@/components/common/MyPageSubNav';
import SubHeader from '@/components/common/SubHeader/SubHeader';
import styles from '@/components/page-layout/orderSubscribeLayout/components/orderSubscribeLayout.module.scss';
import Img from '@/images/목데이터.png';

import Card from './Card/Card';

const cn = classNames.bind(styles);

const data = [
  {
    id: 1,
    img: Img,
    type: 'Chai',
    nameEng: 'Masala chai',
    name: '마살라 차이',
    count: 1,
    price: 11700,
    purchaseDate: '2024.06.17',
    weight: 250,
    packagingType: '종이타입',
  },
  {
    id: 2,
    img: Img,
    type: 'Chai',
    nameEng: 'Masala chai',
    name: '마살라 차이',
    count: 1,
    price: 11700,
    purchaseDate: '2024.06.17',
    weight: 250,
    packagingType: '종이타입',
  },
  {
    id: 3,
    img: Img,
    type: 'Chai',
    nameEng: 'Masala chai',
    name: '마살라 차이',
    count: 1,
    price: 11700,
    purchaseDate: '2024.06.17',
    weight: 250,
    packagingType: '종이타입',
  },
  {
    id: 4,
    img: Img,
    type: 'Chai',
    nameEng: 'Masala chai',
    name: '마살라 차이',
    count: 1,
    price: 11700,
    purchaseDate: '2024.06.17',
    weight: 250,
    packagingType: '종이타입',
  },
];

export default function OrderSubscribeLayout() {
  const [state, setState] = useState('order');

  return (
    <>
      <SubHeader>My page</SubHeader>
      <MyPageNav />
      <MyPageSubNav.Root className={cn('root')}>
        <MyPageSubNav.Container>
          <MyPageSubNav.Box className={cn({ selected: state === 'order' })} onClick={() => setState('order')}>
            <MyPageSubNav.EnNav>Order</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav>주문관리</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
          <MyPageSubNav.Box className={cn({ selected: state === 'subscribe' })} onClick={() => setState('subscribe')}>
            <MyPageSubNav.EnNav>subscription</MyPageSubNav.EnNav>
            <MyPageSubNav.KoNav className={cn('right')}>구독 관리</MyPageSubNav.KoNav>
          </MyPageSubNav.Box>
        </MyPageSubNav.Container>
      </MyPageSubNav.Root>
      <div className={cn('cardContainer')}>
        <div className={cn('cardBox')}>
          {data.map((card) => (
            <Card data={card} key={card.id} className={cn('card')} />
          ))}
        </div>
      </div>
    </>
  );
}
