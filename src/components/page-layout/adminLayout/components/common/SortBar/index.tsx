import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/common/SortBar/SortBar.module.scss';

const cn = classNames.bind(styles);

interface SortBarProps {
  standards: string[];
}

export default function SortBar({ standards }: SortBarProps) {
  return (
    <div className={cn('bar')}>
      {standards.map((standard) => {
        return (
          <div key={standard} className={cn('standard')}>
            {standard}
          </div>
        );
      })}
      <div className={cn('standard', 'vacuum')}></div>
    </div>
  );
}
