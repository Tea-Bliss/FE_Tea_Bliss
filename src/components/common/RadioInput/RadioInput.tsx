import { ComponentProps, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/RadioInput/RadioInput.module.scss';
import CheckedBox from '@/icons/checkedBox.svg';
import UnCheckedBox from '@/icons/unCheckedBox.svg';

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
      <label className={cn('label')} htmlFor={id} onClick={onChange}>
        {checked ? <CheckedBox /> : <UnCheckedBox />}
      </label>
      <input className={cn('input')} ref={ref} {...props} type="radio" />
      <p>{content}</p>
    </div>
  );
});
