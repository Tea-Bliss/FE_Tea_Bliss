import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/recommendLayout/RecommendLayout.module.scss';
import Checklist from '@/images/checklist.png';

import RecommendList from './components/RecommendList';
import SurveyResults from './components/SurveyResults';

import Banner from '@/images/surveyResultBanner.png';

const cn = classNames.bind(styles);

interface RecommendLayoutProps {
  name: string;
}

export default function RecommendLayout({ name = '미치광이고양이' }: RecommendLayoutProps) {
  return (
    <div className={cn('layout')}>
      <Image src={Banner} alt="설문 결과 배너이미지" />
      <div className={cn('contents')}>
        <div className={cn('checklist')}>
          <Image src={Checklist} alt="설문 결과" />
          <div className={cn('results')}>
            <SurveyResults name={name} />
          </div>
        </div>
        <div className={cn('line')}></div>
        <div>
          <RecommendList />
        </div>
      </div>
    </div>
  );
}
