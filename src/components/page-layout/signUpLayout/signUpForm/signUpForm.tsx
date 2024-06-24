'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import { ZodIssueCode, z } from 'zod';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input/Input';
import Label from '@/components/common/Label/Label';
import RadioInput from '@/components/common/RadioInput/RadioInput';
import postSignUpForm from '@/components/page-layout/signUpLayout/apis/postSignUpForm';
import styles from '@/components/page-layout/signUpLayout/signUpForm/signUpForm.module.scss';
import SignUpFormData from '@/components/page-layout/signUpLayout/types/signUpFormData';
import ROUTE from '@/constants/route';

const cn = classNames.bind(styles);

const schema = z
  .object({
    email: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식으로 작성해 주세요.'),
    nickname: z.string().min(1, '닉네임을 입력해주세요.').max(10, '10자 이하로 작성해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.').min(8, '8자 이상 입력해주세요.'),
    checkPassword: z.string().min(1, '비밀번호 확인을 입력해주세요.'),
    agree: z.boolean().refine((val) => val === true, '티블리스 가입 약관에 동의해야 합니다.'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.checkPassword) {
      ctx.addIssue({
        path: ['checkPassword'],
        message: '비밀번호가 일치하지 않습니다.',
        code: ZodIssueCode.custom,
      });
    }
  });

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export default function SignUpForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: SignUpFormData) => postSignUpForm(data),
    onSuccess: (response) => {
      router.push(ROUTE.SIGN_IN);
    },
    onError: (error: Error) => {
      if (error.response.data.message === '이미 존재하는 회원 입니다.') {
        setError('email', {
          message: '이미 존재하는 이메일입니다.',
        });
      }
      if (error.response.data.message === '이미 존재하는 닉네임 입니다.') {
        setError('nickname', {
          message: '이미 존재하는 닉네임입니다.',
        });
      }
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: SignUpFormData) => {
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
          <Label className={cn('label')}>닉네임</Label>
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={cn('errorBox')}>
                <Input {...field} placeholder="닉네임을 입력해주세요." className={cn('input')} onBlur={field.onBlur} />
                {typeof errors.nickname?.message === 'string' && (
                  <p className={cn('error')}>{errors.nickname.message}</p>
                )}
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
        <article className={cn('inputBox')}>
          <Label className={cn('label')}>비밀번호 확인</Label>
          <Controller
            name="checkPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={cn('errorBox')}>
                <Input
                  {...field}
                  placeholder="비밀번호를 다시 입력해주세요."
                  className={cn('input')}
                  onBlur={field.onBlur}
                  type="password"
                />
                {typeof errors.checkPassword?.message === 'string' && (
                  <p className={cn('error')}>{errors.checkPassword.message}</p>
                )}
              </div>
            )}
          />
        </article>
      </section>
      <article className={cn('buttonBox')}>
        <Controller
          name="agree"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <RadioInput
              className={cn('agree')}
              id="agree"
              content="티블리스 가입 약관에 모두 동의합니다."
              checked={field.value}
              onChange={() => field.onChange(!field.value)}
            />
          )}
        />
        <Button shape="square" color="red" className={cn('button')} disabled={isButtonDisabled}>
          회원가입하기
        </Button>
      </article>
    </form>
  );
}
