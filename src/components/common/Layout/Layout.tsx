import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/Layout/Layout.module.scss';

import Footer from '../Footer/Footer';
import GlobalNavBar from '../GlobalNavBar/GlobalNavBar';

const cn = classNames.bind(styles);

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={cn('container')}>
      <GlobalNavBar />
      <div className={cn('box')}>{children}</div>
      <Footer />
    </div>
  );
}
