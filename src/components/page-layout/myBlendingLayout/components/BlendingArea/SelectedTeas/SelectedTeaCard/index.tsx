'use client';

import classNames from 'classnames/bind';

import Image from 'next/image';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/myBlendingLayout/components/BlendingArea/SelectedTeas/SelectedTeaCard/SelectedTeaCard.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import { LooseLeafTeaType } from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

interface SelectedTeaCard {
  tea: LooseLeafTeaType | null;
}

export default function SelectedTeaCard({ tea }: SelectedTeaCard) {
  const { setSelectedTeas } = useMyBlendingContext();

  if (!tea)
    return (
      <div className={cn('vacantCard')}>
        <Image src="/icons/teabag.svg" alt="vacant-card" width={150} height={150} />
      </div>
    );

  const handleCardClick = () => {
    setSelectedTeas((prev) => prev.filter((item) => item.id !== tea.id));
  };

  return (
    <div className={cn('card')}>
      <div className={cn('teaImageContainer')}>
        <Image
          src={tea.photo || '/images/my-blending/vanila.png'}
          alt={tea.name}
          width={200}
          height={240}
          className={cn('cardImage')}
        />
        <button onClick={handleCardClick}>
          <Image src={'/icons/close.svg'} alt="카드 제거" width={12} height={12} className={cn('removeIcon')} />
        </button>
      </div>
      <div className={cn('teaContents')}>
        <BlendingLabel>{tea.category}</BlendingLabel>
        <h3 className={cn('teaNameEng')}>{tea.nameEng}</h3>
        <h4 className={cn('teaName')}>{tea.name}</h4>
        <p className={cn('teaDescription')}>{tea.explanation}</p>
      </div>
    </div>
  );
}
