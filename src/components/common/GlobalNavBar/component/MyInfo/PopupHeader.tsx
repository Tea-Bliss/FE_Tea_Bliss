'use client';

import classNames from 'classnames/bind';

import styles from '@/components/common/GlobalNavBar/component/MyInfo/MyInfo.module.scss';
import Close from '@/icons/close.svg';

const cn = classNames.bind(styles);

interface PopupHeaderProps {
  toggle: () => void;
}

export default function PopupHeader({ toggle }: PopupHeaderProps) {
  return (
    <div className={cn('popupHeader')}>
      <h2>내 정보</h2>
      <button onClick={toggle}>
        <Close />
      </button>
    </div>
  );
}
