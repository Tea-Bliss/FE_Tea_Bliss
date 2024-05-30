import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Shape = 'round' | 'square';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: Shape;
}

function Button({ shape, children, ...props }: ButtonProps) {
  return (
    <button className={shape === 'round' ? styles.round : styles.square} {...props}>
      {children}
    </button>
  );
}
