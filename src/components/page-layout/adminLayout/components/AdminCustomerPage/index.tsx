'use client';

import { ChangeEvent, KeyboardEventHandler, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/AdminCustomerPage/AdminCustomerPage.module.scss';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';
import User from '@/components/page-layout/adminLayout/types/userType';

const cn = classNames.bind(styles);

const mockUser = {
  nickname: '티블리스',
  email: 'teabliss@gmail.com',
  roll: '일반회원',
  createdAt: '2024-06-10',
  reviewCount: 2,
  purchaseAmount: 6.5,
};

const mockUsers = [
  {
    id: 0,
    nickname: '관리자',
    email: 'cksdyd324@gmail.com',
    roll: '관리자',
    createdAt: '2024-06-06',
    reviewCount: 0,
    purchaseAmount: 0,
  },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    ...mockUser,
  })),
] as User[];

export default function AdminCustomerPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnter: KeyboardEventHandler = (e) => {
    if (e.keyCode === 13) {
      if (!searchValue) {
        setUsers(mockUsers);
        return;
      }

      setUsers(mockUsers.filter((user) => user.email.includes(searchValue) || user.nickname.includes(searchValue)));
    }
  };

  return (
    <>
      <SearchBar onChange={handleChange} onKeyUp={handleEnter} placeholder="닉네임 또는 이메일을 검색해주세요" />

      <Table
        fields={['ID', '닉네임', '이메일', '사용자 유형', '가입일', '리뷰 수', '구매 금액']}
        items={users}
        name="사용자"
        unit="명"
        path="/admin/customer/detail"
      />

      <div className={cn('pageButtons')}>
        <Image src="/icons/arrow.svg" alt="이전" width={16} height={16} className={cn('arrow', 'before')} />
        <div className={cn('pages', 'current')}>1</div>
        <div className={cn('pages')}>2</div>
        <div className={cn('pages')}>3</div>
        <div className={cn('pages')}>4</div>
        <div className={cn('pages')}>5</div>
        <Image src="/icons/arrow.svg" alt="다음" width={16} height={16} className={cn('arrow', 'next')} />
      </div>
    </>
  );
}
