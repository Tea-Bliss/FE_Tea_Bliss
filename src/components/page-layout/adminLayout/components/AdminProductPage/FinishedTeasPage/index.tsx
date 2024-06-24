'use client';

import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import Loader from '@/components/common/Loader';
import PageButtons from '@/components/page-layout/adminLayout/components/common/PageButtons';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import SortBar from '@/components/page-layout/adminLayout/components/common/SortBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';
import { useGetAllTeas, useGetTeasSeasonFilter } from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import { FinishedTeaType } from '@/components/page-layout/adminLayout/types/productType';

export default function FinishedTeasPage() {
  const params = useSearchParams();
  const season = params.get('season');

  const getFunc = season ? useGetTeasSeasonFilter : useGetAllTeas;

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<FinishedTeaType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { data, isLoading } = getFunc({ page: 1, limit: 200, season: season ? season : '' });

  const handleEnter: KeyboardEventHandler = (e) => {
    if (e.keyCode === 13) {
      setPage(1);

      if (!searchValue) {
        setProducts(data?.data.tea);
        return;
      }

      setProducts(
        data?.data?.tea.filter(
          (product: FinishedTeaType) => product.name.includes(searchValue) || product.nameEng.includes(searchValue)
        )
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setProducts(data?.data.tea);
  }, [data]);

  return (
    <>
      <SortBar
        path={'/admin/product/finished-teas'}
        datas={[
          { name: '전체', target: null, query: {} },
          { name: '봄', target: 'spring', query: { season: 'spring' } },
          { name: '여름', target: 'summer', query: { season: 'summer' } },
          { name: '가을', target: 'autumn', query: { season: 'autumn' } },
          { name: '겨울', target: 'winter', query: { season: 'winter' } },
        ]}
        currentQuery={season}
      />

      <SearchBar
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder="한글 이름 또는 영문 이름으로 검색해주세요"
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Table
            fields={['ID', '이름', '영문 이름', '가격', '종류', '계절']}
            keys={['id', 'name', 'nameEng', 'price', 'category', 'season']}
            items={products?.slice(10 * (page - 1), 10 * page)}
            name="상품"
            unit="개"
            postPath="/admin/product/finished-teas/post"
            modifyPath="/admin/product/finished-teas/detail"
            totalCount={products?.length}
          />
          <PageButtons currentPage={page} setPage={setPage} size={products?.length} />
        </>
      )}
    </>
  );
}
