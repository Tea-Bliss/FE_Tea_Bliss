import classNames from 'classnames/bind';

import { cardData } from '@/components/common/Carousel/cardData';
import Carousel from '@/components/common/Carousel/Carousel';
import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';
import styles from '@/components/page-layout/mainLayout/MainLayout.module.scss';

const cn = classNames.bind(styles);

export default function MainLayout() {
  return (
    <>
      <GlobalNavBar />
      <main className={cn('layout')}>
        <div className={cn('container')}>
          <Carousel cards={cardData} num={3} />
        </div>
      </main>
    </>
  );
}
