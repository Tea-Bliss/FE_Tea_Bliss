import { InputHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/common/SearchBar/SearchBar.module.scss';

const cn = classNames.bind(styles);

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className={cn('searchBarContainer')}>
      <Image src="/icons/search.svg" alt="검색하기" width={24} height={24} className={cn('searchIcon')} />
      <input className={cn('searchBar')} {...props} />
    </div>
  );
}
