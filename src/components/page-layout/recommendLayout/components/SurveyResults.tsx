'use client';

import classNames from 'classnames/bind';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import useGetSurveyResults from '@/components/page-layout/recommendLayout/apis/useGetSurveyResults';
import styles from '@/components/page-layout/recommendLayout/components/SurveyResults.module.scss';

const cn = classNames.bind(styles);

interface SurveyResultsProps {
  name: string | undefined;
  taste?: string;
  sale?: number;
  category?: string;
  caffeine?: string;
  surveyId: string;
}

export default function SurveyResults({ name, taste, sale, category, caffeine, surveyId }: SurveyResultsProps) {
  // const { data } = useGetSurveyResults(surveyId);
  const data = [
    {
      status: 200,
      message: 'Success',
      data: {
        taste: 1,
        sale: 10000,
        category: 'earl grey',
        caffeine: 'Y',
      },
    },
  ];

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
              <BlendingLabel key={item.data.taste}>{item.data.taste}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>가격</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.data.sale}>{item.data.sale}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>선호하는 재료</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.data.category}>{item.data.category}</BlendingLabel>
            ))}
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>카페인 유무</h3>
          <div className={cn('results')}>
            {data?.map((item) => (
              <BlendingLabel key={item.data.caffeine}>{item.data.caffeine}</BlendingLabel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
