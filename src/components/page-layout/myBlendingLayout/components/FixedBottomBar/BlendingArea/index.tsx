'use client';

import styles from '@/components/page-layout/myBlendingLayout/components/FixedBottomBar/BlendingArea/BlendingArea.module.scss';
import TeaCard from '../../TeaCardList/TeaCard';
import classNames from 'classnames/bind';
import { useMyBlendingContext } from '../../../contexts/myBlendingContext';
import TeaType from '@/components/page-layout/myBlendingLayout/types/teaType';

const cn = classNames.bind(styles);

export default function BlendingArea() {
  const { selectedTeas, setSelectedTeas } = useMyBlendingContext();

  const handleClick = (tea: TeaType) => {
    setSelectedTeas((prev) => prev.filter((data) => data.id !== tea.id));
  };

  return (
    <div className={cn('blendingArea')}>
      {Array.from({ length: 3 }, (_, i) => (selectedTeas[i] !== undefined ? selectedTeas[i] : 'blank')).map(
        (tea, index) => {
          if (tea === 'blank') {
            return (
              <div key={index + 1} className={cn('blendingCard')}>
                <p className={cn('choice')}>{`선택 ${index + 1}`}</p>
                <div className={cn('blankCard')}></div>
              </div>
            );
          }
          return (
            <div className={cn('blendingCard')}>
              <p className={cn('choice')}>{`선택 ${index + 1}`}</p>
              <TeaCard data={tea} onClick={handleClick} isFooter={true} className={cn('blendingSource')} />
            </div>
          );
        }
      )}
    </div>
  );
}
