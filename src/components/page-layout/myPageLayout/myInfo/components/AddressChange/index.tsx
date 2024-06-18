import classNames from 'classnames/bind';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/AddressChange/AddressChange.module.scss';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';

const cn = classNames.bind(styles);

export default function AddressChange() {
  return (
    <div className={cn('container')}>
      <MyPageTitle>Address</MyPageTitle>
      <div className={cn('addressInput')}>
        <label htmlFor="address" className={cn('label')}>
          주소
        </label>
        <MyPageInput id="address" placeholder="주소를 입력해주세요" />
      </div>
      <Button shape="square" color="black">
        주소 변경하기
      </Button>
    </div>
  );
}
