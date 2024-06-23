'use client';

import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';

import PageButtons from '@/components/page-layout/adminLayout/components/common/PageButtons';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';
import { useGetCustomers } from '@/components/page-layout/adminLayout/hooks/useManageCustomers';
import User from '@/components/page-layout/adminLayout/types/userType';

export default function AdminCustomerPage() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { data } = useGetCustomers({ page: 1, limit: 100 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnter: KeyboardEventHandler = (e) => {
    if (e.keyCode === 13) {
      if (!searchValue) {
        setUsers(data?.data?.data);
        return;
      }

      setUsers(
        data?.data?.data.filter((user: any) => user.email.includes(searchValue) || user.nickname.includes(searchValue))
      );
    }
  };

  useEffect(() => {
    setUsers(data?.data.data);
  }, [data]);

  return (
    <>
      <SearchBar
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder="닉네임 또는 이메일을 검색해주세요"
      />

      <Table
        fields={['ID', '닉네임', '이메일', '사용자 유형', '가입일', '리뷰 수', '구매 금액']}
        keys={['id', 'nickname', 'email', 'role', 'createDt', 'reviewCount', 'purchaseAmount']}
        items={users?.slice(10 * (page - 1), 10 * page)}
        name="사용자"
        unit="명"
        postPath="/admin/customer/detail"
        modifyPath="/admin/customer/detail"
      />

      <PageButtons currentPage={page} setPage={setPage} size={data?.data.data.length} />
    </>
  );
}
