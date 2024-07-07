import classNames from 'classnames/bind';

import Card from '@/components/common/Card/Card';
import styles from '@/components/page-layout/recommendLayout/components/RecommendList.module.scss';

import teas from './RecommendListData';
import FinishedItem from '../../productListLayout/types';
import useGetSurveyResults from '../apis/useGetSurveyResults';

const cn = classNames.bind(styles);

interface RecommendListProps {
  surveyId: string;
}

export default function RecommendList({ surveyId }: RecommendListProps) {
  const { data } = useGetSurveyResults(surveyId);

  console.log(data);

  return (
    <div className={cn('layout')}>
      {/* {data?.teas.map((item) => (
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
      ))} */}

      {data.slice(0, 6).map((item: FinishedItem) => (
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
      ))}
    </div>
  );
}
