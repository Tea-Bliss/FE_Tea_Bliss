'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/common/MyPageSubNav/Container/Container.module.scss';

const cn = classNames.bind(styles);

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

interface subNavContextValues {
  subNav: string;
  setSubNav: Dispatch<SetStateAction<string>>;
}

const defaultValue: subNavContextValues = {
  subNav: '',
  setSubNav: () => {},
};

const subNavContext = createContext(defaultValue);

export function Container({ children, className }: ContainerProps) {
  const [subNav, setSubNav] = useState('');

  return (
    <subNavContext.Provider value={{ subNav, setSubNav }}>
      <div className={cn('container', className)}>{children}</div>
    </subNavContext.Provider>
  );
}

export function useMyBlendingContext() {
  const context = useContext(subNavContext);

  if (!context) {
    throw new Error('올바른 콘텍스트 사용처가 아니다.');
  }

  return context;
}
