import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';
import MyInfoFileInput from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/MyInfoFileInput';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/ProfileChange.module.scss';

const cn = classNames.bind(styles);

export default function ProfileChange() {
  return (
    <div className={cn('container')}>
      <div className={cn('profileImageContainer')}>
        <MyInfoFileInput />
      </div>
      <div className={cn('profileChange')}>
        <MyPageTitle>Name</MyPageTitle>
        <MyPageInput placeholder="닉네임을 입력해주세요" />
        <MyPageTitle>Email</MyPageTitle>
        <MyPageInput readOnly />
        <Button shape="square" color="black">
          변경사항 저장하기
        </Button>
      </div>
    </div>
  );
}
