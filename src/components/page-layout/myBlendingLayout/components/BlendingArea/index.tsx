import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/BlendingArea/BlendingArea.module.scss';
import ResultArea from '@/components/page-layout/myBlendingLayout/components/BlendingArea/ResultArea';
import SelectedTeas from '@/components/page-layout/myBlendingLayout/components/BlendingArea/SelectedTeas';

const cn = classNames.bind(styles);

export default function BlendingArea() {
  return (
    <section className={cn('container')}>
      <h1 className={cn('title')}>Selected tea</h1>
      <div className={cn('contents')}>
        <SelectedTeas />
        <ResultArea />
      </div>
    </section>
  );
}
