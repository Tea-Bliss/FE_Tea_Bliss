import styles from '@/components/myBlending/TeaCardList/TeaCard/CheckIcon/CheckIcon.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function CheckIcon({ className }: { className?: string }) {
  return <div className={cn('checkbox', 'checked', className)}></div>;
}
