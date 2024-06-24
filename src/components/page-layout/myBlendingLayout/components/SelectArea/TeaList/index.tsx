'use client';

import classNames from 'classnames/bind';

import Image from 'next/image';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import CheckIcon from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/CheckIcon';
import styles from '@/components/page-layout/myBlendingLayout/components/SelectArea/TeaList/TeaList.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import { LooseLeafTeaType } from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

export default function TeaList() {
  const { teaList, selectedTeas, setSelectedTeas, isLoading } = useMyBlendingContext();

  const handleCheckClick = (tea: LooseLeafTeaType) => {
    if (selectedTeas.some((item) => item.id === tea.id)) {
      setSelectedTeas((prev) => prev.filter((item) => item.id !== tea.id));
      return;
    }

    if (selectedTeas.length >= 3) {
      return;
    }

    setSelectedTeas((prev) => [...prev, tea]);
  };

  return (
    <div className={cn('teaList')}>
      <h2 className={cn('title')}>You can choose</h2>
      <div className={cn('teas')}>
        {isLoading ? (
          <>
            <Skeleton className={cn('skeleton')} />
            <Skeleton className={cn('skeleton')} />
            <Skeleton className={cn('skeleton')} />
            <Skeleton className={cn('skeleton')} />
          </>
        ) : (
          teaList?.map((tea) => {
            return (
              <div key={tea.id} className={cn('tea')}>
                <CheckIcon
                  className={cn('checkbox')}
                  checked={selectedTeas.some((item) => item.id === tea.id)}
                  onClick={() => handleCheckClick(tea)}
                />
                <div className={cn('teaContents')}>
                  <Image src={tea.photo || '/images/my-blending/vanila.png'} alt={tea.name} width={67} height={67} />
                  <div className={cn('teaTexts')}>
                    <BlendingLabel>{tea.category}</BlendingLabel>
                    <h3 className={cn('teaNameEng')}>{tea.nameEng}</h3>
                    <h4 className={cn('teaName')}>{tea.name}</h4>
                    <p className={cn('teaDescription')}>{tea.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
