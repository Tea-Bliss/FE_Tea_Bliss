import { ButtonHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/common/SubmitButton/SubmitButton.module.scss';

const cn = classNames.bind(styles);

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isDelete?: boolean;
}

export default function SubmitButton({ children, className, isDelete, ...props }: SubmitButtonProps) {
  return (
    <button className={cn(isDelete ? 'deleteButton' : 'submitButton', className)} {...props}>
      {children}
    </button>
  );
}
