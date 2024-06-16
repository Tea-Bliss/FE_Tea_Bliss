import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/CheckIcon/CheckIcon.module.scss';

const cn = classNames.bind(styles);

interface CheckIconProps {
  className?: string;
}

export default function CheckIcon({ className }: CheckIconProps) {
  return <div className={cn('checkbox', 'checked', className)}></div>;
}
