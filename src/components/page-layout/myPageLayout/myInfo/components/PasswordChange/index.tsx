'use client';

import classNames from 'classnames/bind';
import { useForm, useWatch } from 'react-hook-form';

import Button from '@/components/common/Button';
import MyPageInput from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageInput';
import MyPageTitle from '@/components/page-layout/myPageLayout/myInfo/components/common/MyPageTitle';
import styles from '@/components/page-layout/myPageLayout/myInfo/components/PasswordChange/PasswordChange.module.scss';
import { usePatchPassword } from '@/components/page-layout/myPageLayout/myInfo/hooks/usePatchUserData';

const cn = classNames.bind(styles);

export default function PasswordChange() {
  const mutate = usePatchPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      newPasswordCheck: '',
    },
    mode: 'onBlur',
  });

  const newPasswordValue = useWatch({ control, name: 'newPassword' });

  const handlePasswordSubmit = async (formValues: {
    oldPassword: string;
    newPassword: string;
    newPasswordCheck: string;
  }) => {
    await mutate.mutate(formValues);
  };

  return (
    <form className={cn('passwordForm')} onSubmit={handleSubmit((data) => handlePasswordSubmit(data))}>
      <MyPageTitle>Password Change</MyPageTitle>

      <div className={cn('passwordInput')}>
        <label htmlFor="currentPassword" className={cn('label')}>
          현재 비밀번호
        </label>
        <MyPageInput
          id="currentPassword"
          type="password"
          placeholder="현재 비밀번호를 입력해주세요"
          autoComplete="current-password"
          {...register('oldPassword', {
            required: '비밀번호를 입력해 주세요',
            validate: {
              minLength: (value) => value.length >= 8 || '8자 이상 입력해주세요',
            },
          })}
          isError={Boolean(errors.oldPassword)}
          errorMessage={errors.oldPassword?.message}
        />
      </div>

      <div className={cn('passwordInput')}>
        <label htmlFor="newPassword" className={cn('label')}>
          새 비밀번호
        </label>
        <MyPageInput
          id="newPassword"
          type="password"
          placeholder="새 비밀번호를 입력해주세요"
          autoComplete="new-password"
          {...register('newPassword', {
            required: '새 비밀번호를 입력해 주세요',
            validate: {
              minLength: (value) => value.length >= 8 || '8자 이상 입력해주세요',
            },
          })}
          isError={Boolean(errors.newPassword)}
          errorMessage={errors.newPassword?.message}
        />
      </div>

      <div className={cn('passwordInput')}>
        <label htmlFor="checkPassword" className={cn('label')}>
          새 비밀번호 확인
        </label>
        <MyPageInput
          id="checkPassword"
          type="password"
          placeholder="새 비밀번호를 다시 입력해주세요"
          autoComplete="new-password"
          {...register('newPasswordCheck', {
            required: '새 비밀번호 확인을 입력해주세요',
            validate: {
              equalNewPassword: (value) => value === newPasswordValue || '새 비밀번호와 일치하지 않습니다',
            },
          })}
          isError={Boolean(errors.newPasswordCheck)}
          errorMessage={errors.newPasswordCheck?.message}
        />
      </div>

      <Button shape="square" color="black">
        비밀번호 변경하기
      </Button>
    </form>
  );
}
