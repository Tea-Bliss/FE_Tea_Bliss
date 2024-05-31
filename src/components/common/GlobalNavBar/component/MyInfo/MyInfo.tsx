import classNames from 'classnames/bind';

import styles from '@/components/common/GlobalNavBar/component/MyInfo/MyInfo.module.scss';

import MyInfoContent from './MyInfoContent';
import PopupHeader from './PopupHeader';

const cn = classNames.bind(styles);

interface MyInfoProps {
  toggle: () => void;
}

export default function MyInfo({ toggle }: MyInfoProps) {
  return (
    <div className={cn('container')}>
      <PopupHeader toggle={toggle} />

      <div className={cn('content')}>
        <MyInfoContent />
      </div>
    </div>
  );
}
