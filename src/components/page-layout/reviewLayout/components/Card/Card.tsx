import classNames from 'classnames/bind';

import Image from 'next/image';

import Star from '@/icons/star.svg';

import styles from './Card.module.scss';
import { CardData } from '../../types';
const cn = classNames.bind(styles);

interface CardProps {
  data: CardData;
}

export default function Card({ data }: CardProps) {
  const likes = Math.max(1, Math.min(data.likes, 5));

  return (
    <div className={cn('container')}>
      <div className={cn('imgBox')}>
        <div className={cn('img')}>
          <Image src={data.teaImg} alt="상품" fill />
        </div>
        <div className={cn('startContainer')}>
          <div className={cn('starBox')}>
            {Array.from({ length: likes }).map((_, index) => (
              <Star key={index} width={20} height={20} />
            ))}
          </div>
          <p className={cn('contents')}>{data.contents}</p>
        </div>
      </div>
      <div className={cn('titleBox')}>
        <p className={cn('title')}>{data.title}</p>
        <p className={cn('date')}>{data.createDt}</p>
      </div>
    </div>
  );
}
