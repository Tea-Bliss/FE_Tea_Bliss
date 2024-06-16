'use client';

import classNames from 'classnames/bind';

import Image from 'next/image';

import CheckIcon from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/CheckIcon';
import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/TeaList.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';

const cn = classNames.bind(styles);

export default function TeaList() {
  const { teaList } = useMyBlendingContext();

  return (
    <div className={cn('teaList')}>
      <div className={cn('title')}>You can choose</div>
      <div className={cn('teas')}>
        {teaList?.map((tea) => {
          return (
            <div key={tea.id} className={cn('tea')}>
              <CheckIcon className={cn('checkbox')} />
              <div className={cn('teaContents')}>
                <Image src={tea.photo || '/images/my-blending/vanila.png'} alt={tea.name} width={67} height={67} />
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
