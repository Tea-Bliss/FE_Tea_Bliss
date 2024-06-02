import classNames from 'classnames/bind';

import Header from '@/components/common/Header/Header';
import SignInForm from '@/components/page-layout/signInLayout/signInForm/signInForm';
import styles from '@/components/page-layout/signInLayout/signInLayout.module.scss';
import SocialLogin from '@/components/page-layout/signInLayout/socialLogin/socialLogin';

const cn = classNames.bind(styles);

export default function SignInLayout() {
  return (
    <main className={cn('layout')}>
      <div className={cn('container')}>
        <Header className={cn('header')} />
        <SignInForm />
        <SocialLogin />
      </div>
    </main>
  );
}
