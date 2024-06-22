import classNames from 'classnames/bind';

import styles from '@/components/common/MypageHeader/MypageHeader.module.scss';

const cn = classNames.bind(styles);

export default function MyPageHeader() {
  return (
    <header className={cn('header')}>
      <div className={cn('content')}>My page</div>
    </header>
  );
}
