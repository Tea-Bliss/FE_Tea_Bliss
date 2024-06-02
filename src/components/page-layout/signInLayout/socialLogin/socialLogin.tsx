'use client';

import classNames from 'classnames/bind';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '@/components/page-layout/signInLayout/socialLogin/socialLogin.module.scss';
import ROUTE from '@/constants/route';
import Goggle from '@/icons/goggle.svg';
import Kakao from '@/icons/kakao.svg';

const cn = classNames.bind(styles);

export default function SocialLogin() {
  const router = useRouter();

  const handleKakaoButtonClick = () => {
    router.push('/');
  };

  const handleGoggleButtonClick = () => {
    router.push('/');
  };

  return (
    <section className={cn('section')}>
      <article className={cn('buttonContainer')}>
        <p className={cn('buttonContainerTitle')}>SNS로 간편하게 로그인하기</p>
        <div className={cn('buttonBox')}>
          <button className={cn('kakaoButton')} onClick={handleKakaoButtonClick}>
            <Kakao />
            <p>카카오 로그인</p>
          </button>
          <button className={cn('goggleButton')} onClick={handleGoggleButtonClick}>
            <Goggle />
            <p>구글 로그인</p>
          </button>
        </div>
      </article>
      <article className={cn('signUpBox')}>
        <p className={cn('signUpContent')}>아직 티블리스 회원이 아니세요?</p>
        <Link href={ROUTE.SIGN_UP} className={cn('toSignUp')}>
          회원가입 하기
        </Link>
      </article>
    </section>
  );
}
