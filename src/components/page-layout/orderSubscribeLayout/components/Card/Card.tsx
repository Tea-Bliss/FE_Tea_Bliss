import classNames from 'classnames/bind';

import Image, { StaticImageData } from 'next/image';

import BlendingLabel from '@/components/common/BlendingLabel/BlendingLabel';
import styles from '@/components/page-layout/orderSubscribeLayout/components/Card/Card.module.scss';
import Close from '@/icons/close.svg';

const cn = classNames.bind(styles);

interface CardProps {
  data: {
    img: StaticImageData;
    type: string;
    nameEng: string;
    name: string;
    count: number;
    price: number;
    purchaseDate: string;
    weight: number;
    packagingType: string;
  };
  className: string;
}

export default function Card({ data, className }: CardProps) {
  const { img, type, nameEng, name, count, packagingType, price, purchaseDate, weight } = data;
  return (
    <div className={className}>
      <div className={cn('container')}>
        <div className={cn('box')}>
          <Image alt="상품" src={img} width={148} height={148} />
          <div className={cn('mainInfo')}>
            <div className={cn('nameEngBox')}>
              <BlendingLabel>{type}</BlendingLabel>
              <p className={cn('nameEng')}>{nameEng}</p>
            </div>
            <p className={cn('name')}>{name}</p>
            <div className={cn('detailInfoContainer')}>
              <div className={cn('detailInfoBox')}>
                <p className={cn('detailInfoTitle')}>수량</p>
                <p className={cn('detailInfoContent')}>{count}개</p>
              </div>
              <div className={cn('detailInfoBox')}>
                <p className={cn('detailInfoTitle')}>중량</p>
                <p className={cn('detailInfoContent')}>{weight}g</p>
              </div>
              <div className={cn('detailInfoBox')}>
                <p className={cn('detailInfoTitle')}>포장</p>
                <p className={cn('detailInfoContent')}>{packagingType}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cn('datePriceContainer')}>
          <div className={cn('datePriceBox')}>
            <p className={cn('purchaseDate')}>{purchaseDate}</p>
            <p className={cn('price')}>{price.toLocaleString('ko-KR')}원</p>
          </div>
        </div>
        <Close width="20" height="20" className={cn('close')} />
      </div>
    </div>
  );
}
