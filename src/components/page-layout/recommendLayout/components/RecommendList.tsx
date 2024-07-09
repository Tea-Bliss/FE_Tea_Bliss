import classNames from 'classnames/bind';

import Card from '@/components/common/Card/Card';
import styles from '@/components/page-layout/recommendLayout/components/RecommendList.module.scss';

import teas from './RecommendListData';
import useGetSurveyResults from '../apis/useGetSurveyResults';

const cn = classNames.bind(styles);

interface RecommendListProps {
  surveyId: string;
}

export default function RecommendList({ surveyId }: RecommendListProps) {
  const { data } = useGetSurveyResults(surveyId);

  console.log(data);

  return (
    // 목데이터로 구현한 코드
    <div className={cn('layout')}>
      {teas.map((item) => (
        <div className={cn('container')} key={item.id}>
          <Card
            type="productList"
            key={item.id}
            img={item.img}
            href={item.href}
            price={item.price}
            scope={item.rating}
            review={item.review}
            title={item.nameEng}
            koTitle={item.name}
          />
        </div>
      ))}
      /** * TODO: Todo data 받아지는거 확인 후 하단 코드로 바꾸기(data 구조 한번 확인하고) */
      {/* {data.slice(0, 6).map((item: FinishedItem) => (
        <div className={cn('container')} key={item.id}>
          <Card
            type="productList"
            img={item.img}
            href={item.href}
            price={item.price}
            scope={item.rating}
            review={item.review}
            title={item.nameEng}
            koTitle={item.name}
          />
        </div>
      ))} */}
    </div>
  );
}
