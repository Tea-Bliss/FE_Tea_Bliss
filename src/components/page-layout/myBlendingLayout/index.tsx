import classNames from 'classnames/bind';

import Footer from '@/components/common/Footer/Footer';
import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';
import BlendingArea from '@/components/page-layout/myBlendingLayout/components/BlendingArea';
import SelectArea from '@/components/page-layout/myBlendingLayout/components/SelectArea';
import { MyBlendingProvider } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import styles from '@/components/page-layout/myBlendingLayout/MyBlendingLayout.module.scss';

const cn = classNames.bind(styles);

export default function MyBlendingLayout() {
  return (
    <>
      <GlobalNavBar />
      <MyBlendingProvider>
        <main className={cn('layout')}>
          <div className={cn('container')}>
            <SelectArea />
            <BlendingArea />
          </div>
        </main>
      </MyBlendingProvider>
      <Footer />
    </>
  );
}
