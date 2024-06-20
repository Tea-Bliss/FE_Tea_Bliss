'use client';

import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/AddressChange/AddressChange.module.scss';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';
import { useMyInfoContext } from '@/components/page-layout/myPageLayout/myInfo/contexts/myInfoContext';
import { usePatchAddress } from '@/components/page-layout/myPageLayout/myInfo/hooks/usePatchUserData';

const cn = classNames.bind(styles);

export default function AddressChange() {
  const { address } = useMyInfoContext();
  const mutate = usePatchAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      basicAddress: address?.includes('/') ? address?.split('/')[0] : address || '',
      detailAddress: address?.includes('/') ? address?.split('/')[1] : '',
    },
    mode: 'onBlur',
  });

  const handleAddressSubmit = async (formValues: { basicAddress: string; detailAddress: string }) => {
    const newFormValues = { address: `${formValues.basicAddress}/${formValues.detailAddress}` };
    mutate.mutate(newFormValues);
  };

  return (
    <form className={cn('addressForm')} onSubmit={handleSubmit((data) => handleAddressSubmit(data))}>
      <MyPageTitle>Address</MyPageTitle>
      <div className={cn('addressInput')}>
        <label htmlFor="basic-address" className={cn('label')}>
          일반 주소
        </label>
        <MyPageInput
          id="basic-address"
          placeholder="일반 주소를 입력해주세요"
          {...register('basicAddress', {
            required: '일반 주소를 입력해주세요',
          })}
          isError={Boolean(errors.basicAddress)}
          errorMessage={errors.basicAddress?.message}
        />
      </div>
      <div className={cn('addressInput')}>
        <label htmlFor="detail-address" className={cn('label')}>
          상세 주소
        </label>
        <MyPageInput
          id="detail-address"
          placeholder="상세 주소를 입력해주세요"
          {...register('detailAddress', {
            required: '상세 주소를 입력해주세요',
          })}
          isError={Boolean(errors.detailAddress)}
          errorMessage={errors.detailAddress?.message}
        />
      </div>
      <Button shape="square" color="black">
        주소 변경하기
      </Button>
    </form>
  );
}
