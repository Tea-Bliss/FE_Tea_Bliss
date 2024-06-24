import Card from '@/components/common/Card/Card';
import useGetSurveyResults from '../apis/useGetSurveyResults';
import classNames from 'classnames/bind';
import styles from '@/components/page-layout/recommendLayout/components/RecommendList.module.scss';
import teas from './RecommendListData';

const cn = classNames.bind(styles);

interface RecommendListProps {
  surveyId: string;
}

export default function RecommendList({ surveyId }: RecommendListProps) {
  const { data } = useGetSurveyResults(surveyId);

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

      {teas.slice(0, 6).map((item) => (
        <div className={cn('container')}>
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
    </div>
  );
}
