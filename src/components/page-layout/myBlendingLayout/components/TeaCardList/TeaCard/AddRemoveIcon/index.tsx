import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/AddRemoveIcon/AddRemoveIcon.module.scss';

const cn = classNames.bind(styles);

type Status = 'plus' | 'minus';

interface IconProps {
  className?: string;
  status: Status;
}

export default function AddRemoveIcon({ status, className }: IconProps) {
  return <div className={cn(status === 'plus' ? 'plusIcon' : 'minusIcon', className)}></div>;
}
