'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import Skeleton from '@/components/common/Skeleton/Skeleton';
import { useGetOneIngredient } from '@/components/page-layout/adminLayout/hooks/useManageIngredients';
import { useGetOneTea } from '@/components/page-layout/adminLayout/hooks/useManageTeas';
import styles from '@/components/page-layout/myPageLayout/saveList/components/common/SavePageCard/SavePageCard.module.scss';

const cn = classNames.bind(styles);

interface SavePageCardProps {
  productId: number;
  type: 'tea' | 'ingredient';
}

export default function SavePageCard({ productId, type }: SavePageCardProps) {
  const [saveStatus, setSaveStatus] = useState(true);
  const [visible, setVisible] = useState(true);

  const getFn = type === 'tea' ? useGetOneTea : useGetOneIngredient;

  const { data, isLoading } = getFn(productId);

  const teaData = type === 'tea' ? data?.data : data?.data.data;

  useEffect(() => {
    if (saveStatus) return;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [saveStatus]);

  return (
    <div className={cn('card', visible ? '' : 'inVisible')}>
      {isLoading ? (
        <Skeleton className={cn('skeleton')} />
      ) : (
        <Link className={cn('teaImageContainer')} href={`/product/list/${productId}`}>
          <Image
            src={teaData?.img || teaData?.photo || '/images/default_product.png'}
            alt={teaData?.name}
            fill
            style={{ objectFit: 'cover' }}
            className={cn('cardImage')}
          />
        </Link>
      )}
      <div className={cn('teaContents')}>
        <div className={cn('nameArea')}>
          <h3 className={cn('teaNameEng')}>{teaData?.nameEng}</h3>
          <h4 className={cn('teaName')}>{teaData?.name}</h4>
        </div>
        <p className={cn('teaPrice')}>{`${teaData?.price || teaData?.sale} ₩`}</p>
        <button className={cn('saveButton')} onClick={() => setSaveStatus((prev) => !prev)}>
          <Image src={saveStatus ? '/icons/fullHeart.svg' : '/icons/heart.svg'} alt="좋아요" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
