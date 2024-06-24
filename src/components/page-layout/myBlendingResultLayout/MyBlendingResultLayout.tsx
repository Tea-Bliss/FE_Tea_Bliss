import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingResultLayout/MyBlendingResultLayout.module.scss';

import ResultDetail from './components/ResultDetail/ResultDetail';
import ResultMetrics from './components/ResultMetrics/ResultMetrics';

const cn = classNames.bind(styles);

export default function MyBlendingResultLayout() {
  return (
    <main className={cn('container')}>
      <h2 className={cn('title')}>
        Make your
        <br /> own tea
      </h2>
      <ResultMetrics />
      <ResultDetail />
    </main>
  );
}
