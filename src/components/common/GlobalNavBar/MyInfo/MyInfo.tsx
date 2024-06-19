import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/GlobalNavBar/MyInfo/MyInfo.module.scss';
import MyInfoContent from '@/components/common/GlobalNavBar/MyInfo/MyInfoContent';
import PopupHeader from '@/components/common/GlobalNavBar/MyInfo/PopupHeader';

const cn = classNames.bind(styles);

export interface MyInfoProps {
  toggle: () => void;
}

export default forwardRef<HTMLDivElement, MyInfoProps>(function MyInfo({ toggle }, ref) {
  return (
    <div className={cn('container')} ref={ref}>
      <PopupHeader toggle={toggle} />
      <div className={cn('content')}>
        <MyInfoContent />
      </div>
      z
    </div>
  );
});
