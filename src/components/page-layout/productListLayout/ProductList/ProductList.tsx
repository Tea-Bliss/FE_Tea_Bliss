'use client';

import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import Card from '@/components/common/Card/Card';
import getPagenationItems from '@/components/common/Pagenation/apis/getPagenationItems';
import Pagination from '@/components/common/Pagenation/Pagenation';
import FILTER from '@/components/page-layout/productListLayout/constants/filter';
import styles from '@/components/page-layout/productListLayout/ProductList/ProductList.module.scss';

import mock from '../constants/mock';

const cn = classNames.bind(styles);

export default function ProductList() {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['items', page],
    queryFn: () => getPagenationItems(page, 5),
    placeholderData: keepPreviousData,
  });

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    // Todo: api 호출
  };

  return (
    <div className={cn('main')}>
      <div className={cn('container')}>
        <div className={cn('filter')}>
          {FILTER.map((filter) => (
            <p
              key={filter}
              className={cn({ active: selectedFilter === filter })}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </p>
          ))}
        </div>
        {mock.map((item) => (
          <Card
            key={item.price}
            img={item.img}
            href={item.href}
            price={item.price}
            scope={item.scope}
            review={item.scope}
            title={item.title}
          />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={data?.totalPages} setPage={setPage} />
    </div>
  );
}
