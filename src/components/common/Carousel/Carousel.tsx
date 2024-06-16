'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import { StaticImageData } from 'next/image';

import Left from '@/icons/left_arrow.svg';
import Right from '@/icons/right_arrow.svg';

import styles from './Carousel.module.scss';
import Card from '../Card/Card';

const cn = classNames.bind(styles);

interface CarouselProps {
  cards: {
    href: string;
    isMainPageCard?: boolean;
    img: StaticImageData;
    title: string;
    price: number;
    review: number;
    scope: number;
  }[];
  num: number;
}

export default function Carousel({ cards, num }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const cardsPerSlide = num;

  const handlePrevSlide = useCallback(() => {
    const index = current === 0 ? cards.length - cardsPerSlide : current - 1;
    setCurrent(index);
  }, [current, cards.length, cardsPerSlide]);

  const handleNextSlide = useCallback(() => {
    const index = current === cards.length - 1 ? 0 : current + 1;
    setCurrent(index);
  }, [current, cards.length]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [handleNextSlide]);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     contentRef.current.classList.remove(
  //       ...Array.from({ length: cards.length - cardsPerSlide + 1 }, (_, i) => `slide-${i + 1}`)
  //     );
  //     contentRef.current.classList.add(`slide-${current + 1}`);
  //   }
  // }, [current, cards.length, cardsPerSlide, contentRef]);

  const visibleCards =
    cards.length - current < cardsPerSlide
      ? [...cards.slice(current), ...cards.slice(0, cardsPerSlide - (cards.length - current))]
      : cards.slice(current, current + cardsPerSlide);

  return (
    <div className={cn('layout')}>
      <Left className={cn('left')} onClick={handlePrevSlide} />
      <div className={cn('container')}>
        <div className={cn('content')} ref={contentRef}>
          {visibleCards.map((card, index) => (
            <div className={cn('card')} key={index}>
              <Card
                href={card.href}
                img={card.img}
                title={card.title}
                price={card.price}
                review={card.review}
                scope={card.scope}
              />
            </div>
          ))}
        </div>
      </div>
      <Right className={cn('right')} onClick={handleNextSlide} />
    </div>
  );
}
