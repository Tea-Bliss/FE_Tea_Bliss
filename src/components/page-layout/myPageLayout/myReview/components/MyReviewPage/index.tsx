import classNames from 'classnames/bind';

import MyReviewCard from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard';
import styles from '@/components/page-layout/myPageLayout/myReview/components/MyReviewPage/MyReviewPage.module.scss';

const cn = classNames.bind(styles);

const mockDatas = [
  {
    id: 10,
    title: 'Review Title 10',
    contents: 'This is the content of review 10.',
    likes: 5,
    member: null,
    tea: null,
    purchaseQuantity: 1,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719045389574.svg',
    createDt: '2023-01-10 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
  {
    id: 11,
    title: 'Review Title 10',
    contents: 'This is the content of review 10.',
    likes: 4.5,
    member: null,
    tea: null,
    purchaseQuantity: 1,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719045389574.svg',
    createDt: '2023-01-10 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
  {
    id: 12,
    title: 'Review Title 10',
    contents: 'This is the content of review 10.',
    likes: 0,
    member: null,
    tea: null,
    purchaseQuantity: 1,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719045389574.svg',
    createDt: '2023-01-10 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
];

export default function MyReviewPage() {
  return (
    <div className={cn('reviewList')}>
      {mockDatas.map((data, index) => {
        return (
          <>
            <MyReviewCard key={data.id} status="작성 전" data={data} />
            {index + 1 !== mockDatas.length && <hr className={cn('hr')} />}
          </>
        );
      })}
    </div>
  );
}
