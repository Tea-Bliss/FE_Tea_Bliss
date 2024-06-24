'use client';

import { useEffect } from 'react';

import classNames from 'classnames/bind';
import { useInView } from 'react-intersection-observer';

import Loader from '@/components/common/Loader';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import SavePageCard from '@/components/page-layout/myPageLayout/saveList/components/common/SavePageCard';
import styles from '@/components/page-layout/myPageLayout/saveList/components/saveListPage/SaveListPage.module.scss';
import { useGetFinishedTeasSave } from '@/components/page-layout/myPageLayout/saveList/hooks/useHandleFinishedTeasSave';

const cn = classNames.bind(styles);

export default function BlendingSavePage() {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useGetFinishedTeasSave({
    nickname: '코드잇',
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage;
    }
  }, [inView, fetchNextPage]);

  const saveData = data?.pages.flatMap((param) => param.data.items);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cn('container')}>
          {saveData?.map((item) => {
            return <SavePageCard key={item?.id} productId={item?.productId} type={'ingredient'} />;
          })}
          {isFetchingNextPage
            ? Array.from({ length: 8 }).map((_, index) => {
                return <Skeleton key={index} className={cn('skeleton')} />;
              })
            : !isError && !isLoading && <div ref={ref} />}
        </div>
      )}
    </>
  );
}
