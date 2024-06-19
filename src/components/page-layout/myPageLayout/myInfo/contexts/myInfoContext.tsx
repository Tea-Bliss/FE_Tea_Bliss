'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';

import useGetMyInfo from '@/components/page-layout/myPageLayout/myInfo/hooks/useGetMyInfo';

interface myInfoValues {
  email: string;
  nickname: string;
  profile: string | null;
  address: string | null;
}

const defaultValue: myInfoValues = {
  email: '',
  nickname: '',
  profile: null,
  address: null,
};

const myInfoContext = createContext(defaultValue);

export function MyInfoProvider({ children }: { children: ReactNode }) {
  const { data } = useGetMyInfo();

  const value = useMemo(
    () => ({
      email: data?.data.data.email,
      nickname: data?.data.data.nickname,
      profile: data?.data.data.profile,
      address: data?.data.data.address,
    }),
    [data]
  );

  return <myInfoContext.Provider value={value}>{children}</myInfoContext.Provider>;
}

export function useMyInfoContext() {
  const context = useContext(myInfoContext);

  if (!context) {
    throw new Error('useMyInfoContext must be used within a MyInfoProvider');
  }

  return context;
}
