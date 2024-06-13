'use client';
import { Suspense } from 'react';

import classNames from 'classnames/bind';

import { useSearchParams } from 'next/navigation';

import FileInput from '@/components/common/FileInput';
import styles from '@/components/page-layout/adminLayout/components/AdminCustomerPage/EachCustomerPage/EachCustomerPage.module.scss';
import BackButton from '@/components/page-layout/adminLayout/components/common/BackButton';
import DetailCard from '@/components/page-layout/adminLayout/components/common/DetailCard';
import SubmitButton from '@/components/page-layout/adminLayout/components/common/SubmitButton';

const cn = classNames.bind(styles);

const mockUser = {
  id: 1,
  nickName: '티블리스',
  email: 'teabliss@gmail.com',
  userType: '일반회원',
  createdAt: '2024-06-10',
  reviewCount: 2,
  purchaseAmount: 6.5,
};

export default function EachCustomerPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <Suspense>
      <BackButton className={cn('backButton')} />
      <DetailCard title="회원 정보" className={cn('card')}>
        <form className={cn('form')}>
          <div className={cn('profile')}>
            <FileInput type="profile" />
            <div className={cn('nickName')}>{mockUser.nickName}</div>
          </div>
          <div className={cn('information')}>
            <div className={cn('section')}>
              <div className={cn('field')}>회원 유형</div>
              <div className={cn('value')}>{mockUser.userType}</div>
            </div>
            <div className={cn('section')}>
              <div className={cn('field')}>이메일</div>
              <div className={cn('value')}>{mockUser.email}</div>
            </div>
            <div className={cn('section')}>
              <label className={cn('field')}>닉네임</label>
              <input className={cn('value', 'input')} placeholder="필수 입력 항목입니다" />
            </div>
          </div>
          <div className={cn('submitButton')}>
            <SubmitButton>저장</SubmitButton>
          </div>
        </form>
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
      <DetailCard title="비밀번호 변경" className={cn('card')}>
        <form className={cn('form')}>
          <div className={cn('information')}>
            <div className={cn('section')}>
              <label className={cn('field')}>새 비밀번호</label>
              <input className={cn('value', 'input')} type="password" />
            </div>
            <div className={cn('section')}>
              <label className={cn('field')}>새 비밀번호 확인</label>
              <input className={cn('value', 'input')} type="password" />
            </div>
          </div>
          <div className={cn('submitButton')}>
            <SubmitButton>저장</SubmitButton>
          </div>
        </form>
      </DetailCard>
      <SubmitButton isDelete={true}>삭제하기</SubmitButton>
    </Suspense>
  );
}
