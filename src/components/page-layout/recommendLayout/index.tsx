'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/recommendLayout/RecommendLayout.module.scss';
import { useUserInfoQuery } from '@/hooks/query/useUserInfoQuery';
import Checklist from '@/images/checklist.png';
import Banner from '@/images/surveyResultBanner.png';

import RecommendList from './components/RecommendList';
import SurveyResults from './components/SurveyResults';

const cn = classNames.bind(styles);

interface RecommendLayoutProps {
  name?: string;
  surveyId: string;
}

export default function RecommendLayout({ name = '유저', surveyId }: RecommendLayoutProps) {
  const nickname = useUserInfoQuery();

  return (
    <div className={cn('layout')}>
      <Image src={Banner} alt="설문 결과 배너이미지" />
      <div className={cn('contents')}>
        <div className={cn('checklist')}>
          <Image src={Checklist} alt="설문 결과" />
          <div className={cn('results')}>
            <SurveyResults name={nickname.data?.data.data.nickname} surveyId={surveyId} />
          </div>
        </div>
        <div className={cn('line')}></div>
        <div>
          <RecommendList surveyId={surveyId} />
        </div>
      </div>
    </div>
  );
}
