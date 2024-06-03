import classNames from 'classnames/bind';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from '@/components/common/Card/Card.module.scss';
import Cart from '@/icons/cart.svg';
import Heart from '@/icons/heart.svg';

const cn = classNames.bind(styles);

interface CardProps {
  href: string;
  isMainPageCard?: boolean;
  img: StaticImageData;
  title: string;
  price: number;
  review: number;
  scope: number;
}

export default function Card({ href, isMainPageCard, img, title, price, review, scope }: CardProps) {
  return (
    <Link
      href={href}
      className={cn('cardContainer', {
        mainPageCardContainer: !isMainPageCard,
      })}
    >
      <div
        className={cn('imgBox', {
          mainPageImgBox: !isMainPageCard,
        })}
      >
        <Image
          priority
          src={img}
          alt="상품"
          fill
          sizes="(max-width: 767px) 15.8rem, (max-width: 1279px) 22.9rem, 22.9rem"
        />
        {!isMainPageCard && <div className={cn('imgBackground')} />}
        {!isMainPageCard && <Cart fill="white" width={40} height={40} className={cn('cart')} />}
      </div>
      <article
        className={cn('cardInfoBox', {
          mainPageCardInfoBox: !isMainPageCard,
        })}
      >
        <div className={cn('cardTitleBox')}>
          <p className={cn('title')}>{title}</p>
          <p className={cn('price')}>{`${price}원`}</p>
          {!isMainPageCard && <Heart className={cn('heart')} />}
        </div>
        <div className={cn('reviewScopeBox')}>
          <p>{`리뷰 개수 : ${review}개`}</p>
          <p>{`별점 : ${scope}`}</p>
        </div>
      </article>
    </Link>
  );
}
