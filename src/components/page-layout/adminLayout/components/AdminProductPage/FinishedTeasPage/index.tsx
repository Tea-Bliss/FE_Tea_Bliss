'use client';

import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import SortBar from '@/components/page-layout/adminLayout/components/common/SortBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';

import { useGetAllTeas, useGetTeasSeasonFilter } from '../../../hooks/useManageTeas';
import { FinishedTeaType } from '../../../types/productType';
import PageButtons from '../../common/PageButtons';

export default function FinishedTeasPage() {
  const params = useSearchParams();
  const season = params.get('season');
  const page = params.get('page');

  const getFunc = season ? useGetTeasSeasonFilter : useGetAllTeas;

  const [products, setProducts] = useState<FinishedTeaType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { data } = getFunc({ page: +page!, limit: 10, season: season ? season : '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setProducts(data?.data.tea);
  }, [data]);

  return (
    <>
      <SortBar standards={['전체', '봄', '여름', '가을', '겨울']} />
      <Table
        fields={['ID', '이름', '영문 이름', '가격', '종류', '재고', '상태']}
        items={products}
        name="상품"
        unit="개"
        path="/admin/product/finished-teas/post"
      />
      <PageButtons />
    </>
  );
}
