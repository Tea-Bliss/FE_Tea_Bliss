import classNames from 'classnames/bind';

import SurveyForm from '@/components/page-layout/surveyLayout/components/SurveyForm';
import styles from '@/components/page-layout/surveyLayout/SurveyLayout.module.scss';

const cn = classNames.bind(styles);

export default function SurveyLayout() {
  return (
    <>
      <main className={cn('layout')}>
        <div className={cn('container')}>
          <SurveyForm />
        </div>
      </main>
    </>
  );
}
