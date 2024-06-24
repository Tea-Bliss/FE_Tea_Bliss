'use client';

import { ReactNode, createContext, useContext, useEffect, useMemo } from 'react';

import openToast from '@/components/common/Toast/features/openToast';
import useGetMyInfo from '@/components/page-layout/myPageLayout/myInfo/hooks/useGetMyInfo';

interface myInfoValues {
  email: string;
  nickname: string;
  profile: string | null;
  address: string | null;
  role: '관리자' | '일반 회원';
}

const defaultValue: myInfoValues = {
  email: '',
  nickname: '',
  profile: null,
  address: null,
  role: '일반 회원',
};

const myInfoContext = createContext(defaultValue);

export function MyInfoProvider({ children }: { children: ReactNode }) {
  const { data, isError } = useGetMyInfo();

  const value = useMemo(
    () => ({
      email: data?.data.data.email,
      nickname: data?.data.data.nickname,
      profile: data?.data.data.profile,
      address: data?.data.data.address,
      role: data?.data.data.role,
    }),
    [data]
  );

  useEffect(() => {
    if (isError) {
      openToast('error', '유저 데이터를 불러오는데 실패했습니다');
    }
  }, [isError]);

  return <myInfoContext.Provider value={value}>{children}</myInfoContext.Provider>;
}

export function useMyInfoContext() {
  const context = useContext(myInfoContext);

  if (!context) {
    throw new Error('useMyInfoContext must be used within a MyInfoProvider');
  }

  return context;
}
