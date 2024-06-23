'use client';

import { KeyboardEventHandler, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FormProvider, useForm } from 'react-hook-form';

import { notFound, useRouter, useSearchParams } from 'next/navigation';

import openToast from '@/components/common/Toast/features/openToast';
import styles from '@/components/page-layout/adminLayout/components/AdminCustomerPage/EachCustomerPage/EachCustomerPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import FileInput from '@/components/page-layout/adminLayout/components/common/FileInput';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';
import { useAdminPutProfile, useGetOneCustomer } from '@/components/page-layout/adminLayout/hooks/useManageCustomers';
import ButtonInputs from '@/components/page-layout/surveyLayout/components/ButtonInputs';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

const cn = classNames.bind(styles);

export default function EachCustomerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);

  if (!id) {
    notFound();
  }

  const { data } = useGetOneCustomer(+id);

  const mutate = useAdminPutProfile();

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

  const handleProfilePut = async (formValues: any) => {
    if (imageFile) {
      const publicUrl = await uploadImage(imageFile);

      if (!publicUrl) return;
      formValues.profile = publicUrl;
    }

    if (imageFile === null) {
      formValues.profile = null;
    }

    mutate.mutate(
      { data: formValues, id: +id },
      {
        onError: async (_, values) => {
          if (values.data.profile && values.data.profile !== data?.data.data.profile) {
            await deleteImage(values.data.profile);
          }

          openToast('error', '프로필 변경에 실패했습니다.');
        },
        onSuccess: async (_, values) => {
          if (values.data.profile && data?.data.data.profile && values.data.profile !== data?.data.data.profile) {
            await deleteImage(data?.data.data.profile);
          }

          openToast('success', '프로필이 변경되었습니다');
          router.push('/admin/customer');
        },
      }
    );
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
          <form
            className={cn('form')}
            onSubmit={handleSubmit((data) => handleProfilePut(data))}
            onKeyDown={handleKeyDown}
          >
            <div className={cn('profile')}>
              <FileInput type="profile" defaultImage={data?.data.data.profile} setFn={setImageFile} />
              <div className={cn('nickName')}>{data?.data.data.nickname}</div>
            </div>
            <div className={cn('information')}>
              <div className={cn('section')}>
                <div className={cn('field')}>회원 유형</div>
                <ButtonInputs
                  items={[
                    { value: '관리자', text: '관리자' },
                    { value: '일반 회원', text: '일반 회원' },
                  ]}
                  name="role"
                  status={3}
                  className={cn('buttonInputs')}
                />
              </div>
              <div className={cn('section')}>
                <div className={cn('field')}>이메일</div>
                <div className={cn('value')}>{data?.data.data.email}</div>
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
            <div className={cn('value')}>{data?.data.data.createDt}</div>
          </div>
          <div className={cn('section')}>
            <div className={cn('field')}>작성 리뷰 수</div>
            <div className={cn('value')}>{data?.data.data.reviewCount}</div>
          </div>
          <div className={cn('section')}>
            <div className={cn('field')}>구매 금액</div>
            <div className={cn('value')}>{data?.data.data.purchaseAmount}원</div>
          </div>
        </div>
      </DetailCard>
    </>
  );
}
