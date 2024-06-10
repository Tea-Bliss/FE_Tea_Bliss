'use client';

import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import Card from '@/components/common/Card/Card';
import getPagenationItems from '@/components/common/Pagenation/apis/getPagenationItems';
import Pagination from '@/components/common/Pagenation/Pagenation';
import { FILTER } from '@/components/page-layout/productListLayout/constants/index';
import styles from '@/components/page-layout/productListLayout/ProductList/ProductList.module.scss';
import Img from '@/icons/다운로드.jpg';

import FinishedItem from '../types';

const cn = classNames.bind(styles);

export default function ProductList() {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['items', page],
    queryFn: () => getPagenationItems(page, 8),
    placeholderData: keepPreviousData,
  });
  console.log(data?.length);

  console.log(data);

  const finishedData = data?.map((item: FinishedItem) => ({
    ...item,
    href: '/',
    img: Img,
  }));

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
        {finishedData?.map((item: FinishedItem) => (
          <Card
            key={item.title}
            img={item.img}
            href={item.href}
            price={item.cost}
            scope={item.rating}
            review={item.review}
            title={item.title}
          />
        ))}
      </div>
      <Pagination currentPage={page} itemsPerPage={8} totalItems={20} setPage={setPage} />
    </div>
  );
}
