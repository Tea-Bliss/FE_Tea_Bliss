'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input/Input';
import Label from '@/components/common/Label/Label';
import styles from '@/components/page-layout/signInLayout/signInForm/signInForm.module.scss';

const cn = classNames.bind(styles);

const schema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식으로 작성해 주세요.'),
  password: z.string().nonempty('비밀번호를 입력해주세요.').min(8, '8자 이상 입력해주세요.'),
});

export default function SignInForm() {
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
        <Button shape="square" color="red" className={cn('button')} disabled={!isValid}>
          로그인하기
        </Button>
      </article>
    </form>
  );
}
