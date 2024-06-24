'use client';
import classNames from 'classnames/bind';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import styles from '@/components/page-layout/productLayout/components/ProductDetail/ProductDetail.module.scss';

import useGetIngredientQueries from '../../hooks/useGetIngredientQueries';
import useGetTeaDetailQuery from '../../hooks/useGetTeaDetailQuery';

const cn = classNames.bind(styles);

export default function ProductDetail() {
  const { id }: { id: string } = useParams();
  const { data: teaDetail } = useGetTeaDetailQuery(id);
  const ingredientIds = teaDetail?.data.ingredient || [];
  const ingredientQueries = useGetIngredientQueries(ingredientIds);

  return (
    <div className={cn('container')}>
      <div className={cn('title')}>상품 설명</div>
      <div className={cn('contentContainer')}>
        {ingredientQueries.map((query, index) => (
          <div key={ingredientIds[index]} className={cn('content')}>
            <div className={cn('productName')}>{query.data?.data.data.name}</div>
            <Image src={query.data?.data.data.photo!} width={200} height={200} alt={query.data?.data.data.name!} />
            <div className={cn('productDescription')}>{query.data?.data.data.explanation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
