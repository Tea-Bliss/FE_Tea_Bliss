'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/page-layout/myPageLayout/saveList/components/common/SavePageCard/SavePageCard.module.scss';

const cn = classNames.bind(styles);

interface SavePageCardProps {
  productImage: string;
  name: string;
  nameEng: string;
  price?: number;
  type: '완제품' | '블렌딩 티';
  linkPath: string;
  queryData?: { [key: string]: any };
}

export default function SavePageCard({
  productImage,
  name,
  nameEng,
  price,
  type,
  linkPath,
  queryData,
}: SavePageCardProps) {
  const [saveStatus, setSaveStatus] = useState(false);
  return (
    <div className={cn('card')}>
      <Link className={cn('teaImageContainer')} href={{ pathname: linkPath, query: queryData }}>
        <Image
          src={productImage || '/images/default_product.png'}
          alt={name}
          width={200}
          height={272}
          className={cn('cardImage')}
        />
      </Link>
      <div className={cn('teaContents')}>
        <h3 className={cn('teaNameEng')}>{nameEng}</h3>
        <h4 className={cn('teaName')}>{name}</h4>
        <p className={cn('teaPrice')}>{`${price} ₩`}</p>
        <button className={cn('saveButton')} onClick={() => setSaveStatus((prev) => !prev)}>
          <Image src={saveStatus ? '/icons/fullHeart.svg' : '/icons/heart.svg'} alt="좋아요" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
