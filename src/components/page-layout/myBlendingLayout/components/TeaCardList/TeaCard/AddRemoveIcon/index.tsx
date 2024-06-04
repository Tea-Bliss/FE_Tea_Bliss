import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/AddRemoveIcon/AddRemoveIcon.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Status = 'plus' | 'minus';

interface IconProps {
  className?: string;
  status: Status;
}

export default function AddRemoveIcon({ status, className }: IconProps) {
  return <div className={cn(status === 'plus' ? 'plusIcon' : 'minusIcon', className)}></div>;
}