import classNames from 'classnames/bind';

import styles from '@/components/page-layout/surveyLayout/components/FormIcon/FormIcon.module.scss';

const cn = classNames.bind(styles);

type Status = 'done' | 'current' | 'preparing';

interface FormIconProps {
  status: Status;
  number: number;
}

export default function FormIcon({ status, number }: FormIconProps) {
  return <div className={cn('icon', status)}>{status === 'done' || number}</div>;
}
