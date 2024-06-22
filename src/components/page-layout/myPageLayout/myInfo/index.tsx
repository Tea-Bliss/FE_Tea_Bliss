import classNames from 'classnames/bind';

import MyPageHeader from '@/components/common/MypageHeader/MypageHeader';
import MyPageNav from '@/components/common/MyPageNav/MyPageNav';
import AddressChange from '@/components/page-layout/myPageLayout/myInfo/components/AddressChange';
import PasswordChange from '@/components/page-layout/myPageLayout/myInfo/components/PasswordChange';
import ProfileChange from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange';
import { MyInfoProvider } from '@/components/page-layout/myPageLayout/myInfo/contexts/myInfoContext';
import styles from '@/components/page-layout/myPageLayout/myInfo/MyInfoLayout.module.scss';

const cn = classNames.bind(styles);

export default function MyInfoLayout() {
  return (
    <main className={cn('layout')}>
      <MyPageHeader />
      <MyPageNav />
      <MyInfoProvider>
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
      </MyInfoProvider>
    </main>
  );
}
