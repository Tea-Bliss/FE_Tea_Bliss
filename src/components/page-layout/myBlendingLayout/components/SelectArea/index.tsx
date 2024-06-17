import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectArea.module.scss';
import SelectFlavor from '@/components/page-layout/myBlendingLayout/components/SelectArea/SelectFlavor';
import TeaList from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList';

const cn = classNames.bind(styles);

export default function SelectArea() {
  return (
    <section className={cn('container')}>
      <div className={cn('title')}>
        Make your
        <br />
        own tea
      </div>
      <div className={cn('contents')}>
        <SelectFlavor />
        <TeaList />
      </div>
    </section>
  );
}
