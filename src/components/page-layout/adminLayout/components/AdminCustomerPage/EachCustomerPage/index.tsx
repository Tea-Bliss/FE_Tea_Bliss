'use client';

import { KeyboardEventHandler, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import { notFound, useSearchParams } from 'next/navigation';

import styles from '@/components/page-layout/adminLayout/components/AdminCustomerPage/EachCustomerPage/EachCustomerPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import FileInput from '@/components/page-layout/adminLayout/components/common/FileInput';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import { useGetOneCustomer } from '@/components/page-layout/adminLayout/hooks/useManageCustomers';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';

const cn = classNames.bind(styles);

const mockUser = {
  id: 1,
  nickname: '티블리스',
  email: 'teabliss@gmail.com',
  roll: '일반회원',
  createdAt: '2024-06-10',
  reviewCount: 2,
  purchaseAmount: 6.5,
};

export default function EachCustomerPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  if (!id) {
    notFound();
  }

  const { data } = useGetOneCustomer(+id);

  const methods = useForm({
    defaultValues: {
      profile: data?.data.data.profile,
      nickname: data?.data.data.nickname,
      role: data?.data.data.role,
    },
  });

  const { handleSubmit, register, reset } = methods;

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    reset({
      profile: data?.data.data.profile,
      nickname: data?.data.data.nickname,
      role: data?.data.data.role,
    });
  }, [data, reset]);

  return (
    <>
      <BackButton className={cn('backButton')} />
      <DetailCard title="회원 정보" className={cn('card')}>
        <FormProvider {...methods}>
          <form className={cn('form')} onSubmit={handleSubmit((data) => console.log(data))} onKeyDown={handleKeyDown}>
            <div className={cn('profile')}>
              <FileInput type="profile" defaultImage={data?.data.data.profile} setFn={setImageFile} />
              <div className={cn('nickName')}>{mockUser.nickname}</div>
            </div>
            <div className={cn('information')}>
              <div className={cn('section')}>
                <div className={cn('field')}>회원 유형</div>
                <ButtonInputs
                  items={[
                    { value: '관리자', text: '관리자' },
                    { value: '일반회원', text: '일반회원' },
                  ]}
                  name="role"
                  status={3}
                  className={cn('buttonInputs')}
                />
              </div>
              <div className={cn('section')}>
                <div className={cn('field')}>이메일</div>
                <div className={cn('value')}>{mockUser.email}</div>
              </div>
              <div className={cn('section')}>
                <label className={cn('field')}>닉네임</label>
                <input
                  className={cn('value', 'input')}
                  placeholder="필수 입력 항목입니다"
                  {...register('nickname', { required: true })}
                />
              </div>
            </div>
            <div className={cn('submitButton')}>
              <SubmitButton>저장</SubmitButton>
            </div>
          </form>
        </FormProvider>
      </DetailCard>

      <DetailCard title="활동 정보" className={cn('card')}>
        <div className={cn('information')}>
          <div className={cn('section')}>
            <div className={cn('field')}>가입일</div>
            <div className={cn('value')}>{mockUser.createdAt}</div>
          </div>
          <div className={cn('section')}>
            <div className={cn('field')}>작성 리뷰 수</div>
            <div className={cn('value')}>{mockUser.reviewCount}</div>
          </div>
          <div className={cn('section')}>
            <div className={cn('field')}>구매 금액</div>
            <div className={cn('value')}>{mockUser.purchaseAmount * 10000}원</div>
          </div>
        </div>
      </DetailCard>
    </>
  );
}
