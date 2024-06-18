import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/PasswordChange/PasswordChange.module.scss';

const cn = classNames.bind(styles);

export default function PasswordChange() {
  return (
    <div className={cn('container')}>
      <MyPageTitle>Password Change</MyPageTitle>

      <div className={cn('passwordInput')}>
        <label htmlFor="currentPassword" className={cn('label')}>
          현재 비밀번호
        </label>
        <MyPageInput id="currentPassword" type="password" placeholder="현재 비밀번호를 입력해주세요" />
      </div>

      <div className={cn('passwordInput')}>
        <label htmlFor="newPassword" className={cn('label')}>
          새 비밀번호
        </label>
        <MyPageInput id="newPassword" type="password" placeholder="새 비밀번호를 입력해주세요" />
      </div>

      <div className={cn('passwordInput')}>
        <label htmlFor="checkPassword" className={cn('label')}>
          새 비밀번호 확인
        </label>
        <MyPageInput id="checkPassword" type="password" placeholder="새 비밀번호를 다시 입력해주세요" />
      </div>

      <Button shape="square" color="black">
        비밀번호 변경하기
      </Button>
    </div>
  );
}
