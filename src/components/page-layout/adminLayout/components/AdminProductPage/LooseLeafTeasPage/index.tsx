'use client';

import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import { useSearchParams } from 'next/navigation';

import styles from '@/components/page-layout/adminLayout/components/AdminProductPage/LooseLeafTeasPage/LooseLeafTeasPage.module.scss';
import SearchBar from '@/components/page-layout/adminLayout/components/common/SearchBar';
import SortBar from '@/components/page-layout/adminLayout/components/common/SortBar';
import Table from '@/components/page-layout/adminLayout/components/common/Table';

import { useGetIngredients } from '../../../hooks/useManageIngredients';
import PageButtons from '../../common/PageButtons';

const cn = classNames.bind(styles);

export default function LooseLeafTeasPage() {
  const params = useSearchParams();
  const category = params.get('category');

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any>(undefined);
  const [searchValue, setSearchValue] = useState<string>('');

  const { data } = useGetIngredients({ page: 1, limit: 200, category });

  const handleEnter: KeyboardEventHandler = (e) => {
    if (e.keyCode === 13) {
      setPage(1);

      if (!searchValue) {
        setProducts(data?.data.data);
        return;
      }

      setProducts(
        data?.data?.data.filter(
          (product: any) => product.name?.includes(searchValue) || product.nameEng?.includes(searchValue)
        )
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setProducts(data?.data.data);
  }, [data]);

  return (
    <>
      <SortBar
        path={'/admin/product/loose-leaf-teas'}
        datas={[
          { name: '전체', target: null, query: {} },
          { name: '홍차', target: 'Black', query: { category: 'Black' } },
          { name: '푸에르 티', target: 'Pu Erh', query: { category: 'Pu Erh' } },
          { name: '차이 티', target: 'Chai', query: { category: 'Chai' } },
          { name: '우롱차', target: 'Oolong', query: { category: 'Oolong' } },
          { name: '백차', target: 'White', query: { category: 'White' } },
          { name: '녹차', target: 'Green', query: { category: 'Green' } },
          { name: '허브 티', target: 'Herbal', query: { category: 'Herbal' } },
          { name: '루이보스 티', target: 'Rooibos', query: { category: 'Rooibos' } },
          { name: '디카페인', target: 'Decaf', query: { category: 'Decaf' } },
        ]}
        currentQuery={category}
      />

      <SearchBar
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder="한글 이름 또는 영문 이름으로 검색해주세요"
      />

      <Table
        fields={['ID', '이름', '영문 이름', '가격', '종류', '재고', '상태']}
        items={products?.slice(10 * (page - 1), 10 * page)}
        name="상품"
        unit="개"
        postPath="/admin/product/loose-leaf-teas/post"
        modifyPath="/admin/product/loose-leaf-teas/detail"
        keys={['id', 'name', 'nameEng', 'sale', 'category', 'inventory', 'saleStatus']}
      />

      <PageButtons currentPage={page} setPage={setPage} size={data?.data.data.length} />
    </>
  );
}
