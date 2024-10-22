import classNames from 'classnames/bind';

import BlendingArea from '@/components/page-layout/myBlendingLayout/components/BlendingArea';
import SelectArea from '@/components/page-layout/myBlendingLayout/components/SelectArea';
import { MyBlendingProvider } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import styles from '@/components/page-layout/myBlendingLayout/MyBlendingLayout.module.scss';

const cn = classNames.bind(styles);

export default function MyBlendingLayout() {
  return (
    <main className={cn('layout')}>
      <MyBlendingProvider>
        <div className={cn('container')}>
          <SelectArea />
          <BlendingArea />
        </div>
      </MyBlendingProvider>
    </main>
  );
}
