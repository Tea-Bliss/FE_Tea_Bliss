'use client';

import Button from '@/components/common/Button';
import styles from '@/components/myBlending/TeaCardList/TeaCard/TeaCard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import CheckIcon from './CheckIcon';
import AddRemoveIcon from './AddRemoveIcon';

const cn = classNames.bind(styles);

type Taste = '신맛' | '플로럴' | '프루티' | '매운맛' | '쓴맛';

type TeaSort = 'Black' | 'Pu Erh' | 'Flavors' | 'Chai' | 'Oolong' | 'White' | 'Green' | 'Herbal' | 'Rooibos' | 'Decaf';

interface TeaCardProps {
  data: {
    id: number;
    name: string;
    description: string;
    sort: TeaSort;
    taste: Taste[];
    imageSource: string;
  };
}

export default function TeaCard({ data }: TeaCardProps) {
  const [picked, setPicked] = useState(false);

  return (
    <li className={cn('teaCard', picked && 'picked')}>
      <div className={cn('imgContainer')} onClick={() => setPicked((prev) => !prev)}>
        <AddRemoveIcon status={picked ? 'minus' : 'plus'} className={cn('addRemoveIcon')} />
        <Image src={data.imageSource} alt={data.name} fill objectFit="contain" className={cn('teaImage')} />
      </div>
      <div className={cn('name')}>
        {data.name.split('(')[0]}
        <br />
        {`(${data.name.split('(')[1]}`}
      </div>
      <Button shape="round" color="white">
        설명보기 →
      </Button>
      {picked && <CheckIcon className={cn('checkIcon')} />}
    </li>
  );
}
