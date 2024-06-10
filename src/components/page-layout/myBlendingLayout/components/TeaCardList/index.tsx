'use client';

import classNames from 'classnames/bind';

import openToast from '@/components/common/Toast/features/openToast';
import TeaCard from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCard';
import styles from '@/components/page-layout/myBlendingLayout/components/TeaCardList/TeaCardList.module.scss';
import { useMyBlendingContext } from '@/components/page-layout/myBlendingLayout/contexts/myBlendingContext';
import TeaType from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

export default function TeaCardList() {
  const { teaList, selectedTeas, setSelectedTeas } = useMyBlendingContext();

  const handleSelect = (card: TeaType) => {
    if (selectedTeas.some((tea) => tea.id === card.id)) {
      setSelectedTeas((prev) => prev.filter((item) => item.id !== card.id));
      return;
    }

    if (selectedTeas.length === 3) {
      openToast('error', '차 조합은 3개까지만 고르실 수 있습니다.');
      return;
    }

    setSelectedTeas((prev) => [...prev, card]);
  };

  return (
    <section>
      <ul className={cn('cardList')}>
        {teaList.map((data) => {
          return (
            <TeaCard
              key={data.id}
              data={data}
              picked={selectedTeas.some((tea) => tea.id === data.id)}
              onClick={handleSelect}
            />
          );
        })}
      </ul>
    </section>
  );
}
