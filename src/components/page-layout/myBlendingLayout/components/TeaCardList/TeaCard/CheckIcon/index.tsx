import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/CheckIcon/CheckIcon.module.scss';

const cn = classNames.bind(styles);

export default function CheckIcon({ className }: { className?: string }) {
  return <div className={cn('checkbox', 'checked', className)}></div>;
}
