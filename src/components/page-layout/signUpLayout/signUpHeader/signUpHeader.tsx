import classNames from 'classnames/bind';

import styles from '@/components/page-layout/signUpLayout/signUpHeader/signUpHeader.module.scss';
import Logo from '@/images/logo.svg';

const cn = classNames.bind(styles);

export default function SignUpHeader() {
  return (
    <header className={cn('logo')}>
      <Logo width={338} height={100} />
    </header>
  );
}
