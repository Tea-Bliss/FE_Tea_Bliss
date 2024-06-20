import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput/MyPageInput.module.scss';

const cn = classNames.bind(styles);

interface MyPageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string | undefined;
}

export default forwardRef<HTMLInputElement, MyPageInputProps>(function Input({ isError, errorMessage, ...props }, ref) {
  return (
    <div>
      <input className={cn('input', isError && 'error')} ref={ref} {...props} />
      {errorMessage && <p className={cn('errorMessage')}>{errorMessage}</p>}
    </div>
  );
});
