'use client';

import styles from '@/components/myBlending/TeaCard/TeaCard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

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
  return (
    <div>
      <Image src={data.imageSource} alt={data.name} width={30} height={30} />
    </div>
  );
}
