import classNames from 'classnames/bind';

import SignUpForm from '@/components/page-layout/signUpLayout/signUpForm/signUpForm';
import SignUpHeader from '@/components/page-layout/signUpLayout/signUpHeader/signUpHeader';

import styles from './signUpLayout.module.scss';

const cn = classNames.bind(styles);

export default function SignUpLayout() {
  return (
    <main className={cn('layout')}>
      <div className={cn('container')}>
        <SignUpHeader />
        <SignUpForm />
      </div>
    </main>
  );
}
