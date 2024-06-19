'use client';

import classNames from 'classnames/bind';

import Footer from '@/components/common/Footer/Footer';
import GlobalNavBar from '@/components/common/GlobalNavBar/GlobalNavBar';
import AddressChange from '@/components/page-layout/myPageLayout/myInfo/components/AddressChange';
import PasswordChange from '@/components/page-layout/myPageLayout/myInfo/components/PasswordChange';
import ProfileChange from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange';
import styles from '@/components/page-layout/myPageLayout/myInfo/MyInfoLayout.module.scss';

import useGetUsers from './hooks/useGetUsers';

const cn = classNames.bind(styles);

export default function MyInfoLayout() {
  const { data } = useGetUsers();

  console.log(data);
  return (
    <>
      <GlobalNavBar />
      <main className={cn('layout')}>
        <div className={cn('container')}>
          <div className={cn('changeArea')}>
            <ProfileChange />
            <hr className={cn('horizontalHr')} />
            <div className={cn('secondSection')}>
              <PasswordChange />
              <hr className={cn('verticalHr')} />
              <AddressChange />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
