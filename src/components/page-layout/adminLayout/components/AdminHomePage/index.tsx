import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/AdminHomePage/AdminHomePage.module.scss';

const cn = classNames.bind(styles);

export default function AdminHomePage() {
  return (
    <div>
      <div className={cn('category')}>
        <div className={cn('categoryTitle')}>
          <Image src="/icons/document.svg" alt="주문현황" width="25" height="25" />
          주문현황
        </div>
        <div className={cn('contents')}>
          <div className={cn('content', 'orders')}>
            입금전
            <div className={cn('number')}>0</div>
          </div>
          <div className={cn('content', 'orders')}>
            배송준비중
            <div className={cn('number')}>0</div>
          </div>
          <div className={cn('content', 'orders')}>
            배송중
            <div className={cn('number')}>0</div>
          </div>
          <div className={cn('content', 'cancel')}>
            취소신청
            <div className={cn('number')}>0</div>
          </div>
          <div className={cn('content', 'cancel')}>
            교환신청
            <div className={cn('number')}>0</div>
          </div>
          <div className={cn('content', 'cancel')}>
            반품신청
            <div className={cn('number')}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
