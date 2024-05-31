'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import { ZodIssueCode, z } from 'zod';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input/Input';
import Label from '@/components/common/Label/Label';
import RadioInput from '@/components/common/RadioInput/RadioInput';
import styles from '@/components/page-layout/signUpLayout/signUpForm/signUpForm.module.scss';

const cn = classNames.bind(styles);

const schema = z
  .object({
    email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식으로 작성해 주세요.'),
    nickName: z.string().nonempty('닉네임을 입력해주세요.').max(10, '열 자 이하로 작성해주세요.'),
    password: z.string().nonempty('비밀번호를 입력해주세요.').min(8, '8자 이상 입력해주세요.'),
    checkPassword: z.string().nonempty('비밀번호 확인을 입력해주세요.'),
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

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form className={cn('formBox')} onSubmit={handleSubmit((data) => console.log(data))}>
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
            name="nickName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={cn('errorBox')}>
                <Input {...field} placeholder="닉네임을 입력해주세요." className={cn('input')} onBlur={field.onBlur} />
                {typeof errors.nickName?.message === 'string' && (
                  <p className={cn('error')}>{errors.nickName.message}</p>
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
        <Button shape="square" color="red" className={cn('button')} disabled={!isValid}>
          회원가입하기
        </Button>
      </article>
    </form>
  );
}
