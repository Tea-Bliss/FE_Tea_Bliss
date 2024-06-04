'use client';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/TeaCard.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import CheckIcon from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/CheckIcon';
import AddRemoveIcon from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard/AddRemoveIcon';
import TeaType from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

interface TeaCardProps {
  data: TeaType;
  picked?: boolean;
  isFooter?: boolean;
  className?: string;
  onClick: (data: TeaType) => void;
}

export default function TeaCard({ data, picked, isFooter, className, onClick }: TeaCardProps) {
  return (
    <li className={cn('teaCard', isFooter && 'isFooter', picked && 'picked', className)}>
      <div className={cn('imgContainer')} onClick={() => onClick(data)}>
        <AddRemoveIcon status={picked || isFooter ? 'minus' : 'plus'} className={cn('addRemoveIcon')} />
        <Image src={data.imageSource} alt={data.name} fill objectFit="contain" className={cn('teaImage')} />
      </div>
      <div className={cn('name')}>
        {data.name.split('(')[0]}
        <br />
        {`(${data.name.split('(')[1]}`}
      </div>
      {isFooter || (
        <Button shape="round" color="white" className={cn('moreInfoButton')}>
          설명보기 →
        </Button>
      )}
      {picked && <CheckIcon className={cn('checkIcon')} />}
    </li>
  );
}
