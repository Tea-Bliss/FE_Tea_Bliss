import { MouseEvent } from 'react';

import classNames from 'classnames/bind';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '@/components/common/Card/Card.module.scss';
import useAddCartItemMutation from '@/components/page-layout/cartLayout/hooks/useAddCartItemMutation';
import ROUTE from '@/constants/route';
import Cart from '@/icons/cart.svg';
import Heart from '@/icons/heart.svg';
import DefaultImg from '@/images/default_product.png';

const cn = classNames.bind(styles);

interface CardProps {
  onClick?: () => void;
  type: 'main' | 'productList' | 'blending';
  href?: string;
  img: string;
  title: string;
  price?: number;
  review?: number;
  scope?: number;
  id?: number;
  koTitle?: string;
  description?: string;
}

export default function Card({
  onClick,
  description,
  id,
  koTitle,
  href,
  type,
  img,
  title,
  price,
  review,
  scope,
}: CardProps) {
  const { mutate } = useAddCartItemMutation(koTitle);
  const router = useRouter();

  const handleCardClick = () => {
    if (type === 'blending' && typeof onClick === 'function') {
      onClick();
    } else {
      router.push(href as string);
    }
  };

  const handleCardImgClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (!localStorage.getItem('token')) {
      router.push(ROUTE.SIGN_IN);
      return;
    }
    mutate();
  };

  return (
    <div onClick={handleCardClick} className={cn('cardContainer')}>
      <div className={cn('imgContainer')} onClick={handleCardImgClick}>
        <Image
          src={img?.startsWith('/') || img?.startsWith('http') ? img : DefaultImg}
          alt="완제품"
          priority
          fill
          sizes="(max-width: 767px) 15.8rem, (max-width: 1279px) 22.9rem, 22.9rem"
        />
        {type === 'productList' && <div className={cn('imgBackground')} />}
        {type === 'productList' && <Cart fill="white" width={40} height={40} className={cn('cartImg')} />}
      </div>
      <article className={cn('contentContainer', { isBleding: type === 'blending' })}>
        {type === 'productList' && <Heart className={cn('heart')} width="2.4rem" height="2.4rem" fill="none" />}
        <p className={cn('enTitle')}>{title}</p>
        <p className={cn('koTitle')}>{koTitle}</p>
        {type === 'blending' && <p className={cn('description')}>{description}</p>}
        {type !== 'blending' && <p className={cn('price')}>{price?.toLocaleString('ko-KR')} ₩</p>}
        {type !== 'blending' && (
          <div className={cn('reviewScopeBox')}>
            <p>{`리뷰개수 : ${review}개`}</p>
            <p>{`별점 : ${scope}`}</p>
          </div>
        )}
      </article>
      {type === 'main' && (
        <Link href="/" className={cn('cart')}>
          Cart
        </Link>
      )}
    </div>
  );
}
