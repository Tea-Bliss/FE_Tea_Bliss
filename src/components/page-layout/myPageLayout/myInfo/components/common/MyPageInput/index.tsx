import { InputHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput/MyPageInput.module.scss';

const cn = classNames.bind(styles);

interface MyPageInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function MyPageInput({ ...props }: MyPageInputProps) {
  return <input className={cn('input')} {...props} />;
}
