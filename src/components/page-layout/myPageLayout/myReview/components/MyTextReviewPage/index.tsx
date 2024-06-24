'use client';

import classNames from 'classnames/bind';

import { useGetAllTeas } from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import MyReviewCard from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard';
import styles from '@/components/page-layout/myPageLayout/myReview/components/MyTextReviewPage/MyTextReviewPage.module.scss';
// import { useGetMyReviews } from '@/components/page-layout/myPageLayout/myReview/hooks/usehandleReviews';

const cn = classNames.bind(styles);

const mockDatas = [
  {
    id: 10,
    title: '짱맛있어요',
    contents: '맛있어요.',
    likes: 5,
    member: null,
    tea: '허니부쉬 차',
    purchaseQuantity: 3,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719235724924.svg',
    createDt: '2023-01-10 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
  {
    id: 11,
    title: '맛있네요',
    contents: '먹을만 합니다.',
    likes: 4.5,
    member: null,
    tea: '허니부쉬 차',
    purchaseQuantity: 2,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719235724924.svg',
    createDt: '2023-01-11 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
  {
    id: 12,
    title: '최악이에요',
    contents: '진짜 너무 별로에요',
    likes: 0,
    member: null,
    tea: '허니부쉬 차',
    purchaseQuantity: 4,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719235724924.svg',
    createDt: '2023-01-14 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
];

export default function MyTextReviewPage() {
  // const { data: reviewDatas } = useGetMyReviews();

  const { data: teasData } = useGetAllTeas({ page: 1, limit: 100 });
  const teas = teasData?.data.tea;

  return (
    <div className={cn('reviewList')}>
      {mockDatas.map((data) => {
        const reviewItem = teas?.find((tea: any) => tea?.name === data?.tea);

        const cardData = {
          teaId: reviewItem?.id,
          reviewId: data?.id,
          name: data?.tea,
          createDt: data?.createDt,
          quantity: data?.purchaseQuantity,
          img: data?.teaImg,
          likes: data?.likes,
          contents: data?.contents,
          title: data?.title,
        };

        return (
          <>
            <MyReviewCard key={data?.id} status="작성 후" data={cardData} />
            <hr className={cn('hr')} />
          </>
        );
      })}
    </div>
  );
}
