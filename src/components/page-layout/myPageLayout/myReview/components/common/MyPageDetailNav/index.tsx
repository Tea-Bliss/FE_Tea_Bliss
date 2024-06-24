'use client';

import classNames from 'classnames/bind';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/page-layout/myPageLayout/myReview/components/common/MyPageDetailNav/MyPageDetailNav.module.scss';

const cn = classNames.bind(styles);

type PageData = {
  name: string;
  nameEng: string;
  path: string;
};

interface MyPageDetailNavProps {
  firstPageData: PageData;
  secondPageData: PageData;
}

export default function MyPageDetailNav({ firstPageData, secondPageData }: MyPageDetailNavProps) {
  const path = usePathname();

  return (
    <nav className={cn('navBar')}>
      <Link className={cn('reviewLink', path === secondPageData.path ? 'blur' : '')} href={firstPageData.path}>
        <h2 className={cn('titleEng')}>{firstPageData.nameEng}</h2>
        <p className={cn('title')}>{firstPageData.name}</p>
      </Link>
      <Link className={cn('textReviewLink', path === firstPageData.path ? 'blur' : '')} href={secondPageData.path}>
        <h2 className={cn('titleEng')}>{secondPageData.nameEng}</h2>
        <p className={cn('title')}>{secondPageData.name}</p>
      </Link>
    </nav>
  );
}
