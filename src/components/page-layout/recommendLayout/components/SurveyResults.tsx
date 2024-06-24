import classNames from 'classnames/bind';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/recommendLayout/components/SurveyResults.module.scss';

const cn = classNames.bind(styles);

interface SurveyResultsProps {
  name: string;
}

export default function SurveyResults({ name }: SurveyResultsProps) {
  return (
    <div className={cn('layout')}>
      <h2 className={cn('title')}>
        <span className={cn('name')}>{name}</span>님의 취향 분석표
      </h2>
      <div className={cn('contents')}>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>맛</h3>
          <div className={cn('results')}>
            <BlendingLabel>단맛</BlendingLabel>
            <BlendingLabel>신맛</BlendingLabel>
            <BlendingLabel>플로럴</BlendingLabel>
            <BlendingLabel>프루티</BlendingLabel>
            <BlendingLabel>매운맛</BlendingLabel>
            <BlendingLabel>쓴맛</BlendingLabel>
            <BlendingLabel>상관없음</BlendingLabel>
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>가격</h3>
          <div className={cn('results')}>
            <BlendingLabel>10,000원대</BlendingLabel>
            <BlendingLabel>20,000원대</BlendingLabel>
            <BlendingLabel>30,000원대</BlendingLabel>
            <BlendingLabel>상관없음</BlendingLabel>
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>선호하는 재료</h3>
          <div className={cn('results')}>
            <BlendingLabel>홍차</BlendingLabel>
            <BlendingLabel>푸에르 티</BlendingLabel>
            <BlendingLabel>차이 티</BlendingLabel>
            <BlendingLabel>우롱차</BlendingLabel>
            <BlendingLabel>백차</BlendingLabel>
            <BlendingLabel>녹차</BlendingLabel>
            <BlendingLabel>허브 티</BlendingLabel>
            <BlendingLabel>루이보스 티</BlendingLabel>
            <BlendingLabel>상관없음</BlendingLabel>
          </div>
        </div>
        <div className={cn('section')}>
          <h3 className={cn('sub-title')}>카페인 유무</h3>
          <div className={cn('results')}>
            <BlendingLabel>카페인 있음</BlendingLabel>
            <BlendingLabel>카페인 없음</BlendingLabel>
            <BlendingLabel>상관없음</BlendingLabel>
          </div>
        </div>
      </div>
    </div>
  );
}
