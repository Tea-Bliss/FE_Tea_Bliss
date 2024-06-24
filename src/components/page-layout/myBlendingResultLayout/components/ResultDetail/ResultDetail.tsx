'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import styles from '@/components/page-layout/myBlendingResultLayout/components/ResultDetail/ResultDetail.module.scss';
import useGetIngredientQueries from '@/components/page-layout/productLayout/hooks/useGetIngredientQueries';

const cn = classNames.bind(styles);

export default function ResultDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.getAll('id').map((id) => parseInt(id, 10));
  const ingredientQueries = useGetIngredientQueries(id);
  return (
    <div className={cn('container')}>
      <div className={cn('title')}>상품 설명</div>
      <div className={cn('contentContainer')}>
        {ingredientQueries.map((query, index) => (
          <div key={id[index]} className={cn('content')}>
            <div className={cn('productName')}>{query.data?.data.data.name}</div>
            <Image src={query.data?.data.data.photo!} width={200} height={200} alt={query.data?.data.data.name!} />
            <div className={cn('productDescription')}>{query.data?.data.data.explanation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
