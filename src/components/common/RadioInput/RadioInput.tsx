import { ComponentProps, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/RadioInput/RadioInput.module.scss';

const cn = classNames.bind(styles);

interface RadioInputProps extends ComponentProps<'input'> {
  content: string;
  id: string;
  className: string;
  checked: boolean;
  onChange: () => void;
}

export default forwardRef<HTMLInputElement, RadioInputProps>(function RadioInput(
  { content, id, className, checked, onChange, ...props },
  ref
) {
  return (
    <div className={className}>
      <input
        className={cn('input')}
        ref={ref}
        id={id}
        checked={checked}
        {...props}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
});
