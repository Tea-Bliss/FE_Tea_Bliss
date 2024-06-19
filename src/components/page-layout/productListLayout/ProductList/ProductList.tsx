'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Card from '@/components/common/Card/Card';
import getPagenationItems from '@/components/common/Pagenation/apis/getPagenationItems';
import Pagination from '@/components/common/Pagenation/Pagenation';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import { FILTER, LIMIT } from '@/components/page-layout/productListLayout/constants/index';
import styles from '@/components/page-layout/productListLayout/ProductList/ProductList.module.scss';
import FinishedItem from '@/components/page-layout/productListLayout/types/index';
import ROUTE from '@/constants/route';
import Img from '@/icons/다운로드.jpg';

const cn = classNames.bind(styles);

export default function ProductList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = Number(searchParams.get('page')) || 1;
  const selectedFilter = searchParams.get('filter') || 'all';

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`${pathname}?${params}`);
  };

  const setSelectedFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('filter', filter);
    router.push(`${pathname}?${params}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['items', page, selectedFilter],
    queryFn: () => getPagenationItems(selectedFilter, page, LIMIT),
    placeholderData: keepPreviousData,
  });

  const finishedData = data?.tea?.map((item: FinishedItem, idx: number) => ({
    ...item,
    id: idx,
    href: `${ROUTE.PRODUCT_LIST}/${idx}`,
    img: Img,
  }));

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
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
                type="productList"
                key={item.id}
                img={item.img}
                href={item.href}
                price={item.price}
                scope={item.rating}
                review={item.review}
                title={item.nameEng}
                koTitle={item.name}
              />
            ))}
      </div>
      <Pagination currentPage={page} itemsPerPage={LIMIT} totalItems={data?.size} setPage={setPage} />
    </div>
  );
}
