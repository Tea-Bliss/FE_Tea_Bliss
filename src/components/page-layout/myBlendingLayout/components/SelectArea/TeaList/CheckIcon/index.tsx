import { MouseEventHandler } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/CheckIcon/CheckIcon.module.scss';

const cn = classNames.bind(styles);

interface CheckIconProps {
  className?: string;
  checked: boolean;
  onClick: MouseEventHandler;
}

export default function CheckIcon({ className, checked, onClick }: CheckIconProps) {
  return <div className={cn('checkbox', checked && 'checked', className)} onClick={onClick}></div>;
}
