import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {}

export default forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <input ref={ref} {...props} />;
});
