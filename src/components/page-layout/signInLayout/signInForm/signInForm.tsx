'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input/Input';
import Label from '@/components/common/Label/Label';
import postSignInForm from '@/components/page-layout/signInLayout/apis/postSignInFormData';
import styles from '@/components/page-layout/signInLayout/signInForm/signInForm.module.scss';
import SignInFormData from '@/components/page-layout/signInLayout/types/signInFormData';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

const schema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식으로 작성해 주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.').min(8, '8자 이상 입력해주세요.'),
});

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export default function SignInForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: SignInFormData) => postSignInForm(data),
    onSuccess: (response) => {
      localStorage.setItem('token', response.headers.authorization);
      router.push(ROUTE.HOME);
    },
    onError: (error: Error) => {
      if (error.response.data.message === '회원 아이디와 일치하는 정보가 없습니다.') {
        setError('email', {
          message: '일치하는 회원 정보가 없습니다.',
        });
      }
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: SignInFormData) => {
    mutation.mutate(data);
  };

  const isButtonDisabled = !isValid || Object.keys(errors).length > 0;

  return (
    <form className={cn('formBox')} onSubmit={handleSubmit(onSubmit)}>
      <section className={cn('inputContainer')}>
        <article className={cn('inputBox')}>
          <Label className={cn('label')}>이메일</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={cn('errorBox')}>
                <Input {...field} placeholder="이메일을 입력해주세요." className={cn('input')} onBlur={field.onBlur} />
                {typeof errors.email?.message === 'string' && <p className={cn('error')}>{errors.email.message}</p>}
              </div>
            )}
          />
        </article>
        <article className={cn('inputBox')}>
          <Label className={cn('label')}>비밀번호</Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={cn('errorBox')}>
                <Input
                  {...field}
                  placeholder="비밀번호를 입력해주세요."
                  className={cn('input')}
                  onBlur={field.onBlur}
                  type="password"
                />
                {typeof errors.password?.message === 'string' && (
                  <p className={cn('error')}>{errors.password.message}</p>
                )}
              </div>
            )}
          />
        </article>
      </section>
      <article className={cn('buttonBox')}>
        <Button shape="square" color="red" className={cn('button')} disabled={isButtonDisabled}>
          로그인하기
        </Button>
      </article>
    </form>
  );
}
