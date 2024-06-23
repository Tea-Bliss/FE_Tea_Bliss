'use client';

import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import Image from 'next/image';

import Carousel from '@/components/common/Carousel/Carousel';
import MainHeader from '@/components/page-layout/mainLayout/components/MainHeader/MainHeader';
import styles from '@/components/page-layout/mainLayout/MainLayout.module.scss';
import MainImage from '@/images/main.png';

import getMainItems from './apis/getMainItems';

const cn = classNames.bind(styles);

export default function MainLayout() {
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: () => getMainItems(),
  });

  return (
    <div>
      <main className={cn('layout')}>
        <MainHeader />
        <Image className={cn('mainImg')} src={MainImage} alt="메인 이미지" />
        <h2 className={cn('title')}>tea for you</h2>
        <div className={cn('container')}>
          <Carousel cards={data?.tea} num={3} />
        </div>
      </main>
    </div>
  );
}
