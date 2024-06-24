import classNames from 'classnames/bind';

import Link from 'next/link';

import styles from '@/components/page-layout/adminLayout/components/common/SortBar/SortBar.module.scss';

const cn = classNames.bind(styles);

interface SortBarProps {
  datas: { name: string; target: string | null; query: { [key: string]: string } }[];
  path: string;
  currentQuery: string | null;
}

export default function SortBar({ path, datas, currentQuery }: SortBarProps) {
  return (
    <div className={cn('bar')}>
      {datas?.map((data) => {
        return (
          <Link
            key={data.name}
            className={cn('data', currentQuery === data.target ? 'selected' : '')}
            href={{ pathname: path, query: data.query }}
          >
            {data.name}
          </Link>
        );
      })}
      <div className={cn('data', 'vacuum')}></div>
    </div>
  );
}
