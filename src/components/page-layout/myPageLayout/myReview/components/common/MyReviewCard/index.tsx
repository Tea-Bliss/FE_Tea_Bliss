import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/MyReviewCard/MyReivewCard.module.scss';

const cn = classNames.bind(styles);

const mockDatas = [
  {
    id: 10,
    title: 'Review Title 10',
    contents: 'This is the content of review 10.',
    likes: 5,
    member: null,
    tea: null,
    teaImg: 'https://oboomyrmdekomaldptgh.supabase.co/storage/v1/object/public/images/1719045389574.svg',
    createDt: '2023-01-10 19:00:00',
    updateDt: '2024-06-22 12:57:28',
  },
];

interface MyReivewCardProps {}

export default function MyReviewCard({}: MyReivewCardProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}
