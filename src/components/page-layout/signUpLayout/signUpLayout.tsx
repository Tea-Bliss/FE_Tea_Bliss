import classNames from 'classnames/bind';

import Header from '@/components/common/Header/Header';
import SignUpForm from '@/components/page-layout/signUpLayout/signUpForm/signUpForm';

import styles from './signUpLayout.module.scss';

const cn = classNames.bind(styles);

export default function SignUpLayout() {
  return (
    <main className={cn('layout')}>
      <div className={cn('container')}>
        <Header />
        <SignUpForm />
      </div>
    </main>
  );
}
