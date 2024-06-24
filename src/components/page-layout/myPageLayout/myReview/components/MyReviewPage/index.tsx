'use client';

import { Fragment } from 'react';

import classNames from 'classnames/bind';

import { useGetAllTeas } from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import MyReviewCard from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard';
import styles from '@/components/page-layout/myPageLayout/myReview/components/MyReviewPage/MyReviewPage.module.scss';
// import { useGetMyPurchaseDatas } from '@/components/page-layout/myPageLayout/myReview/hooks/usehandleReviews';

const cn = classNames.bind(styles);

const mockDatas = [
  {
    paymentid: 14,
    productList: [
      {
        product: {
          payId: 14,
          name: '미국의 차',
          amount: 1000,
          quantity: 2,
        },
        review: false,
      },
    ],
    paidAt: '2024-06-22 22:57:39',
  },
  {
    paymentid: 15,
    productList: [
      {
        product: {
          payId: 15,
          name: '중국 홍차',
          amount: 1000,
          quantity: 3,
        },
        review: false,
      },
    ],
    paidAt: '2024-06-24 18:47:51',
  },
  {
    paymentid: 16,
    productList: [
      {
        product: {
          payId: 16,
          name: '초콜릿 티',
          amount: 1000,
          quantity: 4,
        },
        review: false,
      },
      {
        product: {
          payId: 16,
          name: '얼 그레이 차',
          amount: 1000,
          quantity: 6,
        },
        review: false,
      },
    ],
    paidAt: '2024-06-24 19:54:00',
  },
];

export default function MyReviewPage() {
  const { data: teasData } = useGetAllTeas({ page: 1, limit: 100 });
  // const { data: paymentData } = useGetMyPurchaseDatas();

  const teas = teasData?.data.tea;

  return (
    <div className={cn('reviewList')}>
      {mockDatas?.map((payment) => {
        const newProductList = payment?.productList.map((product) => ({ ...product, paidAt: payment.paidAt }));
        return (
          <Fragment key={payment?.paymentid}>
            {newProductList.map((product, index) => {
              if (product?.review) return;

              const purchasedItem = teas?.find((tea: any) => tea?.name === product?.product.name);

              const cardData = {
                teaId: purchasedItem?.id,
                name: product?.product.name,
                paidAt: product?.paidAt,
                quantity: product?.product.quantity,
                img: purchasedItem?.img,
              };

              return (
                <Fragment key={`${product?.product?.payId}/${index}}`}>
                  <MyReviewCard status="작성 전" data={cardData} />
                  <hr className={cn('hr')} />
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
