'use client';

import { useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import Card from '@/components/common/Card/Card';
import getPagenationItems from '@/components/common/Pagenation/apis/getPagenationItems';
import Pagination from '@/components/common/Pagenation/Pagenation';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import { FILTER, LIMIT } from '@/components/page-layout/productListLayout/constants/index';
import styles from '@/components/page-layout/productListLayout/ProductList/ProductList.module.scss';
import ROUTE from '@/constants/route';
import Img from '@/icons/다운로드.jpg';

import FinishedItem from '../types';

const cn = classNames.bind(styles);

export default function ProductList() {
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const { data, isLoading } = useQuery({
    queryKey: ['items', page, selectedFilter],
    queryFn: () => getPagenationItems(selectedFilter, page, LIMIT),
    placeholderData: keepPreviousData,
  });

  const finishedData = data?.tea?.map((item: FinishedItem) => ({
    ...item,
    href: `${ROUTE.PRODUCT_LIST}/${item.id}`,
    img: Img,
  }));

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setPage(1);
  };

  return (
    <div className={cn('main')}>
      <div className={cn('container')}>
        <div className={cn('filter')}>
          {FILTER.map((filter) => (
            <p
              key={filter.key}
              className={cn({ active: selectedFilter === filter.english })}
              onClick={() => handleFilterClick(filter.english)}
            >
              {filter.ko}
            </p>
          ))}
        </div>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} className={cn('skeleton')} />)
          : finishedData?.map((item: FinishedItem) => (
              <Card
                key={item.id}
                img={item.img}
                href={item.href}
                price={item.cost}
                scope={item.rating}
                review={item.review}
                title={item.title}
              />
            ))}
      </div>
      <Pagination currentPage={page} itemsPerPage={LIMIT} totalItems={data?.size} setPage={setPage} />
    </div>
  );
}
