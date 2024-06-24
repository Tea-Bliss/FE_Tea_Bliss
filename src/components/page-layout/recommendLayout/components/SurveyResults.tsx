'use client';

import classNames from 'classnames/bind';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/recommendLayout/components/SurveyResults.module.scss';
import useGetSurveyResults from '@/components/page-layout/recommendLayout/apis/useGetSurveyResults';

const cn = classNames.bind(styles);

interface SurveyResultsProps {
  name: string;
  taste: string;
  sale: number;
  category: string;
  caffeine: string;
}

export default function SurveyResults({ name, taste, sale, category, caffeine }: SurveyResultsProps) {
  const { data } = useGetSurveyResults({ taste, sale, category, caffeine });

  return (
    <div className={cn('layout')}>
      <h2 className={cn('title')}>
        <span className={cn('name')}>{name}</span>님의 취향 분석표
      </h2>
      <div className={cn('contents')}>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>맛</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.taste}>{item.taste}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>가격</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.sale}>{item.sale}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>선호하는 재료</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.category}>{item.category}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>카페인 유무</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.caffeine}>{item.caffeine}</BlendingLabel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
