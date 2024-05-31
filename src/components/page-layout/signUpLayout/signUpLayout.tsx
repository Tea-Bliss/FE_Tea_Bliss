'use client';

import classNames from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';

import Input from '@/components/common/Input/Input';
import Label from '@/components/common/Label/Label';
import RadioInput from '@/components/common/RadioInput/RadioInput';
import SignUpHeader from '@/components/page-layout/signUpLayout/signUpHeader/signUpHeader';

import styles from './signUpLayout.module.scss';

const cn = classNames.bind(styles);

export default function SignUpLayout() {
  const { control, handleSubmit } = useForm();

  return (
    <main className={cn('layout')}>
      <div className={cn('container')}>
        <SignUpHeader />
        <form className={cn('formBox')} onSubmit={handleSubmit((data) => console.log(data))}>
          <section className={cn('inputContainer')}>
            <article className={cn('inputBox')}>
              <Label className={cn('label')}>이메일</Label>
              <Input placeholder="이메일을 입력해주세요." className={cn('input')} />
            </article>
            <article className={cn('inputBox')}>
              <Label className={cn('label')}>닉네임</Label>
              <Input placeholder="닉네임을 입력해주세요." className={cn('input')} />
            </article>
            <article className={cn('inputBox')}>
              <Label className={cn('label')}>비밀번호</Label>
              <Input placeholder="비밀번호를 입력해주세요." className={cn('input')} />
            </article>
            <article className={cn('inputBox')}>
              <Label className={cn('label')}>비밀번호 확인</Label>
              <Input placeholder="비밀번호를 다시 입력해주세요." className={cn('input')} />
            </article>
          </section>
          <article className={cn('buttonBox')}>
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <RadioInput
                  className={cn('agree')}
                  id="agree"
                  content="티블리스 가입 약관에 모두 동의합니다."
                  checked={field.value}
                  onChange={() => field.onChange(!field.value)} // 상태 반전
                />
              )}
            />
            <button className={cn('button')}>회원가입하기</button>
          </article>
        </form>
      </div>
    </main>
  );
}
