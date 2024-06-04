'use client';

import Button from '@/components/common/Button';
import styles from '@/components/page-layout/myBlendingLayout/components/FixedBottomBar/FixedBottomBar.module.scss';
import classNames from 'classnames/bind';
import BlendingArea from './BlendingArea';
import { useEffect, useRef, useState } from 'react';

const cn = classNames.bind(styles);

export default function FixedBottomBar() {
  const [barPosition, setBarPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startTouchPosition, setStartTouchPosition] = useState(0);
  const dragArea = useRef<HTMLDivElement>(null);

  const handleTouchStart = (event: TouchEvent) => {
    setIsDragging(true);
    setStartTouchPosition(event.changedTouches[0].clientY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    if (!isDragging) return;
    if (barPosition < 0) return;
    if (barPosition > 200) return;

    const currentTouchPosition = event.touches[0].clientY;
    const difference = startTouchPosition - currentTouchPosition;

    setBarPosition(barPosition - difference);
    setStartTouchPosition(currentTouchPosition);
  };

  function handleTouchEnd() {
    setIsDragging(false);

    if (barPosition < 0) {
      setBarPosition(0);
      return;
    }

    if (barPosition > 200) {
      setBarPosition(200);
      return;
    }
  }

  useEffect(() => {
    if (!dragArea.current) return;

    dragArea.current.addEventListener('touchstart', handleTouchStart);
    dragArea.current.addEventListener('touchmove', handleTouchMove, { passive: false });
    dragArea.current.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (!dragArea.current) return;

      dragArea.current.removeEventListener('touchstart', handleTouchStart);
      dragArea.current.removeEventListener('touchmove', handleTouchMove);
      dragArea.current.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragArea.current, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <footer className={cn('bottomBar')} style={{ transform: `translateY(${barPosition}px)` }}>
      <div className={cn('dragArea')} ref={dragArea}>
        <hr className={cn('dragIcon')} />
      </div>

      <div className={cn('firstArea')}>
        <BlendingArea />
      </div>

      <div className={cn('secondArea')}>
        <div className={cn('teaName')}>
          <label className={cn('labelName')}>{'차 이름을 지어주세요 :)'}</label>
          <input className={cn('teaNameInput')} placeholder="차 이름을 지어주세요" />
        </div>
        <div className={cn('submit')}>
          <p className={cn('message')}>최소 2종류의 차가 선택되어야 합니다.</p>
          <Button shape="square" color="red" className={cn('submitButton')}>
            나만의 티 만들기
          </Button>
        </div>
      </div>
    </footer>
  );
}
