'use client';

import { ChangeEvent, KeyboardEventHandler, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';

import styles from '@/components/page-layout/adminLayout/components/AdminCustomerPage/AdminCustomerPage.module.scss';
import User from '@/components/page-layout/adminLayout/types/userType';

const cn = classNames.bind(styles);

const mockUser = {
  nickName: '티블리스',
  email: 'teabliss@gmail.com',
  userType: '일반회원',
  createdAt: '2024-06-10',
  reviewCount: 2,
  purchaseAmount: 6.5,
};

const mockUsers = [
  {
    id: 0,
    nickName: '관리자',
    email: 'cksdyd324@gmail.com',
    userType: '관리자',
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

      setUsers(mockUsers.filter((user) => user.email.includes(searchValue) || user.nickName.includes(searchValue)));
    }
  };

  return (
    <div className={cn('container')}>
      <div className={cn('searchBarContainer')}>
        <Image src="/icons/search.svg" alt="검색하기" width={24} height={24} className={cn('searchIcon')} />
        <input className={cn('searchBar')} value={searchValue} onChange={handleChange} onKeyUp={handleEnter} />
      </div>

      <div className={cn('userList')}>
        <div className={cn('userCount')}>
          전체 사용자 <span className={cn('number')}>{users.length}</span>명
        </div>
        <ul className={cn('table')}>
          <li className={cn('row', 'header')}>
            <div className={cn('cell')}>ID</div>
            <div className={cn('cell')}>닉네임</div>
            <div className={cn('cell')}>이메일</div>
            <div className={cn('cell')}>사용자 유형</div>
            <div className={cn('cell')}>가입일</div>
            <div className={cn('cell')}>리뷰 수</div>
            <div className={cn('cell')}>구매 금액</div>
          </li>
          {users.map((user) => (
            <li key={user.id} className={cn('row')}>
              <div className={cn('cell')}>{user.id}</div>
              <div className={cn('cell')}>{user.nickName}</div>
              <div className={cn('cell')}>{user.email}</div>
              <div className={cn('cell')}>{user.userType}</div>
              <div className={cn('cell')}>{user.createdAt}</div>
              <div className={cn('cell')}>{user.reviewCount}</div>
              <div className={cn('cell')}>{user.purchaseAmount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
