'use client';

import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import openToast from '@/components/common/Toast/features/openToast';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';
import MyInfoFileInput from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/MyInfoFileInput';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/ProfileChange/ProfileChange.module.scss';
import { useMyInfoContext } from '@/components/page-layout/myPageLayout/myInfo/contexts/myInfoContext';
import { usePatchProfile } from '@/components/page-layout/myPageLayout/myInfo/hooks/usePatchUserData';
import { deleteImage, uploadImage } from '@/utils/supabaseUtils';

const cn = classNames.bind(styles);

export default function ProfileChange() {
  const queryClient = useQueryClient();
  const { email, nickname, profile } = useMyInfoContext();
  const [imageFile, setImageFile] = useState<File | null | undefined>(undefined);
  const mutate = usePatchProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nickname: nickname,
      profile: undefined,
    },
    mode: 'onBlur',
  });

  const handleProfileSubmit = async (formValues: { nickname: string; profile?: string | null }) => {
    if (imageFile) {
      const publicUrl = await uploadImage(imageFile);

      if (!publicUrl) return;

      formValues.profile = publicUrl;
    }

    if (imageFile === null) {
      formValues.profile = null;
    }

    mutate.mutate(formValues, {
      onError: async (error, values) => {
        if (values.profile) {
          await deleteImage(values.profile);
        }

        openToast('error', error.message);
      },
      onSuccess: async (_, values) => {
        if (values.profile !== undefined && profile) {
          await deleteImage(profile);
        }

        await queryClient.invalidateQueries({ queryKey: ['my-info', 'user'] });
        openToast('success', '프로필이 변경되었습니다');
      },
    });
  };

  useEffect(() => {
    reset({ nickname, profile: undefined });
  }, [nickname, profile, reset]);

  return (
    <form className={cn('profileForm')} onSubmit={handleSubmit((data) => handleProfileSubmit(data))}>
      <div className={cn('profileImageContainer')}>
        <MyInfoFileInput defaultImage={profile} setFn={setImageFile} />
      </div>
      <div className={cn('profileChange')}>
        <MyPageTitle>Name</MyPageTitle>
        <div>
          <MyPageInput
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', {
              required: '닉네임을 입력해 주세요',
              validate: {
                maxLength: (value) => value.length < 10 || '10자 이하로 입력해주세요',
              },
            })}
            isError={Boolean(errors.nickname)}
            errorMessage={errors.nickname?.message}
          />
        </div>
        <MyPageTitle>Email</MyPageTitle>
        <MyPageInput readOnly defaultValue={email} />
        <Button shape="square" color="black">
          변경사항 저장하기
        </Button>
      </div>
    </form>
  );
}
