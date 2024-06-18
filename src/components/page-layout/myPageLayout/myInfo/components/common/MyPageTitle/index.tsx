import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle/MyPageTitle.module.scss';

const cn = classNames.bind(styles);

interface MyPageTitleProps {
  children: ReactNode;
}

export default function MyPageTitle({ children }: MyPageTitleProps) {
  return <h2 className={cn('title')}>{children}</h2>;
}
