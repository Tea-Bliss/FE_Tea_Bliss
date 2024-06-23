import classNames from 'classnames/bind';

import Image from 'next/image';

import { cardData } from '@/components/common/Carousel/cardData';
import Carousel from '@/components/common/Carousel/Carousel';
import MainHeader from '@/components/page-layout/mainLayout/components/MainHeader/MainHeader';
import styles from '@/components/page-layout/mainLayout/MainLayout.module.scss';
import MainImage from '@/images/main.png';

const cn = classNames.bind(styles);

export default function MainLayout() {
  return (
    <div>
      <main className={cn('layout')}>
        <MainHeader />
        <Image className={cn('mainImg')} src={MainImage} alt="메인 이미지" />
        <h2 className={cn('title')}>tea for you</h2>
        <div className={cn('container')}>
          <Carousel cards={cardData} num={3} />
        </div>
      </main>
    </div>
  );
}
